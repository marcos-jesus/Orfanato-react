import { DataSource } from 'typeorm'
import * as SQLite from 'sqlite3'

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './src/database/database.sqlite',
  driver: SQLite,
  logging: false,
  synchronize: false,
})

AppDataSource.initialize()
  .then(() => {
    console.log('Database Rodando!')
  }).catch(err => {
    console.log('DataSource falhou:'+err)
  })

