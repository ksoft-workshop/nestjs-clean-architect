import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { IException } from '../../domain/IException';
import { IFormatExceptionMessage } from '../../domain/IFormatExceptionMessage';

@Injectable()
export class ExceptionsService implements IException {
  UnauthorizedException(data?: IFormatExceptionMessage): void {
    throw new UnauthorizedException(data);
  }

  badRequestException(data: IFormatExceptionMessage): void {
    throw new BadRequestException(data);
  }

  forbiddenException(data?: IFormatExceptionMessage): void {
    throw new ForbiddenException(data);
  }

  internalServerErrorException(data?: IFormatExceptionMessage): void {
    throw new InternalServerErrorException(data);
  }
}
