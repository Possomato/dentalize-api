import { Request, Response } from 'express'
import { knex } from '../database/knex'

export class ProceduresController {
  async create(req: Request, res: Response) {
    const { name, description, value } = req.body

    await knex('procedures').insert({ name, description, value })
    res.send({ name, description, value })
  }

  async index(req: Request, res: Response) {
    const procedures = await knex('procedures').select()

    res.send(procedures)
  }

  async show(req: Request, res: Response) {
    const {id} = req.params
    const procedure = await knex('procedures').where({id})

    res.send(procedure)
  }

  async update(req: Request, res: Response){
    const {id} = req.params
    const {name, description, value} = req.body

    await knex('procedures').update({name, description, value}).where({id})
    const procedures = await knex('procedures').select()
    res.send(procedures)
  }

  async delete(req: Request, res: Response){
    const {id} = req.params

    await knex('procedures').delete().where({id})
    const procedures = await knex('procedures').select()
    res.send(procedures)
  }
}
