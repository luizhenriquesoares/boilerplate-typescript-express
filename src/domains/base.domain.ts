import { injectable } from 'inversify';
import { SchemaOptions } from 'mongoose';

@injectable()
export class BaseDomain {
  public readonly id: bigint | string;
}

export const schemaOptions: SchemaOptions = {
  toJSON: {
    virtuals: true,
    getters: true,
  },
  timestamps: true,
};
