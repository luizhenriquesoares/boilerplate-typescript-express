import { ModelType } from 'typegoose';
import { Restaurant } from '../restaurant';
export interface IRestaurant {
  model(): Promise<ModelType<Restaurant>>;
}
