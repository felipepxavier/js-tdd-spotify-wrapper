export const getAlbum = (id) => fetch(`https://api.spotify.com/v1/artists/${id}`).then((data) => data.json());
export const getAlbumTracks = () => {};
