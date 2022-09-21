import fs from 'fs/promises'
import { Db } from 'mongodb'
import conectaBanco from './utils/conecta'

export default class Config {
  private static instance: Config

  public configuration: {
    server: {
      port: number
      addres: string
    }
    banco: {
      url: string
      pass: string
      user: string
    }
    security: { secret: string }
  }

  public banco: Db | null

  private constructor() {
    this.configuration = {
      server: {
        port: 3001,
        addres: '',
      },
      banco: {
        url: '',
        pass: '',
        user: '',
      },
      security: { secret: '' },
    }
    this.banco = null
  }

  public static async getInstance() {
    if (!Config.instance) {
      Config.instance = new Config()
      const configFile = await fs.readFile('.config.json', 'utf-8')
      Config.instance.configuration = JSON.parse(configFile)
      Config.instance.banco = (await conectaBanco()).db('application')
    }
    return Config.instance
  }
}
