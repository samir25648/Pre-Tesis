import { Router } from "express";
import {
  postDogDicCtrl,
  getDogDicCtrl,
  updateDogDicCtrl,
  deleteDogDicCtrl,
  getDogDicsCtrl,
} from "../controllers/dogDic";

import { checkJwt } from "../middleware/session";

const router = Router();

router.get("/",checkJwt, getDogDicsCtrl);


router.get("/:id",checkJwt, getDogDicCtrl);

router.post("/",checkJwt, postDogDicCtrl);

router.put("/:id",checkJwt, updateDogDicCtrl);

router.delete("/:id",checkJwt, deleteDogDicCtrl);

export { router };
