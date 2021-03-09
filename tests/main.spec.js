/* eslint-disable no-undef */
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
    let fetchedStub;

    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
    });

    afterEach(() => {
      fetchedStub.restore();
    });

    it('should call fetch function', () => {
      search();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      context('passing one type', () => {
        search('Incubus', 'artist');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

        search('Incubus', 'album');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
      });

      context('passing more than one type', () => {
        search('Incubus', ['artist', 'album']);
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album');
      });
    });
  });
});

/**
 * Spy = Verifica se a funcao original foi chamada.
 * Stubs = São spy's, mas com um comportamento pré-programado.
  * */
