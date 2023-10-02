import { NyTimesClients } from '@/services/api/news/ny-times/NyTimesClients';
import { config } from '@/services/config';

export const nyTimesClient = new NyTimesClients(config.nyTimesApiKey);
