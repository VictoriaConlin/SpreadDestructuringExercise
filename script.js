// Spread Destructuring Exercise

// 1a
const mcuShows = [
    "Loki",
    "What If...?"
];
console.log(mcuShows);

// 1b
const starWarsShows = [
    "The Mandalorian", "The Bad Batch"
];
console.log(starWarsShows);

// 1c 
const disneyPlusShows = [
    ...mcuShows,
    ...starWarsShows,
    "Monsters At Work"
];

// 1d
console.log(disneyPlusShows);

// 2a
const netflixMovies = {
   action: "Extraction",
   crime: "The Irishman"
};
console.log(netflixMovies);

// 2b
const amazonPrimeMovies = {
    action: "The Tomorrow War",
    drama: "One Night in Miami"
}
console.log(amazonPrimeMovies);

// 2c
const streamingMovies = {
    ...amazonPrimeMovies,
    ...netflixMovies,
    musical: "Hamilton"
};

// 2d
console.log(streamingMovies);

// 3a
const disneyJunior = [
    "Mickey Mouse Clubhouse",
    "Spidey and His Amazing Friends"
]

// 3b
const [mickey, spidey] = disneyJunior;

// 3c
console.log(mickey, spidey);

// 4a
const avengers = {
    warMachine: "James Rhodes",
    theHulk: "Bruce Banner"
}

// 4b
let {warMachine, theHulk} = avengers;

// 4c
console.log(warMachine, theHulk);

// 4d 
const moreAvengers = {
    blackWidow: "Natasha Romanoff",
    hawkeye: "Clint Barton",
    ironMan: "Tony Stark"
}

// 4e
const {blackWidow: nat, ...others} = moreAvengers;

// 4f
console.log(moreAvengers);

// Bonus
const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
  };

// 5a
const all = {
    ...first,
    ...second,
    ...third
}
console.log(all);