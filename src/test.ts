import 'dotenv/config'
import { client } from "./twitter-client";

(async () => {
  try {
    const trackingProfile = await client.get('/users/show.json?screen_name=vass_oura')
    console.log(trackingProfile)
  } catch (error) {
    console.log(error)
  }
})()
