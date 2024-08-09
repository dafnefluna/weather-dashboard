import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Router } from 'express';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = Router();

// TODO: Define route to serve index.html

router.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, '../../../client/dist/index.html'));
})
// const app = express();
// const PORT = 3001;

// app.use(express.static('public'));
// app.get('/', (_req: Request, res: Response) => res.send('Navigate to /send or /paths'));

// app.get('/routes', (_req: Request, res: Response) => {
//     res.sendFile(path.join(__dirname, './client/src/index.html'));
// });

export default router;
