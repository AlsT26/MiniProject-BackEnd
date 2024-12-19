
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model User_Point
 * 
 */
export type User_Point = $Result.DefaultSelection<Prisma.$User_PointPayload>
/**
 * Model User_Coupon
 * 
 */
export type User_Coupon = $Result.DefaultSelection<Prisma.$User_CouponPayload>
/**
 * Model Promotor
 * 
 */
export type Promotor = $Result.DefaultSelection<Prisma.$PromotorPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Order_Details
 * 
 */
export type Order_Details = $Result.DefaultSelection<Prisma.$Order_DetailsPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EventCategories: {
  Sport: 'Sport',
  Entertainment: 'Entertainment',
  Comedy: 'Comedy',
  Horror: 'Horror',
  Kids: 'Kids',
  Adults: 'Adults',
  Tech: 'Tech',
  Food: 'Food',
  Free: 'Free',
  Paid: 'Paid'
};

export type EventCategories = (typeof EventCategories)[keyof typeof EventCategories]


export const OrderStatus: {
  Pending: 'Pending',
  Paid: 'Paid',
  Cancelled: 'Cancelled'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]

}

export type EventCategories = $Enums.EventCategories

export const EventCategories: typeof $Enums.EventCategories

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.user_Point`: Exposes CRUD operations for the **User_Point** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_Points
    * const user_Points = await prisma.user_Point.findMany()
    * ```
    */
  get user_Point(): Prisma.User_PointDelegate<ExtArgs>;

  /**
   * `prisma.user_Coupon`: Exposes CRUD operations for the **User_Coupon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_Coupons
    * const user_Coupons = await prisma.user_Coupon.findMany()
    * ```
    */
  get user_Coupon(): Prisma.User_CouponDelegate<ExtArgs>;

  /**
   * `prisma.promotor`: Exposes CRUD operations for the **Promotor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promotors
    * const promotors = await prisma.promotor.findMany()
    * ```
    */
  get promotor(): Prisma.PromotorDelegate<ExtArgs>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.order_Details`: Exposes CRUD operations for the **Order_Details** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_Details
    * const order_Details = await prisma.order_Details.findMany()
    * ```
    */
  get order_Details(): Prisma.Order_DetailsDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.0.1
   * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    User_Point: 'User_Point',
    User_Coupon: 'User_Coupon',
    Promotor: 'Promotor',
    Event: 'Event',
    Ticket: 'Ticket',
    Order: 'Order',
    Order_Details: 'Order_Details',
    Review: 'Review'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "user_Point" | "user_Coupon" | "promotor" | "event" | "ticket" | "order" | "order_Details" | "review"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      User_Point: {
        payload: Prisma.$User_PointPayload<ExtArgs>
        fields: Prisma.User_PointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.User_PointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_PointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.User_PointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_PointPayload>
          }
          findFirst: {
            args: Prisma.User_PointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_PointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.User_PointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_PointPayload>
          }
          findMany: {
            args: Prisma.User_PointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_PointPayload>[]
          }
          create: {
            args: Prisma.User_PointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_PointPayload>
          }
          createMany: {
            args: Prisma.User_PointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.User_PointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_PointPayload>[]
          }
          delete: {
            args: Prisma.User_PointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_PointPayload>
          }
          update: {
            args: Prisma.User_PointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_PointPayload>
          }
          deleteMany: {
            args: Prisma.User_PointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.User_PointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.User_PointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_PointPayload>
          }
          aggregate: {
            args: Prisma.User_PointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_Point>
          }
          groupBy: {
            args: Prisma.User_PointGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_PointGroupByOutputType>[]
          }
          count: {
            args: Prisma.User_PointCountArgs<ExtArgs>
            result: $Utils.Optional<User_PointCountAggregateOutputType> | number
          }
        }
      }
      User_Coupon: {
        payload: Prisma.$User_CouponPayload<ExtArgs>
        fields: Prisma.User_CouponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.User_CouponFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_CouponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.User_CouponFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_CouponPayload>
          }
          findFirst: {
            args: Prisma.User_CouponFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_CouponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.User_CouponFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_CouponPayload>
          }
          findMany: {
            args: Prisma.User_CouponFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_CouponPayload>[]
          }
          create: {
            args: Prisma.User_CouponCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_CouponPayload>
          }
          createMany: {
            args: Prisma.User_CouponCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.User_CouponCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_CouponPayload>[]
          }
          delete: {
            args: Prisma.User_CouponDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_CouponPayload>
          }
          update: {
            args: Prisma.User_CouponUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_CouponPayload>
          }
          deleteMany: {
            args: Prisma.User_CouponDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.User_CouponUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.User_CouponUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_CouponPayload>
          }
          aggregate: {
            args: Prisma.User_CouponAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_Coupon>
          }
          groupBy: {
            args: Prisma.User_CouponGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_CouponGroupByOutputType>[]
          }
          count: {
            args: Prisma.User_CouponCountArgs<ExtArgs>
            result: $Utils.Optional<User_CouponCountAggregateOutputType> | number
          }
        }
      }
      Promotor: {
        payload: Prisma.$PromotorPayload<ExtArgs>
        fields: Prisma.PromotorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromotorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromotorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>
          }
          findFirst: {
            args: Prisma.PromotorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromotorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>
          }
          findMany: {
            args: Prisma.PromotorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>[]
          }
          create: {
            args: Prisma.PromotorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>
          }
          createMany: {
            args: Prisma.PromotorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromotorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>[]
          }
          delete: {
            args: Prisma.PromotorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>
          }
          update: {
            args: Prisma.PromotorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>
          }
          deleteMany: {
            args: Prisma.PromotorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromotorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PromotorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>
          }
          aggregate: {
            args: Prisma.PromotorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromotor>
          }
          groupBy: {
            args: Prisma.PromotorGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromotorGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromotorCountArgs<ExtArgs>
            result: $Utils.Optional<PromotorCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Order_Details: {
        payload: Prisma.$Order_DetailsPayload<ExtArgs>
        fields: Prisma.Order_DetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Order_DetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Order_DetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload>
          }
          findFirst: {
            args: Prisma.Order_DetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Order_DetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload>
          }
          findMany: {
            args: Prisma.Order_DetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload>[]
          }
          create: {
            args: Prisma.Order_DetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload>
          }
          createMany: {
            args: Prisma.Order_DetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Order_DetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload>[]
          }
          delete: {
            args: Prisma.Order_DetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload>
          }
          update: {
            args: Prisma.Order_DetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload>
          }
          deleteMany: {
            args: Prisma.Order_DetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Order_DetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Order_DetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload>
          }
          aggregate: {
            args: Prisma.Order_DetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_Details>
          }
          groupBy: {
            args: Prisma.Order_DetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_DetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Order_DetailsCountArgs<ExtArgs>
            result: $Utils.Optional<Order_DetailsCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    points: number
    coupons: number
    reviews: number
    orders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    points?: boolean | UserCountOutputTypeCountPointsArgs
    coupons?: boolean | UserCountOutputTypeCountCouponsArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_PointWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCouponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_CouponWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type PromotorCountOutputType
   */

  export type PromotorCountOutputType = {
    events: number
  }

  export type PromotorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | PromotorCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * PromotorCountOutputType without action
   */
  export type PromotorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotorCountOutputType
     */
    select?: PromotorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PromotorCountOutputType without action
   */
  export type PromotorCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    tickets: number
    reviews: number
    orders: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | EventCountOutputTypeCountTicketsArgs
    reviews?: boolean | EventCountOutputTypeCountReviewsArgs
    orders?: boolean | EventCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    orderDetails: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderDetails?: boolean | TicketCountOutputTypeCountOrderDetailsArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountOrderDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Order_DetailsWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    details: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | OrderCountOutputTypeCountDetailsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Order_DetailsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    avatar: string | null
    isVerify: boolean | null
    ref_code: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    avatar: string | null
    isVerify: boolean | null
    ref_code: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    avatar: number
    isVerify: number
    ref_code: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    avatar?: true
    isVerify?: true
    ref_code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    avatar?: true
    isVerify?: true
    ref_code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    avatar?: true
    isVerify?: true
    ref_code?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    avatar: string | null
    isVerify: boolean
    ref_code: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerify?: boolean
    ref_code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    points?: boolean | User$pointsArgs<ExtArgs>
    coupons?: boolean | User$couponsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerify?: boolean
    ref_code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerify?: boolean
    ref_code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    points?: boolean | User$pointsArgs<ExtArgs>
    coupons?: boolean | User$couponsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      points: Prisma.$User_PointPayload<ExtArgs>[]
      coupons: Prisma.$User_CouponPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      avatar: string | null
      isVerify: boolean
      ref_code: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    points<T extends User$pointsArgs<ExtArgs> = {}>(args?: Subset<T, User$pointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_PointPayload<ExtArgs>, T, "findMany"> | Null>
    coupons<T extends User$couponsArgs<ExtArgs> = {}>(args?: Subset<T, User$couponsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_CouponPayload<ExtArgs>, T, "findMany"> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly isVerify: FieldRef<"User", 'Boolean'>
    readonly ref_code: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.points
   */
  export type User$pointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Point
     */
    select?: User_PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_PointInclude<ExtArgs> | null
    where?: User_PointWhereInput
    orderBy?: User_PointOrderByWithRelationInput | User_PointOrderByWithRelationInput[]
    cursor?: User_PointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_PointScalarFieldEnum | User_PointScalarFieldEnum[]
  }

  /**
   * User.coupons
   */
  export type User$couponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Coupon
     */
    select?: User_CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_CouponInclude<ExtArgs> | null
    where?: User_CouponWhereInput
    orderBy?: User_CouponOrderByWithRelationInput | User_CouponOrderByWithRelationInput[]
    cursor?: User_CouponWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_CouponScalarFieldEnum | User_CouponScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model User_Point
   */

  export type AggregateUser_Point = {
    _count: User_PointCountAggregateOutputType | null
    _avg: User_PointAvgAggregateOutputType | null
    _sum: User_PointSumAggregateOutputType | null
    _min: User_PointMinAggregateOutputType | null
    _max: User_PointMaxAggregateOutputType | null
  }

  export type User_PointAvgAggregateOutputType = {
    id: number | null
    point: number | null
    userId: number | null
  }

  export type User_PointSumAggregateOutputType = {
    id: number | null
    point: number | null
    userId: number | null
  }

  export type User_PointMinAggregateOutputType = {
    id: number | null
    point: number | null
    createdAt: Date | null
    expiredAt: Date | null
    isRedeem: boolean | null
    userId: number | null
  }

  export type User_PointMaxAggregateOutputType = {
    id: number | null
    point: number | null
    createdAt: Date | null
    expiredAt: Date | null
    isRedeem: boolean | null
    userId: number | null
  }

  export type User_PointCountAggregateOutputType = {
    id: number
    point: number
    createdAt: number
    expiredAt: number
    isRedeem: number
    userId: number
    _all: number
  }


  export type User_PointAvgAggregateInputType = {
    id?: true
    point?: true
    userId?: true
  }

  export type User_PointSumAggregateInputType = {
    id?: true
    point?: true
    userId?: true
  }

  export type User_PointMinAggregateInputType = {
    id?: true
    point?: true
    createdAt?: true
    expiredAt?: true
    isRedeem?: true
    userId?: true
  }

  export type User_PointMaxAggregateInputType = {
    id?: true
    point?: true
    createdAt?: true
    expiredAt?: true
    isRedeem?: true
    userId?: true
  }

  export type User_PointCountAggregateInputType = {
    id?: true
    point?: true
    createdAt?: true
    expiredAt?: true
    isRedeem?: true
    userId?: true
    _all?: true
  }

  export type User_PointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_Point to aggregate.
     */
    where?: User_PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Points to fetch.
     */
    orderBy?: User_PointOrderByWithRelationInput | User_PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: User_PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned User_Points
    **/
    _count?: true | User_PointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_PointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_PointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_PointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_PointMaxAggregateInputType
  }

  export type GetUser_PointAggregateType<T extends User_PointAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_Point]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_Point[P]>
      : GetScalarType<T[P], AggregateUser_Point[P]>
  }




  export type User_PointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_PointWhereInput
    orderBy?: User_PointOrderByWithAggregationInput | User_PointOrderByWithAggregationInput[]
    by: User_PointScalarFieldEnum[] | User_PointScalarFieldEnum
    having?: User_PointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_PointCountAggregateInputType | true
    _avg?: User_PointAvgAggregateInputType
    _sum?: User_PointSumAggregateInputType
    _min?: User_PointMinAggregateInputType
    _max?: User_PointMaxAggregateInputType
  }

  export type User_PointGroupByOutputType = {
    id: number
    point: number
    createdAt: Date
    expiredAt: Date
    isRedeem: boolean
    userId: number
    _count: User_PointCountAggregateOutputType | null
    _avg: User_PointAvgAggregateOutputType | null
    _sum: User_PointSumAggregateOutputType | null
    _min: User_PointMinAggregateOutputType | null
    _max: User_PointMaxAggregateOutputType | null
  }

  type GetUser_PointGroupByPayload<T extends User_PointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_PointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_PointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_PointGroupByOutputType[P]>
            : GetScalarType<T[P], User_PointGroupByOutputType[P]>
        }
      >
    >


  export type User_PointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    point?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    isRedeem?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_Point"]>

  export type User_PointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    point?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    isRedeem?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_Point"]>

  export type User_PointSelectScalar = {
    id?: boolean
    point?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    isRedeem?: boolean
    userId?: boolean
  }

  export type User_PointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type User_PointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $User_PointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User_Point"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      point: number
      createdAt: Date
      expiredAt: Date
      isRedeem: boolean
      userId: number
    }, ExtArgs["result"]["user_Point"]>
    composites: {}
  }

  type User_PointGetPayload<S extends boolean | null | undefined | User_PointDefaultArgs> = $Result.GetResult<Prisma.$User_PointPayload, S>

  type User_PointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<User_PointFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: User_PointCountAggregateInputType | true
    }

  export interface User_PointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User_Point'], meta: { name: 'User_Point' } }
    /**
     * Find zero or one User_Point that matches the filter.
     * @param {User_PointFindUniqueArgs} args - Arguments to find a User_Point
     * @example
     * // Get one User_Point
     * const user_Point = await prisma.user_Point.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends User_PointFindUniqueArgs>(args: SelectSubset<T, User_PointFindUniqueArgs<ExtArgs>>): Prisma__User_PointClient<$Result.GetResult<Prisma.$User_PointPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User_Point that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {User_PointFindUniqueOrThrowArgs} args - Arguments to find a User_Point
     * @example
     * // Get one User_Point
     * const user_Point = await prisma.user_Point.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends User_PointFindUniqueOrThrowArgs>(args: SelectSubset<T, User_PointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__User_PointClient<$Result.GetResult<Prisma.$User_PointPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User_Point that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_PointFindFirstArgs} args - Arguments to find a User_Point
     * @example
     * // Get one User_Point
     * const user_Point = await prisma.user_Point.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends User_PointFindFirstArgs>(args?: SelectSubset<T, User_PointFindFirstArgs<ExtArgs>>): Prisma__User_PointClient<$Result.GetResult<Prisma.$User_PointPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User_Point that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_PointFindFirstOrThrowArgs} args - Arguments to find a User_Point
     * @example
     * // Get one User_Point
     * const user_Point = await prisma.user_Point.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends User_PointFindFirstOrThrowArgs>(args?: SelectSubset<T, User_PointFindFirstOrThrowArgs<ExtArgs>>): Prisma__User_PointClient<$Result.GetResult<Prisma.$User_PointPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more User_Points that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_PointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_Points
     * const user_Points = await prisma.user_Point.findMany()
     * 
     * // Get first 10 User_Points
     * const user_Points = await prisma.user_Point.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_PointWithIdOnly = await prisma.user_Point.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends User_PointFindManyArgs>(args?: SelectSubset<T, User_PointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_PointPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User_Point.
     * @param {User_PointCreateArgs} args - Arguments to create a User_Point.
     * @example
     * // Create one User_Point
     * const User_Point = await prisma.user_Point.create({
     *   data: {
     *     // ... data to create a User_Point
     *   }
     * })
     * 
     */
    create<T extends User_PointCreateArgs>(args: SelectSubset<T, User_PointCreateArgs<ExtArgs>>): Prisma__User_PointClient<$Result.GetResult<Prisma.$User_PointPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many User_Points.
     * @param {User_PointCreateManyArgs} args - Arguments to create many User_Points.
     * @example
     * // Create many User_Points
     * const user_Point = await prisma.user_Point.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends User_PointCreateManyArgs>(args?: SelectSubset<T, User_PointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_Points and returns the data saved in the database.
     * @param {User_PointCreateManyAndReturnArgs} args - Arguments to create many User_Points.
     * @example
     * // Create many User_Points
     * const user_Point = await prisma.user_Point.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_Points and only return the `id`
     * const user_PointWithIdOnly = await prisma.user_Point.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends User_PointCreateManyAndReturnArgs>(args?: SelectSubset<T, User_PointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_PointPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User_Point.
     * @param {User_PointDeleteArgs} args - Arguments to delete one User_Point.
     * @example
     * // Delete one User_Point
     * const User_Point = await prisma.user_Point.delete({
     *   where: {
     *     // ... filter to delete one User_Point
     *   }
     * })
     * 
     */
    delete<T extends User_PointDeleteArgs>(args: SelectSubset<T, User_PointDeleteArgs<ExtArgs>>): Prisma__User_PointClient<$Result.GetResult<Prisma.$User_PointPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User_Point.
     * @param {User_PointUpdateArgs} args - Arguments to update one User_Point.
     * @example
     * // Update one User_Point
     * const user_Point = await prisma.user_Point.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends User_PointUpdateArgs>(args: SelectSubset<T, User_PointUpdateArgs<ExtArgs>>): Prisma__User_PointClient<$Result.GetResult<Prisma.$User_PointPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more User_Points.
     * @param {User_PointDeleteManyArgs} args - Arguments to filter User_Points to delete.
     * @example
     * // Delete a few User_Points
     * const { count } = await prisma.user_Point.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends User_PointDeleteManyArgs>(args?: SelectSubset<T, User_PointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_PointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_Points
     * const user_Point = await prisma.user_Point.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends User_PointUpdateManyArgs>(args: SelectSubset<T, User_PointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_Point.
     * @param {User_PointUpsertArgs} args - Arguments to update or create a User_Point.
     * @example
     * // Update or create a User_Point
     * const user_Point = await prisma.user_Point.upsert({
     *   create: {
     *     // ... data to create a User_Point
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_Point we want to update
     *   }
     * })
     */
    upsert<T extends User_PointUpsertArgs>(args: SelectSubset<T, User_PointUpsertArgs<ExtArgs>>): Prisma__User_PointClient<$Result.GetResult<Prisma.$User_PointPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of User_Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_PointCountArgs} args - Arguments to filter User_Points to count.
     * @example
     * // Count the number of User_Points
     * const count = await prisma.user_Point.count({
     *   where: {
     *     // ... the filter for the User_Points we want to count
     *   }
     * })
    **/
    count<T extends User_PointCountArgs>(
      args?: Subset<T, User_PointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_PointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_Point.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_PointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_PointAggregateArgs>(args: Subset<T, User_PointAggregateArgs>): Prisma.PrismaPromise<GetUser_PointAggregateType<T>>

    /**
     * Group by User_Point.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_PointGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends User_PointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_PointGroupByArgs['orderBy'] }
        : { orderBy?: User_PointGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, User_PointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_PointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User_Point model
   */
  readonly fields: User_PointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User_Point.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__User_PointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User_Point model
   */ 
  interface User_PointFieldRefs {
    readonly id: FieldRef<"User_Point", 'Int'>
    readonly point: FieldRef<"User_Point", 'Int'>
    readonly createdAt: FieldRef<"User_Point", 'DateTime'>
    readonly expiredAt: FieldRef<"User_Point", 'DateTime'>
    readonly isRedeem: FieldRef<"User_Point", 'Boolean'>
    readonly userId: FieldRef<"User_Point", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User_Point findUnique
   */
  export type User_PointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Point
     */
    select?: User_PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_PointInclude<ExtArgs> | null
    /**
     * Filter, which User_Point to fetch.
     */
    where: User_PointWhereUniqueInput
  }

  /**
   * User_Point findUniqueOrThrow
   */
  export type User_PointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Point
     */
    select?: User_PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_PointInclude<ExtArgs> | null
    /**
     * Filter, which User_Point to fetch.
     */
    where: User_PointWhereUniqueInput
  }

  /**
   * User_Point findFirst
   */
  export type User_PointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Point
     */
    select?: User_PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_PointInclude<ExtArgs> | null
    /**
     * Filter, which User_Point to fetch.
     */
    where?: User_PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Points to fetch.
     */
    orderBy?: User_PointOrderByWithRelationInput | User_PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_Points.
     */
    cursor?: User_PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_Points.
     */
    distinct?: User_PointScalarFieldEnum | User_PointScalarFieldEnum[]
  }

  /**
   * User_Point findFirstOrThrow
   */
  export type User_PointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Point
     */
    select?: User_PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_PointInclude<ExtArgs> | null
    /**
     * Filter, which User_Point to fetch.
     */
    where?: User_PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Points to fetch.
     */
    orderBy?: User_PointOrderByWithRelationInput | User_PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_Points.
     */
    cursor?: User_PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_Points.
     */
    distinct?: User_PointScalarFieldEnum | User_PointScalarFieldEnum[]
  }

  /**
   * User_Point findMany
   */
  export type User_PointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Point
     */
    select?: User_PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_PointInclude<ExtArgs> | null
    /**
     * Filter, which User_Points to fetch.
     */
    where?: User_PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Points to fetch.
     */
    orderBy?: User_PointOrderByWithRelationInput | User_PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing User_Points.
     */
    cursor?: User_PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Points.
     */
    skip?: number
    distinct?: User_PointScalarFieldEnum | User_PointScalarFieldEnum[]
  }

  /**
   * User_Point create
   */
  export type User_PointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Point
     */
    select?: User_PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_PointInclude<ExtArgs> | null
    /**
     * The data needed to create a User_Point.
     */
    data: XOR<User_PointCreateInput, User_PointUncheckedCreateInput>
  }

  /**
   * User_Point createMany
   */
  export type User_PointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many User_Points.
     */
    data: User_PointCreateManyInput | User_PointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User_Point createManyAndReturn
   */
  export type User_PointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Point
     */
    select?: User_PointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many User_Points.
     */
    data: User_PointCreateManyInput | User_PointCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_PointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User_Point update
   */
  export type User_PointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Point
     */
    select?: User_PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_PointInclude<ExtArgs> | null
    /**
     * The data needed to update a User_Point.
     */
    data: XOR<User_PointUpdateInput, User_PointUncheckedUpdateInput>
    /**
     * Choose, which User_Point to update.
     */
    where: User_PointWhereUniqueInput
  }

  /**
   * User_Point updateMany
   */
  export type User_PointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update User_Points.
     */
    data: XOR<User_PointUpdateManyMutationInput, User_PointUncheckedUpdateManyInput>
    /**
     * Filter which User_Points to update
     */
    where?: User_PointWhereInput
  }

  /**
   * User_Point upsert
   */
  export type User_PointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Point
     */
    select?: User_PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_PointInclude<ExtArgs> | null
    /**
     * The filter to search for the User_Point to update in case it exists.
     */
    where: User_PointWhereUniqueInput
    /**
     * In case the User_Point found by the `where` argument doesn't exist, create a new User_Point with this data.
     */
    create: XOR<User_PointCreateInput, User_PointUncheckedCreateInput>
    /**
     * In case the User_Point was found with the provided `where` argument, update it with this data.
     */
    update: XOR<User_PointUpdateInput, User_PointUncheckedUpdateInput>
  }

  /**
   * User_Point delete
   */
  export type User_PointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Point
     */
    select?: User_PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_PointInclude<ExtArgs> | null
    /**
     * Filter which User_Point to delete.
     */
    where: User_PointWhereUniqueInput
  }

  /**
   * User_Point deleteMany
   */
  export type User_PointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_Points to delete
     */
    where?: User_PointWhereInput
  }

  /**
   * User_Point without action
   */
  export type User_PointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Point
     */
    select?: User_PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_PointInclude<ExtArgs> | null
  }


  /**
   * Model User_Coupon
   */

  export type AggregateUser_Coupon = {
    _count: User_CouponCountAggregateOutputType | null
    _avg: User_CouponAvgAggregateOutputType | null
    _sum: User_CouponSumAggregateOutputType | null
    _min: User_CouponMinAggregateOutputType | null
    _max: User_CouponMaxAggregateOutputType | null
  }

  export type User_CouponAvgAggregateOutputType = {
    id: number | null
    percentage: number | null
    userId: number | null
  }

  export type User_CouponSumAggregateOutputType = {
    id: number | null
    percentage: number | null
    userId: number | null
  }

  export type User_CouponMinAggregateOutputType = {
    id: number | null
    isRedeem: boolean | null
    percentage: number | null
    createdAt: Date | null
    expiredAt: Date | null
    userId: number | null
  }

  export type User_CouponMaxAggregateOutputType = {
    id: number | null
    isRedeem: boolean | null
    percentage: number | null
    createdAt: Date | null
    expiredAt: Date | null
    userId: number | null
  }

  export type User_CouponCountAggregateOutputType = {
    id: number
    isRedeem: number
    percentage: number
    createdAt: number
    expiredAt: number
    userId: number
    _all: number
  }


  export type User_CouponAvgAggregateInputType = {
    id?: true
    percentage?: true
    userId?: true
  }

  export type User_CouponSumAggregateInputType = {
    id?: true
    percentage?: true
    userId?: true
  }

  export type User_CouponMinAggregateInputType = {
    id?: true
    isRedeem?: true
    percentage?: true
    createdAt?: true
    expiredAt?: true
    userId?: true
  }

  export type User_CouponMaxAggregateInputType = {
    id?: true
    isRedeem?: true
    percentage?: true
    createdAt?: true
    expiredAt?: true
    userId?: true
  }

  export type User_CouponCountAggregateInputType = {
    id?: true
    isRedeem?: true
    percentage?: true
    createdAt?: true
    expiredAt?: true
    userId?: true
    _all?: true
  }

  export type User_CouponAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_Coupon to aggregate.
     */
    where?: User_CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Coupons to fetch.
     */
    orderBy?: User_CouponOrderByWithRelationInput | User_CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: User_CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned User_Coupons
    **/
    _count?: true | User_CouponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_CouponAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_CouponSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_CouponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_CouponMaxAggregateInputType
  }

  export type GetUser_CouponAggregateType<T extends User_CouponAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_Coupon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_Coupon[P]>
      : GetScalarType<T[P], AggregateUser_Coupon[P]>
  }




  export type User_CouponGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_CouponWhereInput
    orderBy?: User_CouponOrderByWithAggregationInput | User_CouponOrderByWithAggregationInput[]
    by: User_CouponScalarFieldEnum[] | User_CouponScalarFieldEnum
    having?: User_CouponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_CouponCountAggregateInputType | true
    _avg?: User_CouponAvgAggregateInputType
    _sum?: User_CouponSumAggregateInputType
    _min?: User_CouponMinAggregateInputType
    _max?: User_CouponMaxAggregateInputType
  }

  export type User_CouponGroupByOutputType = {
    id: number
    isRedeem: boolean
    percentage: number
    createdAt: Date
    expiredAt: Date
    userId: number
    _count: User_CouponCountAggregateOutputType | null
    _avg: User_CouponAvgAggregateOutputType | null
    _sum: User_CouponSumAggregateOutputType | null
    _min: User_CouponMinAggregateOutputType | null
    _max: User_CouponMaxAggregateOutputType | null
  }

  type GetUser_CouponGroupByPayload<T extends User_CouponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_CouponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_CouponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_CouponGroupByOutputType[P]>
            : GetScalarType<T[P], User_CouponGroupByOutputType[P]>
        }
      >
    >


  export type User_CouponSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isRedeem?: boolean
    percentage?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_Coupon"]>

  export type User_CouponSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isRedeem?: boolean
    percentage?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_Coupon"]>

  export type User_CouponSelectScalar = {
    id?: boolean
    isRedeem?: boolean
    percentage?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    userId?: boolean
  }

  export type User_CouponInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type User_CouponIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $User_CouponPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User_Coupon"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      isRedeem: boolean
      percentage: number
      createdAt: Date
      expiredAt: Date
      userId: number
    }, ExtArgs["result"]["user_Coupon"]>
    composites: {}
  }

  type User_CouponGetPayload<S extends boolean | null | undefined | User_CouponDefaultArgs> = $Result.GetResult<Prisma.$User_CouponPayload, S>

  type User_CouponCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<User_CouponFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: User_CouponCountAggregateInputType | true
    }

  export interface User_CouponDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User_Coupon'], meta: { name: 'User_Coupon' } }
    /**
     * Find zero or one User_Coupon that matches the filter.
     * @param {User_CouponFindUniqueArgs} args - Arguments to find a User_Coupon
     * @example
     * // Get one User_Coupon
     * const user_Coupon = await prisma.user_Coupon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends User_CouponFindUniqueArgs>(args: SelectSubset<T, User_CouponFindUniqueArgs<ExtArgs>>): Prisma__User_CouponClient<$Result.GetResult<Prisma.$User_CouponPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User_Coupon that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {User_CouponFindUniqueOrThrowArgs} args - Arguments to find a User_Coupon
     * @example
     * // Get one User_Coupon
     * const user_Coupon = await prisma.user_Coupon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends User_CouponFindUniqueOrThrowArgs>(args: SelectSubset<T, User_CouponFindUniqueOrThrowArgs<ExtArgs>>): Prisma__User_CouponClient<$Result.GetResult<Prisma.$User_CouponPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User_Coupon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_CouponFindFirstArgs} args - Arguments to find a User_Coupon
     * @example
     * // Get one User_Coupon
     * const user_Coupon = await prisma.user_Coupon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends User_CouponFindFirstArgs>(args?: SelectSubset<T, User_CouponFindFirstArgs<ExtArgs>>): Prisma__User_CouponClient<$Result.GetResult<Prisma.$User_CouponPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User_Coupon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_CouponFindFirstOrThrowArgs} args - Arguments to find a User_Coupon
     * @example
     * // Get one User_Coupon
     * const user_Coupon = await prisma.user_Coupon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends User_CouponFindFirstOrThrowArgs>(args?: SelectSubset<T, User_CouponFindFirstOrThrowArgs<ExtArgs>>): Prisma__User_CouponClient<$Result.GetResult<Prisma.$User_CouponPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more User_Coupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_CouponFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_Coupons
     * const user_Coupons = await prisma.user_Coupon.findMany()
     * 
     * // Get first 10 User_Coupons
     * const user_Coupons = await prisma.user_Coupon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_CouponWithIdOnly = await prisma.user_Coupon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends User_CouponFindManyArgs>(args?: SelectSubset<T, User_CouponFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_CouponPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User_Coupon.
     * @param {User_CouponCreateArgs} args - Arguments to create a User_Coupon.
     * @example
     * // Create one User_Coupon
     * const User_Coupon = await prisma.user_Coupon.create({
     *   data: {
     *     // ... data to create a User_Coupon
     *   }
     * })
     * 
     */
    create<T extends User_CouponCreateArgs>(args: SelectSubset<T, User_CouponCreateArgs<ExtArgs>>): Prisma__User_CouponClient<$Result.GetResult<Prisma.$User_CouponPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many User_Coupons.
     * @param {User_CouponCreateManyArgs} args - Arguments to create many User_Coupons.
     * @example
     * // Create many User_Coupons
     * const user_Coupon = await prisma.user_Coupon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends User_CouponCreateManyArgs>(args?: SelectSubset<T, User_CouponCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_Coupons and returns the data saved in the database.
     * @param {User_CouponCreateManyAndReturnArgs} args - Arguments to create many User_Coupons.
     * @example
     * // Create many User_Coupons
     * const user_Coupon = await prisma.user_Coupon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_Coupons and only return the `id`
     * const user_CouponWithIdOnly = await prisma.user_Coupon.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends User_CouponCreateManyAndReturnArgs>(args?: SelectSubset<T, User_CouponCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_CouponPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User_Coupon.
     * @param {User_CouponDeleteArgs} args - Arguments to delete one User_Coupon.
     * @example
     * // Delete one User_Coupon
     * const User_Coupon = await prisma.user_Coupon.delete({
     *   where: {
     *     // ... filter to delete one User_Coupon
     *   }
     * })
     * 
     */
    delete<T extends User_CouponDeleteArgs>(args: SelectSubset<T, User_CouponDeleteArgs<ExtArgs>>): Prisma__User_CouponClient<$Result.GetResult<Prisma.$User_CouponPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User_Coupon.
     * @param {User_CouponUpdateArgs} args - Arguments to update one User_Coupon.
     * @example
     * // Update one User_Coupon
     * const user_Coupon = await prisma.user_Coupon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends User_CouponUpdateArgs>(args: SelectSubset<T, User_CouponUpdateArgs<ExtArgs>>): Prisma__User_CouponClient<$Result.GetResult<Prisma.$User_CouponPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more User_Coupons.
     * @param {User_CouponDeleteManyArgs} args - Arguments to filter User_Coupons to delete.
     * @example
     * // Delete a few User_Coupons
     * const { count } = await prisma.user_Coupon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends User_CouponDeleteManyArgs>(args?: SelectSubset<T, User_CouponDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_CouponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_Coupons
     * const user_Coupon = await prisma.user_Coupon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends User_CouponUpdateManyArgs>(args: SelectSubset<T, User_CouponUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_Coupon.
     * @param {User_CouponUpsertArgs} args - Arguments to update or create a User_Coupon.
     * @example
     * // Update or create a User_Coupon
     * const user_Coupon = await prisma.user_Coupon.upsert({
     *   create: {
     *     // ... data to create a User_Coupon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_Coupon we want to update
     *   }
     * })
     */
    upsert<T extends User_CouponUpsertArgs>(args: SelectSubset<T, User_CouponUpsertArgs<ExtArgs>>): Prisma__User_CouponClient<$Result.GetResult<Prisma.$User_CouponPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of User_Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_CouponCountArgs} args - Arguments to filter User_Coupons to count.
     * @example
     * // Count the number of User_Coupons
     * const count = await prisma.user_Coupon.count({
     *   where: {
     *     // ... the filter for the User_Coupons we want to count
     *   }
     * })
    **/
    count<T extends User_CouponCountArgs>(
      args?: Subset<T, User_CouponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_CouponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_CouponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_CouponAggregateArgs>(args: Subset<T, User_CouponAggregateArgs>): Prisma.PrismaPromise<GetUser_CouponAggregateType<T>>

    /**
     * Group by User_Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_CouponGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends User_CouponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_CouponGroupByArgs['orderBy'] }
        : { orderBy?: User_CouponGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, User_CouponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_CouponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User_Coupon model
   */
  readonly fields: User_CouponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User_Coupon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__User_CouponClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User_Coupon model
   */ 
  interface User_CouponFieldRefs {
    readonly id: FieldRef<"User_Coupon", 'Int'>
    readonly isRedeem: FieldRef<"User_Coupon", 'Boolean'>
    readonly percentage: FieldRef<"User_Coupon", 'Float'>
    readonly createdAt: FieldRef<"User_Coupon", 'DateTime'>
    readonly expiredAt: FieldRef<"User_Coupon", 'DateTime'>
    readonly userId: FieldRef<"User_Coupon", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User_Coupon findUnique
   */
  export type User_CouponFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Coupon
     */
    select?: User_CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_CouponInclude<ExtArgs> | null
    /**
     * Filter, which User_Coupon to fetch.
     */
    where: User_CouponWhereUniqueInput
  }

  /**
   * User_Coupon findUniqueOrThrow
   */
  export type User_CouponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Coupon
     */
    select?: User_CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_CouponInclude<ExtArgs> | null
    /**
     * Filter, which User_Coupon to fetch.
     */
    where: User_CouponWhereUniqueInput
  }

  /**
   * User_Coupon findFirst
   */
  export type User_CouponFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Coupon
     */
    select?: User_CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_CouponInclude<ExtArgs> | null
    /**
     * Filter, which User_Coupon to fetch.
     */
    where?: User_CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Coupons to fetch.
     */
    orderBy?: User_CouponOrderByWithRelationInput | User_CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_Coupons.
     */
    cursor?: User_CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_Coupons.
     */
    distinct?: User_CouponScalarFieldEnum | User_CouponScalarFieldEnum[]
  }

  /**
   * User_Coupon findFirstOrThrow
   */
  export type User_CouponFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Coupon
     */
    select?: User_CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_CouponInclude<ExtArgs> | null
    /**
     * Filter, which User_Coupon to fetch.
     */
    where?: User_CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Coupons to fetch.
     */
    orderBy?: User_CouponOrderByWithRelationInput | User_CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_Coupons.
     */
    cursor?: User_CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_Coupons.
     */
    distinct?: User_CouponScalarFieldEnum | User_CouponScalarFieldEnum[]
  }

  /**
   * User_Coupon findMany
   */
  export type User_CouponFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Coupon
     */
    select?: User_CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_CouponInclude<ExtArgs> | null
    /**
     * Filter, which User_Coupons to fetch.
     */
    where?: User_CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Coupons to fetch.
     */
    orderBy?: User_CouponOrderByWithRelationInput | User_CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing User_Coupons.
     */
    cursor?: User_CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Coupons.
     */
    skip?: number
    distinct?: User_CouponScalarFieldEnum | User_CouponScalarFieldEnum[]
  }

  /**
   * User_Coupon create
   */
  export type User_CouponCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Coupon
     */
    select?: User_CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_CouponInclude<ExtArgs> | null
    /**
     * The data needed to create a User_Coupon.
     */
    data: XOR<User_CouponCreateInput, User_CouponUncheckedCreateInput>
  }

  /**
   * User_Coupon createMany
   */
  export type User_CouponCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many User_Coupons.
     */
    data: User_CouponCreateManyInput | User_CouponCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User_Coupon createManyAndReturn
   */
  export type User_CouponCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Coupon
     */
    select?: User_CouponSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many User_Coupons.
     */
    data: User_CouponCreateManyInput | User_CouponCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_CouponIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User_Coupon update
   */
  export type User_CouponUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Coupon
     */
    select?: User_CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_CouponInclude<ExtArgs> | null
    /**
     * The data needed to update a User_Coupon.
     */
    data: XOR<User_CouponUpdateInput, User_CouponUncheckedUpdateInput>
    /**
     * Choose, which User_Coupon to update.
     */
    where: User_CouponWhereUniqueInput
  }

  /**
   * User_Coupon updateMany
   */
  export type User_CouponUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update User_Coupons.
     */
    data: XOR<User_CouponUpdateManyMutationInput, User_CouponUncheckedUpdateManyInput>
    /**
     * Filter which User_Coupons to update
     */
    where?: User_CouponWhereInput
  }

  /**
   * User_Coupon upsert
   */
  export type User_CouponUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Coupon
     */
    select?: User_CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_CouponInclude<ExtArgs> | null
    /**
     * The filter to search for the User_Coupon to update in case it exists.
     */
    where: User_CouponWhereUniqueInput
    /**
     * In case the User_Coupon found by the `where` argument doesn't exist, create a new User_Coupon with this data.
     */
    create: XOR<User_CouponCreateInput, User_CouponUncheckedCreateInput>
    /**
     * In case the User_Coupon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<User_CouponUpdateInput, User_CouponUncheckedUpdateInput>
  }

  /**
   * User_Coupon delete
   */
  export type User_CouponDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Coupon
     */
    select?: User_CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_CouponInclude<ExtArgs> | null
    /**
     * Filter which User_Coupon to delete.
     */
    where: User_CouponWhereUniqueInput
  }

  /**
   * User_Coupon deleteMany
   */
  export type User_CouponDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_Coupons to delete
     */
    where?: User_CouponWhereInput
  }

  /**
   * User_Coupon without action
   */
  export type User_CouponDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Coupon
     */
    select?: User_CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_CouponInclude<ExtArgs> | null
  }


  /**
   * Model Promotor
   */

  export type AggregatePromotor = {
    _count: PromotorCountAggregateOutputType | null
    _avg: PromotorAvgAggregateOutputType | null
    _sum: PromotorSumAggregateOutputType | null
    _min: PromotorMinAggregateOutputType | null
    _max: PromotorMaxAggregateOutputType | null
  }

  export type PromotorAvgAggregateOutputType = {
    id: number | null
  }

  export type PromotorSumAggregateOutputType = {
    id: number | null
  }

  export type PromotorMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    isVerify: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromotorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    isVerify: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromotorCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    avatar: number
    isVerify: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PromotorAvgAggregateInputType = {
    id?: true
  }

  export type PromotorSumAggregateInputType = {
    id?: true
  }

  export type PromotorMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    isVerify?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromotorMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    isVerify?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromotorCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    isVerify?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PromotorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotor to aggregate.
     */
    where?: PromotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotors to fetch.
     */
    orderBy?: PromotorOrderByWithRelationInput | PromotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Promotors
    **/
    _count?: true | PromotorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromotorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromotorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromotorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromotorMaxAggregateInputType
  }

  export type GetPromotorAggregateType<T extends PromotorAggregateArgs> = {
        [P in keyof T & keyof AggregatePromotor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromotor[P]>
      : GetScalarType<T[P], AggregatePromotor[P]>
  }




  export type PromotorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotorWhereInput
    orderBy?: PromotorOrderByWithAggregationInput | PromotorOrderByWithAggregationInput[]
    by: PromotorScalarFieldEnum[] | PromotorScalarFieldEnum
    having?: PromotorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromotorCountAggregateInputType | true
    _avg?: PromotorAvgAggregateInputType
    _sum?: PromotorSumAggregateInputType
    _min?: PromotorMinAggregateInputType
    _max?: PromotorMaxAggregateInputType
  }

  export type PromotorGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    avatar: string | null
    isVerify: boolean
    createdAt: Date
    updatedAt: Date
    _count: PromotorCountAggregateOutputType | null
    _avg: PromotorAvgAggregateOutputType | null
    _sum: PromotorSumAggregateOutputType | null
    _min: PromotorMinAggregateOutputType | null
    _max: PromotorMaxAggregateOutputType | null
  }

  type GetPromotorGroupByPayload<T extends PromotorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromotorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromotorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromotorGroupByOutputType[P]>
            : GetScalarType<T[P], PromotorGroupByOutputType[P]>
        }
      >
    >


  export type PromotorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerify?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    events?: boolean | Promotor$eventsArgs<ExtArgs>
    _count?: boolean | PromotorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promotor"]>

  export type PromotorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerify?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promotor"]>

  export type PromotorSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerify?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PromotorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | Promotor$eventsArgs<ExtArgs>
    _count?: boolean | PromotorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PromotorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PromotorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Promotor"
    objects: {
      events: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      avatar: string | null
      isVerify: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["promotor"]>
    composites: {}
  }

  type PromotorGetPayload<S extends boolean | null | undefined | PromotorDefaultArgs> = $Result.GetResult<Prisma.$PromotorPayload, S>

  type PromotorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PromotorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PromotorCountAggregateInputType | true
    }

  export interface PromotorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Promotor'], meta: { name: 'Promotor' } }
    /**
     * Find zero or one Promotor that matches the filter.
     * @param {PromotorFindUniqueArgs} args - Arguments to find a Promotor
     * @example
     * // Get one Promotor
     * const promotor = await prisma.promotor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromotorFindUniqueArgs>(args: SelectSubset<T, PromotorFindUniqueArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Promotor that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PromotorFindUniqueOrThrowArgs} args - Arguments to find a Promotor
     * @example
     * // Get one Promotor
     * const promotor = await prisma.promotor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromotorFindUniqueOrThrowArgs>(args: SelectSubset<T, PromotorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Promotor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorFindFirstArgs} args - Arguments to find a Promotor
     * @example
     * // Get one Promotor
     * const promotor = await prisma.promotor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromotorFindFirstArgs>(args?: SelectSubset<T, PromotorFindFirstArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Promotor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorFindFirstOrThrowArgs} args - Arguments to find a Promotor
     * @example
     * // Get one Promotor
     * const promotor = await prisma.promotor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromotorFindFirstOrThrowArgs>(args?: SelectSubset<T, PromotorFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Promotors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promotors
     * const promotors = await prisma.promotor.findMany()
     * 
     * // Get first 10 Promotors
     * const promotors = await prisma.promotor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promotorWithIdOnly = await prisma.promotor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromotorFindManyArgs>(args?: SelectSubset<T, PromotorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Promotor.
     * @param {PromotorCreateArgs} args - Arguments to create a Promotor.
     * @example
     * // Create one Promotor
     * const Promotor = await prisma.promotor.create({
     *   data: {
     *     // ... data to create a Promotor
     *   }
     * })
     * 
     */
    create<T extends PromotorCreateArgs>(args: SelectSubset<T, PromotorCreateArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Promotors.
     * @param {PromotorCreateManyArgs} args - Arguments to create many Promotors.
     * @example
     * // Create many Promotors
     * const promotor = await prisma.promotor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromotorCreateManyArgs>(args?: SelectSubset<T, PromotorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Promotors and returns the data saved in the database.
     * @param {PromotorCreateManyAndReturnArgs} args - Arguments to create many Promotors.
     * @example
     * // Create many Promotors
     * const promotor = await prisma.promotor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Promotors and only return the `id`
     * const promotorWithIdOnly = await prisma.promotor.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromotorCreateManyAndReturnArgs>(args?: SelectSubset<T, PromotorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Promotor.
     * @param {PromotorDeleteArgs} args - Arguments to delete one Promotor.
     * @example
     * // Delete one Promotor
     * const Promotor = await prisma.promotor.delete({
     *   where: {
     *     // ... filter to delete one Promotor
     *   }
     * })
     * 
     */
    delete<T extends PromotorDeleteArgs>(args: SelectSubset<T, PromotorDeleteArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Promotor.
     * @param {PromotorUpdateArgs} args - Arguments to update one Promotor.
     * @example
     * // Update one Promotor
     * const promotor = await prisma.promotor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromotorUpdateArgs>(args: SelectSubset<T, PromotorUpdateArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Promotors.
     * @param {PromotorDeleteManyArgs} args - Arguments to filter Promotors to delete.
     * @example
     * // Delete a few Promotors
     * const { count } = await prisma.promotor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromotorDeleteManyArgs>(args?: SelectSubset<T, PromotorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promotors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promotors
     * const promotor = await prisma.promotor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromotorUpdateManyArgs>(args: SelectSubset<T, PromotorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Promotor.
     * @param {PromotorUpsertArgs} args - Arguments to update or create a Promotor.
     * @example
     * // Update or create a Promotor
     * const promotor = await prisma.promotor.upsert({
     *   create: {
     *     // ... data to create a Promotor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promotor we want to update
     *   }
     * })
     */
    upsert<T extends PromotorUpsertArgs>(args: SelectSubset<T, PromotorUpsertArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Promotors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorCountArgs} args - Arguments to filter Promotors to count.
     * @example
     * // Count the number of Promotors
     * const count = await prisma.promotor.count({
     *   where: {
     *     // ... the filter for the Promotors we want to count
     *   }
     * })
    **/
    count<T extends PromotorCountArgs>(
      args?: Subset<T, PromotorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromotorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promotor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromotorAggregateArgs>(args: Subset<T, PromotorAggregateArgs>): Prisma.PrismaPromise<GetPromotorAggregateType<T>>

    /**
     * Group by Promotor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromotorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromotorGroupByArgs['orderBy'] }
        : { orderBy?: PromotorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromotorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromotorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Promotor model
   */
  readonly fields: PromotorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Promotor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromotorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends Promotor$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Promotor$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Promotor model
   */ 
  interface PromotorFieldRefs {
    readonly id: FieldRef<"Promotor", 'Int'>
    readonly name: FieldRef<"Promotor", 'String'>
    readonly email: FieldRef<"Promotor", 'String'>
    readonly password: FieldRef<"Promotor", 'String'>
    readonly avatar: FieldRef<"Promotor", 'String'>
    readonly isVerify: FieldRef<"Promotor", 'Boolean'>
    readonly createdAt: FieldRef<"Promotor", 'DateTime'>
    readonly updatedAt: FieldRef<"Promotor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Promotor findUnique
   */
  export type PromotorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * Filter, which Promotor to fetch.
     */
    where: PromotorWhereUniqueInput
  }

  /**
   * Promotor findUniqueOrThrow
   */
  export type PromotorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * Filter, which Promotor to fetch.
     */
    where: PromotorWhereUniqueInput
  }

  /**
   * Promotor findFirst
   */
  export type PromotorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * Filter, which Promotor to fetch.
     */
    where?: PromotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotors to fetch.
     */
    orderBy?: PromotorOrderByWithRelationInput | PromotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotors.
     */
    cursor?: PromotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotors.
     */
    distinct?: PromotorScalarFieldEnum | PromotorScalarFieldEnum[]
  }

  /**
   * Promotor findFirstOrThrow
   */
  export type PromotorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * Filter, which Promotor to fetch.
     */
    where?: PromotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotors to fetch.
     */
    orderBy?: PromotorOrderByWithRelationInput | PromotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotors.
     */
    cursor?: PromotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotors.
     */
    distinct?: PromotorScalarFieldEnum | PromotorScalarFieldEnum[]
  }

  /**
   * Promotor findMany
   */
  export type PromotorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * Filter, which Promotors to fetch.
     */
    where?: PromotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotors to fetch.
     */
    orderBy?: PromotorOrderByWithRelationInput | PromotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Promotors.
     */
    cursor?: PromotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotors.
     */
    skip?: number
    distinct?: PromotorScalarFieldEnum | PromotorScalarFieldEnum[]
  }

  /**
   * Promotor create
   */
  export type PromotorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * The data needed to create a Promotor.
     */
    data: XOR<PromotorCreateInput, PromotorUncheckedCreateInput>
  }

  /**
   * Promotor createMany
   */
  export type PromotorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Promotors.
     */
    data: PromotorCreateManyInput | PromotorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promotor createManyAndReturn
   */
  export type PromotorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Promotors.
     */
    data: PromotorCreateManyInput | PromotorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promotor update
   */
  export type PromotorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * The data needed to update a Promotor.
     */
    data: XOR<PromotorUpdateInput, PromotorUncheckedUpdateInput>
    /**
     * Choose, which Promotor to update.
     */
    where: PromotorWhereUniqueInput
  }

  /**
   * Promotor updateMany
   */
  export type PromotorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Promotors.
     */
    data: XOR<PromotorUpdateManyMutationInput, PromotorUncheckedUpdateManyInput>
    /**
     * Filter which Promotors to update
     */
    where?: PromotorWhereInput
  }

  /**
   * Promotor upsert
   */
  export type PromotorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * The filter to search for the Promotor to update in case it exists.
     */
    where: PromotorWhereUniqueInput
    /**
     * In case the Promotor found by the `where` argument doesn't exist, create a new Promotor with this data.
     */
    create: XOR<PromotorCreateInput, PromotorUncheckedCreateInput>
    /**
     * In case the Promotor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromotorUpdateInput, PromotorUncheckedUpdateInput>
  }

  /**
   * Promotor delete
   */
  export type PromotorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * Filter which Promotor to delete.
     */
    where: PromotorWhereUniqueInput
  }

  /**
   * Promotor deleteMany
   */
  export type PromotorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotors to delete
     */
    where?: PromotorWhereInput
  }

  /**
   * Promotor.events
   */
  export type Promotor$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Promotor without action
   */
  export type PromotorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
    promotorId: number | null
  }

  export type EventSumAggregateOutputType = {
    id: number | null
    promotorId: number | null
  }

  export type EventMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    slug: string | null
    category: $Enums.EventCategories | null
    location: string | null
    venue: string | null
    date: Date | null
    time: Date | null
    isActive: boolean | null
    thumbnail: string | null
    promotorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    slug: string | null
    category: $Enums.EventCategories | null
    location: string | null
    venue: string | null
    date: Date | null
    time: Date | null
    isActive: boolean | null
    thumbnail: string | null
    promotorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    description: number
    slug: number
    category: number
    location: number
    venue: number
    date: number
    time: number
    isActive: number
    thumbnail: number
    promotorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
    promotorId?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
    promotorId?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    slug?: true
    category?: true
    location?: true
    venue?: true
    date?: true
    time?: true
    isActive?: true
    thumbnail?: true
    promotorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    slug?: true
    category?: true
    location?: true
    venue?: true
    date?: true
    time?: true
    isActive?: true
    thumbnail?: true
    promotorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    slug?: true
    category?: true
    location?: true
    venue?: true
    date?: true
    time?: true
    isActive?: true
    thumbnail?: true
    promotorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: number
    title: string
    description: string
    slug: string
    category: $Enums.EventCategories
    location: string
    venue: string
    date: Date
    time: Date
    isActive: boolean
    thumbnail: string
    promotorId: number
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    slug?: boolean
    category?: boolean
    location?: boolean
    venue?: boolean
    date?: boolean
    time?: boolean
    isActive?: boolean
    thumbnail?: boolean
    promotorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    promotor?: boolean | PromotorDefaultArgs<ExtArgs>
    tickets?: boolean | Event$ticketsArgs<ExtArgs>
    reviews?: boolean | Event$reviewsArgs<ExtArgs>
    orders?: boolean | Event$ordersArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    slug?: boolean
    category?: boolean
    location?: boolean
    venue?: boolean
    date?: boolean
    time?: boolean
    isActive?: boolean
    thumbnail?: boolean
    promotorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    promotor?: boolean | PromotorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    slug?: boolean
    category?: boolean
    location?: boolean
    venue?: boolean
    date?: boolean
    time?: boolean
    isActive?: boolean
    thumbnail?: boolean
    promotorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promotor?: boolean | PromotorDefaultArgs<ExtArgs>
    tickets?: boolean | Event$ticketsArgs<ExtArgs>
    reviews?: boolean | Event$reviewsArgs<ExtArgs>
    orders?: boolean | Event$ordersArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promotor?: boolean | PromotorDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      promotor: Prisma.$PromotorPayload<ExtArgs>
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      slug: string
      category: $Enums.EventCategories
      location: string
      venue: string
      date: Date
      time: Date
      isActive: boolean
      thumbnail: string
      promotorId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    promotor<T extends PromotorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromotorDefaultArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tickets<T extends Event$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Event$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany"> | Null>
    reviews<T extends Event$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Event$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    orders<T extends Event$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Event$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */ 
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'Int'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly slug: FieldRef<"Event", 'String'>
    readonly category: FieldRef<"Event", 'EventCategories'>
    readonly location: FieldRef<"Event", 'String'>
    readonly venue: FieldRef<"Event", 'String'>
    readonly date: FieldRef<"Event", 'DateTime'>
    readonly time: FieldRef<"Event", 'DateTime'>
    readonly isActive: FieldRef<"Event", 'Boolean'>
    readonly thumbnail: FieldRef<"Event", 'String'>
    readonly promotorId: FieldRef<"Event", 'Int'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
  }

  /**
   * Event.tickets
   */
  export type Event$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Event.reviews
   */
  export type Event$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Event.orders
   */
  export type Event$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
    price: number | null
    available: number | null
    totalSeats: number | null
    eventId: number | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
    price: bigint | null
    available: number | null
    totalSeats: number | null
    eventId: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    title: string | null
    desc: string | null
    price: bigint | null
    available: number | null
    totalSeats: number | null
    eventId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    title: string | null
    desc: string | null
    price: bigint | null
    available: number | null
    totalSeats: number | null
    eventId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    title: number
    desc: number
    price: number
    available: number
    totalSeats: number
    eventId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
    price?: true
    available?: true
    totalSeats?: true
    eventId?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
    price?: true
    available?: true
    totalSeats?: true
    eventId?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    title?: true
    desc?: true
    price?: true
    available?: true
    totalSeats?: true
    eventId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    title?: true
    desc?: true
    price?: true
    available?: true
    totalSeats?: true
    eventId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    title?: true
    desc?: true
    price?: true
    available?: true
    totalSeats?: true
    eventId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    title: string
    desc: string
    price: bigint
    available: number
    totalSeats: number
    eventId: number
    createdAt: Date
    updatedAt: Date
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    desc?: boolean
    price?: boolean
    available?: boolean
    totalSeats?: boolean
    eventId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    orderDetails?: boolean | Ticket$orderDetailsArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    desc?: boolean
    price?: boolean
    available?: boolean
    totalSeats?: boolean
    eventId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    title?: boolean
    desc?: boolean
    price?: boolean
    available?: boolean
    totalSeats?: boolean
    eventId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    orderDetails?: boolean | Ticket$orderDetailsArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      orderDetails: Prisma.$Order_DetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      desc: string
      price: bigint
      available: number
      totalSeats: number
      eventId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    orderDetails<T extends Ticket$orderDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$orderDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket model
   */ 
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'Int'>
    readonly title: FieldRef<"Ticket", 'String'>
    readonly desc: FieldRef<"Ticket", 'String'>
    readonly price: FieldRef<"Ticket", 'BigInt'>
    readonly available: FieldRef<"Ticket", 'Int'>
    readonly totalSeats: FieldRef<"Ticket", 'Int'>
    readonly eventId: FieldRef<"Ticket", 'Int'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
    readonly updatedAt: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
  }

  /**
   * Ticket.orderDetails
   */
  export type Ticket$orderDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    where?: Order_DetailsWhereInput
    orderBy?: Order_DetailsOrderByWithRelationInput | Order_DetailsOrderByWithRelationInput[]
    cursor?: Order_DetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_DetailsScalarFieldEnum | Order_DetailsScalarFieldEnum[]
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    total_price: number | null
    final_price: number | null
    userId: number | null
    eventId: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    total_price: bigint | null
    final_price: bigint | null
    userId: number | null
    eventId: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    total_price: bigint | null
    final_price: bigint | null
    status: $Enums.OrderStatus | null
    redirect_url: string | null
    userId: number | null
    eventId: number | null
    expiredAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    total_price: bigint | null
    final_price: bigint | null
    status: $Enums.OrderStatus | null
    redirect_url: string | null
    userId: number | null
    eventId: number | null
    expiredAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    total_price: number
    final_price: number
    status: number
    redirect_url: number
    userId: number
    eventId: number
    expiredAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    total_price?: true
    final_price?: true
    userId?: true
    eventId?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    total_price?: true
    final_price?: true
    userId?: true
    eventId?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    total_price?: true
    final_price?: true
    status?: true
    redirect_url?: true
    userId?: true
    eventId?: true
    expiredAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    total_price?: true
    final_price?: true
    status?: true
    redirect_url?: true
    userId?: true
    eventId?: true
    expiredAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    total_price?: true
    final_price?: true
    status?: true
    redirect_url?: true
    userId?: true
    eventId?: true
    expiredAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    total_price: bigint
    final_price: bigint
    status: $Enums.OrderStatus
    redirect_url: string | null
    userId: number
    eventId: number
    expiredAt: Date
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total_price?: boolean
    final_price?: boolean
    status?: boolean
    redirect_url?: boolean
    userId?: boolean
    eventId?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    details?: boolean | Order$detailsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total_price?: boolean
    final_price?: boolean
    status?: boolean
    redirect_url?: boolean
    userId?: boolean
    eventId?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    total_price?: boolean
    final_price?: boolean
    status?: boolean
    redirect_url?: boolean
    userId?: boolean
    eventId?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    details?: boolean | Order$detailsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      event: Prisma.$EventPayload<ExtArgs>
      details: Prisma.$Order_DetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      total_price: bigint
      final_price: bigint
      status: $Enums.OrderStatus
      redirect_url: string | null
      userId: number
      eventId: number
      expiredAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    details<T extends Order$detailsArgs<ExtArgs> = {}>(args?: Subset<T, Order$detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly total_price: FieldRef<"Order", 'BigInt'>
    readonly final_price: FieldRef<"Order", 'BigInt'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly redirect_url: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'Int'>
    readonly eventId: FieldRef<"Order", 'Int'>
    readonly expiredAt: FieldRef<"Order", 'DateTime'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }

  /**
   * Order.details
   */
  export type Order$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    where?: Order_DetailsWhereInput
    orderBy?: Order_DetailsOrderByWithRelationInput | Order_DetailsOrderByWithRelationInput[]
    cursor?: Order_DetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_DetailsScalarFieldEnum | Order_DetailsScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Order_Details
   */

  export type AggregateOrder_Details = {
    _count: Order_DetailsCountAggregateOutputType | null
    _avg: Order_DetailsAvgAggregateOutputType | null
    _sum: Order_DetailsSumAggregateOutputType | null
    _min: Order_DetailsMinAggregateOutputType | null
    _max: Order_DetailsMaxAggregateOutputType | null
  }

  export type Order_DetailsAvgAggregateOutputType = {
    id: number | null
    ticketId: number | null
    qty: number | null
    orderId: number | null
  }

  export type Order_DetailsSumAggregateOutputType = {
    id: number | null
    ticketId: number | null
    qty: number | null
    orderId: number | null
  }

  export type Order_DetailsMinAggregateOutputType = {
    id: number | null
    ticketId: number | null
    qty: number | null
    orderId: number | null
  }

  export type Order_DetailsMaxAggregateOutputType = {
    id: number | null
    ticketId: number | null
    qty: number | null
    orderId: number | null
  }

  export type Order_DetailsCountAggregateOutputType = {
    id: number
    ticketId: number
    qty: number
    orderId: number
    _all: number
  }


  export type Order_DetailsAvgAggregateInputType = {
    id?: true
    ticketId?: true
    qty?: true
    orderId?: true
  }

  export type Order_DetailsSumAggregateInputType = {
    id?: true
    ticketId?: true
    qty?: true
    orderId?: true
  }

  export type Order_DetailsMinAggregateInputType = {
    id?: true
    ticketId?: true
    qty?: true
    orderId?: true
  }

  export type Order_DetailsMaxAggregateInputType = {
    id?: true
    ticketId?: true
    qty?: true
    orderId?: true
  }

  export type Order_DetailsCountAggregateInputType = {
    id?: true
    ticketId?: true
    qty?: true
    orderId?: true
    _all?: true
  }

  export type Order_DetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order_Details to aggregate.
     */
    where?: Order_DetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_Details to fetch.
     */
    orderBy?: Order_DetailsOrderByWithRelationInput | Order_DetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Order_DetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_Details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Order_Details
    **/
    _count?: true | Order_DetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_DetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_DetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_DetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_DetailsMaxAggregateInputType
  }

  export type GetOrder_DetailsAggregateType<T extends Order_DetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_Details]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_Details[P]>
      : GetScalarType<T[P], AggregateOrder_Details[P]>
  }




  export type Order_DetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Order_DetailsWhereInput
    orderBy?: Order_DetailsOrderByWithAggregationInput | Order_DetailsOrderByWithAggregationInput[]
    by: Order_DetailsScalarFieldEnum[] | Order_DetailsScalarFieldEnum
    having?: Order_DetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_DetailsCountAggregateInputType | true
    _avg?: Order_DetailsAvgAggregateInputType
    _sum?: Order_DetailsSumAggregateInputType
    _min?: Order_DetailsMinAggregateInputType
    _max?: Order_DetailsMaxAggregateInputType
  }

  export type Order_DetailsGroupByOutputType = {
    id: number
    ticketId: number
    qty: number
    orderId: number
    _count: Order_DetailsCountAggregateOutputType | null
    _avg: Order_DetailsAvgAggregateOutputType | null
    _sum: Order_DetailsSumAggregateOutputType | null
    _min: Order_DetailsMinAggregateOutputType | null
    _max: Order_DetailsMaxAggregateOutputType | null
  }

  type GetOrder_DetailsGroupByPayload<T extends Order_DetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_DetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_DetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_DetailsGroupByOutputType[P]>
            : GetScalarType<T[P], Order_DetailsGroupByOutputType[P]>
        }
      >
    >


  export type Order_DetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    qty?: boolean
    orderId?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_Details"]>

  export type Order_DetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    qty?: boolean
    orderId?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_Details"]>

  export type Order_DetailsSelectScalar = {
    id?: boolean
    ticketId?: boolean
    qty?: boolean
    orderId?: boolean
  }

  export type Order_DetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type Order_DetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $Order_DetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order_Details"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ticketId: number
      qty: number
      orderId: number
    }, ExtArgs["result"]["order_Details"]>
    composites: {}
  }

  type Order_DetailsGetPayload<S extends boolean | null | undefined | Order_DetailsDefaultArgs> = $Result.GetResult<Prisma.$Order_DetailsPayload, S>

  type Order_DetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Order_DetailsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Order_DetailsCountAggregateInputType | true
    }

  export interface Order_DetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order_Details'], meta: { name: 'Order_Details' } }
    /**
     * Find zero or one Order_Details that matches the filter.
     * @param {Order_DetailsFindUniqueArgs} args - Arguments to find a Order_Details
     * @example
     * // Get one Order_Details
     * const order_Details = await prisma.order_Details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Order_DetailsFindUniqueArgs>(args: SelectSubset<T, Order_DetailsFindUniqueArgs<ExtArgs>>): Prisma__Order_DetailsClient<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Order_Details that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Order_DetailsFindUniqueOrThrowArgs} args - Arguments to find a Order_Details
     * @example
     * // Get one Order_Details
     * const order_Details = await prisma.order_Details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Order_DetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, Order_DetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Order_DetailsClient<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Order_Details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_DetailsFindFirstArgs} args - Arguments to find a Order_Details
     * @example
     * // Get one Order_Details
     * const order_Details = await prisma.order_Details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Order_DetailsFindFirstArgs>(args?: SelectSubset<T, Order_DetailsFindFirstArgs<ExtArgs>>): Prisma__Order_DetailsClient<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Order_Details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_DetailsFindFirstOrThrowArgs} args - Arguments to find a Order_Details
     * @example
     * // Get one Order_Details
     * const order_Details = await prisma.order_Details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Order_DetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, Order_DetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Order_DetailsClient<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Order_Details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_DetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_Details
     * const order_Details = await prisma.order_Details.findMany()
     * 
     * // Get first 10 Order_Details
     * const order_Details = await prisma.order_Details.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_DetailsWithIdOnly = await prisma.order_Details.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Order_DetailsFindManyArgs>(args?: SelectSubset<T, Order_DetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Order_Details.
     * @param {Order_DetailsCreateArgs} args - Arguments to create a Order_Details.
     * @example
     * // Create one Order_Details
     * const Order_Details = await prisma.order_Details.create({
     *   data: {
     *     // ... data to create a Order_Details
     *   }
     * })
     * 
     */
    create<T extends Order_DetailsCreateArgs>(args: SelectSubset<T, Order_DetailsCreateArgs<ExtArgs>>): Prisma__Order_DetailsClient<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Order_Details.
     * @param {Order_DetailsCreateManyArgs} args - Arguments to create many Order_Details.
     * @example
     * // Create many Order_Details
     * const order_Details = await prisma.order_Details.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Order_DetailsCreateManyArgs>(args?: SelectSubset<T, Order_DetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Order_Details and returns the data saved in the database.
     * @param {Order_DetailsCreateManyAndReturnArgs} args - Arguments to create many Order_Details.
     * @example
     * // Create many Order_Details
     * const order_Details = await prisma.order_Details.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Order_Details and only return the `id`
     * const order_DetailsWithIdOnly = await prisma.order_Details.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Order_DetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, Order_DetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Order_Details.
     * @param {Order_DetailsDeleteArgs} args - Arguments to delete one Order_Details.
     * @example
     * // Delete one Order_Details
     * const Order_Details = await prisma.order_Details.delete({
     *   where: {
     *     // ... filter to delete one Order_Details
     *   }
     * })
     * 
     */
    delete<T extends Order_DetailsDeleteArgs>(args: SelectSubset<T, Order_DetailsDeleteArgs<ExtArgs>>): Prisma__Order_DetailsClient<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Order_Details.
     * @param {Order_DetailsUpdateArgs} args - Arguments to update one Order_Details.
     * @example
     * // Update one Order_Details
     * const order_Details = await prisma.order_Details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Order_DetailsUpdateArgs>(args: SelectSubset<T, Order_DetailsUpdateArgs<ExtArgs>>): Prisma__Order_DetailsClient<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Order_Details.
     * @param {Order_DetailsDeleteManyArgs} args - Arguments to filter Order_Details to delete.
     * @example
     * // Delete a few Order_Details
     * const { count } = await prisma.order_Details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Order_DetailsDeleteManyArgs>(args?: SelectSubset<T, Order_DetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_DetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_Details
     * const order_Details = await prisma.order_Details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Order_DetailsUpdateManyArgs>(args: SelectSubset<T, Order_DetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order_Details.
     * @param {Order_DetailsUpsertArgs} args - Arguments to update or create a Order_Details.
     * @example
     * // Update or create a Order_Details
     * const order_Details = await prisma.order_Details.upsert({
     *   create: {
     *     // ... data to create a Order_Details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_Details we want to update
     *   }
     * })
     */
    upsert<T extends Order_DetailsUpsertArgs>(args: SelectSubset<T, Order_DetailsUpsertArgs<ExtArgs>>): Prisma__Order_DetailsClient<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Order_Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_DetailsCountArgs} args - Arguments to filter Order_Details to count.
     * @example
     * // Count the number of Order_Details
     * const count = await prisma.order_Details.count({
     *   where: {
     *     // ... the filter for the Order_Details we want to count
     *   }
     * })
    **/
    count<T extends Order_DetailsCountArgs>(
      args?: Subset<T, Order_DetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_DetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_DetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Order_DetailsAggregateArgs>(args: Subset<T, Order_DetailsAggregateArgs>): Prisma.PrismaPromise<GetOrder_DetailsAggregateType<T>>

    /**
     * Group by Order_Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_DetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Order_DetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Order_DetailsGroupByArgs['orderBy'] }
        : { orderBy?: Order_DetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Order_DetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_DetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order_Details model
   */
  readonly fields: Order_DetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order_Details.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Order_DetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order_Details model
   */ 
  interface Order_DetailsFieldRefs {
    readonly id: FieldRef<"Order_Details", 'Int'>
    readonly ticketId: FieldRef<"Order_Details", 'Int'>
    readonly qty: FieldRef<"Order_Details", 'Int'>
    readonly orderId: FieldRef<"Order_Details", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Order_Details findUnique
   */
  export type Order_DetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    /**
     * Filter, which Order_Details to fetch.
     */
    where: Order_DetailsWhereUniqueInput
  }

  /**
   * Order_Details findUniqueOrThrow
   */
  export type Order_DetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    /**
     * Filter, which Order_Details to fetch.
     */
    where: Order_DetailsWhereUniqueInput
  }

  /**
   * Order_Details findFirst
   */
  export type Order_DetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    /**
     * Filter, which Order_Details to fetch.
     */
    where?: Order_DetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_Details to fetch.
     */
    orderBy?: Order_DetailsOrderByWithRelationInput | Order_DetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Order_Details.
     */
    cursor?: Order_DetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_Details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Order_Details.
     */
    distinct?: Order_DetailsScalarFieldEnum | Order_DetailsScalarFieldEnum[]
  }

  /**
   * Order_Details findFirstOrThrow
   */
  export type Order_DetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    /**
     * Filter, which Order_Details to fetch.
     */
    where?: Order_DetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_Details to fetch.
     */
    orderBy?: Order_DetailsOrderByWithRelationInput | Order_DetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Order_Details.
     */
    cursor?: Order_DetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_Details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Order_Details.
     */
    distinct?: Order_DetailsScalarFieldEnum | Order_DetailsScalarFieldEnum[]
  }

  /**
   * Order_Details findMany
   */
  export type Order_DetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    /**
     * Filter, which Order_Details to fetch.
     */
    where?: Order_DetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_Details to fetch.
     */
    orderBy?: Order_DetailsOrderByWithRelationInput | Order_DetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Order_Details.
     */
    cursor?: Order_DetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_Details.
     */
    skip?: number
    distinct?: Order_DetailsScalarFieldEnum | Order_DetailsScalarFieldEnum[]
  }

  /**
   * Order_Details create
   */
  export type Order_DetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a Order_Details.
     */
    data: XOR<Order_DetailsCreateInput, Order_DetailsUncheckedCreateInput>
  }

  /**
   * Order_Details createMany
   */
  export type Order_DetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Order_Details.
     */
    data: Order_DetailsCreateManyInput | Order_DetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order_Details createManyAndReturn
   */
  export type Order_DetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Order_Details.
     */
    data: Order_DetailsCreateManyInput | Order_DetailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order_Details update
   */
  export type Order_DetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a Order_Details.
     */
    data: XOR<Order_DetailsUpdateInput, Order_DetailsUncheckedUpdateInput>
    /**
     * Choose, which Order_Details to update.
     */
    where: Order_DetailsWhereUniqueInput
  }

  /**
   * Order_Details updateMany
   */
  export type Order_DetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Order_Details.
     */
    data: XOR<Order_DetailsUpdateManyMutationInput, Order_DetailsUncheckedUpdateManyInput>
    /**
     * Filter which Order_Details to update
     */
    where?: Order_DetailsWhereInput
  }

  /**
   * Order_Details upsert
   */
  export type Order_DetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the Order_Details to update in case it exists.
     */
    where: Order_DetailsWhereUniqueInput
    /**
     * In case the Order_Details found by the `where` argument doesn't exist, create a new Order_Details with this data.
     */
    create: XOR<Order_DetailsCreateInput, Order_DetailsUncheckedCreateInput>
    /**
     * In case the Order_Details was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Order_DetailsUpdateInput, Order_DetailsUncheckedUpdateInput>
  }

  /**
   * Order_Details delete
   */
  export type Order_DetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    /**
     * Filter which Order_Details to delete.
     */
    where: Order_DetailsWhereUniqueInput
  }

  /**
   * Order_Details deleteMany
   */
  export type Order_DetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order_Details to delete
     */
    where?: Order_DetailsWhereInput
  }

  /**
   * Order_Details without action
   */
  export type Order_DetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    userId: number | null
    eventId: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    rating: number | null
    userId: number | null
    eventId: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    desc: string | null
    rating: number | null
    userId: number | null
    eventId: number | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    desc: string | null
    rating: number | null
    userId: number | null
    eventId: number | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    desc: number
    rating: number
    userId: number
    eventId: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    eventId?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    eventId?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    desc?: true
    rating?: true
    userId?: true
    eventId?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    desc?: true
    rating?: true
    userId?: true
    eventId?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    desc?: true
    rating?: true
    userId?: true
    eventId?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    desc: string
    rating: number
    userId: number
    eventId: number
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    desc?: boolean
    rating?: boolean
    userId?: boolean
    eventId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    desc?: boolean
    rating?: boolean
    userId?: boolean
    eventId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    desc?: boolean
    rating?: boolean
    userId?: boolean
    eventId?: boolean
    createdAt?: boolean
  }

  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      desc: string
      rating: number
      userId: number
      eventId: number
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */ 
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly desc: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly userId: FieldRef<"Review", 'Int'>
    readonly eventId: FieldRef<"Review", 'Int'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    isVerify: 'isVerify',
    ref_code: 'ref_code',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const User_PointScalarFieldEnum: {
    id: 'id',
    point: 'point',
    createdAt: 'createdAt',
    expiredAt: 'expiredAt',
    isRedeem: 'isRedeem',
    userId: 'userId'
  };

  export type User_PointScalarFieldEnum = (typeof User_PointScalarFieldEnum)[keyof typeof User_PointScalarFieldEnum]


  export const User_CouponScalarFieldEnum: {
    id: 'id',
    isRedeem: 'isRedeem',
    percentage: 'percentage',
    createdAt: 'createdAt',
    expiredAt: 'expiredAt',
    userId: 'userId'
  };

  export type User_CouponScalarFieldEnum = (typeof User_CouponScalarFieldEnum)[keyof typeof User_CouponScalarFieldEnum]


  export const PromotorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    isVerify: 'isVerify',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PromotorScalarFieldEnum = (typeof PromotorScalarFieldEnum)[keyof typeof PromotorScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    slug: 'slug',
    category: 'category',
    location: 'location',
    venue: 'venue',
    date: 'date',
    time: 'time',
    isActive: 'isActive',
    thumbnail: 'thumbnail',
    promotorId: 'promotorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    title: 'title',
    desc: 'desc',
    price: 'price',
    available: 'available',
    totalSeats: 'totalSeats',
    eventId: 'eventId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    total_price: 'total_price',
    final_price: 'final_price',
    status: 'status',
    redirect_url: 'redirect_url',
    userId: 'userId',
    eventId: 'eventId',
    expiredAt: 'expiredAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const Order_DetailsScalarFieldEnum: {
    id: 'id',
    ticketId: 'ticketId',
    qty: 'qty',
    orderId: 'orderId'
  };

  export type Order_DetailsScalarFieldEnum = (typeof Order_DetailsScalarFieldEnum)[keyof typeof Order_DetailsScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    desc: 'desc',
    rating: 'rating',
    userId: 'userId',
    eventId: 'eventId',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'EventCategories'
   */
  export type EnumEventCategoriesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventCategories'>
    


  /**
   * Reference to a field of type 'EventCategories[]'
   */
  export type ListEnumEventCategoriesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventCategories[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    isVerify?: BoolFilter<"User"> | boolean
    ref_code?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    points?: User_PointListRelationFilter
    coupons?: User_CouponListRelationFilter
    reviews?: ReviewListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    isVerify?: SortOrder
    ref_code?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    points?: User_PointOrderByRelationAggregateInput
    coupons?: User_CouponOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    ref_code?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    isVerify?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    points?: User_PointListRelationFilter
    coupons?: User_CouponListRelationFilter
    reviews?: ReviewListRelationFilter
    orders?: OrderListRelationFilter
  }, "id" | "username" | "email" | "ref_code">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    isVerify?: SortOrder
    ref_code?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    isVerify?: BoolWithAggregatesFilter<"User"> | boolean
    ref_code?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type User_PointWhereInput = {
    AND?: User_PointWhereInput | User_PointWhereInput[]
    OR?: User_PointWhereInput[]
    NOT?: User_PointWhereInput | User_PointWhereInput[]
    id?: IntFilter<"User_Point"> | number
    point?: IntFilter<"User_Point"> | number
    createdAt?: DateTimeFilter<"User_Point"> | Date | string
    expiredAt?: DateTimeFilter<"User_Point"> | Date | string
    isRedeem?: BoolFilter<"User_Point"> | boolean
    userId?: IntFilter<"User_Point"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type User_PointOrderByWithRelationInput = {
    id?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    isRedeem?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type User_PointWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: User_PointWhereInput | User_PointWhereInput[]
    OR?: User_PointWhereInput[]
    NOT?: User_PointWhereInput | User_PointWhereInput[]
    point?: IntFilter<"User_Point"> | number
    createdAt?: DateTimeFilter<"User_Point"> | Date | string
    expiredAt?: DateTimeFilter<"User_Point"> | Date | string
    isRedeem?: BoolFilter<"User_Point"> | boolean
    userId?: IntFilter<"User_Point"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type User_PointOrderByWithAggregationInput = {
    id?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    isRedeem?: SortOrder
    userId?: SortOrder
    _count?: User_PointCountOrderByAggregateInput
    _avg?: User_PointAvgOrderByAggregateInput
    _max?: User_PointMaxOrderByAggregateInput
    _min?: User_PointMinOrderByAggregateInput
    _sum?: User_PointSumOrderByAggregateInput
  }

  export type User_PointScalarWhereWithAggregatesInput = {
    AND?: User_PointScalarWhereWithAggregatesInput | User_PointScalarWhereWithAggregatesInput[]
    OR?: User_PointScalarWhereWithAggregatesInput[]
    NOT?: User_PointScalarWhereWithAggregatesInput | User_PointScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User_Point"> | number
    point?: IntWithAggregatesFilter<"User_Point"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User_Point"> | Date | string
    expiredAt?: DateTimeWithAggregatesFilter<"User_Point"> | Date | string
    isRedeem?: BoolWithAggregatesFilter<"User_Point"> | boolean
    userId?: IntWithAggregatesFilter<"User_Point"> | number
  }

  export type User_CouponWhereInput = {
    AND?: User_CouponWhereInput | User_CouponWhereInput[]
    OR?: User_CouponWhereInput[]
    NOT?: User_CouponWhereInput | User_CouponWhereInput[]
    id?: IntFilter<"User_Coupon"> | number
    isRedeem?: BoolFilter<"User_Coupon"> | boolean
    percentage?: FloatFilter<"User_Coupon"> | number
    createdAt?: DateTimeFilter<"User_Coupon"> | Date | string
    expiredAt?: DateTimeFilter<"User_Coupon"> | Date | string
    userId?: IntFilter<"User_Coupon"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type User_CouponOrderByWithRelationInput = {
    id?: SortOrder
    isRedeem?: SortOrder
    percentage?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type User_CouponWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: User_CouponWhereInput | User_CouponWhereInput[]
    OR?: User_CouponWhereInput[]
    NOT?: User_CouponWhereInput | User_CouponWhereInput[]
    isRedeem?: BoolFilter<"User_Coupon"> | boolean
    percentage?: FloatFilter<"User_Coupon"> | number
    createdAt?: DateTimeFilter<"User_Coupon"> | Date | string
    expiredAt?: DateTimeFilter<"User_Coupon"> | Date | string
    userId?: IntFilter<"User_Coupon"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type User_CouponOrderByWithAggregationInput = {
    id?: SortOrder
    isRedeem?: SortOrder
    percentage?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    userId?: SortOrder
    _count?: User_CouponCountOrderByAggregateInput
    _avg?: User_CouponAvgOrderByAggregateInput
    _max?: User_CouponMaxOrderByAggregateInput
    _min?: User_CouponMinOrderByAggregateInput
    _sum?: User_CouponSumOrderByAggregateInput
  }

  export type User_CouponScalarWhereWithAggregatesInput = {
    AND?: User_CouponScalarWhereWithAggregatesInput | User_CouponScalarWhereWithAggregatesInput[]
    OR?: User_CouponScalarWhereWithAggregatesInput[]
    NOT?: User_CouponScalarWhereWithAggregatesInput | User_CouponScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User_Coupon"> | number
    isRedeem?: BoolWithAggregatesFilter<"User_Coupon"> | boolean
    percentage?: FloatWithAggregatesFilter<"User_Coupon"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User_Coupon"> | Date | string
    expiredAt?: DateTimeWithAggregatesFilter<"User_Coupon"> | Date | string
    userId?: IntWithAggregatesFilter<"User_Coupon"> | number
  }

  export type PromotorWhereInput = {
    AND?: PromotorWhereInput | PromotorWhereInput[]
    OR?: PromotorWhereInput[]
    NOT?: PromotorWhereInput | PromotorWhereInput[]
    id?: IntFilter<"Promotor"> | number
    name?: StringFilter<"Promotor"> | string
    email?: StringFilter<"Promotor"> | string
    password?: StringFilter<"Promotor"> | string
    avatar?: StringNullableFilter<"Promotor"> | string | null
    isVerify?: BoolFilter<"Promotor"> | boolean
    createdAt?: DateTimeFilter<"Promotor"> | Date | string
    updatedAt?: DateTimeFilter<"Promotor"> | Date | string
    events?: EventListRelationFilter
  }

  export type PromotorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    isVerify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    events?: EventOrderByRelationAggregateInput
  }

  export type PromotorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: PromotorWhereInput | PromotorWhereInput[]
    OR?: PromotorWhereInput[]
    NOT?: PromotorWhereInput | PromotorWhereInput[]
    name?: StringFilter<"Promotor"> | string
    password?: StringFilter<"Promotor"> | string
    avatar?: StringNullableFilter<"Promotor"> | string | null
    isVerify?: BoolFilter<"Promotor"> | boolean
    createdAt?: DateTimeFilter<"Promotor"> | Date | string
    updatedAt?: DateTimeFilter<"Promotor"> | Date | string
    events?: EventListRelationFilter
  }, "id" | "email">

  export type PromotorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    isVerify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PromotorCountOrderByAggregateInput
    _avg?: PromotorAvgOrderByAggregateInput
    _max?: PromotorMaxOrderByAggregateInput
    _min?: PromotorMinOrderByAggregateInput
    _sum?: PromotorSumOrderByAggregateInput
  }

  export type PromotorScalarWhereWithAggregatesInput = {
    AND?: PromotorScalarWhereWithAggregatesInput | PromotorScalarWhereWithAggregatesInput[]
    OR?: PromotorScalarWhereWithAggregatesInput[]
    NOT?: PromotorScalarWhereWithAggregatesInput | PromotorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Promotor"> | number
    name?: StringWithAggregatesFilter<"Promotor"> | string
    email?: StringWithAggregatesFilter<"Promotor"> | string
    password?: StringWithAggregatesFilter<"Promotor"> | string
    avatar?: StringNullableWithAggregatesFilter<"Promotor"> | string | null
    isVerify?: BoolWithAggregatesFilter<"Promotor"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Promotor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Promotor"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    slug?: StringFilter<"Event"> | string
    category?: EnumEventCategoriesFilter<"Event"> | $Enums.EventCategories
    location?: StringFilter<"Event"> | string
    venue?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    time?: DateTimeFilter<"Event"> | Date | string
    isActive?: BoolFilter<"Event"> | boolean
    thumbnail?: StringFilter<"Event"> | string
    promotorId?: IntFilter<"Event"> | number
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    promotor?: XOR<PromotorScalarRelationFilter, PromotorWhereInput>
    tickets?: TicketListRelationFilter
    reviews?: ReviewListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    date?: SortOrder
    time?: SortOrder
    isActive?: SortOrder
    thumbnail?: SortOrder
    promotorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    promotor?: PromotorOrderByWithRelationInput
    tickets?: TicketOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    slug?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    description?: StringFilter<"Event"> | string
    category?: EnumEventCategoriesFilter<"Event"> | $Enums.EventCategories
    location?: StringFilter<"Event"> | string
    venue?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    time?: DateTimeFilter<"Event"> | Date | string
    isActive?: BoolFilter<"Event"> | boolean
    thumbnail?: StringFilter<"Event"> | string
    promotorId?: IntFilter<"Event"> | number
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    promotor?: XOR<PromotorScalarRelationFilter, PromotorWhereInput>
    tickets?: TicketListRelationFilter
    reviews?: ReviewListRelationFilter
    orders?: OrderListRelationFilter
  }, "id" | "title" | "slug">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    date?: SortOrder
    time?: SortOrder
    isActive?: SortOrder
    thumbnail?: SortOrder
    promotorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Event"> | number
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringWithAggregatesFilter<"Event"> | string
    slug?: StringWithAggregatesFilter<"Event"> | string
    category?: EnumEventCategoriesWithAggregatesFilter<"Event"> | $Enums.EventCategories
    location?: StringWithAggregatesFilter<"Event"> | string
    venue?: StringWithAggregatesFilter<"Event"> | string
    date?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    time?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    isActive?: BoolWithAggregatesFilter<"Event"> | boolean
    thumbnail?: StringWithAggregatesFilter<"Event"> | string
    promotorId?: IntWithAggregatesFilter<"Event"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: IntFilter<"Ticket"> | number
    title?: StringFilter<"Ticket"> | string
    desc?: StringFilter<"Ticket"> | string
    price?: BigIntFilter<"Ticket"> | bigint | number
    available?: IntFilter<"Ticket"> | number
    totalSeats?: IntFilter<"Ticket"> | number
    eventId?: IntFilter<"Ticket"> | number
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    orderDetails?: Order_DetailsListRelationFilter
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    price?: SortOrder
    available?: SortOrder
    totalSeats?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    event?: EventOrderByWithRelationInput
    orderDetails?: Order_DetailsOrderByRelationAggregateInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    title?: StringFilter<"Ticket"> | string
    desc?: StringFilter<"Ticket"> | string
    price?: BigIntFilter<"Ticket"> | bigint | number
    available?: IntFilter<"Ticket"> | number
    totalSeats?: IntFilter<"Ticket"> | number
    eventId?: IntFilter<"Ticket"> | number
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    orderDetails?: Order_DetailsListRelationFilter
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    price?: SortOrder
    available?: SortOrder
    totalSeats?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ticket"> | number
    title?: StringWithAggregatesFilter<"Ticket"> | string
    desc?: StringWithAggregatesFilter<"Ticket"> | string
    price?: BigIntWithAggregatesFilter<"Ticket"> | bigint | number
    available?: IntWithAggregatesFilter<"Ticket"> | number
    totalSeats?: IntWithAggregatesFilter<"Ticket"> | number
    eventId?: IntWithAggregatesFilter<"Ticket"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    total_price?: BigIntFilter<"Order"> | bigint | number
    final_price?: BigIntFilter<"Order"> | bigint | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    redirect_url?: StringNullableFilter<"Order"> | string | null
    userId?: IntFilter<"Order"> | number
    eventId?: IntFilter<"Order"> | number
    expiredAt?: DateTimeFilter<"Order"> | Date | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    details?: Order_DetailsListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    total_price?: SortOrder
    final_price?: SortOrder
    status?: SortOrder
    redirect_url?: SortOrderInput | SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
    details?: Order_DetailsOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    total_price?: BigIntFilter<"Order"> | bigint | number
    final_price?: BigIntFilter<"Order"> | bigint | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    redirect_url?: StringNullableFilter<"Order"> | string | null
    userId?: IntFilter<"Order"> | number
    eventId?: IntFilter<"Order"> | number
    expiredAt?: DateTimeFilter<"Order"> | Date | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    details?: Order_DetailsListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    total_price?: SortOrder
    final_price?: SortOrder
    status?: SortOrder
    redirect_url?: SortOrderInput | SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    total_price?: BigIntWithAggregatesFilter<"Order"> | bigint | number
    final_price?: BigIntWithAggregatesFilter<"Order"> | bigint | number
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    redirect_url?: StringNullableWithAggregatesFilter<"Order"> | string | null
    userId?: IntWithAggregatesFilter<"Order"> | number
    eventId?: IntWithAggregatesFilter<"Order"> | number
    expiredAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type Order_DetailsWhereInput = {
    AND?: Order_DetailsWhereInput | Order_DetailsWhereInput[]
    OR?: Order_DetailsWhereInput[]
    NOT?: Order_DetailsWhereInput | Order_DetailsWhereInput[]
    id?: IntFilter<"Order_Details"> | number
    ticketId?: IntFilter<"Order_Details"> | number
    qty?: IntFilter<"Order_Details"> | number
    orderId?: IntFilter<"Order_Details"> | number
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type Order_DetailsOrderByWithRelationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    qty?: SortOrder
    orderId?: SortOrder
    ticket?: TicketOrderByWithRelationInput
    order?: OrderOrderByWithRelationInput
  }

  export type Order_DetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Order_DetailsWhereInput | Order_DetailsWhereInput[]
    OR?: Order_DetailsWhereInput[]
    NOT?: Order_DetailsWhereInput | Order_DetailsWhereInput[]
    ticketId?: IntFilter<"Order_Details"> | number
    qty?: IntFilter<"Order_Details"> | number
    orderId?: IntFilter<"Order_Details"> | number
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id">

  export type Order_DetailsOrderByWithAggregationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    qty?: SortOrder
    orderId?: SortOrder
    _count?: Order_DetailsCountOrderByAggregateInput
    _avg?: Order_DetailsAvgOrderByAggregateInput
    _max?: Order_DetailsMaxOrderByAggregateInput
    _min?: Order_DetailsMinOrderByAggregateInput
    _sum?: Order_DetailsSumOrderByAggregateInput
  }

  export type Order_DetailsScalarWhereWithAggregatesInput = {
    AND?: Order_DetailsScalarWhereWithAggregatesInput | Order_DetailsScalarWhereWithAggregatesInput[]
    OR?: Order_DetailsScalarWhereWithAggregatesInput[]
    NOT?: Order_DetailsScalarWhereWithAggregatesInput | Order_DetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order_Details"> | number
    ticketId?: IntWithAggregatesFilter<"Order_Details"> | number
    qty?: IntWithAggregatesFilter<"Order_Details"> | number
    orderId?: IntWithAggregatesFilter<"Order_Details"> | number
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    desc?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    eventId?: IntFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    desc?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    desc?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    eventId?: IntFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    desc?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    desc?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    userId?: IntWithAggregatesFilter<"Review"> | number
    eventId?: IntWithAggregatesFilter<"Review"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: User_PointCreateNestedManyWithoutUserInput
    coupons?: User_CouponCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: User_PointUncheckedCreateNestedManyWithoutUserInput
    coupons?: User_CouponUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: User_PointUpdateManyWithoutUserNestedInput
    coupons?: User_CouponUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: User_PointUncheckedUpdateManyWithoutUserNestedInput
    coupons?: User_CouponUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_PointCreateInput = {
    point: number
    createdAt?: Date | string
    expiredAt: Date | string
    isRedeem?: boolean
    user: UserCreateNestedOneWithoutPointsInput
  }

  export type User_PointUncheckedCreateInput = {
    id?: number
    point: number
    createdAt?: Date | string
    expiredAt: Date | string
    isRedeem?: boolean
    userId: number
  }

  export type User_PointUpdateInput = {
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPointsNestedInput
  }

  export type User_PointUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type User_PointCreateManyInput = {
    id?: number
    point: number
    createdAt?: Date | string
    expiredAt: Date | string
    isRedeem?: boolean
    userId: number
  }

  export type User_PointUpdateManyMutationInput = {
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type User_PointUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type User_CouponCreateInput = {
    isRedeem?: boolean
    percentage: number
    createdAt?: Date | string
    expiredAt: Date | string
    user: UserCreateNestedOneWithoutCouponsInput
  }

  export type User_CouponUncheckedCreateInput = {
    id?: number
    isRedeem?: boolean
    percentage: number
    createdAt?: Date | string
    expiredAt: Date | string
    userId: number
  }

  export type User_CouponUpdateInput = {
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    percentage?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCouponsNestedInput
  }

  export type User_CouponUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    percentage?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type User_CouponCreateManyInput = {
    id?: number
    isRedeem?: boolean
    percentage: number
    createdAt?: Date | string
    expiredAt: Date | string
    userId: number
  }

  export type User_CouponUpdateManyMutationInput = {
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    percentage?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_CouponUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    percentage?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PromotorCreateInput = {
    name: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutPromotorInput
  }

  export type PromotorUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutPromotorInput
  }

  export type PromotorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutPromotorNestedInput
  }

  export type PromotorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutPromotorNestedInput
  }

  export type PromotorCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromotorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    title: string
    description: string
    slug: string
    category: $Enums.EventCategories
    location: string
    venue: string
    date: Date | string
    time: Date | string
    isActive?: boolean
    thumbnail: string
    createdAt?: Date | string
    updatedAt?: Date | string
    promotor: PromotorCreateNestedOneWithoutEventsInput
    tickets?: TicketCreateNestedManyWithoutEventInput
    reviews?: ReviewCreateNestedManyWithoutEventInput
    orders?: OrderCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    slug: string
    category: $Enums.EventCategories
    location: string
    venue: string
    date: Date | string
    time: Date | string
    isActive?: boolean
    thumbnail: string
    promotorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutEventInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutEventInput
    orders?: OrderUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoriesFieldUpdateOperationsInput | $Enums.EventCategories
    location?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    thumbnail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promotor?: PromotorUpdateOneRequiredWithoutEventsNestedInput
    tickets?: TicketUpdateManyWithoutEventNestedInput
    reviews?: ReviewUpdateManyWithoutEventNestedInput
    orders?: OrderUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoriesFieldUpdateOperationsInput | $Enums.EventCategories
    location?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    thumbnail?: StringFieldUpdateOperationsInput | string
    promotorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutEventNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutEventNestedInput
    orders?: OrderUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: number
    title: string
    description: string
    slug: string
    category: $Enums.EventCategories
    location: string
    venue: string
    date: Date | string
    time: Date | string
    isActive?: boolean
    thumbnail: string
    promotorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoriesFieldUpdateOperationsInput | $Enums.EventCategories
    location?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    thumbnail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoriesFieldUpdateOperationsInput | $Enums.EventCategories
    location?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    thumbnail?: StringFieldUpdateOperationsInput | string
    promotorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateInput = {
    title: string
    desc: string
    price: bigint | number
    available: number
    totalSeats: number
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutTicketsInput
    orderDetails?: Order_DetailsCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    id?: number
    title: string
    desc: string
    price: bigint | number
    available: number
    totalSeats: number
    eventId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orderDetails?: Order_DetailsUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    available?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutTicketsNestedInput
    orderDetails?: Order_DetailsUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    available?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderDetails?: Order_DetailsUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: number
    title: string
    desc: string
    price: bigint | number
    available: number
    totalSeats: number
    eventId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    available?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    available?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    total_price: bigint | number
    final_price: bigint | number
    status?: $Enums.OrderStatus
    redirect_url?: string | null
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    event: EventCreateNestedOneWithoutOrdersInput
    details?: Order_DetailsCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    total_price: bigint | number
    final_price: bigint | number
    status?: $Enums.OrderStatus
    redirect_url?: string | null
    userId: number
    eventId: number
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    details?: Order_DetailsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    total_price?: BigIntFieldUpdateOperationsInput | bigint | number
    final_price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    event?: EventUpdateOneRequiredWithoutOrdersNestedInput
    details?: Order_DetailsUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_price?: BigIntFieldUpdateOperationsInput | bigint | number
    final_price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: Order_DetailsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    total_price: bigint | number
    final_price: bigint | number
    status?: $Enums.OrderStatus
    redirect_url?: string | null
    userId: number
    eventId: number
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    total_price?: BigIntFieldUpdateOperationsInput | bigint | number
    final_price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_price?: BigIntFieldUpdateOperationsInput | bigint | number
    final_price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Order_DetailsCreateInput = {
    qty: number
    ticket: TicketCreateNestedOneWithoutOrderDetailsInput
    order: OrderCreateNestedOneWithoutDetailsInput
  }

  export type Order_DetailsUncheckedCreateInput = {
    id?: number
    ticketId: number
    qty: number
    orderId: number
  }

  export type Order_DetailsUpdateInput = {
    qty?: IntFieldUpdateOperationsInput | number
    ticket?: TicketUpdateOneRequiredWithoutOrderDetailsNestedInput
    order?: OrderUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type Order_DetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type Order_DetailsCreateManyInput = {
    id?: number
    ticketId: number
    qty: number
    orderId: number
  }

  export type Order_DetailsUpdateManyMutationInput = {
    qty?: IntFieldUpdateOperationsInput | number
  }

  export type Order_DetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewCreateInput = {
    desc: string
    rating: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    event: EventCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    desc: string
    rating: number
    userId: number
    eventId: number
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    desc?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    event?: EventUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: number
    desc: string
    rating: number
    userId: number
    eventId: number
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    desc?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type User_PointListRelationFilter = {
    every?: User_PointWhereInput
    some?: User_PointWhereInput
    none?: User_PointWhereInput
  }

  export type User_CouponListRelationFilter = {
    every?: User_CouponWhereInput
    some?: User_CouponWhereInput
    none?: User_CouponWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type User_PointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type User_CouponOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
    ref_code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
    ref_code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
    ref_code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type User_PointCountOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    isRedeem?: SortOrder
    userId?: SortOrder
  }

  export type User_PointAvgOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
    userId?: SortOrder
  }

  export type User_PointMaxOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    isRedeem?: SortOrder
    userId?: SortOrder
  }

  export type User_PointMinOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    isRedeem?: SortOrder
    userId?: SortOrder
  }

  export type User_PointSumOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
    userId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type User_CouponCountOrderByAggregateInput = {
    id?: SortOrder
    isRedeem?: SortOrder
    percentage?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    userId?: SortOrder
  }

  export type User_CouponAvgOrderByAggregateInput = {
    id?: SortOrder
    percentage?: SortOrder
    userId?: SortOrder
  }

  export type User_CouponMaxOrderByAggregateInput = {
    id?: SortOrder
    isRedeem?: SortOrder
    percentage?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    userId?: SortOrder
  }

  export type User_CouponMinOrderByAggregateInput = {
    id?: SortOrder
    isRedeem?: SortOrder
    percentage?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    userId?: SortOrder
  }

  export type User_CouponSumOrderByAggregateInput = {
    id?: SortOrder
    percentage?: SortOrder
    userId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromotorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromotorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PromotorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromotorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromotorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumEventCategoriesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventCategories | EnumEventCategoriesFieldRefInput<$PrismaModel>
    in?: $Enums.EventCategories[] | ListEnumEventCategoriesFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventCategories[] | ListEnumEventCategoriesFieldRefInput<$PrismaModel>
    not?: NestedEnumEventCategoriesFilter<$PrismaModel> | $Enums.EventCategories
  }

  export type PromotorScalarRelationFilter = {
    is?: PromotorWhereInput
    isNot?: PromotorWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    date?: SortOrder
    time?: SortOrder
    isActive?: SortOrder
    thumbnail?: SortOrder
    promotorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
    promotorId?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    date?: SortOrder
    time?: SortOrder
    isActive?: SortOrder
    thumbnail?: SortOrder
    promotorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    date?: SortOrder
    time?: SortOrder
    isActive?: SortOrder
    thumbnail?: SortOrder
    promotorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
    promotorId?: SortOrder
  }

  export type EnumEventCategoriesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventCategories | EnumEventCategoriesFieldRefInput<$PrismaModel>
    in?: $Enums.EventCategories[] | ListEnumEventCategoriesFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventCategories[] | ListEnumEventCategoriesFieldRefInput<$PrismaModel>
    not?: NestedEnumEventCategoriesWithAggregatesFilter<$PrismaModel> | $Enums.EventCategories
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventCategoriesFilter<$PrismaModel>
    _max?: NestedEnumEventCategoriesFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type Order_DetailsListRelationFilter = {
    every?: Order_DetailsWhereInput
    some?: Order_DetailsWhereInput
    none?: Order_DetailsWhereInput
  }

  export type Order_DetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    price?: SortOrder
    available?: SortOrder
    totalSeats?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    available?: SortOrder
    totalSeats?: SortOrder
    eventId?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    price?: SortOrder
    available?: SortOrder
    totalSeats?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    price?: SortOrder
    available?: SortOrder
    totalSeats?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    available?: SortOrder
    totalSeats?: SortOrder
    eventId?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    total_price?: SortOrder
    final_price?: SortOrder
    status?: SortOrder
    redirect_url?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    total_price?: SortOrder
    final_price?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    total_price?: SortOrder
    final_price?: SortOrder
    status?: SortOrder
    redirect_url?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    total_price?: SortOrder
    final_price?: SortOrder
    status?: SortOrder
    redirect_url?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    total_price?: SortOrder
    final_price?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type TicketScalarRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type Order_DetailsCountOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    qty?: SortOrder
    orderId?: SortOrder
  }

  export type Order_DetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    qty?: SortOrder
    orderId?: SortOrder
  }

  export type Order_DetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    qty?: SortOrder
    orderId?: SortOrder
  }

  export type Order_DetailsMinOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    qty?: SortOrder
    orderId?: SortOrder
  }

  export type Order_DetailsSumOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    qty?: SortOrder
    orderId?: SortOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    desc?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    desc?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    desc?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type User_PointCreateNestedManyWithoutUserInput = {
    create?: XOR<User_PointCreateWithoutUserInput, User_PointUncheckedCreateWithoutUserInput> | User_PointCreateWithoutUserInput[] | User_PointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: User_PointCreateOrConnectWithoutUserInput | User_PointCreateOrConnectWithoutUserInput[]
    createMany?: User_PointCreateManyUserInputEnvelope
    connect?: User_PointWhereUniqueInput | User_PointWhereUniqueInput[]
  }

  export type User_CouponCreateNestedManyWithoutUserInput = {
    create?: XOR<User_CouponCreateWithoutUserInput, User_CouponUncheckedCreateWithoutUserInput> | User_CouponCreateWithoutUserInput[] | User_CouponUncheckedCreateWithoutUserInput[]
    connectOrCreate?: User_CouponCreateOrConnectWithoutUserInput | User_CouponCreateOrConnectWithoutUserInput[]
    createMany?: User_CouponCreateManyUserInputEnvelope
    connect?: User_CouponWhereUniqueInput | User_CouponWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type User_PointUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<User_PointCreateWithoutUserInput, User_PointUncheckedCreateWithoutUserInput> | User_PointCreateWithoutUserInput[] | User_PointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: User_PointCreateOrConnectWithoutUserInput | User_PointCreateOrConnectWithoutUserInput[]
    createMany?: User_PointCreateManyUserInputEnvelope
    connect?: User_PointWhereUniqueInput | User_PointWhereUniqueInput[]
  }

  export type User_CouponUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<User_CouponCreateWithoutUserInput, User_CouponUncheckedCreateWithoutUserInput> | User_CouponCreateWithoutUserInput[] | User_CouponUncheckedCreateWithoutUserInput[]
    connectOrCreate?: User_CouponCreateOrConnectWithoutUserInput | User_CouponCreateOrConnectWithoutUserInput[]
    createMany?: User_CouponCreateManyUserInputEnvelope
    connect?: User_CouponWhereUniqueInput | User_CouponWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type User_PointUpdateManyWithoutUserNestedInput = {
    create?: XOR<User_PointCreateWithoutUserInput, User_PointUncheckedCreateWithoutUserInput> | User_PointCreateWithoutUserInput[] | User_PointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: User_PointCreateOrConnectWithoutUserInput | User_PointCreateOrConnectWithoutUserInput[]
    upsert?: User_PointUpsertWithWhereUniqueWithoutUserInput | User_PointUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: User_PointCreateManyUserInputEnvelope
    set?: User_PointWhereUniqueInput | User_PointWhereUniqueInput[]
    disconnect?: User_PointWhereUniqueInput | User_PointWhereUniqueInput[]
    delete?: User_PointWhereUniqueInput | User_PointWhereUniqueInput[]
    connect?: User_PointWhereUniqueInput | User_PointWhereUniqueInput[]
    update?: User_PointUpdateWithWhereUniqueWithoutUserInput | User_PointUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: User_PointUpdateManyWithWhereWithoutUserInput | User_PointUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: User_PointScalarWhereInput | User_PointScalarWhereInput[]
  }

  export type User_CouponUpdateManyWithoutUserNestedInput = {
    create?: XOR<User_CouponCreateWithoutUserInput, User_CouponUncheckedCreateWithoutUserInput> | User_CouponCreateWithoutUserInput[] | User_CouponUncheckedCreateWithoutUserInput[]
    connectOrCreate?: User_CouponCreateOrConnectWithoutUserInput | User_CouponCreateOrConnectWithoutUserInput[]
    upsert?: User_CouponUpsertWithWhereUniqueWithoutUserInput | User_CouponUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: User_CouponCreateManyUserInputEnvelope
    set?: User_CouponWhereUniqueInput | User_CouponWhereUniqueInput[]
    disconnect?: User_CouponWhereUniqueInput | User_CouponWhereUniqueInput[]
    delete?: User_CouponWhereUniqueInput | User_CouponWhereUniqueInput[]
    connect?: User_CouponWhereUniqueInput | User_CouponWhereUniqueInput[]
    update?: User_CouponUpdateWithWhereUniqueWithoutUserInput | User_CouponUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: User_CouponUpdateManyWithWhereWithoutUserInput | User_CouponUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: User_CouponScalarWhereInput | User_CouponScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type User_PointUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<User_PointCreateWithoutUserInput, User_PointUncheckedCreateWithoutUserInput> | User_PointCreateWithoutUserInput[] | User_PointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: User_PointCreateOrConnectWithoutUserInput | User_PointCreateOrConnectWithoutUserInput[]
    upsert?: User_PointUpsertWithWhereUniqueWithoutUserInput | User_PointUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: User_PointCreateManyUserInputEnvelope
    set?: User_PointWhereUniqueInput | User_PointWhereUniqueInput[]
    disconnect?: User_PointWhereUniqueInput | User_PointWhereUniqueInput[]
    delete?: User_PointWhereUniqueInput | User_PointWhereUniqueInput[]
    connect?: User_PointWhereUniqueInput | User_PointWhereUniqueInput[]
    update?: User_PointUpdateWithWhereUniqueWithoutUserInput | User_PointUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: User_PointUpdateManyWithWhereWithoutUserInput | User_PointUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: User_PointScalarWhereInput | User_PointScalarWhereInput[]
  }

  export type User_CouponUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<User_CouponCreateWithoutUserInput, User_CouponUncheckedCreateWithoutUserInput> | User_CouponCreateWithoutUserInput[] | User_CouponUncheckedCreateWithoutUserInput[]
    connectOrCreate?: User_CouponCreateOrConnectWithoutUserInput | User_CouponCreateOrConnectWithoutUserInput[]
    upsert?: User_CouponUpsertWithWhereUniqueWithoutUserInput | User_CouponUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: User_CouponCreateManyUserInputEnvelope
    set?: User_CouponWhereUniqueInput | User_CouponWhereUniqueInput[]
    disconnect?: User_CouponWhereUniqueInput | User_CouponWhereUniqueInput[]
    delete?: User_CouponWhereUniqueInput | User_CouponWhereUniqueInput[]
    connect?: User_CouponWhereUniqueInput | User_CouponWhereUniqueInput[]
    update?: User_CouponUpdateWithWhereUniqueWithoutUserInput | User_CouponUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: User_CouponUpdateManyWithWhereWithoutUserInput | User_CouponUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: User_CouponScalarWhereInput | User_CouponScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPointsInput = {
    create?: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPointsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPointsNestedInput = {
    create?: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPointsInput
    upsert?: UserUpsertWithoutPointsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPointsInput, UserUpdateWithoutPointsInput>, UserUncheckedUpdateWithoutPointsInput>
  }

  export type UserCreateNestedOneWithoutCouponsInput = {
    create?: XOR<UserCreateWithoutCouponsInput, UserUncheckedCreateWithoutCouponsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCouponsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutCouponsNestedInput = {
    create?: XOR<UserCreateWithoutCouponsInput, UserUncheckedCreateWithoutCouponsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCouponsInput
    upsert?: UserUpsertWithoutCouponsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCouponsInput, UserUpdateWithoutCouponsInput>, UserUncheckedUpdateWithoutCouponsInput>
  }

  export type EventCreateNestedManyWithoutPromotorInput = {
    create?: XOR<EventCreateWithoutPromotorInput, EventUncheckedCreateWithoutPromotorInput> | EventCreateWithoutPromotorInput[] | EventUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutPromotorInput | EventCreateOrConnectWithoutPromotorInput[]
    createMany?: EventCreateManyPromotorInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutPromotorInput = {
    create?: XOR<EventCreateWithoutPromotorInput, EventUncheckedCreateWithoutPromotorInput> | EventCreateWithoutPromotorInput[] | EventUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutPromotorInput | EventCreateOrConnectWithoutPromotorInput[]
    createMany?: EventCreateManyPromotorInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUpdateManyWithoutPromotorNestedInput = {
    create?: XOR<EventCreateWithoutPromotorInput, EventUncheckedCreateWithoutPromotorInput> | EventCreateWithoutPromotorInput[] | EventUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutPromotorInput | EventCreateOrConnectWithoutPromotorInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutPromotorInput | EventUpsertWithWhereUniqueWithoutPromotorInput[]
    createMany?: EventCreateManyPromotorInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutPromotorInput | EventUpdateWithWhereUniqueWithoutPromotorInput[]
    updateMany?: EventUpdateManyWithWhereWithoutPromotorInput | EventUpdateManyWithWhereWithoutPromotorInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutPromotorNestedInput = {
    create?: XOR<EventCreateWithoutPromotorInput, EventUncheckedCreateWithoutPromotorInput> | EventCreateWithoutPromotorInput[] | EventUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutPromotorInput | EventCreateOrConnectWithoutPromotorInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutPromotorInput | EventUpsertWithWhereUniqueWithoutPromotorInput[]
    createMany?: EventCreateManyPromotorInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutPromotorInput | EventUpdateWithWhereUniqueWithoutPromotorInput[]
    updateMany?: EventUpdateManyWithWhereWithoutPromotorInput | EventUpdateManyWithWhereWithoutPromotorInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type PromotorCreateNestedOneWithoutEventsInput = {
    create?: XOR<PromotorCreateWithoutEventsInput, PromotorUncheckedCreateWithoutEventsInput>
    connectOrCreate?: PromotorCreateOrConnectWithoutEventsInput
    connect?: PromotorWhereUniqueInput
  }

  export type TicketCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutEventInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutEventInput = {
    create?: XOR<OrderCreateWithoutEventInput, OrderUncheckedCreateWithoutEventInput> | OrderCreateWithoutEventInput[] | OrderUncheckedCreateWithoutEventInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutEventInput | OrderCreateOrConnectWithoutEventInput[]
    createMany?: OrderCreateManyEventInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<OrderCreateWithoutEventInput, OrderUncheckedCreateWithoutEventInput> | OrderCreateWithoutEventInput[] | OrderUncheckedCreateWithoutEventInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutEventInput | OrderCreateOrConnectWithoutEventInput[]
    createMany?: OrderCreateManyEventInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type EnumEventCategoriesFieldUpdateOperationsInput = {
    set?: $Enums.EventCategories
  }

  export type PromotorUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<PromotorCreateWithoutEventsInput, PromotorUncheckedCreateWithoutEventsInput>
    connectOrCreate?: PromotorCreateOrConnectWithoutEventsInput
    upsert?: PromotorUpsertWithoutEventsInput
    connect?: PromotorWhereUniqueInput
    update?: XOR<XOR<PromotorUpdateToOneWithWhereWithoutEventsInput, PromotorUpdateWithoutEventsInput>, PromotorUncheckedUpdateWithoutEventsInput>
  }

  export type TicketUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutEventInput | TicketUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutEventInput | TicketUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutEventInput | TicketUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutEventNestedInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutEventInput | ReviewUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutEventInput | ReviewUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutEventInput | ReviewUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutEventNestedInput = {
    create?: XOR<OrderCreateWithoutEventInput, OrderUncheckedCreateWithoutEventInput> | OrderCreateWithoutEventInput[] | OrderUncheckedCreateWithoutEventInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutEventInput | OrderCreateOrConnectWithoutEventInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutEventInput | OrderUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: OrderCreateManyEventInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutEventInput | OrderUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutEventInput | OrderUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutEventInput | TicketUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutEventInput | TicketUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutEventInput | TicketUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutEventInput | ReviewUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutEventInput | ReviewUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutEventInput | ReviewUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<OrderCreateWithoutEventInput, OrderUncheckedCreateWithoutEventInput> | OrderCreateWithoutEventInput[] | OrderUncheckedCreateWithoutEventInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutEventInput | OrderCreateOrConnectWithoutEventInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutEventInput | OrderUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: OrderCreateManyEventInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutEventInput | OrderUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutEventInput | OrderUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutTicketsInput = {
    create?: XOR<EventCreateWithoutTicketsInput, EventUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketsInput
    connect?: EventWhereUniqueInput
  }

  export type Order_DetailsCreateNestedManyWithoutTicketInput = {
    create?: XOR<Order_DetailsCreateWithoutTicketInput, Order_DetailsUncheckedCreateWithoutTicketInput> | Order_DetailsCreateWithoutTicketInput[] | Order_DetailsUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: Order_DetailsCreateOrConnectWithoutTicketInput | Order_DetailsCreateOrConnectWithoutTicketInput[]
    createMany?: Order_DetailsCreateManyTicketInputEnvelope
    connect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
  }

  export type Order_DetailsUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<Order_DetailsCreateWithoutTicketInput, Order_DetailsUncheckedCreateWithoutTicketInput> | Order_DetailsCreateWithoutTicketInput[] | Order_DetailsUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: Order_DetailsCreateOrConnectWithoutTicketInput | Order_DetailsCreateOrConnectWithoutTicketInput[]
    createMany?: Order_DetailsCreateManyTicketInputEnvelope
    connect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EventUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<EventCreateWithoutTicketsInput, EventUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketsInput
    upsert?: EventUpsertWithoutTicketsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTicketsInput, EventUpdateWithoutTicketsInput>, EventUncheckedUpdateWithoutTicketsInput>
  }

  export type Order_DetailsUpdateManyWithoutTicketNestedInput = {
    create?: XOR<Order_DetailsCreateWithoutTicketInput, Order_DetailsUncheckedCreateWithoutTicketInput> | Order_DetailsCreateWithoutTicketInput[] | Order_DetailsUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: Order_DetailsCreateOrConnectWithoutTicketInput | Order_DetailsCreateOrConnectWithoutTicketInput[]
    upsert?: Order_DetailsUpsertWithWhereUniqueWithoutTicketInput | Order_DetailsUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: Order_DetailsCreateManyTicketInputEnvelope
    set?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    disconnect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    delete?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    connect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    update?: Order_DetailsUpdateWithWhereUniqueWithoutTicketInput | Order_DetailsUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: Order_DetailsUpdateManyWithWhereWithoutTicketInput | Order_DetailsUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: Order_DetailsScalarWhereInput | Order_DetailsScalarWhereInput[]
  }

  export type Order_DetailsUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<Order_DetailsCreateWithoutTicketInput, Order_DetailsUncheckedCreateWithoutTicketInput> | Order_DetailsCreateWithoutTicketInput[] | Order_DetailsUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: Order_DetailsCreateOrConnectWithoutTicketInput | Order_DetailsCreateOrConnectWithoutTicketInput[]
    upsert?: Order_DetailsUpsertWithWhereUniqueWithoutTicketInput | Order_DetailsUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: Order_DetailsCreateManyTicketInputEnvelope
    set?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    disconnect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    delete?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    connect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    update?: Order_DetailsUpdateWithWhereUniqueWithoutTicketInput | Order_DetailsUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: Order_DetailsUpdateManyWithWhereWithoutTicketInput | Order_DetailsUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: Order_DetailsScalarWhereInput | Order_DetailsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutOrdersInput = {
    create?: XOR<EventCreateWithoutOrdersInput, EventUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: EventCreateOrConnectWithoutOrdersInput
    connect?: EventWhereUniqueInput
  }

  export type Order_DetailsCreateNestedManyWithoutOrderInput = {
    create?: XOR<Order_DetailsCreateWithoutOrderInput, Order_DetailsUncheckedCreateWithoutOrderInput> | Order_DetailsCreateWithoutOrderInput[] | Order_DetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: Order_DetailsCreateOrConnectWithoutOrderInput | Order_DetailsCreateOrConnectWithoutOrderInput[]
    createMany?: Order_DetailsCreateManyOrderInputEnvelope
    connect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
  }

  export type Order_DetailsUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<Order_DetailsCreateWithoutOrderInput, Order_DetailsUncheckedCreateWithoutOrderInput> | Order_DetailsCreateWithoutOrderInput[] | Order_DetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: Order_DetailsCreateOrConnectWithoutOrderInput | Order_DetailsCreateOrConnectWithoutOrderInput[]
    createMany?: Order_DetailsCreateManyOrderInputEnvelope
    connect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type EventUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<EventCreateWithoutOrdersInput, EventUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: EventCreateOrConnectWithoutOrdersInput
    upsert?: EventUpsertWithoutOrdersInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutOrdersInput, EventUpdateWithoutOrdersInput>, EventUncheckedUpdateWithoutOrdersInput>
  }

  export type Order_DetailsUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Order_DetailsCreateWithoutOrderInput, Order_DetailsUncheckedCreateWithoutOrderInput> | Order_DetailsCreateWithoutOrderInput[] | Order_DetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: Order_DetailsCreateOrConnectWithoutOrderInput | Order_DetailsCreateOrConnectWithoutOrderInput[]
    upsert?: Order_DetailsUpsertWithWhereUniqueWithoutOrderInput | Order_DetailsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: Order_DetailsCreateManyOrderInputEnvelope
    set?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    disconnect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    delete?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    connect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    update?: Order_DetailsUpdateWithWhereUniqueWithoutOrderInput | Order_DetailsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: Order_DetailsUpdateManyWithWhereWithoutOrderInput | Order_DetailsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: Order_DetailsScalarWhereInput | Order_DetailsScalarWhereInput[]
  }

  export type Order_DetailsUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Order_DetailsCreateWithoutOrderInput, Order_DetailsUncheckedCreateWithoutOrderInput> | Order_DetailsCreateWithoutOrderInput[] | Order_DetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: Order_DetailsCreateOrConnectWithoutOrderInput | Order_DetailsCreateOrConnectWithoutOrderInput[]
    upsert?: Order_DetailsUpsertWithWhereUniqueWithoutOrderInput | Order_DetailsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: Order_DetailsCreateManyOrderInputEnvelope
    set?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    disconnect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    delete?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    connect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    update?: Order_DetailsUpdateWithWhereUniqueWithoutOrderInput | Order_DetailsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: Order_DetailsUpdateManyWithWhereWithoutOrderInput | Order_DetailsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: Order_DetailsScalarWhereInput | Order_DetailsScalarWhereInput[]
  }

  export type TicketCreateNestedOneWithoutOrderDetailsInput = {
    create?: XOR<TicketCreateWithoutOrderDetailsInput, TicketUncheckedCreateWithoutOrderDetailsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutOrderDetailsInput
    connect?: TicketWhereUniqueInput
  }

  export type OrderCreateNestedOneWithoutDetailsInput = {
    create?: XOR<OrderCreateWithoutDetailsInput, OrderUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutDetailsInput
    connect?: OrderWhereUniqueInput
  }

  export type TicketUpdateOneRequiredWithoutOrderDetailsNestedInput = {
    create?: XOR<TicketCreateWithoutOrderDetailsInput, TicketUncheckedCreateWithoutOrderDetailsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutOrderDetailsInput
    upsert?: TicketUpsertWithoutOrderDetailsInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutOrderDetailsInput, TicketUpdateWithoutOrderDetailsInput>, TicketUncheckedUpdateWithoutOrderDetailsInput>
  }

  export type OrderUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<OrderCreateWithoutDetailsInput, OrderUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutDetailsInput
    upsert?: OrderUpsertWithoutDetailsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutDetailsInput, OrderUpdateWithoutDetailsInput>, OrderUncheckedUpdateWithoutDetailsInput>
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutReviewsInput = {
    create?: XOR<EventCreateWithoutReviewsInput, EventUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: EventCreateOrConnectWithoutReviewsInput
    connect?: EventWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type EventUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<EventCreateWithoutReviewsInput, EventUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: EventCreateOrConnectWithoutReviewsInput
    upsert?: EventUpsertWithoutReviewsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutReviewsInput, EventUpdateWithoutReviewsInput>, EventUncheckedUpdateWithoutReviewsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumEventCategoriesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventCategories | EnumEventCategoriesFieldRefInput<$PrismaModel>
    in?: $Enums.EventCategories[] | ListEnumEventCategoriesFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventCategories[] | ListEnumEventCategoriesFieldRefInput<$PrismaModel>
    not?: NestedEnumEventCategoriesFilter<$PrismaModel> | $Enums.EventCategories
  }

  export type NestedEnumEventCategoriesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventCategories | EnumEventCategoriesFieldRefInput<$PrismaModel>
    in?: $Enums.EventCategories[] | ListEnumEventCategoriesFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventCategories[] | ListEnumEventCategoriesFieldRefInput<$PrismaModel>
    not?: NestedEnumEventCategoriesWithAggregatesFilter<$PrismaModel> | $Enums.EventCategories
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventCategoriesFilter<$PrismaModel>
    _max?: NestedEnumEventCategoriesFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type User_PointCreateWithoutUserInput = {
    point: number
    createdAt?: Date | string
    expiredAt: Date | string
    isRedeem?: boolean
  }

  export type User_PointUncheckedCreateWithoutUserInput = {
    id?: number
    point: number
    createdAt?: Date | string
    expiredAt: Date | string
    isRedeem?: boolean
  }

  export type User_PointCreateOrConnectWithoutUserInput = {
    where: User_PointWhereUniqueInput
    create: XOR<User_PointCreateWithoutUserInput, User_PointUncheckedCreateWithoutUserInput>
  }

  export type User_PointCreateManyUserInputEnvelope = {
    data: User_PointCreateManyUserInput | User_PointCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type User_CouponCreateWithoutUserInput = {
    isRedeem?: boolean
    percentage: number
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type User_CouponUncheckedCreateWithoutUserInput = {
    id?: number
    isRedeem?: boolean
    percentage: number
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type User_CouponCreateOrConnectWithoutUserInput = {
    where: User_CouponWhereUniqueInput
    create: XOR<User_CouponCreateWithoutUserInput, User_CouponUncheckedCreateWithoutUserInput>
  }

  export type User_CouponCreateManyUserInputEnvelope = {
    data: User_CouponCreateManyUserInput | User_CouponCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    desc: string
    rating: number
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    desc: string
    rating: number
    eventId: number
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutUserInput = {
    total_price: bigint | number
    final_price: bigint | number
    status?: $Enums.OrderStatus
    redirect_url?: string | null
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutOrdersInput
    details?: Order_DetailsCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: number
    total_price: bigint | number
    final_price: bigint | number
    status?: $Enums.OrderStatus
    redirect_url?: string | null
    eventId: number
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    details?: Order_DetailsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type User_PointUpsertWithWhereUniqueWithoutUserInput = {
    where: User_PointWhereUniqueInput
    update: XOR<User_PointUpdateWithoutUserInput, User_PointUncheckedUpdateWithoutUserInput>
    create: XOR<User_PointCreateWithoutUserInput, User_PointUncheckedCreateWithoutUserInput>
  }

  export type User_PointUpdateWithWhereUniqueWithoutUserInput = {
    where: User_PointWhereUniqueInput
    data: XOR<User_PointUpdateWithoutUserInput, User_PointUncheckedUpdateWithoutUserInput>
  }

  export type User_PointUpdateManyWithWhereWithoutUserInput = {
    where: User_PointScalarWhereInput
    data: XOR<User_PointUpdateManyMutationInput, User_PointUncheckedUpdateManyWithoutUserInput>
  }

  export type User_PointScalarWhereInput = {
    AND?: User_PointScalarWhereInput | User_PointScalarWhereInput[]
    OR?: User_PointScalarWhereInput[]
    NOT?: User_PointScalarWhereInput | User_PointScalarWhereInput[]
    id?: IntFilter<"User_Point"> | number
    point?: IntFilter<"User_Point"> | number
    createdAt?: DateTimeFilter<"User_Point"> | Date | string
    expiredAt?: DateTimeFilter<"User_Point"> | Date | string
    isRedeem?: BoolFilter<"User_Point"> | boolean
    userId?: IntFilter<"User_Point"> | number
  }

  export type User_CouponUpsertWithWhereUniqueWithoutUserInput = {
    where: User_CouponWhereUniqueInput
    update: XOR<User_CouponUpdateWithoutUserInput, User_CouponUncheckedUpdateWithoutUserInput>
    create: XOR<User_CouponCreateWithoutUserInput, User_CouponUncheckedCreateWithoutUserInput>
  }

  export type User_CouponUpdateWithWhereUniqueWithoutUserInput = {
    where: User_CouponWhereUniqueInput
    data: XOR<User_CouponUpdateWithoutUserInput, User_CouponUncheckedUpdateWithoutUserInput>
  }

  export type User_CouponUpdateManyWithWhereWithoutUserInput = {
    where: User_CouponScalarWhereInput
    data: XOR<User_CouponUpdateManyMutationInput, User_CouponUncheckedUpdateManyWithoutUserInput>
  }

  export type User_CouponScalarWhereInput = {
    AND?: User_CouponScalarWhereInput | User_CouponScalarWhereInput[]
    OR?: User_CouponScalarWhereInput[]
    NOT?: User_CouponScalarWhereInput | User_CouponScalarWhereInput[]
    id?: IntFilter<"User_Coupon"> | number
    isRedeem?: BoolFilter<"User_Coupon"> | boolean
    percentage?: FloatFilter<"User_Coupon"> | number
    createdAt?: DateTimeFilter<"User_Coupon"> | Date | string
    expiredAt?: DateTimeFilter<"User_Coupon"> | Date | string
    userId?: IntFilter<"User_Coupon"> | number
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    desc?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    eventId?: IntFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    total_price?: BigIntFilter<"Order"> | bigint | number
    final_price?: BigIntFilter<"Order"> | bigint | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    redirect_url?: StringNullableFilter<"Order"> | string | null
    userId?: IntFilter<"Order"> | number
    eventId?: IntFilter<"Order"> | number
    expiredAt?: DateTimeFilter<"Order"> | Date | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type UserCreateWithoutPointsInput = {
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coupons?: User_CouponCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPointsInput = {
    id?: number
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coupons?: User_CouponUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPointsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
  }

  export type UserUpsertWithoutPointsInput = {
    update: XOR<UserUpdateWithoutPointsInput, UserUncheckedUpdateWithoutPointsInput>
    create: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPointsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPointsInput, UserUncheckedUpdateWithoutPointsInput>
  }

  export type UserUpdateWithoutPointsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coupons?: User_CouponUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coupons?: User_CouponUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCouponsInput = {
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: User_PointCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCouponsInput = {
    id?: number
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: User_PointUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCouponsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCouponsInput, UserUncheckedCreateWithoutCouponsInput>
  }

  export type UserUpsertWithoutCouponsInput = {
    update: XOR<UserUpdateWithoutCouponsInput, UserUncheckedUpdateWithoutCouponsInput>
    create: XOR<UserCreateWithoutCouponsInput, UserUncheckedCreateWithoutCouponsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCouponsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCouponsInput, UserUncheckedUpdateWithoutCouponsInput>
  }

  export type UserUpdateWithoutCouponsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: User_PointUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCouponsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: User_PointUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventCreateWithoutPromotorInput = {
    title: string
    description: string
    slug: string
    category: $Enums.EventCategories
    location: string
    venue: string
    date: Date | string
    time: Date | string
    isActive?: boolean
    thumbnail: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketCreateNestedManyWithoutEventInput
    reviews?: ReviewCreateNestedManyWithoutEventInput
    orders?: OrderCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutPromotorInput = {
    id?: number
    title: string
    description: string
    slug: string
    category: $Enums.EventCategories
    location: string
    venue: string
    date: Date | string
    time: Date | string
    isActive?: boolean
    thumbnail: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutEventInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutEventInput
    orders?: OrderUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutPromotorInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutPromotorInput, EventUncheckedCreateWithoutPromotorInput>
  }

  export type EventCreateManyPromotorInputEnvelope = {
    data: EventCreateManyPromotorInput | EventCreateManyPromotorInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutPromotorInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutPromotorInput, EventUncheckedUpdateWithoutPromotorInput>
    create: XOR<EventCreateWithoutPromotorInput, EventUncheckedCreateWithoutPromotorInput>
  }

  export type EventUpdateWithWhereUniqueWithoutPromotorInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutPromotorInput, EventUncheckedUpdateWithoutPromotorInput>
  }

  export type EventUpdateManyWithWhereWithoutPromotorInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutPromotorInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    slug?: StringFilter<"Event"> | string
    category?: EnumEventCategoriesFilter<"Event"> | $Enums.EventCategories
    location?: StringFilter<"Event"> | string
    venue?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    time?: DateTimeFilter<"Event"> | Date | string
    isActive?: BoolFilter<"Event"> | boolean
    thumbnail?: StringFilter<"Event"> | string
    promotorId?: IntFilter<"Event"> | number
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type PromotorCreateWithoutEventsInput = {
    name: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromotorUncheckedCreateWithoutEventsInput = {
    id?: number
    name: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromotorCreateOrConnectWithoutEventsInput = {
    where: PromotorWhereUniqueInput
    create: XOR<PromotorCreateWithoutEventsInput, PromotorUncheckedCreateWithoutEventsInput>
  }

  export type TicketCreateWithoutEventInput = {
    title: string
    desc: string
    price: bigint | number
    available: number
    totalSeats: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orderDetails?: Order_DetailsCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutEventInput = {
    id?: number
    title: string
    desc: string
    price: bigint | number
    available: number
    totalSeats: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orderDetails?: Order_DetailsUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutEventInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput>
  }

  export type TicketCreateManyEventInputEnvelope = {
    data: TicketCreateManyEventInput | TicketCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutEventInput = {
    desc: string
    rating: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutEventInput = {
    id?: number
    desc: string
    rating: number
    userId: number
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutEventInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput>
  }

  export type ReviewCreateManyEventInputEnvelope = {
    data: ReviewCreateManyEventInput | ReviewCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutEventInput = {
    total_price: bigint | number
    final_price: bigint | number
    status?: $Enums.OrderStatus
    redirect_url?: string | null
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    details?: Order_DetailsCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutEventInput = {
    id?: number
    total_price: bigint | number
    final_price: bigint | number
    status?: $Enums.OrderStatus
    redirect_url?: string | null
    userId: number
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    details?: Order_DetailsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutEventInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutEventInput, OrderUncheckedCreateWithoutEventInput>
  }

  export type OrderCreateManyEventInputEnvelope = {
    data: OrderCreateManyEventInput | OrderCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type PromotorUpsertWithoutEventsInput = {
    update: XOR<PromotorUpdateWithoutEventsInput, PromotorUncheckedUpdateWithoutEventsInput>
    create: XOR<PromotorCreateWithoutEventsInput, PromotorUncheckedCreateWithoutEventsInput>
    where?: PromotorWhereInput
  }

  export type PromotorUpdateToOneWithWhereWithoutEventsInput = {
    where?: PromotorWhereInput
    data: XOR<PromotorUpdateWithoutEventsInput, PromotorUncheckedUpdateWithoutEventsInput>
  }

  export type PromotorUpdateWithoutEventsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotorUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpsertWithWhereUniqueWithoutEventInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutEventInput, TicketUncheckedUpdateWithoutEventInput>
    create: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutEventInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutEventInput, TicketUncheckedUpdateWithoutEventInput>
  }

  export type TicketUpdateManyWithWhereWithoutEventInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutEventInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: IntFilter<"Ticket"> | number
    title?: StringFilter<"Ticket"> | string
    desc?: StringFilter<"Ticket"> | string
    price?: BigIntFilter<"Ticket"> | bigint | number
    available?: IntFilter<"Ticket"> | number
    totalSeats?: IntFilter<"Ticket"> | number
    eventId?: IntFilter<"Ticket"> | number
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutEventInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutEventInput, ReviewUncheckedUpdateWithoutEventInput>
    create: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutEventInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutEventInput, ReviewUncheckedUpdateWithoutEventInput>
  }

  export type ReviewUpdateManyWithWhereWithoutEventInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutEventInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutEventInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutEventInput, OrderUncheckedUpdateWithoutEventInput>
    create: XOR<OrderCreateWithoutEventInput, OrderUncheckedCreateWithoutEventInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutEventInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutEventInput, OrderUncheckedUpdateWithoutEventInput>
  }

  export type OrderUpdateManyWithWhereWithoutEventInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutEventInput>
  }

  export type EventCreateWithoutTicketsInput = {
    title: string
    description: string
    slug: string
    category: $Enums.EventCategories
    location: string
    venue: string
    date: Date | string
    time: Date | string
    isActive?: boolean
    thumbnail: string
    createdAt?: Date | string
    updatedAt?: Date | string
    promotor: PromotorCreateNestedOneWithoutEventsInput
    reviews?: ReviewCreateNestedManyWithoutEventInput
    orders?: OrderCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutTicketsInput = {
    id?: number
    title: string
    description: string
    slug: string
    category: $Enums.EventCategories
    location: string
    venue: string
    date: Date | string
    time: Date | string
    isActive?: boolean
    thumbnail: string
    promotorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutEventInput
    orders?: OrderUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutTicketsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTicketsInput, EventUncheckedCreateWithoutTicketsInput>
  }

  export type Order_DetailsCreateWithoutTicketInput = {
    qty: number
    order: OrderCreateNestedOneWithoutDetailsInput
  }

  export type Order_DetailsUncheckedCreateWithoutTicketInput = {
    id?: number
    qty: number
    orderId: number
  }

  export type Order_DetailsCreateOrConnectWithoutTicketInput = {
    where: Order_DetailsWhereUniqueInput
    create: XOR<Order_DetailsCreateWithoutTicketInput, Order_DetailsUncheckedCreateWithoutTicketInput>
  }

  export type Order_DetailsCreateManyTicketInputEnvelope = {
    data: Order_DetailsCreateManyTicketInput | Order_DetailsCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutTicketsInput = {
    update: XOR<EventUpdateWithoutTicketsInput, EventUncheckedUpdateWithoutTicketsInput>
    create: XOR<EventCreateWithoutTicketsInput, EventUncheckedCreateWithoutTicketsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTicketsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTicketsInput, EventUncheckedUpdateWithoutTicketsInput>
  }

  export type EventUpdateWithoutTicketsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoriesFieldUpdateOperationsInput | $Enums.EventCategories
    location?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    thumbnail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promotor?: PromotorUpdateOneRequiredWithoutEventsNestedInput
    reviews?: ReviewUpdateManyWithoutEventNestedInput
    orders?: OrderUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoriesFieldUpdateOperationsInput | $Enums.EventCategories
    location?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    thumbnail?: StringFieldUpdateOperationsInput | string
    promotorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutEventNestedInput
    orders?: OrderUncheckedUpdateManyWithoutEventNestedInput
  }

  export type Order_DetailsUpsertWithWhereUniqueWithoutTicketInput = {
    where: Order_DetailsWhereUniqueInput
    update: XOR<Order_DetailsUpdateWithoutTicketInput, Order_DetailsUncheckedUpdateWithoutTicketInput>
    create: XOR<Order_DetailsCreateWithoutTicketInput, Order_DetailsUncheckedCreateWithoutTicketInput>
  }

  export type Order_DetailsUpdateWithWhereUniqueWithoutTicketInput = {
    where: Order_DetailsWhereUniqueInput
    data: XOR<Order_DetailsUpdateWithoutTicketInput, Order_DetailsUncheckedUpdateWithoutTicketInput>
  }

  export type Order_DetailsUpdateManyWithWhereWithoutTicketInput = {
    where: Order_DetailsScalarWhereInput
    data: XOR<Order_DetailsUpdateManyMutationInput, Order_DetailsUncheckedUpdateManyWithoutTicketInput>
  }

  export type Order_DetailsScalarWhereInput = {
    AND?: Order_DetailsScalarWhereInput | Order_DetailsScalarWhereInput[]
    OR?: Order_DetailsScalarWhereInput[]
    NOT?: Order_DetailsScalarWhereInput | Order_DetailsScalarWhereInput[]
    id?: IntFilter<"Order_Details"> | number
    ticketId?: IntFilter<"Order_Details"> | number
    qty?: IntFilter<"Order_Details"> | number
    orderId?: IntFilter<"Order_Details"> | number
  }

  export type UserCreateWithoutOrdersInput = {
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: User_PointCreateNestedManyWithoutUserInput
    coupons?: User_CouponCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: number
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: User_PointUncheckedCreateNestedManyWithoutUserInput
    coupons?: User_CouponUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type EventCreateWithoutOrdersInput = {
    title: string
    description: string
    slug: string
    category: $Enums.EventCategories
    location: string
    venue: string
    date: Date | string
    time: Date | string
    isActive?: boolean
    thumbnail: string
    createdAt?: Date | string
    updatedAt?: Date | string
    promotor: PromotorCreateNestedOneWithoutEventsInput
    tickets?: TicketCreateNestedManyWithoutEventInput
    reviews?: ReviewCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutOrdersInput = {
    id?: number
    title: string
    description: string
    slug: string
    category: $Enums.EventCategories
    location: string
    venue: string
    date: Date | string
    time: Date | string
    isActive?: boolean
    thumbnail: string
    promotorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutEventInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutOrdersInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutOrdersInput, EventUncheckedCreateWithoutOrdersInput>
  }

  export type Order_DetailsCreateWithoutOrderInput = {
    qty: number
    ticket: TicketCreateNestedOneWithoutOrderDetailsInput
  }

  export type Order_DetailsUncheckedCreateWithoutOrderInput = {
    id?: number
    ticketId: number
    qty: number
  }

  export type Order_DetailsCreateOrConnectWithoutOrderInput = {
    where: Order_DetailsWhereUniqueInput
    create: XOR<Order_DetailsCreateWithoutOrderInput, Order_DetailsUncheckedCreateWithoutOrderInput>
  }

  export type Order_DetailsCreateManyOrderInputEnvelope = {
    data: Order_DetailsCreateManyOrderInput | Order_DetailsCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: User_PointUpdateManyWithoutUserNestedInput
    coupons?: User_CouponUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: User_PointUncheckedUpdateManyWithoutUserNestedInput
    coupons?: User_CouponUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventUpsertWithoutOrdersInput = {
    update: XOR<EventUpdateWithoutOrdersInput, EventUncheckedUpdateWithoutOrdersInput>
    create: XOR<EventCreateWithoutOrdersInput, EventUncheckedCreateWithoutOrdersInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutOrdersInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutOrdersInput, EventUncheckedUpdateWithoutOrdersInput>
  }

  export type EventUpdateWithoutOrdersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoriesFieldUpdateOperationsInput | $Enums.EventCategories
    location?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    thumbnail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promotor?: PromotorUpdateOneRequiredWithoutEventsNestedInput
    tickets?: TicketUpdateManyWithoutEventNestedInput
    reviews?: ReviewUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoriesFieldUpdateOperationsInput | $Enums.EventCategories
    location?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    thumbnail?: StringFieldUpdateOperationsInput | string
    promotorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutEventNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutEventNestedInput
  }

  export type Order_DetailsUpsertWithWhereUniqueWithoutOrderInput = {
    where: Order_DetailsWhereUniqueInput
    update: XOR<Order_DetailsUpdateWithoutOrderInput, Order_DetailsUncheckedUpdateWithoutOrderInput>
    create: XOR<Order_DetailsCreateWithoutOrderInput, Order_DetailsUncheckedCreateWithoutOrderInput>
  }

  export type Order_DetailsUpdateWithWhereUniqueWithoutOrderInput = {
    where: Order_DetailsWhereUniqueInput
    data: XOR<Order_DetailsUpdateWithoutOrderInput, Order_DetailsUncheckedUpdateWithoutOrderInput>
  }

  export type Order_DetailsUpdateManyWithWhereWithoutOrderInput = {
    where: Order_DetailsScalarWhereInput
    data: XOR<Order_DetailsUpdateManyMutationInput, Order_DetailsUncheckedUpdateManyWithoutOrderInput>
  }

  export type TicketCreateWithoutOrderDetailsInput = {
    title: string
    desc: string
    price: bigint | number
    available: number
    totalSeats: number
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutOrderDetailsInput = {
    id?: number
    title: string
    desc: string
    price: bigint | number
    available: number
    totalSeats: number
    eventId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutOrderDetailsInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutOrderDetailsInput, TicketUncheckedCreateWithoutOrderDetailsInput>
  }

  export type OrderCreateWithoutDetailsInput = {
    total_price: bigint | number
    final_price: bigint | number
    status?: $Enums.OrderStatus
    redirect_url?: string | null
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    event: EventCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutDetailsInput = {
    id?: number
    total_price: bigint | number
    final_price: bigint | number
    status?: $Enums.OrderStatus
    redirect_url?: string | null
    userId: number
    eventId: number
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutDetailsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutDetailsInput, OrderUncheckedCreateWithoutDetailsInput>
  }

  export type TicketUpsertWithoutOrderDetailsInput = {
    update: XOR<TicketUpdateWithoutOrderDetailsInput, TicketUncheckedUpdateWithoutOrderDetailsInput>
    create: XOR<TicketCreateWithoutOrderDetailsInput, TicketUncheckedCreateWithoutOrderDetailsInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutOrderDetailsInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutOrderDetailsInput, TicketUncheckedUpdateWithoutOrderDetailsInput>
  }

  export type TicketUpdateWithoutOrderDetailsInput = {
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    available?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutOrderDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    available?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpsertWithoutDetailsInput = {
    update: XOR<OrderUpdateWithoutDetailsInput, OrderUncheckedUpdateWithoutDetailsInput>
    create: XOR<OrderCreateWithoutDetailsInput, OrderUncheckedCreateWithoutDetailsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutDetailsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutDetailsInput, OrderUncheckedUpdateWithoutDetailsInput>
  }

  export type OrderUpdateWithoutDetailsInput = {
    total_price?: BigIntFieldUpdateOperationsInput | bigint | number
    final_price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    event?: EventUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_price?: BigIntFieldUpdateOperationsInput | bigint | number
    final_price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutReviewsInput = {
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: User_PointCreateNestedManyWithoutUserInput
    coupons?: User_CouponCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: number
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: User_PointUncheckedCreateNestedManyWithoutUserInput
    coupons?: User_CouponUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type EventCreateWithoutReviewsInput = {
    title: string
    description: string
    slug: string
    category: $Enums.EventCategories
    location: string
    venue: string
    date: Date | string
    time: Date | string
    isActive?: boolean
    thumbnail: string
    createdAt?: Date | string
    updatedAt?: Date | string
    promotor: PromotorCreateNestedOneWithoutEventsInput
    tickets?: TicketCreateNestedManyWithoutEventInput
    orders?: OrderCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutReviewsInput = {
    id?: number
    title: string
    description: string
    slug: string
    category: $Enums.EventCategories
    location: string
    venue: string
    date: Date | string
    time: Date | string
    isActive?: boolean
    thumbnail: string
    promotorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutEventInput
    orders?: OrderUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutReviewsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutReviewsInput, EventUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: User_PointUpdateManyWithoutUserNestedInput
    coupons?: User_CouponUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: User_PointUncheckedUpdateManyWithoutUserNestedInput
    coupons?: User_CouponUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventUpsertWithoutReviewsInput = {
    update: XOR<EventUpdateWithoutReviewsInput, EventUncheckedUpdateWithoutReviewsInput>
    create: XOR<EventCreateWithoutReviewsInput, EventUncheckedCreateWithoutReviewsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutReviewsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutReviewsInput, EventUncheckedUpdateWithoutReviewsInput>
  }

  export type EventUpdateWithoutReviewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoriesFieldUpdateOperationsInput | $Enums.EventCategories
    location?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    thumbnail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promotor?: PromotorUpdateOneRequiredWithoutEventsNestedInput
    tickets?: TicketUpdateManyWithoutEventNestedInput
    orders?: OrderUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoriesFieldUpdateOperationsInput | $Enums.EventCategories
    location?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    thumbnail?: StringFieldUpdateOperationsInput | string
    promotorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutEventNestedInput
    orders?: OrderUncheckedUpdateManyWithoutEventNestedInput
  }

  export type User_PointCreateManyUserInput = {
    id?: number
    point: number
    createdAt?: Date | string
    expiredAt: Date | string
    isRedeem?: boolean
  }

  export type User_CouponCreateManyUserInput = {
    id?: number
    isRedeem?: boolean
    percentage: number
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    desc: string
    rating: number
    eventId: number
    createdAt?: Date | string
  }

  export type OrderCreateManyUserInput = {
    id?: number
    total_price: bigint | number
    final_price: bigint | number
    status?: $Enums.OrderStatus
    redirect_url?: string | null
    eventId: number
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type User_PointUpdateWithoutUserInput = {
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type User_PointUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type User_PointUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type User_CouponUpdateWithoutUserInput = {
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    percentage?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_CouponUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    percentage?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_CouponUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    percentage?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    desc?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    total_price?: BigIntFieldUpdateOperationsInput | bigint | number
    final_price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutOrdersNestedInput
    details?: Order_DetailsUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_price?: BigIntFieldUpdateOperationsInput | bigint | number
    final_price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: Order_DetailsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_price?: BigIntFieldUpdateOperationsInput | bigint | number
    final_price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyPromotorInput = {
    id?: number
    title: string
    description: string
    slug: string
    category: $Enums.EventCategories
    location: string
    venue: string
    date: Date | string
    time: Date | string
    isActive?: boolean
    thumbnail: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateWithoutPromotorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoriesFieldUpdateOperationsInput | $Enums.EventCategories
    location?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    thumbnail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUpdateManyWithoutEventNestedInput
    reviews?: ReviewUpdateManyWithoutEventNestedInput
    orders?: OrderUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutPromotorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoriesFieldUpdateOperationsInput | $Enums.EventCategories
    location?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    thumbnail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutEventNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutEventNestedInput
    orders?: OrderUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutPromotorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumEventCategoriesFieldUpdateOperationsInput | $Enums.EventCategories
    location?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    thumbnail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyEventInput = {
    id?: number
    title: string
    desc: string
    price: bigint | number
    available: number
    totalSeats: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyEventInput = {
    id?: number
    desc: string
    rating: number
    userId: number
    createdAt?: Date | string
  }

  export type OrderCreateManyEventInput = {
    id?: number
    total_price: bigint | number
    final_price: bigint | number
    status?: $Enums.OrderStatus
    redirect_url?: string | null
    userId: number
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateWithoutEventInput = {
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    available?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderDetails?: Order_DetailsUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    available?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderDetails?: Order_DetailsUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    available?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutEventInput = {
    desc?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    desc?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutEventInput = {
    total_price?: BigIntFieldUpdateOperationsInput | bigint | number
    final_price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    details?: Order_DetailsUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_price?: BigIntFieldUpdateOperationsInput | bigint | number
    final_price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: Order_DetailsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_price?: BigIntFieldUpdateOperationsInput | bigint | number
    final_price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Order_DetailsCreateManyTicketInput = {
    id?: number
    qty: number
    orderId: number
  }

  export type Order_DetailsUpdateWithoutTicketInput = {
    qty?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type Order_DetailsUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type Order_DetailsUncheckedUpdateManyWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type Order_DetailsCreateManyOrderInput = {
    id?: number
    ticketId: number
    qty: number
  }

  export type Order_DetailsUpdateWithoutOrderInput = {
    qty?: IntFieldUpdateOperationsInput | number
    ticket?: TicketUpdateOneRequiredWithoutOrderDetailsNestedInput
  }

  export type Order_DetailsUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
  }

  export type Order_DetailsUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}