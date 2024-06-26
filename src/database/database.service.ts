import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class DatabaseService {
  private logger: Logger = new Logger(DatabaseService.name);
  constructor(@InjectConnection() private readonly connection: Connection) {}

  getDbHandle(): Connection {
    return this.connection;
  }
}
