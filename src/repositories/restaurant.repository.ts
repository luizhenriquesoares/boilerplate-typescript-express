import { injectable } from 'inversify';
import 'reflect-metadata';
import { Restaurant } from '../domains/restaurant/restaurant';
import { BaseRepository } from '../insfrastructure/repositories/base.repository';

injectable();
export class RestaurantRepository extends BaseRepository<Restaurant> {}
