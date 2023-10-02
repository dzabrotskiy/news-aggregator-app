import { EndpointNames } from '@/services/api/news/the-guardian/constants';
import { TheGuardianEndpoint } from '@/services/api/news/the-guardian/TheGuardianEndpoint';

export class TheGuardianClient {
  content: TheGuardianEndpoint;
  tags: TheGuardianEndpoint;
  sections: TheGuardianEndpoint;

  constructor(apiKey: string) {
    this.content = new TheGuardianEndpoint(EndpointNames.SEARCH, apiKey);
    this.tags = new TheGuardianEndpoint(EndpointNames.TAGS, apiKey);
    this.sections = new TheGuardianEndpoint(EndpointNames.SECTIONS, apiKey);
  }
}
