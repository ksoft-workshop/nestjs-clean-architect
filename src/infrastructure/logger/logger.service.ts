import { Injectable, Logger } from '@nestjs/common';
import { ILogger } from '../../domain/ILogger';
import * as process from 'process';

@Injectable()
export class LoggerService extends Logger implements ILogger {
  debug(message: any, context?: string) {
    if (process.env.NODE_ENV !== 'production') {
      super.debug(`[DEBUG] ${message}`, context);
    }
  }
  log(message: any, context?: string) {
    super.log(`[INFO] ${message}`, context);
  }
  error(message: any, stack?: string, context?: string) {
    super.error(`[ERROR] ${message}`, stack, context);
  }
  warn(message: any, context?: string) {
    super.warn(`[WARN] ${message}`, context);
  }
  verbose(message: any, context?: string) {
    if (process.env.NODE_ENV !== 'production') {
      super.verbose(`[VERBOSE] ${message}`, context);
    }
  }
}
