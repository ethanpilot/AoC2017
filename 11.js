module.exports = {
  buildDirectionObj : function(stepList) {
    let dirObj = {
      nw : 0,
      n : 0,
      ne : 0,
      se : 0,
      s : 0,
      sw : 0
    };
    let splitList = stepList.split(',');
    splitList.forEach((step)=>{
      dirObj[step]++
    });
    return dirObj;
  },
  simplifyDirectionObj : function(dirObj) {
    let directPairs = [['nw','se'],['n','s'],['ne','sw']];
    directPairs.forEach((pair)=>{
      if (dirObj[pair[0]] > dirObj[pair[1]]) {
        dirObj[pair[0]] -= dirObj[pair[1]];
        dirObj[pair[1]] -= dirObj[pair[1]];
      } else {
        dirObj[pair[1]] -= dirObj[pair[0]];
        dirObj[pair[0]] -= dirObj[pair[0]];
      }
    });
    let indirectPairs = [['nw','ne','n'],['se','sw','s'],['ne','s','se'],['nw','s','sw'],['se','n','ne'],['sw','n','nw']];
    indirectPairs.forEach((pair)=>{
      if (dirObj[pair[0]]==0 || dirObj[pair[1]]==0) return;
      let diff = dirObj[pair[0]]-dirObj[pair[1]];
      if (diff>0) {
        dirObj[pair[2]]+=dirObj[pair[1]]
        dirObj[pair[0]]=diff;
        dirObj[pair[1]]=0;
      } else if (diff<0) {
        dirObj[pair[2]]+=dirObj[pair[0]]
        dirObj[pair[1]]=diff;
        dirObj[pair[0]]=0;
      } else {
        dirObj[pair[2]]+=dirObj[pair[1]]
        dirObj[pair[0]]=0;
        dirObj[pair[1]]=0;
      }
    });
    return dirObj;
  },
  getStepsFromDirObj : function(dirObj) {
    return dirObj.n + dirObj.ne + dirObj.nw + dirObj.s + dirObj.se + dirObj.sw;
  },
  getMaxDistanceFromList : function(stepList) {
    let splitList = stepList.split(',');
    let subList = [];
    let max = -Infinity;
    for (let i=0;i<splitList.length;i++) {
      subList.push(splitList[i]);
      let localMax = this.getStepsFromDirObj(this.simplifyDirectionObj(this.buildDirectionObj(subList.join(','))));
      if (localMax > max) max = localMax;
    }
    return max;
  }
}