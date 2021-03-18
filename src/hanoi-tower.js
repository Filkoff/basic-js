const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const iSec = turnsSpeed/3600
    const i = 2**disksNumber - 1
    const t = Math.floor(i/iSec)
    const res = {turns: i, seconds: t}
    return res
};
