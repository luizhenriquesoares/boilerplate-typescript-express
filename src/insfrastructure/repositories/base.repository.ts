import { injectable, inject, multiInject } from 'inversify';
import 'reflect-metadata';
import { IDbContext } from './Interfaces/db.context.interface';
import { ModelType, Typegoose } from 'typegoose';
// implements IBaseRepository<any>
@injectable()
export class BaseRepository {
    private readonly context: IDbContext<Typegoose>;

    find(item: any): Promise<any[]> {
        throw new Error('Method not implemented.');
    }
    findOne(){
        console.log('============== Base Repository FindONE ==============');
        return this.context.findOne();
    }
    create(item: any): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    update(id: bigint, item: any): Promise<any> {
        throw new Error('Method not implemented.');
    }
    delete(id: bigint): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
}
