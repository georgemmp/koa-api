import '@config/environments.config';

import Koa from 'koa';

const app = new Koa();

app.listen(process.env.PORT);

console.log(`Server listening on PORT ${process.env.PORT}`)