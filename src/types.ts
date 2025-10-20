export interface Booking {
  id: string;
  customerName: string;
  companyName: string;
  date: string;
  description?: string;
  products?: string[];
  internalNotes?: string;
}

export interface ClassificationResult extends Booking {
  hazardous: boolean;
}
