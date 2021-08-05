import 'dotenv/config'

import {client} from './twitter-client'

const stream = client.stream("statuses/filter", {
  track: "flamengo"
})
  .on("start", response => console.log("start"))
  .on("data", tweet => console.log("data", tweet.text))
  .on("ping", () => console.log("ping"))
  .on("error", error => console.log("error", error))
  .on("end", response => console.log("end"));