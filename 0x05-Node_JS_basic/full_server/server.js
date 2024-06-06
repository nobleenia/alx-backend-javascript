import express from 'express';
import router from './routes/index';

const app = express();
const port = 1245;

app.use('/', router);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}/`);
});

export default app;
