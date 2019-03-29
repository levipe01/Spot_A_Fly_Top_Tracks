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
  
  // test('getTopTracks should return 5 items', async () => {
  //   expect.assertions(1);
  //   const data = await getTopTracks();
  //   expect(data.length).toBe(5);
  // });
});

describe('dummyData verification', () => {
  test('dummyData should contain 100 records of songs, bands, and artists', () => {
    expect(bands).toHaveLength(100);
    expect(songs).toHaveLength(100);
    expect(images).toHaveLength(100);
  });
});
