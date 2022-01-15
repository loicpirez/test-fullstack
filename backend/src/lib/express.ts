import {json as bodyParserJson} from 'body-parser';
import cors from 'cors';
import handleErrors from '../api/middlewares/handle-errors';
import notFound from '../api/middlewares/not-found';

/**
 * Initialize `express` server by adding the required middleware and routes.
 */
const initializeExpress: Function = async (): Promise<void> => {
  global.expressApp.use(cors());
  global.expressApp.use(bodyParserJson());
  global.expressApp.use(handleErrors);
  global.expressApp.use(notFound);
};

export default initializeExpress;