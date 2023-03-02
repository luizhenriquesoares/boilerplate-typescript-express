import { prop, getModelForClass } from '@typegoose/typegoose';

export class Restaurant {
  @prop({ required: [true, 'Username is required'], unique: true })
  readonly name: string;
  @prop()
  readonly id: bigint | string;

  public model() {
    return getModelForClass(Restaurant);
  }
}
