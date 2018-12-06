module.exports = x => {
    console.log(x);
    parsed = JSON.parse(x);
    return parsed.key;
}