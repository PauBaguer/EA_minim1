import { PersonaModel } from "../models/persona.js";
import { UserModel } from "../models/user.js";
import { VacunaModel } from "../models/vacuna.js";

export async function populateDB() {
  const persona1 = new UserModel({ name: "Fulanito", email: "a@a.a", age: 1 });
  const persona2 = new UserModel({ name: "Menganito", email: "b@b.b", age: 2 });
  const persona3 = new UserModel({ name: "Zutanito", email: "c@c.c", age: 3 });

  await persona1.save();
  await persona2.save();
  await persona3.save();
}
