module.exports = {
  deDupe : function(arr) {
    return arr.filter(function(elem, pos,arr) {
      return arr.indexOf(elem) == pos;
    });
  },

  hasDupes : function(phrase) {
    let splitPhrase = phrase.split(' ');
    let deDupedPhrase = this.deDupe(splitPhrase);
    return deDupedPhrase.length != splitPhrase.length;
  },

  sortLetters : function(word) {
    return word.split('').sort().join('');
  },

  hasAnagram : function(phrase) {
    let splitPhrase = phrase.split(' ');
    let sortedWords = splitPhrase.map(this.sortLetters, this);
    let deAnagramedPhrase = this.deDupe(sortedWords);
    return deAnagramedPhrase.length != splitPhrase.length;
  }
}