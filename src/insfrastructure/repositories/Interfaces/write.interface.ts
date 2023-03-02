import { BaseDomain } from '../../../domains/base.domain';

export interface IWrite<T extends BaseDomain> {
  create(item: T): Promise<boolean>;
  update(id: bigint, item: T): Promise<T>;
  delete(id: bigint): Promise<boolean>;
}
