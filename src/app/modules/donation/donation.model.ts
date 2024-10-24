import { Schema, model, Document } from "mongoose";
import { IDonation } from "./donation.interface";

const addressSchema = new Schema({
  division: { type: String, required: true },
  district: { type: String, required: true },
  upazila: { type: String, required: true },
  hospital: { type: String, required: true },
});

// Mongoose Schema for Donation
const donationSchema = new Schema({
  donorId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  receiverId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  donatedAt: { type: Date, required: true },
  patientProblem: { type: String, required: true },
  location: { type: addressSchema, required: true },
  isEmergency: { type: Boolean, required: true },
  bloodGroup: { type: String, required: true },
  plasma: { type: Boolean, required: true },
  donationTime: { type: Date, required: true },
  feedback: { type: Schema.Types.ObjectId, ref: "Feedback", required: true },
});

const DonationModel = model<IDonation & Document>("Donation", donationSchema);

export default DonationModel;