export const API_TALKS_POST_FAILURE = 'API_TALKS_POST_FAILURE';
export const API_TALKS_POST_STARTED = 'API_TALKS_POST_STARTED';
export const API_TALKS_POST_SUCCESS = 'API_TALKS_POST_SUCCESS';
export const API_TALKS_POST_RESET = 'API_TALKS_POST_RESET';

export const apiTalksPostAction = (
    token: string, id: string, payload: any,
): any => {
  return {
    type: API_TALKS_POST_STARTED,
    payload,
    token,
    id,
  };
};

