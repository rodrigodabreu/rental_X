import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';

const app = express();
app.use(express.json());

//importando a rota no server
app.use('/categories', categoriesRoutes);

app.get('/', (req, res) => {
	return res.json({ message: 'Hello world' });
});

app.post('/courses', (req, res) => {
	console.log(req.body);
	const { name } = req.body;
	return res.json(name);
});

app.listen(3333, () => console.log('Server is running on port 3333'));
