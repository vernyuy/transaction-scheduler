import axios from 'axios';
import { Transaction } from '../utils/transaction.utils';

const API_URL = process.env.API_URL || 'http://localhost:8282/api'; // Default URL for API

export async function createTransaction(transaction: Transaction): Promise<Transaction> {
  try {
    const response = await axios.post(`${API_URL}/`, transaction);
    return response.data;
  } catch (error) {
    console.error('Error creating transaction:', error);
    throw error;
  }
}

export async function updateTransaction(transactionId: string): Promise<void> {
  try {
    await axios.put(`${API_URL}/transaction/${transactionId}`, { confirmed: true });
  } catch (error) {
    console.error('Error updating transaction:', error);
    throw error;
  }
}
