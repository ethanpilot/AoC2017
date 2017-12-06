module.exports = {
  redistribute : function(blockArr) {
    let maxVal = Math.max(...blockArr);
    let maxIndex = blockArr.indexOf(maxVal);
    blockArr[maxIndex] = 0;
    while(maxVal>0) {
      for (let i=maxIndex+1;i<blockArr.length;i++) {
        if (maxVal<=0) break;
        blockArr[i]++;
        maxVal--;
      }
      for (let i=0;i<=maxIndex;i++) {
        if (maxVal<=0) break;
        blockArr[i]++;
        maxVal--;
      }
    }
    return blockArr;
  },

  redistCycleCount : function(blockArr, cycleCount) {
    let iterCount = 0;
    let prevStates = [];
    while(!prevStates.includes(blockArr.join(''))) {
      prevStates.push(blockArr.join(''));
      blockArr = this.redistribute(blockArr);
      iterCount++;
    }
    if (cycleCount) {
      return iterCount - prevStates.indexOf(blockArr.join(''));
    } else {
      return iterCount;
    }
  }
}