import { Router } from "express";
import { sendOTP } from "../controllers/sendOTP";
const router = Router();

router.post("/phone/otp", sendOTP);

export default router;
