module.exports = {
  initializeTree : function(lineArray) {
    let lazyTree = {};
    lineArray.forEach((line)=>{
      let splitLine = line.split(/[\s<\->,]+/);
      lazyTree[splitLine[0]] = splitLine.slice(1);
    })
    return lazyTree;
  },
  exploreTree : function(lazyTree, startNode, foundNodes) {
    if (!foundNodes) foundNodes = [];
    if (foundNodes.indexOf(startNode) === -1) {
      foundNodes.push(startNode);
    }
    lazyTree[startNode].forEach((childNode)=>{
      if (foundNodes.indexOf(childNode) === -1) {
        foundNodes.push(childNode);
        foundNodes = this.exploreTree(lazyTree, childNode, foundNodes);
      }
    })
    return foundNodes;
  },
  exploreFullTree : function(lazyTree) {
    let exploredTree = {}, hashedTree = {}, treeKeys = Object.keys(lazyTree), treeLen = treeKeys.length;
    for (let treeRoot of treeKeys) {
      exploredTree[treeRoot] = this.exploreTree(lazyTree, treeRoot);
      hashedTree[treeRoot] = this.hashArr(exploredTree[treeRoot].sort(), treeLen);
    }
    return ({fullTree : exploredTree, hash : hashedTree})
  },
  hashArr : function(arr, treeLen) {
    return arr.map((item)=>{
      let str = '';
      item = parseInt(item);
      for (let i=Math.floor((Math.log(treeLen)/Math.log(16)));i>0;i--) {
        if (item%(Math.pow(16, i))===item) str+= '0';
      }
      str += item.toString(16);
      return str;
    }).join('');
  },
  getUniqueHashes : function(treeHash) {
    let uniqHashes = [];
    for (let hash of Object.keys(treeHash)) {
      if (!uniqHashes.includes(treeHash[hash])) uniqHashes.push(treeHash[hash]);
    }
    return uniqHashes;
  }
}