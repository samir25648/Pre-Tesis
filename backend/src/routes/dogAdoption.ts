import { Router } from "express";
import {
  postDogAdoptionCtrl,
  getDogAdoptionCtrl,
  updateDogAdoptionCtrl,
  deleteDogAdoptionCtrl,
  getDogAdoptionsCtrl,
} from "../controllers/dogAdoption";

const router = Router();

router.get("/", getDogAdoptionsCtrl);

router.get("/:id", getDogAdoptionCtrl);

router.post("/", postDogAdoptionCtrl);

router.put("/:id", updateDogAdoptionCtrl);

router.delete("/:id", deleteDogAdoptionCtrl);

export { router };
