import { prop, ModelType, Typegoose } from 'typegoose';
import { schemaOptions } from '../base.domain';

export class Restaurant extends Typegoose  {
    @prop({required: [true, 'Username is required'], unique: true})
    readonly name: string;
    readonly id: bigint | string;

    public model(): ModelType<Restaurant> {
        return new Restaurant().getModelForClass(Restaurant, { schemaOptions});
    }
}
