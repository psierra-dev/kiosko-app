import { api } from '@utils/axios'
import type { NextApiRequest, NextApiResponse } from 'next'
 
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    console.log(req.cookies.token, 'cookies')
    const { code } = req.query;
    const token = req.cookies.token;
        try {
                await api.post(`/mp/redirect?code=${code}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`
                }
            })
            res.redirect("https://kisko-app.vercel.app/response?state=" + "success")
        } catch (error) {
            console.log(error,'error')
           res.redirect('https://kisko-app.vercel.app/response?state=' + "error")
            
        }
}