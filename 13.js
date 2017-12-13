module.exports = {
  buildFirewall : function(stringArr) {
    let firewall = []
    stringArr.forEach((line)=>{
      let splitLine = line.split(/[\s:]+/);
      while (splitLine[0]>firewall.length) {
        firewall.push({depth: firewall.length, range: 0, curPos: 0, direction: 1})
      }
      firewall.push({depth: firewall.length, range: parseInt(splitLine[1]), curPos: 0, direction: 1})
    })
    return firewall;
  },
  incrementFirewall : function(firewall) {
    firewall.forEach((layer)=>{
      if (layer.range!=0) {
        layer.curPos = layer.curPos+layer.direction
        if (layer.curPos==layer.range-1) layer.direction = -1;
        if (layer.curPos==0) layer.direction = 1;
      }
    })
    return firewall;
  },
  traverseFirewall : function(firewall, catchAll) {
    let severity = 0;
    for (let i=0; i<firewall.length; i++) {
      if (firewall[i].curPos == 0) {
        severity+= (firewall[i].depth*firewall[i].range)
        if (catchAll && i==0) severity++;
      }
      firewall = this.incrementFirewall(firewall);
    }
    return severity;
  },
  findSafeDelay : function(firewall) {
    let delay = -1;
    let severity;
    do {
      delay++;
      severity = this.traverseFirewall(JSON.parse(JSON.stringify(firewall)), true)
      firewall = this.incrementFirewall(firewall);
    } while (severity > 0)
    return delay;
  }
}