import { Request, Response } from 'express'
import { knex } from '../database/knex'

export class DentistsController {
  async create(req: Request, res: Response) {
    const { cro, name, email, password, phone } = req.body

    await knex('dentists').insert({ cro, name, email, password, phone })
    res.send({ cro, name, email, password, phone })
  }

  async index(req: Request, res: Response) {
    const dentists = await knex('dentists').select()
    res.send(dentists)
  }

  async show(req: Request, res: Response) {
    const { id } = req.params
    const dentist = await knex('dentists').where({ id })
    res.send(dentist)
  }

  async update(req: Request, res: Response) {
    const { id } = req.params
    const { cro, name, email, password, phone } = req.body

    await knex('dentists')
      .update({ cro, name, email, password, phone })
      .where({ id })
    res.send({ cro, name, email, password, phone })
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params

    await knex('dentists').delete().where({ id })
    res.send({ message: 'Deleted' })
  }
}
