import { inject } from 'inversify';
import { TYPES } from './types';

export const RestaurantService = inject(TYPES.IRestaurantService);
export const RestaurantDomain = inject(TYPES.IRestaurant);
export const DbContext = inject(TYPES.IDbContext);
export const BaseRepository = inject(TYPES.IBaseRepository);
