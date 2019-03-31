const { getTopTracks, bands, songs, images, dummyData } = require('../server/db');

describe('getTopTracks functions', () => {
  let tracks;
  beforeEach(async () => {
    tracks = await getTopTracks();
  });

  test('getTopTracks should be a function', () => {
    expect(typeof getTopTracks).toBe('function');
  });

  test('getTopTracks should return an array', () => {
    expect(Array.isArray(tracks)).toBeTruthy();
  });

  test('getTopTracks should return 5 items', () => {
    expect.assertions(1);
    return getTopTracks()
      .then(results => expect(results.length).toBe(5));
  });

  test('getTopTracks should return objects with properties _id, name, image, playCount, and length', () => {
    expect(tracks[0]).toHaveProperty('_id', 'name', 'image', 'playCount', 'length');
  });
});

describe('dummyData verification', () => {
  test('songs, bands, and artists should all contain 100 records', () => {
    expect(bands).toHaveLength(100);
    expect(songs).toHaveLength(100);
    expect(images).toHaveLength(100);
  });

  test('dummyData should be a function', () => {
    expect(typeof dummyData).toBe('function');
  });
});
