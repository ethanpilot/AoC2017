module.exports = {

  splitStreamString : function(streamString) {
    return streamString.split('');
  },

  buildStreamArr : function(streamCharArray) {
    let thisStream = [];
    let i = 0;
    let curChar;
    let uncanceledCount = 0;
    while (i<streamCharArray.length) {
      curChar = streamCharArray[i];
      if (curChar==',') {
        i++;
      } else if(curChar=='!') {
        i+=2;
      } else if (curChar=='{') {
        i++;
        let resultItem = this.buildStreamArr(streamCharArray.slice(i));
        thisStream.push(resultItem.result);
        i+=resultItem.offset;
        uncanceledCount+=resultItem.uncanceledCount;
      } else if (curChar=='<') {
        let garbageItem = this.buildGarbage(streamCharArray.slice(i));
        thisStream.push(garbageItem.result);
        i+=garbageItem.offset;
        uncanceledCount+=garbageItem.uncanceledCount;
      } else if (curChar=='}') {
        i++;
        return({result : thisStream, offset : i, uncanceledCount : uncanceledCount});
      }
    }
    return ({result : thisStream[0], offset : i, uncanceledCount : uncanceledCount});
  },

  buildGarbage : function(streamCharArray) {
    let garbageString = '';
    let i=0;
    let uncanceledCount = 0;
    while (i<streamCharArray.length) {
      let curChar = streamCharArray[i];
      garbageString+=streamCharArray[i];
      i++;
      if (curChar=='!') {
        garbageString+=streamCharArray[i];
        i++
      } else if (curChar=='>') {
        return({result : garbageString, offset : i, uncanceledCount : uncanceledCount});
      } else if (i!=1) {
        uncanceledCount++;
      }
    }
  },

  scoreStream : function(streamArr, base) {
    if (!base) base = 1;
    let score = base;
    streamArr.forEach((arrItem)=>{
      if (typeof arrItem != 'string') {
        score+=this.scoreStream(arrItem, base+1);
      }
    })
    return score;
  },

  scoreFromString : function(streamString) {
    return this.scoreStream(this.buildStreamArr(this.splitStreamString(streamString)).result);
  }
}