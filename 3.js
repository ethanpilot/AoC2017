module.exports = {
  squares : [0, 1, 1, 2, 4, 5, 10, 11, 23, 25, 26, 54, 57, 59, 122, 133, 142, 147, 304, 330, 351, 362, 747, 806, 880, 931],
  getRing : function(square) {
    if (square == 1) return 0;
    let ring = Math.floor(Math.sqrt(square-1));
    if (ring%2==0 && ring !=0) {
      ring-=1;
    }
    ring = Math.ceil(ring/2);
    return ring;
  },
  getCornerToCorner : function(ringLevel) {
    return ringLevel*2;
  },
  getDistance : function(square) {
    if (square == 1) return 0;
    let ring = this.getRing(square);
    let c2c = this.getCornerToCorner(ring);
    let ringStart = this.getFirstCenter(ring);
    return ring + Math.abs(square-ringStart)%c2c;
  },
  getRingStart : function(ringLevel) {
    let nthOdd = 1+2*(ringLevel-1);
    return 1+nthOdd*nthOdd;
  },
  getFirstCenter : function(ringLevel) {
    return this.getRingStart(ringLevel)+(ringLevel-1);
  },
  getCornerNumber : function(square) {
    let ringLevel = this.getRing(square);
    let firstCenter = this.getFirstCenter(ringLevel);
    if (square<firstCenter) return false;
    let c2c = this.getCornerToCorner(ringLevel);
    let firstCorner = firstCenter + c2c/2;
    if (square==firstCorner) return 1;
    let secondCorner = firstCorner + c2c;
    if (square==secondCorner) return 2;
    let thirdCorner = secondCorner + c2c;
    if (square==thirdCorner) return 3;
    let fourthCorner = thirdCorner + c2c;
    if (square==fourthCorner) return 4;
    return false;
  },
  isCorner : function(square) {
    return !!this.getCornerNumber(square);
  },
  getNumber : function(square) {
    let ringLevel = this.getRing(square);
    let ringStart = this.getRingStart(ringLevel);
    let prevRingStart = this.getRingStart(ringLevel-1);
    let c2c = this.getCornerToCorner(ringLevel);
    let cornerNumber = this.getCornerNumber(square);
    let sum = 0;
    if (square == ringStart) {
      return this.squares[square-1]+this.squares[prevRingStart];
    } else if (square == ringStart+1) {
      return this.squares[square-1] + this.squares[square-2] + this.squares[prevRingStart] + this.squares[prevRingStart+1];
      //Case for corners should go next
    } else if (cornerNumber) {
      let innerCorner;
      switch (cornerNumber) {
        case 1:
          innerCorner = this.getFirstCorner(ringLevel-1);
          break;
        case 2:
          innerCorner = this.getSecondCorner(ringLevel-1);
          break;
        case 3:
          innerCorner = this.getThirdCorner(ringLevel-1);
          break;
        default:
          innerCorner = this.getFourthCorner(ringLevel-1);
          sum+=this.squares[ringStart]
          break;
      }
      sum += this.squares[square-1] + this.squares[innerCorner];
      return sum;
    } else {
      let currentSide = this.getSide(square);
      let closestMiddle = this.getFirstCenter(ringLevel) + c2c*(currentSide-1);
      let innerC2c = this.getCornerToCorner(ringLevel-1);
      let innerMiddle = this.getFirstCenter(ringLevel-1) + innerC2c*(currentSide-1);
      let centerOffset = square-closestMiddle;
      let offsetInner = innerMiddle+centerOffset;
      sum = this.squares[square-1] + this.squares[offsetInner];
      if (centerOffset < innerC2c/2) {
        sum+=this.squares[offsetInner+1];
      }
      if (centerOffset == innerC2c/2 && centerOffset > 0 && currentSide == 4) {
        sum+=this.squares[offsetInner+1]; 
      }
      if (centerOffset == innerC2c*(-0.5)) {
        sum+=this.squares[square-2];
      } else {
        sum+=this.squares[offsetInner-1]
      }
      return sum;
    }
  },
  getFirstCorner : function(ringLevel) {
    return this.getFirstCenter(ringLevel) + this.getCornerToCorner(ringLevel)/2;
  },
  getSecondCorner : function(ringLevel) {
    return this.getFirstCorner(ringLevel) + this.getCornerToCorner(ringLevel);
  },
  getThirdCorner : function(ringLevel) {
    return this.getSecondCorner(ringLevel) + this.getCornerToCorner(ringLevel);
  },
  getFourthCorner : function(ringLevel) {
    return this.getThirdCorner(ringLevel) + this.getCornerToCorner(ringLevel);
  },
  getSide : function(square) {
    let ringLevel = this.getRing(square);
    if (square < this.getFirstCorner(ringLevel)) {
      return 1;
    } else if (square < this.getSecondCorner(ringLevel)) {
      return 2;
    } else if (square < this.getThirdCorner(ringLevel)) {
      return 3;
    } else {
      return 4
    }
  },
  generateSquares : function(sqLen) {
    let newSquares = [0, 1, 1, 2, 4, 5, 10, 11, 23, 25, 26];
    for (let i=11; i<=sqLen; i++) {
      newSquares.push(this.getNumber(i));
    }
    return newSquares;
  },
  seekGreaterNumber : function(num) {
    this.squares = [0, 1, 1, 2, 4, 5, 10, 11, 23, 25, 26];
    let i = 11;
    let curNum = 0;
    while (curNum < num) {
      curNum = this.getNumber(i);
      this.squares.push(curNum);
      i++;
    }
    return curNum;
  }

}