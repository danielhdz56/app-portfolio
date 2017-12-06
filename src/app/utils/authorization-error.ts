/** Error used when user is not authorized for a certain resource */

export class AuthorizationError extends Error {
  constructor() {
    super('Authorization Error - User is not authorized for this resource.');
  }
}
