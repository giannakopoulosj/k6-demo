
import http from 'k6/http';
import { check } from 'k6';

export const options = {
  stages: [
    { target: 200, duration: '30s' },
    { target: 400, duration: '30s' },
    { target: 500, duration: '30s' },
    { target: 400, duration: '30s' },
    { target: 600, duration: '30s' },
    { target: 50, duration: '30s' },
    { target: 0, duration: '30s' },
  ],
};

export default function () {
  let tags = { testid: '10' };
  const result = http.get('https://test-api.k6.io/public/crocodiles/',{tags: tags});
  check(result, {
    'http response status code is 200': result.status === 200,
  });
}
