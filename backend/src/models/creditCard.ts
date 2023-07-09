import { CreditCard } from "../interfaces/creditCard";
import { Schema, model } from "mongoose";

const CreditCardSchema = new Schema<CreditCard>({
  numeroTarjeta: { type: Number, required: true },
  fechaCaducidad: { type: String, required: true },
  codigoVerificacion: { type: String, required: true },
});

const CreditCardModel = model("creditCard", CreditCardSchema);

export default CreditCardModel;
