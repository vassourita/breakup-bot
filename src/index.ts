import 'dotenv/config'

import { client, myScreenName } from './twitter-client'
import { router } from './handlers/router';

const stream = client.stream('statuses/filter.json', {
  track: myScreenName
})
  .on('start', response => console.log('start'))
  .on('data', async tweet => {
    if (await router(tweet)) {
      return console.log('- Succeeded')
    }
    console.log('- Failed')
  })
  .on('ping', () => console.log('ping'))
  .on('error', error => console.log('error', error))
  .on('end', response => console.log('end'));