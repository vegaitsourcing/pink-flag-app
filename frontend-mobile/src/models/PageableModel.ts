export interface PageableModel<T> {
  items: T[];
  totalElements: number;
  page: number;
}
