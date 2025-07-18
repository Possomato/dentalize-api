import { Request, Response } from 'express'
import { knex } from '../database/knex'

export class PatientsController {
  async create(req: Request, res: Response) {
    const { name, phone, email, observations } = req.body

    await knex('patients').insert({ name, phone, email, observations })
    res.send({ name, phone, email, observations })
  }

  async index(req: Request, res: Response) {
    const patients = await knex('patients').select()

    res.send(patients)
  }

  async show(req: Request, res: Response) {
    const { id } = req.params
    const patient = await knex('patients').where({ id })

    res.send(patient)
  }

  async update(req: Request, res: Response) {
    const { id } = req.params
    const { name, phone, email, observations } = req.body

    await knex('patients')
      .update({ name, phone, email, observations })
      .where({ id })

    res.send({ name, phone, email, observations })
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params

    await knex('patients').delete().where({ id })
    res.send({ message: 'Deleted' })
  }
}
