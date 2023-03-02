import { injectable } from 'inversify';
import 'reflect-metadata';
import { IDbContext } from './Interfaces/db.context.interface';
import { IBaseRepository } from './Interfaces/base.interface.repository';

@injectable()
export class BaseRepository<T> implements IBaseRepository<T> {
  private readonly context: IDbContext<T>;

  find(item: T): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
  findOne() {
    return this.context.findOne();
  }
  create(item: any): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  update(id: bigint, item: T): Promise<T> {
    throw new Error('Method not implemented.');
  }
  delete(id: bigint): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
