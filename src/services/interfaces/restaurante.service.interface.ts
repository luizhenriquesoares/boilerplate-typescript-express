import { BaseDomain } from '../../domains/base.domain';

export default interface IRestaurantService<TDomain extends BaseDomain> {
  get(id: number, count?: number);
}
