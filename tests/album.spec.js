/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { getAlbum, getAlbumTracks } from '../src/album';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Album', () => {
  let fetchedStub;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    fetchedStub.resolves({ json: () => ({ album: 'name' }) });
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('smoke tests', () => {
    it('should have getAlbum method', () => {
      expect(getAlbum).to.exist;
    });

    it('should have getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    // verifica se o fetch ocorre
    it('should call fetch method', () => {
      const album = getAlbum();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    // verifica se o fetch ocorre com a url desejada
    it('should call fetch with the correct URL', () => {
      const album = getAlbum('2BTZIqw0ntH9MvilQ3ewNY');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY');

      const album2 = getAlbum('2BTZIqw0ntH9MvilQ3ewNK');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNK');
    });

    // verificada se o dado é recebido pela Promise
    it('should return the correct data from Promise', () => {
      const album = getAlbum('2BTZIqw0ntH9MvilQ3ewNY');
      album.then((data) => {
        console.log(data);
        return expect(data).to.be.eql({ album: 'name' });
      });
    });
  });
});
