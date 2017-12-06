module.exports = {
  parseSheet : function(sheet) {
    let splitSheet = sheet.split(';');
    let parsedSheet = splitSheet.map((row) => {
      let newRow = row.split(',');
      let intRow = newRow.map((num) => {
        return parseInt(num);
      });
      return intRow;
    });
    return parsedSheet;
  },
  sheetHash : function(sheet) {
    let hash = 0;
    sheet = this.parseSheet(sheet);
    sheet.forEach((row) => {
      hash += this.rowHash(row);
    })
    return hash;
  },
  rowHash : function(row) {
    let rowMax = Math.max.apply(null,row);
    let rowMin = Math.min.apply(null,row);
    return rowMax-rowMin;
  },
  isDivis : function(a, b) {
    return (a % b) == 0;
  },
  rowHash2 : function(inpRow) {
    row = inpRow.sort(function(a, b){return a-b});
    for (let i=row.length-1; i>0; i--) {
      let curInd = row[i];
      for (let j=i-1; j>=0; j--) {
        if (this.isDivis(row[i], row[j])) {
          return row[i]/row[j];
        }
      }
    }
    return 0;
  },
  sheetHash2 : function(sheet) {
    let hash = 0;
    sheet = this.parseSheet(sheet);
    sheet.forEach((row) => {
      hash += this.rowHash2(row);
    });
    return hash;
  }
}