import { Module } from '@nestjs/common';
import { AuthModule } from 'src/modules/auth/auth.module';
import { TaskModule } from 'src/modules/task/task.module';
import { UsersModule } from 'src/modules/users/users.module';
import { ProviderModule } from 'src/providers/provider.module';
import { AppController } from './app.controller';

@Module({
  imports: [ProviderModule, UsersModule, TaskModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
