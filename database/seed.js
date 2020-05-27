const faker = require('faker');
const fs = require('fs')
const path = require('path');

const generateBandName = () => {
  const pathNumb = Math.floor(Math.random() * 3)
  const randomPre = prefixes[Math.floor(Math.random() * prefixes.length)];
  const randomSuf = suffixes[Math.floor(Math.random() * suffixes.length)];
  let bandName = ''

  if(pathNumb === 0) {
    if(pathNumb === 0) {
      bandName = 'The ' + randomPre + ' ' + randomSuf + ' of ' + faker.address.city()
    } else if(pathNumb === 1) {
      bandName =  'The ' + randomPre + ' ' + randomSuf + ' of ' + faker.address.city() + faker.address.citySuffix()
    } else if(pathNumb === 2) {
      bandName = 'The ' + randomPre + ' ' + randomSuf + ' on ' + faker.address.streetName() + faker.address.streetSuffix()
    }
  } else if(pathNumb === 1) {
    if(pathNumb === 0) {
      bandName = randomPre + ' ' + randomSuf + ' of ' + faker.address.city()
    } else if(pathNumb === 1) {
      bandName =  randomPre + ' ' + randomSuf + ' of ' + faker.address.city() + faker.address.citySuffix()
    } else if(pathNumb === 2) {
      bandName = randomPre + ' ' + randomSuf + ' on ' + faker.address.streetName() + faker.address.streetSuffix()
    }
  } else if(pathNumb === 2) {
    if(pathNumb === 0) {
      bandName = faker.name.firstName() + ' and the ' + randomPre + ' ' + randomSuf
    } else if(pathNumb === 1) {
      bandName = randomPre + ' ' + randomSuf + ' with ' + faker.name.findName()
    } else if(pathNumb === 2) {
      bandName = randomPre + ' ' + randomSuf + ' featuring ' + faker.name.findName()
    }
  }
  return bandName;
}

const generateSongName = () => {
  const pathNumb = Math.floor(Math.random() * 5)
  const randFirst = preAndSuf[Math.floor(Math.random() * preAndSuf.length)];
  const randSecond = preAndSuf[Math.floor(Math.random() * preAndSuf.length)];
  const randThird = preAndSuf[Math.floor(Math.random() * preAndSuf.length)];
  const randFourth = preAndSuf[Math.floor(Math.random() * preAndSuf.length)];
  let songName = ''

  if(pathNumb === 0) {
    songName = `${randFirst} ${randSecond} ${randThird} ${randFourth}`
  } else if(pathNumb === 1) {
    songName = `${randFirst} ${randSecond} ${randThird}`
  } else if(pathNumb === 2) {
    songName = `${randFirst} ${randSecond} ${randFourth}`
  } else if(pathNumb === 3) {
    songName = faker.name.firstName() + loveSongSuffix[Math.floor(Math.random() * loveSongSuffix.length)];
  } else if(pathNumb === 4) {
    songName = faker.name.prefix() + ' ' + faker.name.findName() + ' of ' + faker.address.city()
  }
  return songName;
};

const generateAlbumPic = () => {
  const randomNum = Math.floor(Math.random() * 151);
  const imgURL = `https://source.unsplash.com/collection/893352/280x280/?sig=${randomNum}`;

  return imgURL;
}

const loveSongSuffix = [
  '...',
  '!',
  ' I Love You',
  ' I Miss You',
  ' My Love',
  ' You Broke My Heart',
  ' Why You Go and Leave Me?'
]

const prefixes = [
  'Flaming',
  'Black',
  'Talking',
  'Broken',
  'Ashen',
  'Rainbow',
  'Wandering',
  'Lost',
  'Breathing',
  'Rough',
  'Rolling',
  'Thundering',
  'Hipster',
  'Punk',
  'Goth',
  'White',
  'Pale',
  'Lunar',
  'Mystic',
  'Screaming',
  'Sexy',
  'Diabolical',
  'Evil',
  'Thumping',
  'Ascending',
  'Falling',
  'Spinning',
  'Drooling',
  'Secret',
  'Mad',
  'Hot',
  'Veiled',
  'Hidden',
  'Psychic',
  'Nightly',
  'Eerie',
  'Transparent',
  'Wild',
  'Smashing',
  'Chunking',
  'Guns and',
  "Roamin' ",
  'Grummel',
  'Schwifty',
  'Stylish',
  'Creepy',
  'Nerdy',
  'Anti',
  'Panoramic',
  'McShizzle',
  'Pensive',
  'Crushing',
  "Dead Man's",
  'Lords of',
  'Queens of',
  'Kings of',
  'Joker and',
  'Burnt',
  'Wheeled',
  'Living',
  'Azure',
  'Undead',
  'Exploding',
  'Spiralling',
  'Boom-boom',
  'Serious',
  'Stoic',
  'Deep',
  'Somber',
  'Squirming',
  'Vanilla',
  'Screeching',
  'Thrashing',
  'Selective',
  'Swift',
  'Soaring',
  'Mighty'
];

const suffixes = [
  'Flames',
  'Banisters',
  'Skulls',
  'Unicorns',
  'Souls',
  'Corpses',
  'Flannel',
  'Zombies',
  'Lampshades',
  'Scientists',
  'Ghosts',
  'Gang of Band Nerds',
  'Hunters',
  'Sirens',
  'Lozenges',
  'Stones',
  'Heads',
  'Hands',
  'Cerulean',
  'Lightning',
  'Blades',
  'Gang',
  'Homeboys',
  'Critics',
  'Emos',
  'Rebels',
  'Pirates',
  'Pumpkins',
  'Roses',
  'Demons',
  'Tractors',
  'Men',
  'Gals',
  'Riders',
  'Ray-Bans',
  'Trenchcoats',
  'Creepers',
  'Gravity',
  'Diamonds',
  'Mirrors',
  'Jefes',
  'Esperantos',
  'Crimson',
  'Wrappers',
  'José y los gauchos',
  'Heat',
  'Fever',
  'Wave',
  'Spell',
  'Spectacle',
  'Voices',
  'Group',
  'Fliers',
  'Homies',
  'Rum',
  'Wheels',
  'Brits',
  'Machines',
  'Assassination',
  'Flint',
  'Noises',
  'Perspiration',
  'Perpetrator',
  'Betrayed',
  'Wasslers',
  'Whirlpool',
  'Pistols',
  'Boulders',
  'Trinkets',
  'Rag Dolls',
  'Bazookas',
  'Popsicle',
  'Ice Cubes',
  'Banshees',
  'Frost',
  'Darkness',
  'Beat',
  'Freeze',
  'Kittens',
  'Superheroes',
  'Bagel',
  'Flaxseeds',
  'Children',
  'Love',
  'Equinox',
  'Life'
];

const preAndSuf = prefixes.concat(suffixes);
const seedDir = path.join(__dirname, 'seed.txt');
const wstream = fs.createWriteStream(seedDir);

wstream.write('name,artist,artistId,image,playcount,length\n', 'utf8');

function writeSongs(writer, encoding, callback) {
  let i = 80000000;
  let id = 0;
  let artistId = 1;
  let seedBandName = `${generateBandName()}`
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;

      if(id % 8 === 0){
        artistId += 1
        seedBandName = `${generateBandName()}`
      }

      let seedData = `${generateSongName()},${seedBandName},${artistId},${generateAlbumPic()},${Math.floor(Math.random() * 10000)},${Math.floor(3 + (Math.random() * 3))}:${Math.floor(10 + (Math.random() * 50))}\n`

      if (i === 0) {
        writer.write(seedData, encoding, callback);
      } else {
        ok = writer.write(seedData, encoding);
      }
    } while (i > 0 && ok);
      if (i > 0) {
        writer.once('drain', write);
      }
  }
  write();
}

writeSongs(wstream, 'utf-8', () => {
  wstream.end()
});