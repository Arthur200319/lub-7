import { Module } from '@nestjs/common';
import { EnvConfigModule } from './config/envConfig.module';
import { PostgresModule } from './database/postgres/postgres.module';

@Module({
  imports: [EnvConfigModule,PostgresModule],
})
export class ProviderModule {}
