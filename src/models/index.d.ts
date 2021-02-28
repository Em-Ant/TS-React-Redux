export interface Item {
  readonly name: string;
  readonly description: string;
  readonly id?: string;
}
export type Mutable<T> = { readonly [P in keyof T]: T[P] };
