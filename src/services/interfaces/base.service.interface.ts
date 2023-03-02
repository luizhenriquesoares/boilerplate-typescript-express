export default interface IBaseService<T> {
  findAllAsync(): Promise<T>;

  findOneAsync();

  findByIdAsync(id: bigint | string): Promise<T>;

  createAsync(obj: T): Promise<T>;

  updateAsync(obj: T): Promise<T>;

  deleteAsync(id: bigint): Promise<T>;
}
