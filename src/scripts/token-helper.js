const qs = require("qs");
const axios = require("axios");
const Constants = require("../config/constants.js");

module.exports.getToken = async () => {
    const tokenUrl = Constants.TOKEN_URL;
    const data = {
        client_id: "67GgQy8uAtoJkaJX6UzvpdUNhnMNcICs",
        client_secret:
          "klqXz5K6RbnFU9BGz8-gAcNFkxrYEKWAFnqxKswbhwkiPoAPg-b5IS0MuuGZoC8_",
        grant_type: "client_credentials",
        audience: "https://rockval-api-dev",
      };
    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
        url: tokenUrl,
      };
    const token = await axios(options);
    return token.data?.access_token;
}