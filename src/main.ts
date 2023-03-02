/* dependencies-------------------------------------------------------------- */
import 'reflect-metadata';
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import * as bluebird from 'bluebird';

import { referenceDataIoCModule } from './insfrastructure/crosscutting/DI/simple.injector';
import { bootstrap } from './insfrastructure/crosscutting/bootstrapping/Bootstrap';
import { container } from './insfrastructure/crosscutting/DI/container';

/* ENV ---------------------------------------------------------------------- */
dotenv.load({ path: '.env' });
const port: number = parseInt(process.env.PORT, 0);

import './controllers/restaurant.controller';
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';
import bodyParser from 'body-parser';
import chalk from 'chalk';

/* bootstrap ---------------------------------------------------------------- */
async function runApp() {
    const app = await bootstrap(
        container,
        port,
        null,
        null,
        referenceDataIoCModule,
    );
    return app;
}

(async () => {
    await runApp();
})();

export { runApp };

// TODO IMPLEMENT CONNECT DATABASE

const connect = (): Promise<void> => {
    (mongoose as any).Promise = bluebird;
    return mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI, { useNewUrlParser: true }).then(
        () => {console.log('MongoDB Connection UP'); },
      ).catch(err => {
        console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
    });
};

connect();

const listen = (connect: any): void => {
    const container = new Container();
    container.load(referenceDataIoCModule);
    const server = new InversifyExpressServer(container);

    server.setConfig((App) => {
        App.use(bodyParser.urlencoded({ extended: true }));
        App.use(bodyParser.json());
      });
    const runtime: any = server.build();
    runtime.listen(port, () => {
        typeof connect === 'function' ? connect() : null;
        console.log('%s Express server listening on port %d in %s mode.', chalk.default.bgGreen('✓'), port, app.get('env'));
    });
};

listen(connect);