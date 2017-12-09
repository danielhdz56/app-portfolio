/**
 * Parse server response body as JSON and return.
 * `throw` 'Unexpected server response format' error if body is not valid JSON (like if HTML is returned).
 */
export function parseServerJson (serverResponse) {
  try {
    return serverResponse.json();
  } catch (err) {
    throw new Error('HTTP Exception - Unexpected server response format');
  }
}
