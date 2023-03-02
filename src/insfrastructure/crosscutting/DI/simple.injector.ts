import { ContainerModule } from 'inversify';
import { TYPES } from './types';
import { Restaurant } from '../../../domains/restaurant/restaurant';
import { registerController } from './utils';

// Controllers
import { RestaurantController } from '../../../controllers/restaurant.controller';
import IRestaurantService from '../../../services/interfaces/restaurante.service.interface';
import { BaseDomain } from '../../../domains/base.domain';
import { BaseService } from '../../../services/base.service';
import IBaseService from '../../../services/interfaces/base.service.interface';
import { MongoDBContext } from '../../database/mongodb.context';
import { IBaseRepository } from '../../repositories/Interfaces/base.interface.repository';
import { IDbContext } from '../../repositories/Interfaces/db.context.interface';
import { BaseRepository } from '../../repositories/base.repository';
import { RestaurantService } from '../../../services/restaurant.service';

const referenceDataIoCModule = new ContainerModule((bind) => {
  // Controllers
  registerController<RestaurantController>(bind, RestaurantController);

  /* Restaurants --------------------------------------------------------------- */
  bind<IRestaurantService<Restaurant>>(TYPES.IRestaurantService).to(RestaurantService).inSingletonScope();

  /* DbContext --------------------------------------------------------------- */
  bind<IDbContext<BaseDomain>>(TYPES.IDbContext).to(MongoDBContext).inSingletonScope();

  /* BASE --------------------------------------------------------------- */
  bind<IBaseService<BaseDomain>>(TYPES.IBaseService).to(BaseService).inSingletonScope();
  bind<IBaseRepository<BaseDomain>>(TYPES.IBaseRepository).to(BaseRepository).inSingletonScope();
});

export { referenceDataIoCModule };
