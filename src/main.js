export const search = (query, type) => fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`, { headers: { Authorization: 'Bearer BQByup669rZdifivc0YFqj8K6DinYNI-S4BUIBK0JnJiwee_bGNWCCj5Utp0kjro4KEWrPAxsywxCH1nSAVJWMDdze2PweAMWjhbQJMJjjEPOVfnBVY2--GFpTOAZcj3PvZiMPQRcRcaBlHf6h-hBguY3NvMHaXwwTk' } })
  .then((data) => data.json());

export const searchArtists = (query) => search(query, 'artist');
export const searchAlbums = (query) => search(query, 'album');
export const searchTracks = (query) => search(query, 'track');
export const searchPlaylists = (query) => search(query, 'playlist');
