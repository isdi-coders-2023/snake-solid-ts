export interface Collection<T> {
  add(element: T): void;
  getList(): T[];
}
