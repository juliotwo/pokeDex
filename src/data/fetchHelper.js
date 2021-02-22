const checkErrorMessage = (message) => {
  if (typeof message === 'string') {
    return message;
  } else if (Array.isArray(message)) {
    return message[0];
  } else if (typeof message === 'object') {
    const firstKey = Object.keys(message)[0];
    return `${message[firstKey]}`;
  } else {
    return 'Ha ocurrido un error inesperado';
  }
};

const fetchHelper = async (url, options = {}) => {
  const fetchOptions = {
    method: 'GET',
    ...options,
  };

  if (fetchOptions.method !== 'GET' && fetchOptions.body) {
    fetchOptions.headers['Content-Type'] = 'application/json';
    fetchOptions.body = JSON.stringify(fetchOptions.body);
  }

  return fetch(url, fetchOptions).then((response) => {
    if (response.status === 401) {
      //Unauthorize
    }
    if (response.status >= 400) {
      let error = {
        message: `Bad response from server at ${response.url} => ${response.status}, ${response.statusText}`,
        url: response.url,
        status: response.status,
        statusText: response.statusText,
      };
      if (response.status >= 500) {
        error = {
          message: `Hubo un problema al procesar tu petición. Por favor intenta nuevamente más tarde.`,
          url: response.url,
          status: +response.status,
          statusText: response.statusText,
          data: response.data,
        };
      }
      return new Promise((resolve, reject) => {
        response
          .json()
          .then((message) => {
            const {msg, msgs} = message;
            error.message = checkErrorMessage(msg || msgs || message);

            error.code = message.code;
            error.response = message;

            reject(error);
          })
          .catch(() => {
            reject(error);
          });
      });
    }

    if (response.ok && response.status === 204) {
      return Promise.resolve('Success');
    }
    return new Promise((resolve) => {
      response.json().then(resolve, () => {
        resolve('');
      });
    });
  });
};

export default fetchHelper;
