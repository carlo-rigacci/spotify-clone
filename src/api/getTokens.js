import path from 'path';
import { writeFile, readFile } from 'fs/promises';

const endpoint = 'https://accounts.spotify.com/api/token';

const clientId = '2d112e6a83e240c68e5ca1219abdcf79';
const clientSecret = '28dc47e3130c4d799af5e9cbda237f4d';
const credentialsBase64Encoded = btoa(clientId + clientSecret);

//access e refresh token entrambi aggiornati
export var access_token;
export var refresh_token = parseToken('RefreshToken.json');

async function parseToken(fileName) {
  const accessTokenAsString = await readFile(createPath(fileName));
  return (accessTokenAsObject = JSON.parse(accessTokenAsString));
}

async function getToken() {
  const tokenAsString = parseToken('AccessToken.json');

  if (accessTokenAsObject) {
    if (accessTokenAsObject.expires_in > 0) {
      return accessTokenAsObject.access_token;
    } else {
      await generateTokens();
      const accessNewTokenAsString = await parseToken('AccessToken.json');
      return accessNewTokenAsString.access_token;
    }
  }
}

//Funzione che rinnova l'access token
async function refreshToken() {
  const response = await fetch(
    'https://accounts.spotify.com/api/token',
    httpRequest(
      'post',
      'application/x-www-form-urlencoded',
      `Basic ${credentialsBase64Encoded}`,
      `grant_type=refresh_token&refresh_token=${refresh_token}
  `
    )
  );
  const data = await response.json();
  tokenToJSON(data.access_token, 'AccessToken.json');
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
async function generateTokens() {
  try {
    const response = await fetch(
      endpoint,
      httpRequest(
        'post',
        'application/x-www-form-urlencoded',
        'Basic ' + credentialsBase64Encoded,
        'grant_type=client_credentials'
      )
    );

    const data = await response.json();
    tokenToJSON(data.access_token, 'AccessToken.json');
    tokenToJSON(data.refresh_token, 'RefreshToken.json');
  } catch (error) {
    console.error(error);
  }
}

async function tokenToJSON(json, tokenFileName) {
  try {
    await writeFile(
      createPath(tokenFileName),
      JSON.stringify(json, tokenFileName)
    );
    console.log(tokenFileName + ' written successfully');
  } catch (error) {
    console.error(error);
  }
}

function createPath(tokenFileName) {
  return path.join('./token', tokenFileName);
}
