import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoresModule } from './cores/cores.module';
import { PaymentsModule } from './payments/payments.module';
import { LogsModule } from './logs/logs.module';
import { CatalogsModule } from './catalogs/catalogs.module';
import { CommentsModule } from './comments/comments.module';
import { EmailsModule } from './emails/emails.module';
import { InventoriesModule } from './inventories/inventories.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [CoresModule, PaymentsModule, LogsModule, CatalogsModule, CommentsModule, EmailsModule, InventoriesModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
