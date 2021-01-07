import 'reflect-metadata';
import Application from './app/Application';
import container from './container'

const app: Application = container.resolve('app')

app.start()
  .catch((error) => {
    console.error(error.stack);
    process.exit();
  })

