// TODO: Make more robust. Simple for testing purposes.
export const api = {
  get: async <TResponse>(endpoint: string) => {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw createError(response);
    }

    let json: TResponse;

    try {
      json = await response.json();
    } catch (_) {
      throw createError(response);
    }

    return json;
  },
};

function createError(response: Response) {
  // TODO: Improve error handling and add logging
  return new Error(`HTTP error! status: ${response.status}`);
}
