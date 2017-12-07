module.exports = {
  parseLine : function(textLine) {
    let splitLine = textLine.split(/[\s->,]+/);
    splitLine[1] = splitLine[1].replace(/[()]+/g, '');
    return splitLine;
  },

  buildNode : function(textLine) {
    let node = {};
    let splitLine = this.parseLine(textLine);
    node.name = splitLine[0];
    node.weight = parseInt(splitLine[1]);
    node.children = [];
    if (splitLine.length > 2) {
      splitLine.splice(0, 2);
      splitLine.forEach((x) => {
        node.children.push(x);
      });
    }
    return node;
  },

  findBottom : function(nodeList, seed) {
    let bottomNode = seed || nodeList[0];
    nodeList.forEach((node) => {
      if (node.children.includes(bottomNode.name)) {
        bottomNode = node;
      }
    })
    if (seed && bottomNode.name == seed.name) {
      return bottomNode;
    } else {
      return this.findBottom(nodeList, bottomNode)
    }
  },

  findBottomFromTextList : function(textList) {
    return this.findBottom(textList.map(this.buildNode, this)).name;
  },

  isLeaf : function(node) {
    return (node.children.length == 0);
  },

  buildTree : function(nodeList) {
    let leaves = nodeList.filter(this.isLeaf);
    let rootNode = this.populateNode(this.findBottom(nodeList), nodeList, leaves);
    return rootNode;
  },

  populateNode : function(node, nodeList, leaves) {
    node.children.forEach((nodeName, index)=>{
      let foundLeaf = leaves.find((leaf)=>{
        return nodeName == leaf.name;
      })
      if (foundLeaf) {
        node.children[index] = foundLeaf;
      } else {
        let foundNode = nodeList.find((nodeX)=>{
          return nodeName == nodeX.name;
        })
        node.children[index] = foundNode;
        this.populateNode(foundNode, nodeList, leaves);
      }
    })
    return node;
  },

  getTotalWeight : function(tree) {
    let weightSum = tree.weight;
    tree.children.forEach((node)=>{
      if (this.isLeaf(node)) {
        weightSum+=node.weight;
      } else {
        weightSum+=this.getTotalWeight(node);
      }
    })
    return weightSum;
  },

  getCorrectWeightForUnbalanced : function(tree, prevCorrectWeight) {
    let weights = []
    let weightCounts = {};
    let thisWeight;
    tree.children.forEach((node)=>{
      if (this.isLeaf(node)) {
        thisWeight = node.weight;
      } else {
        thisWeight = this.getTotalWeight(node);
      }
      weights.push(thisWeight);
      if (!weightCounts[thisWeight]) {
        weightCounts[thisWeight] = 1;
      } else {
        weightCounts[thisWeight]++;
      }
    })
    let unbalancedNode;
    let correctWeight;
    let correctSum = 0;
    for (let i=0;i<weights.length;i++) {
      if (weightCounts[weights[i]]==1) {
        unbalancedNode = tree.children[i];
      } else {
        correctWeight = weights[i];
        correctSum+=weights[i];
      }
    }
    if (!unbalancedNode) {
      /*return tree;*/
      return prevCorrectWeight - correctSum;
    } else {
      if (this.isLeaf(unbalancedNode)) {
        /*return unbalancedNode;*/
        return prevCorrectWeight - correctSum - unbalancedNode.weight;
      } else {
        return this.getCorrectWeightForUnbalanced(unbalancedNode, correctWeight);
      }
    }

  }
}