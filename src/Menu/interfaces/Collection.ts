export interface Collection<T> {
  add(element: T): void;
  getOptions(): T[];
}
