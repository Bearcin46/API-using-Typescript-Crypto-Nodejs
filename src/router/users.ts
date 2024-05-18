import express from "express";
import { deleteUser, getAllUsers } from "../controller/users";
import { isAuthenticated } from "middleware";

export default (router: express.Router) => {
  router.get("/users", isAuthenticated, getAllUsers);
  router.delete("/users/:id", deleteUser);
};
