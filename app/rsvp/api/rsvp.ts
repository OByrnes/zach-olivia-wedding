import type { NextApiRequest, NextApiResponse } from 'next'
const addRSVP = (data: any) => {
    console.log(data)
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const data = req.body
  const id = await addRSVP(data)
  res.redirect(307, `/guest/${id}`)
}