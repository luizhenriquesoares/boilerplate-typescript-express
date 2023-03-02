import { BaseDomain } from '../../../domains/base.domain';

export interface IRead<T extends BaseDomain> {
  find(item: T): Promise<T[]>;
  findOne(id: bigint): Promise<T>;
}
