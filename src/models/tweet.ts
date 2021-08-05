export type Tweet = {
  created_at: string,
  id: number,
  id_str: string,
  text: string,
  source: string,
  truncated: boolean,
  in_reply_to_status_id: number,
  in_reply_to_status_id_str: string,
  in_reply_to_user_id: number,
  in_reply_to_user_id_str: string,
  in_reply_to_screen_name: string,
  user: {
    id: number,
    id_str: string,
    name: string,
    screen_name: string,
    location: string,
    url: string,
    description: string,
    translator_type: string,
    protected: false,
    verified: false,
    followers_count: number,
    friends_count: number,
    listed_count: number,
    favourites_count: number,
    statuses_count: number,
    created_at: string,
    geo_enabled: boolean,
    lang: string,
    profile_background_color: string,
    profile_background_image_url: string,
    profile_background_image_url_https: string,
    profile_background_tile: false,
    profile_link_color: string,
    profile_sidebar_border_color: string,
    profile_sidebar_fill_color: string,
    profile_text_color: string,
    profile_use_background_image: boolean,
    profile_image_url: string,
    profile_image_url_https: string,
    profile_banner_url: string,
    default_profile: boolean,
    default_profile_image: boolean,
    withheld_in_countries: []
  },
  is_quote_status: boolean,
  quote_count: number,
  reply_count: number,
  retweet_count: number,
  favorite_count: number,
  // entities: { hashtags: [], urls: [], user_mentions: [ [Object] ], symbols: [] },
  favorited: boolean,
  retweeted: boolean,
  filter_level: string,
  lang: string,
  timestamp_ms: string
}