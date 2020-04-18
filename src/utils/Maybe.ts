class Maybe<T> {
  private readonly value: T;
  private static isNonNullable<T>(value?: T | null): value is NonNullable<T> {
    return value !== null && value !== undefined;
  }
  constructor(value: T) {
    this.value = value;
  }
  static Nothing(): Maybe<null> {
    return Maybe.of(null);
  }
  static of<T>(value: T): Maybe<T> {
    return new Maybe<T>(value);
  }
  static Just<T>(value: T): Maybe<T> {
    return new Maybe<T>(value);
  }
  map<U>(fn: (arg: NonNullable<T>) => U): Maybe<U | null> {
    return !Maybe.isNonNullable(this.value)
      ? Maybe.Nothing()
      : Maybe.of(fn(this.value));
  }
  flatMap<U>(fn: (arg: NonNullable<T>) => Maybe<U>): Maybe<U | null> {
    if (!Maybe.isNonNullable(this.value)) return Maybe.Nothing();
    return fn(this.value);
  }
  getOrElse<E>(elseVal: E): NonNullable<T> | E {
    return !Maybe.isNonNullable(this.value) ? elseVal : this.value;
  }
  getOrEmptyArray<A = T>() {
    return this.getOrElse([] as A[]);
  }
  getOrNull() {
    return this.getOrElse(null);
  }
  isNothing() {
    return !Maybe.isNonNullable(this.value);
  }
  isJust() {
    return Maybe.isNonNullable(this.value);
  }
}

export default Maybe;
