import axios from 'axios';
import pool from '../config/database.js';

export const createFuncionario = async (funcionario) => {
    const eventoID =  await fetchEvento();
    const [result] = await pool.query(
    'INSERT INTO funcionario (nome, telefone, endereco, profissao, salario, eventoID) VALUES (?, ?, ?, ?, ?, ?)',
    [funcionario.nome, funcionario.telefone, funcionario.endereco, funcionario.profissao, funcionario.salario, eventoID]
    );
    return result;
};

export const getFuncionarios = async () => {
  const [rows] = await pool.query('SELECT * FROM funcionario');
    return rows;
};

export const getFuncionarioById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM funcionario WHERE id = ?', [id]);
    return rows[0];
};

export const updateFuncionario = async (id, funcionario) => {
    const [result] = await pool.query(
    'UPDATE funcionario SET nome = ?, telefone = ?, endereco = ?, profissao = ?, salario = ? WHERE id = ?',
    [funcionario.nome, funcionario.telefone, funcionario.endereco, funcionario.profissao, funcionario.salario, id]
    );
    return result;
};

export const deleteFuncionario = async (id) => {
    const [result] = await pool.query('DELETE FROM funcionario WHERE id = ?', [id]);
    return result;
};

export const getProfessores = async () => {
    const [result] = await pool.query("SELECT * FROM funcionario WHERE profissao = ?", ["PROFESSOR"]);
    return result;
};

const fetchEvento = async () => {
    try {
        const response = await axios.get('https://av3ronaldo-production.up.railway.app/eventos');
        const eventos = response.data;
        if (eventos.length === 0) {
           return null;
        }
        const eventoAleatorio = eventos[Math.floor(Math.random() * eventos.length)];
        return eventoAleatorio.id;
    } catch (error) {
        console.error('Erro ao buscar eventos:', error.message);
        throw new Error('Não foi possível buscar eventos.');
    }
}

