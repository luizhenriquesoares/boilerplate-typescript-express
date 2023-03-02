export interface IBaseRepository<T> {
  find(item: T): Promise<T[]>;
  findOne();
  create(item: T): Promise<boolean>;
  update(id: bigint, item: T): Promise<T>;
  delete(id: bigint): Promise<boolean>;
}
