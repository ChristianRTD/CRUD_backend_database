import mysql from 'serverless-mysql'

export const conn = mysql({
    config: {
        host: 'localhost',
        user: 'Global',
        password: 'globaltune202',
        port: 3306,
        database: 'SQL-Global'
        }
    
})