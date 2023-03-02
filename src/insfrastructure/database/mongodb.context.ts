import 'reflect-metadata';
import { injectable } from 'inversify';
import { IDbContext } from '../repositories/Interfaces/db.context.interface';
@injectable()
export class MongoDBContext<T> implements IDbContext<T> {
  protected context;

  setContext(context): void {
    this.context = context;
  }

  find(item): Promise<[]> {
    throw new Error('Method not implemented.');
  }
  async findOne() {
    return await this.context.find().exec();
  }
  create(item: T): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  update(id: bigint, item: T): Promise<InstanceType<any>> {
    throw new Error('Method not implemented.');
  }
  delete(id: bigint): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
