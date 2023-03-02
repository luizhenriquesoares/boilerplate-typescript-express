/* dependencies-------------------------------------------------------------- */
import 'reflect-metadata';
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import * as bluebird from 'bluebird';

import { referenceDataIoCModule } from './insfrastructure/crosscutting/DI/simple.injector';
import { bootstrap } from './insfrastructure/crosscutting/bootstrapping/bootstrap';

import './controllers/restaurant.controller';
import { container } from './insfrastructure/crosscutting/DI/container';

/* ENV ---------------------------------------------------------------------- */
dotenv.load({ path: '.env' });
const port: number = parseInt(process.env.PORT, 0);

/* bootstrap ---------------------------------------------------------------- */
async function runApp() {
  const app = await bootstrap(container, port, null, null, referenceDataIoCModule);
  return app;
}

(async () => {
  await runApp();
})();

export { runApp };

// const connect = (): Promise<void> => {
//     (mongoose as any).Promise = bluebird;
//     return mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI, { useNewUrlParser: true }).then(
//         () => {console.log('MongoDB Connection UP'); },
//       ).catch(err => {
//         console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
//     });
// };

// connect();
