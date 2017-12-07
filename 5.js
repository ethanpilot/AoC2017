module.exports = {
  traverse : function(inpArr, step2) {
    let arr = JSON.parse(JSON.stringify(inpArr));
    let currentInd = 0;
    let distance;
    let steps = 0;
    while (true) {
      steps++;
      distance = arr[currentInd];
      if (currentInd+distance>=arr.length || currentInd+distance<0) {
        break;
      } else {
        if (step2 && arr[currentInd]>=3) {
          arr[currentInd]--;
        } else {
          arr[currentInd]++;
        }
        currentInd+=distance;
      }
    }
    return steps;
  }
}