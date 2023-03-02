import 'reflect-metadata';
import { BaseService } from './base.service';
import { injectable, inject } from 'inversify';
import IRestauranteService from './interfaces/restaurante.service.interface';
import { Restaurant } from '../domains/restaurant/restaurant';
import { RestaurantDomain, DbContext } from '../insfrastructure/crosscutting/DI/decorators';
import { ModelType } from 'typegoose';
import { IDbContext } from '../insfrastructure/repositories/Interfaces/db.context.interface';
import { BaseDomain } from '../domains/base.domain';

@injectable()
export class RestaurantService extends BaseService<Restaurant> implements IRestauranteService<BaseDomain> {

    constructor(@RestaurantDomain private readonly domain: ModelType<Restaurant>, @DbContext protected _DbContext: IDbContext<Restaurant>) {
        super(_DbContext);
        this.model = domain.model();
        console.log('============== CONSTRUCTOR RESTAURANTE SERVICE =====================');
    }
    public async getRestaurant() {
        throw new Error('Method not implemented.');
    }

}
