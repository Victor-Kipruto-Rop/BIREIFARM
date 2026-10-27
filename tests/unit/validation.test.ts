import { describe, expect, it } from "vitest";
import { enquirySchema } from "../../src/lib/validation";
const valid = {name:"Jane Wanjiku",email:"jane@example.com",phone:"",subject:"General enquiry",message:"I would like to learn more about your farm.",website:""};
describe("enquirySchema", () => {
  it("accepts a valid enquiry", () => { expect(enquirySchema.safeParse(valid).success).toBe(true); });
  it("rejects invalid email addresses", () => { expect(enquirySchema.safeParse({...valid,email:"not-an-email"}).success).toBe(false); });
  it("rejects short messages", () => { expect(enquirySchema.safeParse({...valid,message:"Hi"}).success).toBe(false); });
  it("rejects unexpected enquiry subjects", () => { expect(enquirySchema.safeParse({...valid,subject:"Make payment"}).success).toBe(false); });
});
