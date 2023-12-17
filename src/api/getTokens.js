const endpoint = 'https://accounts.spotify.com/api/token';

const clientId = '2d112e6a83e240c68e5ca1219abdcf79';
const clientSecret = '28dc47e3130c4d799af5e9cbda237f4d';
const base64Encoded = btoa(clientId + clientSecret);

//access e refresh token entrambi aggiornati
export var access_token;
export var refresh_token;

//Funzione che rinnova l'access token tra un ora
async function refreshToken() {
  setTimeout(async () => {
    const response = await fetch(
      'https://accounts.spotify.com/api/token',
      httpRequest(
        'post',
        'application/x-www-form-urlencoded',
        `Basic ${base64Encoded}`,
        `grant_type=refresh_token&refresh_token=${refresh_token}
    `
      )
    );
    const data = await response.json();
    access_token = data.access_token;
  }, 3_600_000); // 1 ora
}

//Funzione che ritorna una richiesta HTTP
export function httpRequest(method, contentType, authorization, body) {
  return {
    method: method.toUpperCase(),
    headers: {
      'Content-Type': contentType,
      Authorization: authorization,
    },
    body: body,
  };
}

// Funzione che fa una chiamata HTTP di tipo post all'endpoint di Spotify API per recuperare un access e refresh token
async function getTokens() {
  try {
    const response = await fetch(
      endpoint,
      httpRequest(
        'post',
        'application/x-www-form-urlencoded',
        'Basic ' + base64Encoded,
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
