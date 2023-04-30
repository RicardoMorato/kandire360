/* eslint-disable array-callback-return */
/* eslint-disable import/no-extraneous-dependencies */
const { JsonDB, Config } = require('node-json-db');

const express = require('express');

const app = express();
app.use(express.json());

const jwt = require('jsonwebtoken');

const db = new JsonDB(new Config('database', true, false, '/'));

const TOKEN_KEY = 'randomvalue123';
const errorValues = {
  email: '',
  token: '',
  status: false,
};
let userValues = new Map();

// eslint-disable-next-line consistent-return
app.post('/register', async (req, res) => {
  try {
    const { email } = req.body;

    if (!(email)) {
      res.status(400).send('All input is required');
    }

    const regex = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;

    if (!(regex.test(email))) {
      return res.status(400).send('Email is not valid');
    }

    const token = jwt.sign(
      { email },
      TOKEN_KEY,
      {
        expiresIn: '24h',
      },
    );

    const user = {
      email: email.toLowerCase(),
      token,
    };

    await db.push('/users[]', user);

    res.status(201).json(user);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
});

// eslint-disable-next-line consistent-return
async function login(call, callback) {
  try {
    const { email } = call.request;

    if (!(email)) {
      callback(null, errorValues);
    } else if (email) {
      const user = await db.getData('/users');
      const validateUser = user.filter((e) => e.email === email)[0];

      if (!(typeof validateUser === 'undefined')) {
      // Create token
        const token = jwt.sign(
          { email },
          TOKEN_KEY,
          {
            expiresIn: '24h',
          },
        );
        let count = 0;
        // eslint-disable-next-line consistent-return
        user.map((e) => {
          if (e.email === email) {
            return count;
          }
          // eslint-disable-next-line no-plusplus
          count++;
        });

        await db.push(`/users[${count - 1}]/token`, token);

        userValues = {
          email: email.toLowerCase(),
          token,
          status: true,
        };

        callback(null, userValues);
      // eslint-disable-next-line no-else-return
      } else {
        callback(null, errorValues);
      }
    } else {
      callback(null, errorValues);
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}

async function authenticate(call, callback) {
  try {
    const { token } = call.request;

    if (!(token)) {
      callback(null, errorValues);
    } else if (token) {
      try {
        const decoded = jwt.verify(token, TOKEN_KEY);
        userValues = {
          email: decoded.email,
          token,
          status: true,
        };

        callback(null, userValues);
      } catch (err) {
        callback(null, errorValues);
      }
    } else {
      callback(null, errorValues);
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}

module.exports = { app, login, authenticate };
