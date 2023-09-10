import {
  METHODS,
  Response,
  createJsonBodyOptionsAuth,
} from '@/src/utils/request';

import { PayloadAuth, User } from './types';
import ENDPOINTS from '@/src/utils/endpoints';
import { getPayload } from '@/src/utils/jwt';

interface Result {
  user: User;
  bearer_token: string;
}

async function refresh(refresh_token: string): Promise<Response<Result>> {
  const options = createJsonBodyOptionsAuth(refresh_token);
  const response = await fetch(ENDPOINTS.AUTH, {
    ...options,
    method: METHODS.PUT,
  });

  const status = response.status;
  const isError = response.ok;
  if (isError) return { isError, status };

  const { token: bearer_token } = await response.json();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { iat, ...user } = <PayloadAuth>getPayload(bearer_token);
  const body = { user, bearer_token };

  return { isError, status, body };
}

export default refresh;
