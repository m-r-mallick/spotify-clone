import SpotifyWebApi from 'spotify-web-api-node'

const scopes = [
  'user-modify-playback-state',
  'user-read-playback-state',
  'user-read-currently-playing',
  'user-follow-modify',
  'user-follow-read',
  'user-read-recently-played',
  'user-read-playback-position',
  'user-top-read',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'playlist-read-private',
  'playlist-modify-private',
  'app-remote-control',
  'user-read-email',
  'user-read-private',
  //   'user-library-modify',
  'user-library-read',
].join(',')

const params = {
  scope: scopes,
}

const queryParamsString = new URLSearchParams(params)

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
  redirectUri: '',
})

export const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamsString.toString()}`
export default spotifyApi
