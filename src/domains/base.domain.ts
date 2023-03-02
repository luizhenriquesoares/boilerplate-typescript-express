import { Typegoose } from 'typegoose';
import { injectable, decorate } from 'inversify';
import { SchemaOptions } from 'mongoose';

decorate(injectable(), Typegoose);
// @injectable()
export class BaseDomain extends Typegoose  {
    public readonly id: bigint | string;
}

export const schemaOptions: SchemaOptions = {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    timestamps: true,
  };