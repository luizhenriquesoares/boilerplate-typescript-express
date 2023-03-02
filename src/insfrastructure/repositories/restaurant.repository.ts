import { BaseRepository } from '../../Insfrastructure/Repositories/BaseRepository';
import { injectable } from 'inversify';
import 'reflect-metadata';
import { Restaurant } from '../../domains/restaurant/restaurant';

injectable();
export class RestaurantRepository extends BaseRepository<Restaurant> {}
