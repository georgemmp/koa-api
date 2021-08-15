import '@config/environments.config';

import { logger } from '@shared/logger';

import Koa from 'koa';

const app = new Koa();

app.use(async (ctx, next) => {
  logger.info(`${ctx.method} ${ctx.url} ${new Date()}`);
  await next();
})

app.use(async ctx => {
  ctx.body = "Hello World"!;
})

app.listen(process.env.PORT);

logger.info(`Server listening on PORT ${process.env.PORT}`)