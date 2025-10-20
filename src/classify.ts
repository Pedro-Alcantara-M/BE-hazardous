import natural from "natural";
import { Booking, ClassificationResult } from "./types.js";

const hazardousKeywords = [
  "asbestos",
  "chemical",
  "acid",
  "paint",
  "battery",
  "fuel",
  "oil",
  "gas",
  "solvent",
  "toxic",
  "flammable",
  "hazardous",
  "pesticide",
  "cleaner",
  "bleach",
  "detergent",
  "radiation",
  "medical waste",
];

export const classifyBooking = (booking: Booking): ClassificationResult => {
  const { description = "", products = [], internalNotes = "" } = booking;
  const combinedText = `${description} ${products.join(
    " "
  )} ${internalNotes}`.toLowerCase();

  const tokenizer = new natural.WordTokenizer();
  const tokens = (tokenizer.tokenize(combinedText) ?? []) as string[];

  const score = tokens.reduce((acc, token) => {
    const match = hazardousKeywords.some(
      (kw) => natural.JaroWinklerDistance(kw, token, {}) > 0.9
    );
    return acc + (match ? 1 : 0);
  }, 0);

  const hazardous = score > 0;
  return { ...booking, hazardous };
};
