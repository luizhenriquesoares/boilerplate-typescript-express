import 'automapper-ts/dist/automapper';
import { Mapping } from './mapping';
import { injectable } from 'inversify';
import 'reflect-metadata';
import { Restaurant } from '../../../domains/restaurant/restaurant';

@injectable()
export class RestaurantDtoMappingToDomain extends Mapping<Restaurant> {
    public _MAPPER: AutoMapperJs.AutoMapper;

    constructor() {
        super();
        this._MAPPER = automapper;
        this.createProfile();
    }

    public async map<T>(obj: Restaurant): Promise<T> {
        const _SOURCEKEY = 'RestaurantDto';
        const _DESTINATIONKEY = 'Restaurant';

        return this._MAPPER.map(_SOURCEKEY, _DESTINATIONKEY, obj);
    }

    private createProfile(): void {
        this._MAPPER.initialize(RestaurantDtoMappingToDomain.Config);
    }

    public static Config(config: AutoMapperJs.IConfiguration): void {
        config.createMap('RestaurantDto', 'Restaurant');
    }
}
