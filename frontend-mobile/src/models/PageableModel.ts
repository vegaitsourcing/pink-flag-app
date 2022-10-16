export interface PageableModel<T> {
  items: T[];
  meta: {
    total_count: number;
  };
}
