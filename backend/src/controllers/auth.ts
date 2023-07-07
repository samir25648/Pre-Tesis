import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth";

const registerCtrl = async ({ body }: Request, res: Response) => {
  const responseUser = await registerNewUser(body);
  res.send(responseUser);
};

const loginCtrl = async ({ body }: Request, res: Response) => {
  const { usuario, password } = body;
  const responseUser = await loginUser({ usuario, password });
  if (responseUser === "PASSWORD_INCORRECT") {
    res.status(403).send(responseUser);
  } else {
    res.send(responseUser);
  }
};

export { registerCtrl, loginCtrl };
