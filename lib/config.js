"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API_URL = exports.HEADERS = void 0;
var TOKEN_API = 'BQDkwsMQ0mCRk9BP8QysJ4lyMhBaHP15OAOzh0ir7FX6HzBkQiTLdgeARrKlh9tcJAKFF9xRPn3f2TNKv-ZhPjRU8f641zBEiC-tTfhtYe1Fnsoqb2cXs0WwspzJulCk4wKPLVQbTbHndRmFlXfloFeVsapVkZ3wCZY';
var HEADERS = {
  headers: {
    Authorization: "Bearer ".concat(TOKEN_API)
  }
};
exports.HEADERS = HEADERS;
var API_URL = 'https://api.spotify.com/v1';
exports.API_URL = API_URL;