import { Booking } from "./types.js";
import { classifyBooking } from "./classify.js";

const updateData = (id: string, data: Record<string, any>) => true;

export const backfillRecords = async (records: Booking[]) => {
  for (let i = 0; i < records.length; i++) {
    const classified = classifyBooking(records[i]);
    updateData(records[i].id, { hazardous: classified.hazardous });

    if (i % 100 === 0 && i !== 0) {
      await new Promise((r) => setTimeout(r, 1000));
    }
  }
};
