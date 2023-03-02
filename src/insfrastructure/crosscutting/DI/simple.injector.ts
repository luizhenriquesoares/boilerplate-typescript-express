import { Container, ContainerModule } from 'inversify';
import { TYPES } from './types';
import { Restaurant } from '../../../domains/restaurant/restaurant';
import { IRestaurant } from 'domains/restaurant/interfaces/restaurant.interface';
import { registerController } from './utils';

// Controllers
import { RestaurantController } from '../../../controllers/restaurant.controller';
import IRestauranteService from '../../../services/interfaces/restaurante.service.interface';
import { BaseDomain } from '../../../domains/base.domain';
import { BaseService } from '../../../services/base.service';
import IBaseService from '../../../services/interfaces/base.service.interface';
import { MongoDBContext } from '../../database/mongodb.context';
import { IBaseRepository } from '../../repositories/Interfaces/base.interface.repository';
import { IDbContext } from '../../repositories/Interfaces/db.context.interface';
import { RestaurantService, BaseRepository } from './decorators';

const referenceDataIoCModule = new ContainerModule((bind) => {
  // Controllers
  registerController(bind, RestaurantController);

  /* Restaurants --------------------------------------------------------------- */
  // bind<IRestauranteService<Restaurant>>(TYPES.IRestauranteService)
  //     .to(RestaurantService).inSingletonScope();

  // bind<IRestaurant>(TYPES.IRestaurant)
  //     .to(Restaurant).inSingletonScope();

  /* DbContext --------------------------------------------------------------- */
  bind<IDbContext<BaseDomain>>(TYPES.IDbContext).to(MongoDBContext).inSingletonScope();

  /* BASE --------------------------------------------------------------- */
  bind<IBaseService<BaseDomain>>(TYPES.IBaseService).to(BaseService).inSingletonScope();

  bind<BaseDomain>(TYPES.BaseDomain).to(BaseDomain).inSingletonScope();

  // bind<IBaseRepository<BaseDomain>>(TYPES.IBaseRepository)
  //     .to(BaseRepository).inSingletonScope();
});

export { referenceDataIoCModule };
