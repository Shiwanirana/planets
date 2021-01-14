import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Galaxy = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    numberOfStars: {type: Number, required: true},
    numberOfSolarSystems: {type: Number},
    hasSolarSystem: {type: Boolean, default: false}
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Galaxy;
