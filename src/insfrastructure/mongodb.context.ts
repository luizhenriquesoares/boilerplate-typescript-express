import { Typegoose, ModelType } from 'typegoose';
import { injectable } from 'inversify';
import { IDbContext } from './repositories/Interfaces/db.context.interface';
import 'reflect-metadata';
@injectable()
export class MongoDBContext<T extends Typegoose> implements IDbContext<T> {

    protected _MONGODBCONTEXT: ModelType<T>;
    constructor() {
        console.log('================= CONSTRUCTOR MONGODBCONTEXT =================');
    }

    setContext(context: ModelType<T>): void {
        console.log('===================== SETANDO CONTEXT ==============');
        this._MONGODBCONTEXT =  context;
    }

    find(item: ModelType<T>): Promise<ModelType<T>[]> {
        throw new Error('Method not implemented.');
    }
    async findOne() {
        console.log('============== MONGO DBContext ==============');
        console.log(this._MONGODBCONTEXT);
        return await this._MONGODBCONTEXT.find().exec();
    }
    create(item: ModelType<T>): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    update(id: bigint, item: ModelType<T>): Promise<InstanceType<any>> {
        throw new Error('Method not implemented.');
    }
    delete(id: bigint): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
}