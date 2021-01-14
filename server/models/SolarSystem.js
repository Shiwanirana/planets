import mongoose from "mongoose";
const Schema = mongoose.Schema;

const SolarSystem = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    numberOfPlanets: {type: Number},
    
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default SolarSystem;
