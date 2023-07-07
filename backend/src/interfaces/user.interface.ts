import { Auth } from "./auth.interface";

export interface User extends Auth {
  nombre: string;
  apellido: string;
  correo: string;
}
