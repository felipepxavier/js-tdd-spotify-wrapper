import { expect } from 'chai';
import {
  search, searchAlbums, searchArtists, searchTracks, searchPlaylists,
} from '../src/main';

describe('Spotify Wrapper', () => {
  describe('smoke tests', () => {
    // search (generico)
    // searchAlbums
    // searchArtists
    // searchTracks
    // searchPlaylists

    it('Should exist the search method', () => expect(search).to.exist);

    it('Should exist the searchAlbums method', () => expect(searchAlbums).to.exist);

    it('Should exist the searchArtists method', () => expect(searchArtists).to.exist);

    it('Should exist the searchTracks method', () => expect(searchTracks).to.exist);

    it('Should exist the searchPlaylists method', () => expect(searchPlaylists).to.exist);
  });
});
