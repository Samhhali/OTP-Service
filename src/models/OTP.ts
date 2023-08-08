import uui from "uuid";
export class OTP {
  id: string;
  code: string;
  expireAt: Date;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
  constructor() {
    this.id = this.generateUUID();
    this.createdAt = new Date();
  }

  /**
   * generating UUID for OTP
   * @returns {string} UUID
   */
  generateUUID(): string {
    return uui.v4();
  }
}
