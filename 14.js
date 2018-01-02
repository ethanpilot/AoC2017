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
    let binHash = denseHash.map((x)=>{
      let binStr = x.toString(2);
      binStr = Array(8-binStr.length).fill('0').join('') + binStr;
      return binStr;
    })
    return binHash.join('');
    /*let hexHash = denseHash.map((x)=>{
      let hexStr = x.toString(16);
      if (hexStr.length==1) hexStr = '0'+hexStr;
      return hexStr;
    })
    return hexHash.join('');*/
  },
  buildHashGrid : function(inpString) {
    let hashGrid = this.buildSeqArr(128).map((x)=>{
      return this.fullHash(inpString+"-"+x)
    })
    return hashGrid;
  },
  countHashGrid : function(inpGrid) {
    let count = 0;
    inpGrid.forEach((gridRow)=>{
      count+=gridRow.split('').filter((letter)=>{return letter=='1'}).length;
    })
    return count;
  },
  getRegions : function(inpGrid) {
    let curRow = -1;
    let thisRegion = Array(inpGrid.length).fill(0).map(()=>{return []});
    //Find Core
    for (let i=0; i<inpGrid.length; i++) {
      let firstOne = inpGrid[i].indexOf(1);
      if (firstOne !== -1) {
        curRow = i;
        thisRegion[curRow].push(firstOne);
        break;
      }
    }
    if (curRow == -1) {
      return 0;
    }
    this.findAllForward(inpGrid[curRow], thisRegion[curRow][0]).forEach((x)=>{this.pushUniq(thisRegion[curRow], x)});
    //Search Middle-Up
    for (let i=curRow-1; i>=0; i--) {
      let thisRow = [];
      thisRegion[i+1].forEach((loc)=>{
        if (inpGrid[i].charAt(loc)==1) {
          thisRow.push(loc);
          this.findAllForward(inpGrid[i], loc).forEach((x)=>{this.pushUniq(thisRow, x)});
          this.findAllBackward(inpGrid[i], loc).forEach((x)=>{this.pushUniq(thisRow, x)});
        }
      })
      if (thisRow.length>0) {
        //thisRow.forEach((x)=>{
        //  this.pushUniq(thisRegion[i], x)
        //})
        thisRegion[i] = thisRegion[i].concat(thisRow);
      } else {
        break;
      }
    }
    //Search Top-Middle
    for (let i=1; i<curRow; i++) {
      let thisRow = [];
      thisRegion[i-1].forEach((loc)=>{
        if (inpGrid[i].charAt(loc)==1) {
          thisRow.push(loc);
          this.findAllForward(inpGrid[i], loc).forEach((x)=>{this.pushUniq(thisRow, x)});
          this.findAllBackward(inpGrid[i], loc).forEach((x)=>{this.pushUniq(thisRow, x)});
        }
      })
      if (thisRow.length>0) {
        thisRegion[i] = thisRegion[i].concat(thisRow);
      }
    }
    //Search Middle-Down
    for (let i=curRow+1; i<inpGrid.length; i++) {
      let thisRow = [];
      thisRegion[i-1].forEach((loc)=>{
        if (inpGrid[i].charAt(loc)==1) {
          thisRow.push(loc);
          this.findAllForward(inpGrid[i], loc).forEach((x)=>{this.pushUniq(thisRow, x)});
          this.findAllBackward(inpGrid[i], loc).forEach((x)=>{this.pushUniq(thisRow, x)});
        }
      })
      if (thisRow.length>0) {
        thisRegion[i] = thisRegion[i].concat(thisRow);
      } else {
        break;
      }
    }
    //Search Bottom-Middle
    for (let i=inpGrid.length-2; i>curRow; i--) {
      let thisRow = [];
      thisRegion[i+1].forEach((loc)=>{
        if (inpGrid[i].charAt(loc)==1) {
          thisRow.push(loc);
          this.findAllForward(inpGrid[i], loc).forEach((x)=>{this.pushUniq(thisRow, x)});
          this.findAllBackward(inpGrid[i], loc).forEach((x)=>{this.pushUniq(thisRow, x)});
        }
      })
      if (thisRow.length>0) {
        thisRegion[i] = thisRegion[i].concat(thisRow);
      }
    }
    //CONTINUE until we are done
    let changed = false;
    do {
      changed = false;
      // TOP DOWN again
      for (let i=1; i<inpGrid.length; i++) {
        let thisRow = [];
        thisRegion[i-1].forEach((loc)=>{
          if (inpGrid[i].charAt(loc)==1) {
            thisRow.push(loc);
            this.findAllForward(inpGrid[i], loc).forEach((x)=>{this.pushUniq(thisRow, x)});
            this.findAllBackward(inpGrid[i], loc).forEach((x)=>{this.pushUniq(thisRow, x)});
          }
        })
        if (thisRow.length>0) {
          thisRow.forEach((x)=>{
            changed = changed || this.pushUniq(thisRegion[i], x);
          })
        }
      }
      // BOTTOM UP again
      for (let i=inpGrid.length-2; i>=0; i--) {
        let thisRow = [];
        thisRegion[i+1].forEach((loc)=>{
          if (inpGrid[i].charAt(loc)==1) {
            thisRow.push(loc);
            this.findAllForward(inpGrid[i], loc).forEach((x)=>{this.pushUniq(thisRow, x)});
            this.findAllBackward(inpGrid[i], loc).forEach((x)=>{this.pushUniq(thisRow, x)});
          }
        })
        if (thisRow.length>0) {
          thisRow.forEach((x)=>{
            changed = changed || this.pushUniq(thisRegion[i], x);
          })
        }
      }
    } while (changed)
    //Delete all from this region
    let deletedInput = JSON.parse(JSON.stringify(inpGrid)).map((row)=>{return row.split('')});
    thisRegion.forEach((row, rowInd)=>{
      row.forEach((loc)=>{
        deletedInput[rowInd][loc]=0;
      })
    })
    deletedInput = deletedInput.map((row)=>{return row.join('')})
    return 1+this.getRegions(deletedInput);
  },
  findAllForward : function(arr, start) {
    let res = []
    for (let i=start+1; i<arr.length; i++) {
      if (arr.charAt(i)==1) {
        res.push(i)
      } else {
        break;
      }
    }
    return res;
  },
  findAllBackward : function(arr, start) {
    let res = []
    for (let i=start-1; i>=0; i--) {
      if (arr.charAt(i)==1) {
        res.push(i)
      } else {
        break;
      }
    }
    return res;
  },
  pushUniq : function(arr, item) {
    if (!arr.includes(item)) {
      arr.push(item);
      return true;
    } else {
      return false;
    }
  }
}