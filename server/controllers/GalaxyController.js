import express from "express";
import BaseController from "../utils/BaseController";
import { planetsService } from "../services/PlanetsService";
import { galaxyService } from "../services/GalaxyService";

export class GalaxyController extends BaseController {
  constructor() {
    super("api/galaxy");
    this.router
      .get("", this.getAll)
      .get("/:id/planets", this.getPlanets)
      .post("", this.create)
      .get("", this.getById)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      let data = await galaxyService.find(req.query)
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req,res,next){
    try{
      let data = await galaxyService.findById(req.params.id)
      res.send(data)
    }catch(error){
      next(error)
    }
  }

  async getPlanets(req,res,next){
    try{
      let data= await planetsService.find({galaxy:req.params.id})
      res.send(data)
    }catch(error){
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await galaxyService.create(req.body)
      
      res.status(201).send(data) // REVIEW what is status 201 means here.
    } catch (error) {
      next(error);
    }
  }

  async edit(req,res,next){
    try{
      req.body.id = req.params.id
      let data=await galaxyService.edit(req.body)
      res.send(data)
    }catch(error){
      next(error)
    }
  }

  async delete(req,res,next){
    try{
      await galaxyService.delete(req.params.id)
      res.send("You go to TRASH")
    }catch(error){
      next(error)
    }
  }
}
