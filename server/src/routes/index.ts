import { Router } from "express";
import {
  getVisitor,
  insertVisitor,
  updateVisitorShareStatus,
  updateVisitorEmail,
} from "../controllers/index.controller";
export const router = Router();

router.get("/visitor", getVisitor);
router.post("/visitor", insertVisitor);
router.put("/visitor/:id/share", updateVisitorShareStatus);
router.put("/visitor/:id/email", updateVisitorEmail);
