import { startScheduler } from './tasks/schedular';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Start the scheduler
startScheduler();
