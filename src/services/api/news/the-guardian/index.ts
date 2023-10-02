import { TheGuardianClient } from '@/services/api/news/the-guardian/TheGuardianClient';
import { config } from '@/services/config';

export const theGuardianClient = new TheGuardianClient(
  config.theGuardianApiKey,
);
