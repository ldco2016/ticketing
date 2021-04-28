process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const axios = require("axios");

const cookie = 'eyJqd3QiOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZJall3Tm1FNE0yTTROamxrTW1ZeU1EQXlZalV6WldFMk5TSXNJbVZ0WVdsc0lqb2lkR1Z6ZERNeVFIUnBZMnRsZEdsdVp5NWtaWFlpTENKcFlYUWlPakUyTVRjMU9UTXlPRGg5LjA5UkdfNVNRc092UERzbUREUXVJNVpHbWhPRDlUMHhYZk0wY2NZZ1RwZVkifQ%3D%3D';

const doRequest = async () => {
  const {data} = await axios.post(`https://ticketing.dev/api/tickets`, {
      title: 'ticket', price: 5
    },
    {
      headers: {cookie},
    }
  );

  await axios.put(`https://ticketing.dev/api/tickets/${data.id}`, {
      title: 'ticket', price: 10
    },
    {
      headers: {cookie},
    }
  );

  await axios.put(`https://ticketing.dev/api/tickets/${data.id}`, {
      title: 'ticket', price: 15
    },
    {
      headers: {cookie},
    }
  );

  console.log('Request complete');
};

(async () => {
  for (let i = 0; i < 400; i++) {
    doRequest();
  }
})();