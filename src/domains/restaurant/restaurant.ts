import { prop, ModelType, Typegoose } from 'typegoose';
import { BaseDomain, schemaOptions  } from '../../Domains/BaseDomain';

export class Restaurant extends Typegoose  {
    @prop({required: [true, 'Username is required'], unique: true})
    readonly name: string;
    readonly id: bigint | string;

    public model(): ModelType<Restaurant> {
        return new Restaurant().getModelForClass(Restaurant, { schemaOptions});
    }
}
