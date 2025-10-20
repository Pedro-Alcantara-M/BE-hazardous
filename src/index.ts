import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { classifyBooking } from "./classify.js";
import { backfillRecords } from "./backfill.js";
import { Booking } from "./types.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("🚀 Backend is running! Welcome to the API.");
});

app.post("/classify", (req: Request, res: Response) => {
  const booking: Booking = req.body;
  if (!booking) return res.status(400).json({ error: "Missing booking data" });

  const result = classifyBooking(booking);
  res.json(result);
});

app.post("/backfill", async (req: Request, res: Response) => {
  const bookings: Booking[] = req.body.bookings;
  if (!Array.isArray(bookings)) return res.status(400).json({ error: "Invalid input" });

  await backfillRecords(bookings);
  res.json({ success: true, updated: bookings.length });
});

app.listen(4000, () => console.log("🚀 Backend running on port 4000"));
