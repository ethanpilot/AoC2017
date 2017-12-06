module.exports = {
  rCap : function(captcha) {
    var sum = 0;
    var chars = Array.from(''+captcha);
    chars.push(chars[0]);
    for (let i=0; i<chars.length-1; i++) {
      if (chars[i]===chars[i+1]) {
        sum += parseInt(chars[i])
      }
    }
    return sum;
  },
  rCap2 : function(captcha) {
    var sum = 0;
    var chars = Array.from(''+captcha);
    const halfway = chars.length/2;
    const origLen = chars.length;
    chars = chars.concat(chars);
    for (let i=0; i<origLen; i++) {
      if (chars[i]===chars[i+halfway]) {
        sum += parseInt(chars[i])
      }
    }
    return sum;
  }
}