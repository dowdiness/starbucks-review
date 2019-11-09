const util = require('util')
const axios = require('axios')
require('dotenv').config()

exports.handler = async function(event, context) {
  const response = await axios.get(
    'https://maps.googleapis.com/maps/api/place/findplacefromtext/json',
    {
      method: 'get',
      params: {
        language: 'ja',
        fields:
          'formatted_address,geometry,icon,name,permanently_closed,photos,place_id,plus_code,types',
        input: event.queryStringParameters.input,
        inputtype: 'textquery',
        key: process.env.GOOGLE_MAP_API
      }
    }
  )
  const returnRequest = []

  for (let i = 0; i < response.data.candidates.length; i++) {
    returnRequest[i] = response.data.candidates[i]
    if (i <= 4) {
      break
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(util.inspect(returnRequest))
  }
}
