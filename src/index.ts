import "module-alias/register";

import helmet from 'helmet';
import { StartProjectInit } from "@tsclean/core";
        
import { AppContainer } from "@/application/app";
import { PORT } from "@/application/config/environment";
import { singletonInitializers } from "@/application/singleton";

async function init(): Promise<void> {
  /** Iterate the singleton functions */
  for (const initFn of singletonInitializers) {
    await initFn();
  }
  console.log('error')
  try {
    const app = await StartProjectInit.create(AppContainer)
    console.log('error')

    app.use(helmet());
    console.log('error')

    await app.listen(PORT, () => console.log(`Running on port: ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}
   
void init().catch((e)=>console.log(e));