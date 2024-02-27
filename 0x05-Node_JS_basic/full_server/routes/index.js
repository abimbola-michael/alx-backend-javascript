import express from "express";
import AppController from "../controllers/AppController";
const router = express.Router();

router.get("/", AppController.getHomepage());
router.get("/students", AppController.getStudents());
router.get("/students/:major", AppController.getStudentsByMajor());

export default router;
