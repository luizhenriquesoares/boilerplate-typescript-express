import { ModelType } from 'typegoose';

export interface IDbContext<T> {
  setContext(context: ModelType<T>): void;
  find(item: ModelType<T>): Promise<ModelType<T>[]>;
  findOne();
  create(item: ModelType<T>): Promise<boolean>;
  update(id: bigint, item: ModelType<T>): Promise<ModelType<T>>;
  delete(id: bigint): Promise<boolean>;
}
