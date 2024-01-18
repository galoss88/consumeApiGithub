import { Router } from "express";
import { getPopularGithubUsers } from "../controllers/usersGithub/getPopularGithubUsers";

const route = Router()
route.get("/getPopularGithubUsers",getPopularGithubUsers)

export default route