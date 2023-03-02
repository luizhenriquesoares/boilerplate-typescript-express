import { BaseDomain } from '../../../domains/base.domain';
import { BaseDto } from '../../../domains/base.dto';

export abstract class Mapping<T extends BaseDomain | BaseDto> {
    public readonly mapper: AutoMapperJs.AutoMapper;

    public async map<TDomain>(obj: BaseDomain): Promise<TDomain> {
        const sourceKey = '';
        const destinationKey = '';

        return this.mapper.map(sourceKey, destinationKey, obj);
    }
}
