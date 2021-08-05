import { Tweet } from '../models/tweet'
import { myScreenName } from '../twitter-client'
import { defaultHandler } from './default'
import { markHandler } from './mark'

export async function router(tweet: Tweet) {
  console.log(`Received tweet ${tweet.id_str} from ${tweet.user.id_str}`)

  const [firstQuoted, ...args] = tweet.text.split(' ').map(s => s.trim())

  if (firstQuoted !== myScreenName) {
    console.log('- Invalid command')
    return defaultHandler(tweet)
  }

  if (args[0] === 'track' && args[1].startsWith('@')) {
    console.log(`- Track command: ${args[1]}`)
    return await markHandler(tweet, args[1].replace('@', ''))
  }

  console.log('- Invalid command')
  return defaultHandler(tweet)
}