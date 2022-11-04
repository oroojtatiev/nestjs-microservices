import {Module} from '@nestjs/common'
import {AppConfigModule} from './config/config.module'
import {AppController} from './app.controller'
import {AppService} from './app.service'
import {DatabaseModule} from './database/database.module'
import {MailModule} from './mail/mail.module'
import {ProductModule} from './domain/product/product.module'
import {ProductTypeModule} from './domain/productType/productType.module'

@Module({
  imports: [
    AppConfigModule,
    DatabaseModule,
    MailModule,
    ProductModule,
    ProductTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
