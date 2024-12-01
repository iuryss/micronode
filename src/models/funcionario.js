import pool from '../config/database.js';

export const createFuncionario = async (funcionario) => {
    const [result] = await pool.query(
    'INSERT INTO funcionario (nome, telefone, endereco, salario, profissao) VALUES (?, ?, ?, ?, ?)',
    [funcionario.nome, funcionario.telefone, funcionario.endereco, funcionario.salario, funcionario.profissao]
    );
    return result;
};

export const getFuncionarios = async () => {
  const [rows] = await pool.query('SELECT * FROM funcionario');
    return rows;
};

export const getFuncionarioById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM funcionario WHERE id_funcionario = ?', [id]);
    return rows[0];
};

export const updateFuncionario = async (id, funcionario) => {
    const [result] = await pool.query(
    'UPDATE funcionario SET nome = ?, telefone = ?, endereco = ?, salario = ?, profissao = ? WHERE id_funcionario = ?',
    [funcionario.nome, funcionario.telefone, funcionario.endereco, funcionario.salario, funcionario.profissao, id]
    );
    return result;
};

export const deleteFuncionario = async (id) => {
    const [result] = await pool.query('DELETE FROM funcionario WHERE id_funcionario = ?', [id]);
    return result;
};
