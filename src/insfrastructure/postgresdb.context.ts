import { ModelType, Typegoose } from 'typegoose';
import { injectable } from 'inversify';
import { BaseDomain } from '../Domains/BaseDomain';
import { IDbContext } from './repositories/Interfaces/db.context.interface';
import 'reflect-metadata';

@injectable()
export class PostgresDBContext<TDomain extends Typegoose> implements IDbContext<BaseDomain> {

    protected _MODEL: ModelType<TDomain>;

    find(item: BaseDomain): Promise<BaseDomain[]> {
        throw new Error('Method not implemented.');
    }
    findOne(): Promise<InstanceType<any>> {
        throw new Error('Method not implemented.');
    }
    create(item: BaseDomain): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    update(id: bigint, item: BaseDomain): Promise<InstanceType<any>> {
        throw new Error('Method not implemented.');
    }
    delete(id: bigint): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
}