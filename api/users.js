const userMethods = {
  register: async (username, userType, password) => {
    const account = { username, userType, password };

    console.log(`Making account for user ${account.username} ..`);

    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(account),
        mode: 'cors',
      });

      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  fetchAll: async () => {
    try {
      const response = await fetch('http://localhost:3000/users/all', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
      });

      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  },
};

export default userMethods;
