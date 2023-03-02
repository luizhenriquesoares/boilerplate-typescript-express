
import { Response, Request } from 'express';
import { controller, httpGet } from 'inversify-express-utils';
import {Restaurant} from '../domains/restaurant/restaurant';
import IRestauranteService from '../services/interfaces/restaurante.service.interface';
import { RestaurantService } from '../insfrastructure/crosscutting/DI/decorators';

@controller('/restaurant')
export class RestaurantController  {

    @RestaurantService private readonly restaurantService: IRestauranteService<Restaurant>;

    constructor(){
         console.log('============== CONSTRUCTOR CONTROLLER ===================');
    }

    @httpGet('/')
   public async getRestaurant(req: Request, res: Response) {
        try {
            const response = await this.restaurantService.getRestaurant();
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
        return null;
    }

}
