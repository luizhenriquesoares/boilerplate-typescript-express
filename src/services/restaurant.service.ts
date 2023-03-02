import 'reflect-metadata';
import { BaseService } from './base.service';
import { injectable } from 'inversify';
import IRestaurantService from './interfaces/restaurante.service.interface';
import { Restaurant } from '../domains/restaurant/restaurant';
import { RestaurantDomain, DbContext } from '../insfrastructure/crosscutting/DI/decorators';
import { IDbContext } from '../insfrastructure/repositories/Interfaces/db.context.interface';
import { BaseDomain } from '../domains/base.domain';

@injectable()
export class RestaurantService extends BaseService<Restaurant> implements IRestaurantService<BaseDomain> {
  constructor(
    @RestaurantDomain private readonly domain: Restaurant,
    @DbContext protected _DbContext: IDbContext<Restaurant>,
  ) {
    super(_DbContext);
    this.model = this.domain.model();
    console.log('============== CONSTRUCTOR RESTAURANTE SERVICE =====================');
  }

  public async get() {
    throw new Error('Method not implemented.');
  }
}
