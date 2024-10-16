import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'POST') {
        const { name } = req.body
        res.status(200).json({ message: `Hello, ${name}! Welcome to our Next.js + Express test application.` })
    } else {
        res.status(405).json({ message: 'Method Not Allowed' })
    }
}