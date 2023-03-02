import { controller, httpGet, interfaces, request } from 'inversify-express-utils';
import { Restaurant } from '../domains/restaurant/restaurant';
import IRestauranteService from '../services/interfaces/restaurante.service.interface';
import { RestaurantService } from '../insfrastructure/crosscutting/DI/decorators';

@controller('/restaurant')
export class RestaurantController implements interfaces.Controller {
  @RestaurantService private readonly restaurantService: IRestauranteService<Restaurant>;

  constructor() {
    console.log(`here ====`);
  }

  @httpGet('/')
  private async index(@request() req): Promise<string> {
    try {
      return await this.restaurantService.get(req.query.id);
    } catch (error) {
      console.log(error);
    }
    return null;
  }

  // @httpGet('/')
  // private list(@queryParam('start') start: number, @queryParam('count') count: number): string {
  //   return this.restaurantService.get(start, count);
  // }

  // @httpPost('/')
  // private async create(@request() req: express.Request, @response() res: express.Response) {
  //   try {
  //     //await this.restaurantService.create(req.body);
  //     res.sendStatus(201);
  //   } catch (err) {
  //     res.status(400).json({ error: err.message });
  //   }
  // }

  // @httpDelete('/:id')
  // private delete(@requestParam('id') id: string, @response() res: express.Response): Promise<void> {
  //   return this.restaurantService
  //     .get(1)
  //     .then(() => res.sendStatus(204))
  //     .catch((err: Error) => {
  //       res.status(400).json({ error: err.message });
  //     });
  // }
}
