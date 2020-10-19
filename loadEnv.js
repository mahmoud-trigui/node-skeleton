// load .env file if it exists and use default.env as fallback values
require('dotenv').config();
require('dotenv').config({ path: './default.env' });
