import {cleanEnv, str, port} from 'envalid';
import {Env} from '../interface/env';

/**
 * Class which handle the environment logic.
 */
class Environment {
  environment: Env;

  /**
   * Validate and sanitate the environment variables.
   */
  constructor() {
    this.environment = cleanEnv(process.env, {
      MONGO_DB: str(),
      MONGO_HOST: str(),
      MONGO_PASSWORD: str(),
      MONGO_PORT: port(),
      MONGO_USER: str(),
      NODE_ENV: str({choices: ['development', 'test', 'production']}),
    });
  }

  /**
   * Validate and sanitate the environment variables.
   * @return {Env} Environment object.
   */
  getEnvironment(): Env {
    return this.environment;
  }
}

const currentEnvironment: Environment = new Environment();

export default currentEnvironment;
