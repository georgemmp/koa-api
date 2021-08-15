import '@config/environments.config';

import { logger } from '@shared/logger';

import router from './router';
import koaLogger from 'koa-logger';
import bodyPaser from 'koa-parser';

import Koa from 'koa';

const app = new Koa();

app.use(bodyPaser());
app.use(koaLogger());
app.use(router.routes());

app.listen(process.env.PORT);

logger.info(`Server listening on PORT ${process.env.PORT}`);