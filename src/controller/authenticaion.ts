import express from "express";
import { getUserByEmail, createUser } from "db/users";
import { random, authentication } from "helpers";

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "no email or no password" });
    }
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
