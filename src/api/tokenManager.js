import path from 'path';
import { writeFile, readFile } from 'fs/promises';

const endpoint = 'https://accounts.spotify.com/api/token';

const access_token = await parseFile('access-token.json').access_token;
const refresh_token = await parseFile('refresh-token.json').refresh_token;

const client_data = await parseFile('client-credentials.json');
const clientId = client_data.clientId;
const clientSecret = client_data.clientSecret;
const credentialsBase64Encoded = btoa(clientId + clientSecret);

export async function getToken() {
  try {
    return access_token;
  } catch (err) {
    return await refreshToken(refresh_token);
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
    return await generateTokens();
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
    return data.access_token;
  } catch (err) {
    console.error('Error generating tokens: ' + err);
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
    console.err('Error writing JSON to file "' + tokenFileName + '":' + err);
  }
}

function createPath(tokenFileName) {
  return path.join('./token', tokenFileName);
}

async function parseFile(fileName) {
  try {
    const jsonAsString = await readFile(createPath(fileName));
    return JSON.parse(jsonAsString);
  } catch (err) {
    console.error('Error parsing file: ' + err);
  }
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
