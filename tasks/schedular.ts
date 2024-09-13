import { generateRandomTransaction } from '../utils/transaction.utils';
import { createTransaction, updateTransaction } from '../api/transaction.api';
import nodeSchedule from 'node-schedule';

async function handleTransaction() {
  nodeSchedule.scheduleJob('* * * * *', async function () {
    const transaction = generateRandomTransaction();
    console.log('Generated transaction:', transaction);
  
    const storedTransaction = await createTransaction(transaction);
  
    if (storedTransaction && storedTransaction.id) {
      // Update the confirmed property after 10 seconds
      setTimeout(() => {
        updateTransaction(storedTransaction.id);
      }, 10000); // 10 seconds
    }
  });
}

// Schedule the task to run every minute
export function startScheduler() {
  handleTransaction();
}
