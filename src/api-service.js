export default {
  getItems: () => {
    const options = {
      method: 'GET',
    };
    return fetch('/api/items', options)
      .then(response => response.json());
  },
  createItem: ({ name, price, image_url }) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({ name, price, image_url }),
      headers: {
        'content-type': 'application/json',
      },
    };
    return fetch('/api/items', options)
      .then(response => response.json());
  },
};
