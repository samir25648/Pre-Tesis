import { Router } from "express";
import {
  postDogDicCtrl,
  getDogDicCtrl,
  updateDogDicCtrl,
  deleteDogDicCtrl,
  getDogDicsCtrl,
  uploadImageCtrl
} from "../controllers/dogDic";
import fileUpload from "express-fileupload";
import { checkJwt } from "../middleware/session";

const router = Router();

router.get("/", checkJwt, getDogDicsCtrl);

router.get("/:id", checkJwt, getDogDicCtrl);

router.post("", postDogDicCtrl)

router.post(
  "/",
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  }),
  uploadImageCtrl
);

router.put("/:id", checkJwt, updateDogDicCtrl);

router.delete("/:id", checkJwt, deleteDogDicCtrl);

export { router };
