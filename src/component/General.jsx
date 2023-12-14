import React, { useEffect, useState } from 'react'

export default async function General() {
    const [data , setData] = useState({})

    const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/search/',
        params: {
          q: '1',
          type: 'multi',
          offset: '0',
          limit: '10',
          numberOfTopResults: '5'
        },
        headers: {
          'X-RapidAPI-Key': 'd300d1b9a6msh60d69d1130e78e8p18f93cjsn38925f829fac',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
      };
      
      useEffect(()=> {  
        a
        
      })

      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }

  return (
    <div>
        
    </div>
  )
}
