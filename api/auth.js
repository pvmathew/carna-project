const authMethods = {
  login: async (username, password) => {
    const userLogin = { username, password };

    console.log(`Attempting login to account ${userLogin.username} ..`);

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userLogin),
        mode: 'cors',
      });

      console.log(response);

      const data = await response.json();
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
};

export default authMethods;
