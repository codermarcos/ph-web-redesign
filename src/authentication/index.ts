import OAuth2 from 'client-oauth2';

const authUrl = `${process.env.PH_API_HOST}v2/oauth`;

export const accessTokenUri = `${authUrl}/token`;
export const clientId = process.env.PH_APP_API_KEY as string;
export const redirectUri = process.env.PH_APP_REDIRECT_URI as string;

const auth = new OAuth2({
  accessTokenUri,
  authorizationUri: `${authUrl}/authorize`,
  clientId,
  redirectUri,
  scopes: ['public'],
});

export default auth;
