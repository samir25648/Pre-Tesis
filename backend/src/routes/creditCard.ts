import { Router } from "express";
import {
  postCreditCardCtrl,
  getCreditCardCtrl,
  updateCreditCardCtrl,
  deleteCreditCardCtrl,
  getCreditCardsCtrl,
} from "../controllers/creditCard";

const router = Router();

router.get("/", getCreditCardsCtrl);

router.get("/:id", getCreditCardCtrl);

router.post("/", postCreditCardCtrl);

router.put("/:id", updateCreditCardCtrl);

router.delete("/:id", deleteCreditCardCtrl);

export { router };
