import { AuthorizationError } from './authorization-error';

/**  Check for valid user and `throw` an `AuthorizationError` if not */
export function checkToken (token) {
  if (token) { return; }
  throw new AuthorizationError();
}
