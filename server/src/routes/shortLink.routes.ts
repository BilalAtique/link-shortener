import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware";
import {
  createShortLink,
  deleteLinkById,
  getUserShortLinks,
} from "../controllers/shortLink.controller";

const router = Router();

router.route("/").post(verifyJWT, createShortLink);

router.route("/").get(verifyJWT, getUserShortLinks);

router.route("/").delete(verifyJWT, deleteLinkById);

export default router;
