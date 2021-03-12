"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _search = require("./search");

var _album = require("./album");

var _default = {
  search: _search.search,
  searchAlbums: _search.searchAlbums,
  searchArtists: _search.searchArtists,
  searchTracks: _search.searchTracks,
  searchPlaylists: _search.searchPlaylists,
  getAlbum: _album.getAlbum,
  getAlbums: _album.getAlbums,
  getAlbumTracks: _album.getAlbumTracks
};
exports["default"] = _default;