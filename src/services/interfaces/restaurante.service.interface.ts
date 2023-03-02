import { BaseDomain } from '../../domains/base.domain';

export default interface IRestauranteService<TDomain extends BaseDomain> {
  get(id: number, count?: number);
}
