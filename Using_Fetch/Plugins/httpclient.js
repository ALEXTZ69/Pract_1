
//se requiere otro servicio, el de fetch
//ANTES: const axios = require ('axios');
const fetch = require ('node-fetch');

const httpclient = {
    get:    async(url)=>{
        //ANTES:    const {data} = await axios.get(url)
        //          return data
        const response  = await fetch(url)
        return response.json();
    },
    post:   async(url, body)=>{},
    put:    async(url, body)=>{},
    delete: async(url)=>{}
}

module.exports = {
    httpclient
}