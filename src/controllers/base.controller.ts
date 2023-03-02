import { BaseDto } from '../domains/base.dto';
import { interfaces } from 'inversify-express-utils';
import { injectable } from 'inversify';
import { BaseDomain } from '../domains/base.domain';

@injectable()
export abstract class BaseController<TDomain extends BaseDomain, TDto extends BaseDto> implements interfaces.Controller {

}
