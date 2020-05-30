module.exports = {
  generateRandomArtistId: (context, events, done) => {
    let randomNumb = Math.floor(Math.random() * 10000000);
    const commonIds = [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900,
      1000,
      2000,
      3000,
      4000,
      5000,
      6000,
      7000,
      8000,
      9000,
      10000,
      20000,
      30000,
      40000,
      50000,
      60000,
      70000,
      80000,
      90000,
      100000,
      200000,
      300000,
      400000,
      500000,
      600000,
      700000,
      800000,
      900000,
      1000000,
      2000000,
      3000000,
      4000000,
      5000000,
      6000000,
      7000000,
      8000000,
      9000000,
      10000000,
    ];
    if (randomNumb % 2 === 0) {
      randomNumb = commonIds[Math.floor(Math.random() * commonIds.length)];
      context.vars['query'] = randomNumb;
    } else {
      context.vars['query'] = randomNumb;
    }
    // context.vars['query'] = randomNumb;
    return done();
  },
};
