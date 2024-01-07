import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware";
import { createShortLink } from "../controllers/shortLink.controller";

const router = Router();

router.route("/").post(verifyJWT, createShortLink);

export default router;
