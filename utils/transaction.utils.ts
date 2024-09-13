import { v4 as uuidv4 } from 'uuid';

export interface Transaction {
  id: string;
  value: number;
  confirmed: boolean;
  timeStamp: number;
  sender: string;
  receiver: string
}

export function generateRandomTransaction(): Transaction {
  return {
    id: uuidv4(),
    value: parseInt((Math.random() * 1000).toFixed(2)), // Random amount between 0 and 1000
    confirmed: false,
    timeStamp: Date.now(),
    sender: uuidv4(),
    receiver: uuidv4()
  };
}
