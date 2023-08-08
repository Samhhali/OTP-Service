import { OTP } from "../models/OTP";
import otpGenerator from "otp-generator";
import { OTP_DURATION_IN_MINUTES } from "../config/constants";
export const sendOTPToPhone = (OTPBody: OTP) => {
  // service implementation
  const otp = otpGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
  const expireDate = AddMinutesToDate(new Date(), OTP_DURATION_IN_MINUTES); // add 5 minutes to current date
  const OTPInstance = new OTP();
  OTPInstance.code = otp;
  OTPInstance.expireAt = expireDate;
  return;
};
/**
 * Adds minutes to a given date. to calculate the expire date of the otp
 * @param {Date} date - The date to add minutes to.
 * @param {number} minutes - The number of minutes to add to the date.
 * @returns {Date} - The new date with added minutes.
 */
function AddMinutesToDate(date: Date, minutes: any) {
  return new Date(date.getTime() + Number(minutes) * 60000);
}
