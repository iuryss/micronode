import express from 'express';
import { pegarProfessores, cadastrarFuncionario, listarFuncionarios, buscarFuncionario, atualizarFuncionario, excluirFuncionario } from '../controller/FuncionarioController.js';

const router = express.Router();

router.post('/funcionario', cadastrarFuncionario);
router.get('/funcionario', listarFuncionarios);
router.get('/funcionario/:id', buscarFuncionario);
router.get('/funcionario/professores',pegarProfessores)
router.put('/funcionario/:id', atualizarFuncionario);
router.delete('/funcionario/:id', excluirFuncionario);

export default router;