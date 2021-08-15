import '@config/environments.config';

import { logger } from '@shared/logger';
import router from './router';

import Koa from 'koa';

const app = new Koa();

app.use(async (ctx, next) => {
  logger.info(`${ctx.request.method} ${ctx.request.url} ${new Date()}`);
  await next();
})

app.use(router.routes());

app.listen(process.env.PORT);

logger.info(`Server listening on PORT ${process.env.PORT}`)