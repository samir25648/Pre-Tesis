import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/auth";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({
  usuario,
  password,
  nombre,
  apellido,
  correo,
}: User) => {
  const checkIs = await UserModel.findOne({ usuario });
  if (checkIs) return "ALREADY_USER";
  const passHash = await encrypt(password);
  const registerNewUser = await UserModel.create({
    usuario,
    password: passHash,
    nombre,
    apellido,
    correo,
  });
  return registerNewUser;
};

const loginUser = async ({ usuario, password }: Auth) => {
  const checkIs = await UserModel.findOne({ usuario });
  if (!checkIs) return "NOT_FOUND_USER";
  const passwordHash = checkIs.password; // password encriptado

  const isCorrect = await verified(password, passwordHash);

  if (!isCorrect) return "PASSWORD_INCORRECT";

  const token = generateToken(checkIs.usuario);
  const data = {
    token,
    user: checkIs,
  };
  return data;
};

export { registerNewUser, loginUser };
