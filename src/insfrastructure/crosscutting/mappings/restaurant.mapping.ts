import 'automapper-ts/dist/automapper';
import { Mapping } from './mapping';
import { injectable } from 'inversify';
import 'reflect-metadata';
import { Restaurant } from '../../../domains/restaurant/restaurant';

@injectable()
export class RestaurantDtoMappingToDomain extends Mapping<Restaurant> {
  public readonly mapper: AutoMapperJs.AutoMapper;

    constructor() {
        super();
        this.mapper = automapper;
        this.createProfile();
    }

    public async map<T>(obj: Restaurant): Promise<T> {
        const sourceKey = 'RestaurantDto';
        const destinationKey = 'Restaurant';

        return this.mapper.map(sourceKey, destinationKey, obj);
    }

    private createProfile(): void {
        this.mapper.initialize(RestaurantDtoMappingToDomain.Config);
    }

    public static Config(config: AutoMapperJs.IConfiguration): void {
        config.createMap('RestaurantDto', 'Restaurant');
    }
}
