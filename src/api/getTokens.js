import path from 'path';
import { writeFile } from 'fs';

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
async function tokenToJson() {
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
    const accessTokenAsString = JSON.stringify(data.access_token);
    const refreshTokenAsString = JSON.stringify(data.refresh_token);

    const tokenDirectoryPath = './token';

    const accessTokenFileName = 'accessToken.json';
    const accessTokenPath = path.join(tokenDirectoryPath, accessTokenFileName);

    const refreshTokenFileName = 'refreshToken.json';
    const refreshTokenPath = path.join(
      tokenDirectoryPath,
      refreshTokenFileName
    );

    writeFile(accessTokenPath, accessTokenAsString, (error) => {
      console.error(error);
    });

    writeFile(refreshTokenAsString, accessTokenAsString, (error) => {
      console.error(error);
    });
  } catch (error) {
    console.error(error);
  }
}
