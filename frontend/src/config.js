// config.js
const API_URL = process.env.REACT_APP_API_URL || 'http://q8tasweet.com';
const PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL;
const MEDIA_URL = process.env.REACT_APP_MEDIA_URL;
const DEFAULT_AUTH = process.env.REACT_APP_DEFAULTAUTH;
const API_KEY = process.env.REACT_APP_APIKEY;
const AUTH_DOMAIN = process.env.REACT_APP_AUTHDOMAIN;
const DATABASE_URL = process.env.REACT_APP_DATABASEURL;
const PROJECT_ID = process.env.REACT_APP_PROJECTID;
const STORAGE_BUCKET = process.env.REACT_APP_STORAGEBUCKET;
const MESSAGING_SENDER_ID = process.env.REACT_APP_MESSAGINGSENDERID;
const APP_ID = process.env.REACT_APP_APPID;
const MEASUREMENT_ID = process.env.REACT_APP_MEASUREMENTID;
const GENERATE_SOURCE_MAP = process.env.GENERATE_SOURCEMAP;

const api = {
  API_URL,
  PUBLIC_URL,
  MEDIA_URL,
  DEFAULT_AUTH,
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
  GENERATE_SOURCE_MAP,
};

export { api };
