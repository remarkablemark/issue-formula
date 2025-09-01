import { requestJira } from '@forge/bridge';
import { useEffect, useState } from 'react';

import { log } from '../helpers';
import type { FormValues, Issue } from '../types';

const MAX_RESULTS = 5000;

export function useJiraSearch(formValues: FormValues) {
  const [isLoading, setIsLoading] = useState(true);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    if (!formValues.jql?.length) {
      return setIsLoading(false);
    }

    const requests = formValues.jql.map((jql, index) =>
      requestJira('/rest/api/3/search/jql', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jql,
          maxResults:
            formValues.function[index].value === 'COUNT'
              ? MAX_RESULTS
              : undefined,
        }),
      })
        .then((response) => response.json())
        // TODO: fetch `nextPageToken` if there are more issues
        .catch(log.error),
    );

    Promise.all(requests)
      .then((issues) => {
        setIssues(issues);
      })
      .catch(log.error)
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    issues,
  };
}
