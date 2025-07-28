import { Request, Response } from 'express'
import { knex } from '../database/knex'

export class AppointmentsController {
  async create(req: Request, res: Response) {
    const {
      id_dentist,
      id_patient,
      id_procedure,
      name,
      date,
      payment_method,
      payment_date,
      observations,
      status,
    } = req.body

    await knex('appointments').insert({
      id_dentist,
      id_patient,
      id_procedure,
      name,
      date,
      payment_method,
      payment_date,
      observations,
      status,
    })

    const appointments = await knex('appointments').select()

    res.send(appointments)
  }

  async index(req: Request, res: Response) {
    const appointments = await knex('appointments').select()
    res.send(appointments)
  }

  async show(req: Request, res: Response) {
    const { id } = req.params
    const appointment = await knex('appointments').select().where({ id })
    res.send(appointment)
  }

  async update(req: Request, res: Response) {
    const { id } = req.params

    const {
      id_dentist,
      id_patient,
      id_procedure,
      name,
      date,
      payment_method,
      payment_date,
      observations,
      status,
    } = req.body
    await knex('appointments')
      .update({
        id_dentist,
        id_patient,
        id_procedure,
        name,
        date,
        payment_method,
        payment_date,
        observations,
        status,
      })
      .where({ id })

    const appointment = await knex('appointments').select().where({ id })

    res.send(appointment)
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params
    await knex('appointments').delete().where({ id })
    res.json({ message: 'appointment deleted' })
  }
}
