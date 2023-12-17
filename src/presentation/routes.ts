import { Router } from 'express';
import { TodoRoutes } from './todos/routes';

export class AppRoutes { //aca se establecen las rutas de todos los modulos

  static get routes(): Router {

    const router = Router();

    router.use('/api/todos', TodoRoutes.routes );
    
    return router;
  }


}

