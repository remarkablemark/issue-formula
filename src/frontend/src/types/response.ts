/**
 * {@link https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-search/#api-rest-api-3-search-jql-post-response}
 */
export interface Issue {
  isLast: boolean;
  issues: { id: string }[];
  names?: object;
  nextPageToken?: string;
  schema?: object;
}
