import { injectable } from 'inversify';

import 'reflect-metadata';
import { IDbContext } from '../insfrastructure/repositories/Interfaces/db.context.interface';
import { DbContext } from '../insfrastructure/crosscutting/DI/decorators';
import IBaseService from './interfaces/base.service.interface';
@injectable()
export class BaseService<T> implements IBaseService<T> {
  protected model;

  constructor(@DbContext protected _DbContext: IDbContext<T>) {
    console.log('============ BASE SERVICE ===============');
    this._DbContext = _DbContext;
  }
  findAllAsync(): Promise<T> {
    throw new Error('Method not implemented.');
  }
  findOneAsync() {
    throw new Error('Method not implemented.');
  }
  findByIdAsync(id: string | bigint): Promise<T> {
    throw new Error('Method not implemented.');
  }
  createAsync(obj: T): Promise<T> {
    throw new Error('Method not implemented.');
  }
  updateAsync(obj: T): Promise<T> {
    throw new Error('Method not implemented.');
  }
  deleteAsync(id: bigint): Promise<T> {
    throw new Error('Method not implemented.');
  }
}
