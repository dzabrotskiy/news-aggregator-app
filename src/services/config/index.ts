type Config = {
  newsApiOrgApiKey: string;
  theGuardianApiKey: string;
  nyTimesApiKey: string;
};

export const config: Config = {
  newsApiOrgApiKey: process.env.NEWS_API_ORG_API_KEY ?? '',
  theGuardianApiKey: process.env.THE_GUARDIAN_API_KEY ?? '',
  nyTimesApiKey: process.env.NY_TIMES_API_KEY ?? '',
};
