import express from "express";
import { get, merge } from "lodash";
import { getUserBySessionToken } from "../db/users";

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const sessionToken = req.cookies["SWTY-AUTH"];
    if (!sessionToken) {
      return res.sendStatus(400);
    }
    const existingUser = await getUserBySessionToken(sessionToken);
    if (!existingUser) {
      return res.sendStatus(400);
    }
    merge(req, { identity: existingUser });
    return next();
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

export const isOwner = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { id } = req.params;
    const currentUserId = get(req, "identity._id") as string;
  } catch (error) {
    console.log(error);
  }
};
