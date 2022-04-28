import express, { Request, Response } from "express";
import { FAQModel, FAQ } from "../models/faq.js";
import { UserModel } from "../models/user.js";

async function getAll(req: Request, res: Response) {
  try {
    const faqs: FAQ[] = await FAQModel.find().populate(["userA", "userQ"]);
    res.status(200).send(faqs);
  } catch (e) {
    res.status(500).send({ message: `Server error: ${e}` });
  }
}

async function getById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const faq = await FAQModel.findById(id);
    if (!faq) {
      res.status(404).send({ message: "FAQ not found" });
      return;
    }

    res.status(200).send(faq);
  } catch (e) {
    res.status(500).send({ message: `Server error: ${e}` });
  }
}

async function addFAQ(req: Request, res: Response) {
  try {
    const { userQ, question, userA, answer, postingDate } = req.body;
    console.log({ userQ, userA, question, answer, postingDate });

    const uQ = await UserModel.findById(userQ);
    const uA = await UserModel.findById(userA);

    console.log(uQ);
    console.log(uA);
    if (!(uQ && uA)) {
      res.status(404).send({ message: "Users not found" });
      return;
    }

    const faq = new FAQModel({
      userQ,
      question,
      userA,
      answer,
      postingDate,
    });
    const savedFAQ = await faq.save();
    console.log(savedFAQ);

    res.status(201).send({ message: "FAQ added." });
  } catch (e) {
    res.status(500).send({ message: `Server error: ${e}` });
  }
}

async function updateFAQ(req: Request, res: Response) {
  try {
    const { userQ, question, userA, answer, postingDate } = req.body;
    const { id } = req.params;

    const faq = await FAQModel.findById(id);

    if (!faq) {
      res.status(404).send({ message: "FAQ not found" });
      return;
    }

    const uQ = await UserModel.findById(userQ);
    const uA = await UserModel.findById(userA);

    if (!(uQ && uA)) {
      res.status(404).send({ message: "Users not found" });
      return;
    }

    const result = await FAQModel.updateOne(
      { _id: id },
      { userQ, question, userA, answer, postingDate }
    );
    console.log("UPDATE RESULT");
    console.log(result);

    res.status(201).send({ message: "FAQ updated." });
  } catch (e) {
    res.status(500).send({ message: `Server error: ${e}` });
  }
}

async function deleteById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const delResult = await FAQModel.deleteOne({ _id: id });

    if (!delResult.deletedCount) {
      res.status(404).send({ message: `FAQ with id ${id} not found` });
      return;
    }

    res.status(200).send({ message: `Deleted FAQ with id ${id}` });
  } catch (e) {
    res.status(500).send({ message: `Server error: ${e}` });
  }
}

let router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", addFAQ);
router.put("/:id", updateFAQ);
router.delete("/:id", deleteById);

export default router;
