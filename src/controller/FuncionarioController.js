import {createFuncionario, getFuncionarioById, getFuncionarios, deleteFuncionario, updateFuncionario} from '../models/funcionario.js'

export const cadastrarFuncionario = async (req, res) => {
    try {
        const funcionario = req.body;
        const result = await createFuncionario(funcionario);
        res.status(201).json({ message: 'Funcionário cadastrado com sucesso', id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const listarFuncionarios = async (req, res) => {
    try {
        const funcionarios = await getFuncionarios();
        res.status(200).json(funcionarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const buscarFuncionario = async (req, res) => {
    try {
        const funcionario = await getFuncionarioById(req.params.id);
        if (!funcionario) return res.status(404).json({ message: 'Funcionário não encontrado' });
        res.status(200).json(funcionario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const atualizarFuncionario = async (req, res) => {
    try {
        const result = await updateFuncionario(req.params.id, req.body);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Funcionário não encontrado' });
        res.status(200).json({ message: 'Funcionário atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const excluirFuncionario = async (req, res) => {
    try {
        const result = await deleteFuncionario(req.params.id);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Funcionário não encontrado' });
        res.status(200).json({ message: 'Funcionário excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};