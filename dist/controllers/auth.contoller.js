"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const bcrypt_1 = require("bcrypt");
const user_service_1 = require("../services/user.service");
const jsonwebtoken_1 = require("jsonwebtoken");
const mailer_1 = require("../services/mailer");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const handlebars_1 = __importDefault(require("handlebars"));
const referal_service_1 = require("../services/referal.service");
const promotor_service_1 = require("../services/promotor.service");
class AuthController {
    registerUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma_1.default.$transaction((prisma) => __awaiter(this, void 0, void 0, function* () {
                    const { password, confirmPassword, username, email, referal } = req.body;
                    if (password != confirmPassword)
                        throw { message: "Password not match!" };
                    const user = yield (0, user_service_1.findUser)(username, email);
                    if (user)
                        throw { message: "username or email has been used !" };
                    if (referal != "") {
                        const ref = yield (0, referal_service_1.findReferal)(referal);
                        if (!ref)
                            throw { message: "referal code not valid !" };
                    }
                    const salt = yield (0, bcrypt_1.genSalt)(10);
                    const hashPasword = yield (0, bcrypt_1.hash)(password, salt);
                    const newUser = yield prisma.user.create({
                        data: { username, email, password: hashPasword },
                    });
                    const randomNumber = Math.floor(100 + Math.random() * 900);
                    const refCode = `${newUser.id}${randomNumber}`;
                    yield prisma.user.update({
                        where: { id: newUser.id },
                        data: { ref_code: refCode },
                    });
                    const payload = { id: newUser.id, referal: referal };
                    const token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, { expiresIn: "10m" });
                    const link = `${process.env.BASE_URL_FE}/verify/${token}`;
                    const templatePath = path_1.default.join(__dirname, "../templates", "verify.hbs");
                    const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
                    const compiledTemplate = handlebars_1.default.compile(templateSource);
                    const html = compiledTemplate({ username, link });
                    yield mailer_1.transporter.sendMail({
                        from: "sandieswendies@gmail.com",
                        to: email,
                        subject: "Verify your account",
                        html,
                    });
                    const currentDate = new Date();
                    const threeMonthLater = new Date(currentDate);
                    threeMonthLater.setMonth(currentDate.getMonth() + 3);
                    if (referal != "") {
                        yield prisma.user_Coupon.create({
                            data: {
                                percentage: 10,
                                expiredAt: threeMonthLater,
                                userId: newUser.id,
                            },
                        });
                    }
                    res.status(201).send({ message: "Register Successfully ✅" });
                }));
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma_1.default.$transaction((prisma) => __awaiter(this, void 0, void 0, function* () {
                    const { data, password } = req.body;
                    const user = yield (0, user_service_1.findUser)(data, data);
                    if (!user)
                        throw { message: "Account not found !" };
                    if (!user.isVerify)
                        throw { message: "Account not Verified !" };
                    const isValidPass = yield (0, bcrypt_1.compare)(password, user.password);
                    if (!isValidPass) {
                        throw { message: "Incorrect Password !" };
                    }
                    const payload = { id: user.id, role: "User" };
                    const token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, { expiresIn: "1d" });
                    res
                        .status(200)
                        .cookie("token", token, {
                        httpOnly: false,
                        maxAge: 24 * 3600 * 1000,
                        path: "/",
                        secure: process.env.NODE_ENV === "production",
                        sameSite: "strict",
                    })
                        .send({
                        message: "Login Sucessfully ✅",
                        user,
                        token,
                    });
                }));
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    verifyUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { token } = req.params;
            try {
                const verifiedUser = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
                if (verifiedUser.isVerify) {
                    res.status(400).send({ message: "User is already verified." });
                }
                const currentDate = new Date();
                const threeMonthLater = new Date(currentDate);
                threeMonthLater.setMonth(currentDate.getMonth() + 3);
                yield prisma_1.default.$transaction((prisma) => __awaiter(this, void 0, void 0, function* () {
                    yield prisma.user.update({
                        data: { isVerify: true },
                        where: { id: verifiedUser.id },
                    });
                    const user = yield prisma.user.findFirst({
                        where: { OR: [{ ref_code: verifiedUser.referal }] },
                    });
                    if (user) {
                        yield prisma.user_Point.create({
                            data: { point: 10000, expiredAt: threeMonthLater, userId: user.id },
                        });
                    }
                }));
                res.status(200).send({ message: "User verified and points awarded." });
            }
            catch (error) {
                console.error(error);
                res.status(500).send({ message: "An error occurred during verification or point creation." });
            }
        });
    }
    test(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.status(200).send({ message: "test success" });
            }
            catch (error) {
                res.status(400).send({ message: error });
            }
        });
    }
    loginPromotor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma_1.default.$transaction((prisma) => __awaiter(this, void 0, void 0, function* () {
                    const { data, password } = req.body;
                    const promotor = yield (0, promotor_service_1.findPromotor)(data, data);
                    if (!promotor)
                        throw { message: "Account not found !" };
                    if (!promotor.isVerify)
                        throw { message: "Account not Verified !" };
                    const isValidPass = yield (0, bcrypt_1.compare)(password, promotor.password);
                    if (!isValidPass) {
                        throw { message: "Incorrect Password !" };
                    }
                    const payload = { id: promotor.id, role: "Promotor" };
                    const token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, { expiresIn: "1d" });
                    res.status(200).send({
                        message: "Login Sucessfully ✅",
                        promotor,
                        token,
                    });
                }));
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    show_promotor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const a = yield prisma_1.default.promotor.findMany();
                res.status(200).send({ a });
            }
            catch (error) {
                res.status(400).send({ message: error });
            }
        });
    }
    EditPromotor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield prisma_1.default.promotor.update({ data: req.body, where: { id: +id } });
                res.status(200).send("success");
            }
            catch (error) {
                console.log(error);
                res.status(400).send({ error });
            }
        });
    }
    RegisterPromotor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma_1.default.$transaction((prisma) => __awaiter(this, void 0, void 0, function* () {
                    const { password, confirmPassword, name, email } = req.body;
                    if (password != confirmPassword)
                        throw { message: "Password not match!" };
                    const user = yield (0, promotor_service_1.findPromotor)(name, email);
                    if (user)
                        throw { message: "username or email has been used !" };
                    const salt = yield (0, bcrypt_1.genSalt)(10);
                    const hashPasword = yield (0, bcrypt_1.hash)(password, salt);
                    const newPromotor = yield prisma.promotor.create({
                        data: { name, email, password: hashPasword },
                    });
                    const payload = { id: newPromotor.id };
                    const token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, { expiresIn: "10m" });
                    const link = `http://localhost:3000/promotor/verify/${token}`;
                    const templatePath = path_1.default.join(__dirname, "../templates", "verify.hbs");
                    const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
                    const compiledTemplate = handlebars_1.default.compile(templateSource);
                    const html = compiledTemplate({ name, link });
                    yield mailer_1.transporter.sendMail({
                        from: "sandieswendies@gmail.com",
                        to: email,
                        subject: "Verify your account",
                        html,
                    });
                    res.status(201).send({ message: "Register Successfully ✅" });
                }));
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    verifyPromotor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { token } = req.params;
            try {
                const verifiedPromotor = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
                if (verifiedPromotor.isVerify) {
                    res.status(400).send({ message: "User is already verified." });
                }
                yield prisma_1.default.$transaction((prisma) => __awaiter(this, void 0, void 0, function* () {
                    yield prisma.promotor.update({
                        data: { isVerify: true },
                        where: { id: verifiedPromotor.id },
                    });
                }));
                res.status(200).send({ message: "User verified" });
            }
            catch (error) {
                console.error(error);
                res.status(500).send({ message: "An error occurred during verification" });
            }
        });
    }
}
exports.AuthController = AuthController;
