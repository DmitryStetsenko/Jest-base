function reverseStr(str) {
    let resStr = str
                    .split('')
                    .sort(() => -Infinity)
                    .join('');
    console.log(resStr);
    return resStr;
}

module.exports = reverseStr;