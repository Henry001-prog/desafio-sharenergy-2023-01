import { Request, Router } from "express";
import ClientController from './controllers/ClientController';
import { AuthService } from './controllers/AuthService';
import { auth } from './config/auth';

const routes = Router();

const protectedApi = Router();
protectedApi.use(auth);

routes.post('/api/client', protectedApi, ClientController.createClient);
routes.get('/api/clients', protectedApi, ClientController.showAllClients);
routes.get('/api/client/:id', protectedApi, ClientController.showClient);
routes.put('/api/client/:id', protectedApi, ClientController.updateClient);
routes.delete('/api/client/:id', protectedApi, ClientController.deleteClient);

routes.post('/oapi/signup', AuthService.signup);
routes.post('/oapi/login', AuthService.login);
routes.post('/oapi/validateToken', AuthService.validateToken);
routes.get('/oapi/verify/:email', AuthService.verifyUser);

export const routesApi = routes;