import { User } from "../../models/user";
import { db } from "../knex";
import { v4 as uuidv4 } from 'uuid';

export async function findOrCreateUser(payload: Partial<User>) {
  let user = await db<User>('users').where('twitter_id', payload.twitter_id).first();

  if (!user) {
    await db('users').insert({
      id: uuidv4(),
      screen_name: payload.screen_name,
      bio: payload.bio,
      twitter_id: payload.twitter_id,
    })
    user = await db<User>('users').where('twitter_id', payload.twitter_id).first();
  }

  return user
}
