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

      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  },

  // register: async (username, userType, password) => {
  //   const account = { username, userType, password };

  //   try {
  //     const response = await fetch('http://localhost:3000/auth/login', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(userLogin),
  //       mode: 'cors',
  //     });

  //     const data = await response.json();
  //     return data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
};

export default authMethods;
