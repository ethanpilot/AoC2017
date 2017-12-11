module.exports = {
  buildSeqArr : function(len) {
    return Array.from(Array(len).keys());
  },
  hashArr : function(arr, curPos, len) {
    if (len<2) return arr;
    let sortingArr = [];
    for (let i=0;i<len;i++) {
      let adjustedIndex = (curPos+i)%arr.length;
      sortingArr.push(arr[adjustedIndex]);
    }
    sortingArr.reverse();
    for (let i=0;i<len;i++) {
      let adjustedIndex = (curPos+i)%arr.length;
      arr[adjustedIndex]=sortingArr[i];
    }
    return arr;
  },
  hashSequentially : function(arr, lenList, curPos, skipSize) {
    if (!curPos) curPos = 0;
    if (!skipSize) skipSize = 0;
    lenList.forEach((len)=>{
      arr = this.hashArr(arr, curPos, len);
      curPos = (curPos+len+skipSize)%arr.length;
      skipSize++;
    })
    return {result : arr, curPos : curPos, skipSize : skipSize};
  },
  hashSequentiallyAndCheck : function(arr, lenList) {
    let hashRes = this.hashSequentially(arr, lenList).result;
    return hashRes[0]*hashRes[1];
  },
  fullHash : function(inpString) {
    let asciiArray = inpString.split('').map((x)=>{return x.charCodeAt(0)});
    let curPos = 0;
    let skipSize = 0;
    asciiArray = asciiArray.concat([17, 31, 73, 47, 23]);
    let sparseHash = this.buildSeqArr(256);
    for (let i=0;i<64;i++) {
      let hashResult = this.hashSequentially(sparseHash, asciiArray, curPos, skipSize);
      sparseHash = hashResult.result;
      curPos = hashResult.curPos;
      skipSize = hashResult.skipSize;
    }
    let denseHash = [];
    for (let i=0;i<16;i++) {
      let cumulativeXor = 0;
      for (let j=0;j<16;j++) {
        cumulativeXor = cumulativeXor^sparseHash[i*16+j];
      }
      denseHash.push(cumulativeXor);
    }
    let hexHash = denseHash.map((x)=>{
      let hexStr = x.toString(16);
      if (hexStr.length==1) hexStr = '0'+hexStr;
      return hexStr;
    })
    return hexHash.join('');
  }
}