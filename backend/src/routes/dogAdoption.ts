import { Router } from "express";
import {
  postDogAdoptionCtrl,
  getDogAdoptionCtrl,
  updateDogAdoptionCtrl,
  deleteDogAdoptionCtrl,
  getDogAdoptionsCtrl,
  uploadImageCtrl
} from "../controllers/dogAdoption";
import fileUpload from "express-fileupload";
const router = Router();

router.get("/", getDogAdoptionsCtrl);

router.get("/:id", getDogAdoptionCtrl);

router.post('/', postDogAdoptionCtrl);

router.post(
  "/upload",
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  }),
  uploadImageCtrl
);

router.put("/:id", updateDogAdoptionCtrl);

router.delete("/:id", deleteDogAdoptionCtrl);

export { router };
