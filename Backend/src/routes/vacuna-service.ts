import express, { Request, Response } from "express";
import { Persona, PersonaModel } from "../models/persona.js";
import { Vacuna, VacunaModel } from "../models/vacuna.js";

async function getAll(req: Request, res: Response) {
  const personas: Persona[] = await PersonaModel.find().populate("vacunas");
  res.status(200).send(personas);
}

async function addVacuna(req: Request, res: Response) {
  try {
    const { name, description, tecnology, aprovalDate } = req.body;
    const { personaName } = req.params;
    const persona = await PersonaModel.findOne({ name: personaName });

    if (!persona) {
      res.status(406).send({ message: "Persona not found" });
      return;
    }

    const vacuna = new VacunaModel({
      name,
      description,
      tecnology,
      aprovalDate,
    });
    const savedVacuna = await vacuna.save();

    await PersonaModel.updateOne(
      { _id: persona._id },
      { $push: { vacunas: savedVacuna._id } }
    );

    res.status(201).send({ message: "Vacuna added." });
  } catch (e) {
    res.status(500).send({ message: `Server error: ${e}` });
  }
}

// async function deleteById(req, res) {
//   const { id } = req.params;
//   const delResult = await UserModel.deleteOne({ _id: id });

//   if (!delResult.deletedCount) {
//     res.status(404).send({ message: `User with id ${id} not found` });
//     return;
//   }

//   const users: User[] = await UserModel.find();
//   res.status(200).send(users);
// }

let router = express.Router();

router.get("/", getAll);
router.post("/:personaName", addVacuna);
// router.delete("/:id", deleteById);

export default router;
