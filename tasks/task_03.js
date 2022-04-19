function randomInt(min, max) {
    const rndInt = min + Math.random() * (max + 1 - min);
    return Math.floor(rndInt);
}

module.exports = randomInt;