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

  // // Step 1: Generate a random transaction
  // const newTransaction = generateRandomTransaction();

  // try {
  //   // Step 2: Store the transaction via REST API
  //   const storedTransaction = await createTransaction(newTransaction);
  //   console.log('Transaction stored:', storedTransaction);

  //   // Step 3: Update the confirmed property after 10 seconds
  //   setTimeout(async () => {
  //     try {
  //       await updateTransaction(storedTransaction.id);
  //       console.log(`Transaction ${storedTransaction.id} confirmed.`);
  //     } catch (error) {
  //       console.error(`Error confirming transaction ${storedTransaction.id}:`, error);
  //     }
  //   }, 10000); // 10-second delay
  // } catch (error) {
  //   console.error('Error during transaction process:', error);
  // }
}

// Schedule the task to run every minute
export function startScheduler() {
  handleTransaction();
}
