type Maybe<T> = T extends null | undefined ? never : T;

const m: Maybe<number> = 0;