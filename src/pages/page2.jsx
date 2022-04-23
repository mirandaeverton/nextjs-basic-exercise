import Layout from '../components/Layout'
import { useState } from 'react'
import Axios from 'axios'

export default function Page2() {
    const [client, setClient] = useState(1)
    
    async function getDataFromAPI(){
        const resp = await Axios({
            method: 'get',
            url: 'http://localhost:3000/api/hello'
        })
        const data = await resp.json()
        console.log(data)
        setClient(data)
    }

    return (
        <Layout title="Integração com API">
            <button onClick={getDataFromAPI}>Start</button>
            <div>{client}</div>
        </Layout>
    )
}