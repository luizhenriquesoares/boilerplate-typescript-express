/* dependencies-------------------------------------------------------------- */
import 'reflect-metadata';
import * as dotenv from 'dotenv';

import { referenceDataIoCModule } from './insfrastructure/crosscutting/DI/simple.injector';
import { bootstrap } from './insfrastructure/crosscutting/bootstrapping/bootstrap';

import './controllers/restaurant.controller';
import { container } from './insfrastructure/crosscutting/DI/container';

/* ENV ---------------------------------------------------------------------- */
dotenv.config({ path: '.env' });
const port: number = parseInt(process.env.PORT, 0);

/* bootstrap ---------------------------------------------------------------- */
async function runApp() {
  return await bootstrap(container, port, referenceDataIoCModule);
}

(async () => {
  await runApp();
})();

export { runApp };
