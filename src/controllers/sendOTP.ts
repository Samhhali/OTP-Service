import { Request, Response } from "express";
import { sendOTPToPhone } from "../services/sendOTPToPhone";

/**
 * controller of sending otp
 * @param req
 * @param res
 */
export const sendOTP = (req: Request, res: Response) => {
  const OTPBody = req.body;
  const OTPResponse = sendOTPToPhone(OTPBody);
  return res.send();
};
