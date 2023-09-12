import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

const connectionSqlite = {
  filename: env.DATABASE_URL,
}
const connectionPg = env.DATABASE_URL
const configConnection =
  env.DATABASE_CLIENT === 'sqlite' ? connectionSqlite : connectionPg

export const config: Knex.Config = {
  client: env.DATABASE_CLIENT,
  connection: configConnection,
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
