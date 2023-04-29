// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const citiesData = await fetch(
    "https://www.geonames.org/childrenJSON?geonameId=3392268"
  );
  const citiesDataJson = await citiesData.json();

  res.status(200).json(citiesDataJson);
}
