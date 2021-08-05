import { Tweet } from "../models/tweet";
import { client } from "../twitter-client";
import { findOrCreateUser } from "../database/queries/findOrCreateUser";

export async function markHandler(tweet: Tweet, trackUserScreenName: string) {
  try {
    const requester = await findOrCreateUser({
      screen_name: tweet.user.screen_name,
      bio: tweet.user.description,
      twitter_id: tweet.user.id_str,
    })

    const trackingProfile = await client.get(`/users/show.json?screen_name=${trackUserScreenName}`) as Tweet["user"]

    const targetUser = await findOrCreateUser({
      screen_name: trackingProfile.screen_name,
      bio: trackingProfile.description,
      twitter_id: trackingProfile.id_str,
    })

    return true
  } catch (error) {
    console.log(error)
    return false
  }
}