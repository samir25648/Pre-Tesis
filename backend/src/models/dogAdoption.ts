import { DogAdoption } from "../interfaces/dogAdoption.interface";
import { Schema, model } from "mongoose";

const DogAdoptionSchema = new Schema<DogAdoption>({
  numero: { type: Number, required: true },
  nombre: { type: String, required: true },
  genero: { type: String, required: true },
  adoptado: { type: Boolean, required: true },
  dueño: { type: String, required: true },
  edad: { type: Number, required: true },
  imagen: { type: String, required: true },
  raza: { type: String, required: true },
  vacacion: { type: Boolean, required: true },
});

const DogAdoptionModel = model("dogAdoption", DogAdoptionSchema);

export default DogAdoptionModel;
