import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class GalaxyService {
  async find(query={}) {
    return await dbContext.Galaxy.find(query);
  
  }
  async findById(id) {
    let galaxy = await dbContext.Galaxy.findById(id);
    if (!galaxy) {
      throw new BadRequest("Invalid Id");
    }
    return galaxy;
  }

  async create(galaxy){
    return await dbContext.Galaxy.create(galaxy)
  }
  async edit(update, user){
    let updated= await dbContext.Galaxy.findOneAndUpdate({_id: update.id},update,{new:true})
    if(!updated){
      throw new BadRequest("invalid id")
    }
    return updated
  }
  async delete(id){
    let deleted = await dbContext.Galaxy.findOneAndDelete({_id: id})
    if(!deleted){
      throw new BadRequest("invalid id")
    }
  }
}

export const galaxyService = new GalaxyService();