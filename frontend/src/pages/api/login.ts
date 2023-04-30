// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const email = req.body.email;

    const loginAttempt = await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });

    const response = await loginAttempt.json();

    res.status(loginAttempt.status).json(response);
  } catch (error) {
    const message = { name: "Error", error: `Error trying to login: ${error}` };

    res.status(500).json(message);
  }
}
