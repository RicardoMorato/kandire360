// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { codUf } = req.query;

  if (!codUf)
    res.status(400).json({
      error: "Please send the state code in the query",
      missingParam: "codUf",
    });

  const ufCities = await fetch(
    `http://localhost:8080/municipiosByCodUF?codUF=${codUf}`
  );

  const citiesDataJson = await ufCities.json();

  res.status(200).json(citiesDataJson);
}
