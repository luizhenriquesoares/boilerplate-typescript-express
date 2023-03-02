import { BaseDomain } from '../../../Domains/BaseDomain';
import { BaseDto } from '../../../domains/base.dto';

export abstract class Mapping<T extends BaseDomain | BaseDto> {
    public _MAPPER: AutoMapperJs.AutoMapper;

    public async map<TDomain>(obj: BaseDomain): Promise<TDomain> {
        const _SOURCEKEY = '';
        const _DESTINATIONKEY = '';

        return this._MAPPER.map(_SOURCEKEY, _DESTINATIONKEY, obj);
    }
}
