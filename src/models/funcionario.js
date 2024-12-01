import pool from '../config/database.js';

export const createFuncionario = async (funcionario) => {
    const [result] = await pool.query(
    'INSERT INTO funcionario (nome, telefone, endereco, profissao, salario) VALUES (?, ?, ?, ?, ?)',
    [funcionario.nome, funcionario.telefone, funcionario.endereco, funcionario.profissao, funcionario.salario]
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
