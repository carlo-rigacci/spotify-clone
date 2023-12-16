import httpRequest from './httpRequest';

const endpoint = 'https://accounts.spotify.com/api/token';

const clientId = '2d112e6a83e240c68e5ca1219abdcf79';
const clientSecret = '28dc47e3130c4d799af5e9cbda237f4d';

// Funzione che fa una chiamata HTTP di tipo post all'endpoint di Spotify API per recuperare un access e refresh token
export default async function getTokens() {
  try {
    const response = await fetch(
      endpoint,
      httpRequest(
        'post',
        'x-www-form-urlencoded',
        'Basic ' + btoa(`${clientId}:${clientSecret}`),
        'grant_type=client_credentials'
      )
    );
    const data = await response.json();
    const accessToken = data.access_token; //access token scade ogni ora quindi bisognerebbe automatizzare il rinnovo
    const refreshToken = data.refresh_token; //refresh token è necessario per rinnovare il token di accesso
    return { accessToken, refreshToken };
  } catch (error) {
    console.error(error);
  }
}
