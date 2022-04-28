import mongoose from "mongoose";
import { Vacuna } from "./vacuna.js";

const Schema = mongoose.Schema;
const model = mongoose.model;

export interface Persona {
  name: String;
  vacunas: Vacuna[];
}

const personaSchema = new Schema<Persona>({
  name: String,
  vacunas: [{ type: Schema.Types.ObjectId, ref: "Vacuna", default: [] }],
});

export const PersonaModel = model<Persona>("Persona", personaSchema);
