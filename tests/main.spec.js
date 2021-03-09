/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import {
  search, searchAlbums, searchArtists, searchTracks, searchPlaylists,
} from '../src/main';

chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require('node-fetch');

describe('Spotify Wrapper', () => {
  describe('smoke tests', () => {
    it('Should exist the search method', () => expect(search).to.exist);

    it('Should exist the searchAlbums method', () => expect(searchAlbums).to.exist);

    it('Should exist the searchArtists method', () => expect(searchArtists).to.exist);

    it('Should exist the searchTracks method', () => expect(searchTracks).to.exist);

    it('Should exist the searchPlaylists method', () => expect(searchPlaylists).to.exist);
  });

  describe('Generic Search', () => {
    it('should call fetch function', () => {
      const fetchedStub = sinon.stub(global, 'fetch');
      const artists = search();

      expect(fetchedStub).to.have.been.calledOnce;
      fetchedStub.restore();
    });

    it('should receive the correct url to fetch', () => {
      const fetchedStub = sinon.stub(global, 'fetch');

      const artists = search('Incubus', 'artist');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

      const albums = search('Incubus', 'album');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
    });
  });
});

/**
 * Spy = Verifica se a funcao original foi chamada.
 * Stubs = São spy's, mas com um comportamento pré-programado.
  * */
