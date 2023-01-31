import fetch from 'isomorphic-fetch';

function requestPhApi(
  url: string,
  body?: Record<string, string | null>,
  authorization?: string,
) {

  const options: RequestInit & { headers: Record<string, string> } = {
    headers: {
      'Content-Type': 'application/json',
    } as Record<string, string>,
    method: 'post',
  };

  if (authorization)
    options.headers.authorization = authorization;

  if (body)
    options.body = JSON.stringify(body);

  return fetch(url, options);

}

export default requestPhApi;
