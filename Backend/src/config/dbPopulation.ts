import { PersonaModel } from "../models/persona.js";
import { VacunaModel } from "../models/vacuna.js";

export async function populateDB() {
  const vacuna1 = new VacunaModel({
    name: "Moderna",
    tecnology: "ARNm",
    aprovalDate: Date.now(),
  });

  const v1 = await vacuna1.save();

  const persona1 = new PersonaModel({ name: "Fulanito", vacunas: [v1._id] });
  const persona2 = new PersonaModel({ name: "Menganito" });
  const persona3 = new PersonaModel({ name: "Zutanito" });

  await persona1.save();
  await persona2.save();
  await persona3.save();
}
