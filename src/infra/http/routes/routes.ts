import { Router } from "express";
import { checkInsRoutes } from "./check-ins.routes";

const routes = Router();

routes.use('/check-ins', checkInsRoutes);

export { routes };