import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER, //
  password: process.env.MYSQL_PASSWORD, //
  database: process.env.MYSQL_DATABASE
}).promise()


export async function createTest(name, key) {
  const [result] = await pool.query(`
  INSERT INTO PruebaAPI (Nombre, Clave) 
  VALUES (?, ?)
  `, [name, key])
  return result
}

export async function getTest(id) {
  const [rows] = await pool.query(`
  SELECT * 
  FROM PruebaAPI
  WHERE ID_prueba = ?
  `, [id])
  return rows[0]
}

export async function getTestAll() {
  const [rows] = await pool.query(`
  SELECT * 
  FROM PruebaAPI
  `, [])
  return rows
}