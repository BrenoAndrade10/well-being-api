import express from 'express';
import 'reflect-metadata'; 
import { routes } from './infra/http/routes/routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log(`Server is running on PORT ${3000} 🚀`);
});