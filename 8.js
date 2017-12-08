module.exports = {
  parseLine : function(line, register) {
    let splitLine = line.split(' ');
    let parsedLine = {};
    parsedLine.targetReg = splitLine[0];
    parsedLine.targetRegVal = this.getReg(splitLine[0], register);
    parsedLine.op = this.getModifier(splitLine[1], splitLine[2]);
    parsedLine.willExecute = this.evalComparitor(splitLine[4], splitLine[5], splitLine[6], register);
    if (parsedLine.willExecute) {
      register[parsedLine.targetReg] = parsedLine.op(parsedLine.targetRegVal);
    }
    return register;
  },

  getReg : function(addr, register) {
    if (addr in register) {
      return register[addr];
    } else {
      register[addr] = 0;
      return register[addr];
    }
  },

  getModifier : function(param, amount) {
    let modif;
    if (param == 'inc') {
      modif = 1;
    } else {
      modif = -1;
    }
    return function(base) {
      return base+modif*parseInt(amount);
    }
  },

  evalComparitor : function(target, comp, ref, register) {
    if (comp == '>') {
      return this.getReg(target, register) > parseInt(ref);
    } else if (comp == '<') {
      return this.getReg(target, register) < parseInt(ref);
    } else if (comp == '>=') {
      return this.getReg(target, register) >= parseInt(ref);
    } else if (comp == '<=') {
      return this.getReg(target, register) <= parseInt(ref);
    } else if (comp == '==') {
      return this.getReg(target, register) == parseInt(ref);
    } else if (comp == '!=') {
      return this.getReg(target, register) != parseInt(ref);
    }
  },

  getMaxReg : function(register) {
    let max = register[Object.keys(register)[0]];
    for (let reg of Object.keys(register)) {
      if (register[reg] > max) max = register[reg];
    }
    return max;
  }
}