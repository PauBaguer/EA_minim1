import mongoose from "mongoose";
const Schema = mongoose.Schema;
const model = mongoose.model;

export interface Vacuna {
  name: String;
  description: String;
  tecnology: String;
  aprovalDate: Date;
}

const vacunaSchema = new Schema<Vacuna>({
  name: String,
  description: String,
  tecnology: String,
  aprovalDate: Date,
});

export const VacunaModel = model<Vacuna>("Vacuna", vacunaSchema);
