import { DogDic } from "../interfaces/dogDic.interface";
import { Schema, model } from "mongoose";

const DogDicSchema = new Schema<DogDic>({
  numero: { type: Number, required: true },
  nombre: { type: String, required: true },
  genero: { type: String, required: true },
  dueño: { type: String, required: true },
  edad: { type: Number, required: true },
  image: {
    secure_url: String,
    public_id: String,
  },
  raza: { type: String, required: true },
  vacacion: { type: Boolean, required: true },
});

const DogDicModel = model("dogDic", DogDicSchema);

export default DogDicModel;
