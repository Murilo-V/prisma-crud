import { Router } from 'express';
import { create } from './controllers/create';
import { exclude } from './controllers/exclude';
import { list } from './controllers/list';
import { update } from './controllers/update';

const routes = Router();

routes.get('/list', list);
routes.post('/create', create);
routes.put('/update', update);
routes.delete('/exclude/:id', exclude);

export default routes;