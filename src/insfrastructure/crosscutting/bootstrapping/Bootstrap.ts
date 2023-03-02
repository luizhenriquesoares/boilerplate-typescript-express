import * as express from 'express';
import * as bodyParser from 'body-parser';

import { Container, ContainerModule } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';
import { reqMiddleware, exceptionLoggerMiddleware } from '../middlewares/http.middleware';
import { TYPES } from '../DI/types';

export async function bootstrap(
    container: Container,
    appPort: number,
    dbHost?: string,
    dbName?: string,
    // tslint:disable-next-line:trailing-comma
    ...modules: ContainerModule[]
) {
    if (container.isBound(TYPES.App) === false) {
        container.load(...modules);

        // configure express
        const server = new InversifyExpressServer(container);

        // tslint:disable-next-line:no-shadowed-variable
        server.setConfig((app) => {

            // Configure requests body parsing
            app.use(bodyParser.urlencoded({ extended: true }));
            app.use(bodyParser.json());
            // Log all requets that hit the server
            // app.use(reqMiddleware);
        });

        // tslint:disable-next-line:no-shadowed-variable
        // server.setErrorConfig((app) => {
        //     // Catch and log all exceptions
        //     app.use(exceptionLoggerMiddleware);
        // });

        const app = server.build();

        // Run express server
        console.log(`Application listening on port ${appPort}...`);
        app.listen(appPort);

        container.bind<express.Application>(TYPES.App).toConstantValue(app);
        return app;
    } else {
        return container.get<express.Application>(TYPES.App);
    }
}