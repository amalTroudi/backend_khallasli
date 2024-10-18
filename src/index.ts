import "module-alias/register";

import helmet from 'helmet';
import cors from 'cors'; // Add CORS import
import { StartProjectInit } from "@tsclean/core";

import { AppContainer } from "@/application/app";
import { PORT } from "@/application/config/environment";
import { singletonInitializers } from "@/application/singleton";

async function init(): Promise<void> {
  /** Iterate the singleton functions */
  for (const initFn of singletonInitializers) {
    await initFn();
  }

  try {
    const app = await StartProjectInit.create(AppContainer)

    // Enable CORS globally
    app.use(cors());  // CORS for cross-origin requests
    app.use(helmet()); // Helmet for security headers

    await app.listen(PORT, () => console.log(`Running on port: ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

void init().catch((e) => console.log(e));
