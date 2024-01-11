import { api } from '@utils/axios'
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
 
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    console.log(req.cookies.token, 'cookies')
    const { code } = req.query;
    const token = req.cookies.token;
        try {
                await axios.get(`http://localhost:3001/api/v1/mp/redirect?code=${code}`, {
                headers: {
                    'Content-Type': 'application/json',
                'Authorization': `${token}`
                }
            })
            res.redirect("http://localhost:3000/response?state=" + "success")
        } catch (error) {
            console.log(error,'error')
            res.redirect('http://localhost:3000/response?state=' + "error")
            
        }
}