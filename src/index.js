import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

import rotas from './routes/rotas.js'

app.use('/api', rotas);

const PORT = process.env.PORT || 3300;

app.listen({port:PORT, host:'0.0.0.0'}, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Servidor rodando na porta ${PORT}`);
});