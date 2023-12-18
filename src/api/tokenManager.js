import path from 'path';
import { writeFile, readFile } from 'fs/promises';

const endpoint = 'https://accounts.spotify.com/api/token';

const clientId = parseFile('client-credentials.json').clientId;
const clientSecret = parseFile('client-credentials.json').clientSecret;
const credentialsBase64Encoded = btoa(clientId + clientSecret);

export default async function getToken() {
  try {
    return await parseFile('access-token.json').access_token;
  } catch (err) {
    return await refreshToken(parseFile('refresh-token.json'));
  }
}

async function refreshToken(refreshToken) {
  try {
    const response = await fetch(
      endpoint,
      httpRequest(
        'post',
        'application/x-www-form-urlencoded',
        `Basic ${credentialsBase64Encoded}`,
        `grant_type=refresh_token&refresh_token=${refreshToken}
    `
      )
    );
    const data = await response.json();
    tokenToJSON(data.access_token, 'access-token.json');
    console.error('Access token refreshed successfully');
    return data.access_token;
  } catch (err) {
    console.error('Error refreshing tokens: ' + err);
    console.log('Attempting to generate tokens...');
    generateTokens();
  }
}

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
    tokenToJSON(data.access_token, 'access-token.json');
    tokenToJSON(data.refresh_token, 'refresh-token.json');
    console.log('Tokens generated successfully');
  } catch (err) {
    console.err('Error generating tokens: ' + err);
  }
}

async function tokenToJSON(json, tokenFileName) {
  try {
    await writeFile(
      createPath(tokenFileName),
      JSON.stringify(json, tokenFileName)
    );
    console.log(tokenFileName + ' written successfully');
  } catch (err) {
    console.err(err);
  }
}

function createPath(tokenFileName) {
  return path.join('./token', tokenFileName);
}

async function parseFile(fileName) {
  const jsonAsString = await readFile(createPath(fileName));
  return JSON.parse(jsonAsString);
}

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
