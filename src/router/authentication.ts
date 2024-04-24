import express from "express";
import { register } from "../controller/authenticaion";
export default (router: express.Router) => {
  router.post("/auth/register", register);
};
