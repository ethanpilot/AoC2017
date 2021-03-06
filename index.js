/*var day1 = require('./1.js');

var day1Input = '8231753674683997878179259195565332579493378483264978184143341284379682788518559178822225126625428318115396632681141871952894291898364781898929292614792884883249356728741993224889167928232261325123447569829932951268292953928766755779761837993812528527484487298117739869189415599461746944992651752768158611996715467871381527675219481185217357632445748912726487669881876129192932995282777848496561259839781188719233951619188388532698519298142112853776942545211859134185231768952888462471642851588368445761489225786919778983848113833773768236969923939838755997989537648222217996381757542964844337285428654375499359997792679256881378967852376848812795761118139288152799921176874256377615952758268844139579622754965461884862647423491918913628848748756595463191585555385849335742224855473769411212376446591654846168189278959857681336724221434846946124915271196433144335482787432683848594487648477532498952572515118864475621828118274911298396748213136426357769991314661642612786847135485969889237193822718111269561741563479116832364485724716242176288642371849569664594194674763319687735723517614962575592111286177553435651952853878775431234327919595595658641534765455489561934548474291254387229751472883423413196845162752716925199866591883313638846474321161569892518574346226751366315311145777448781862222126923449311838564685882695889397531413937666673233451216968414288135984394249684886554812761191289485457945866524228415191549168557957633386991931186773843869999284468773866221976873998168818944399661463963658784821796272987155278195355579386768156718813624559264574836134419725187881514665834441359644955768658663278765363789664721736533517774292478192143934318399418188298753351815388561359528533778996296279366394386455544446922653976725113889842749182361253582433319351193862788433113852782596161148992233558144692913791714859516653421917841295749163469751479835492713392861519993791967927773114713888458982796514977717987598165486967786989991998142488631168697963816156374216224386193941566358543266646516247854435356941566492841213424915682394928959116411457967897614457497279472661229548612777155998358618945222326558176486944695689777438164612198225816646583996426313832539918';
console.log('Day 1 Result');
console.log('Part 1');
console.log(day1.rCap(day1Input));
console.log('Part 2');
console.log(day1.rCap2(day1Input));

var day2 = require('./2.js');

var day2Input = '414,382,1515,319,83,1327,116,391,101,749,1388,1046,1427,105,1341,1590;960,930,192,147,932,621,1139,198,865,820,597,165,232,417,19,183;3379,987,190,3844,1245,1503,3151,3349,2844,4033,175,3625,3565,179,3938,184;116,51,32,155,102,92,65,42,48,91,74,69,52,89,20,143;221,781,819,121,821,839,95,117,626,127,559,803,779,543,44,369;199,2556,93,1101,122,124,2714,625,2432,1839,2700,2636,118,2306,1616,2799;56,804,52,881,1409,47,246,1368,1371,583,49,1352,976,400,1276,1240;1189,73,148,1089,93,76,3205,3440,3627,92,853,95,3314,3551,2929,3626;702,169,492,167,712,488,357,414,187,278,87,150,19,818,178,686;140,2220,1961,1014,2204,2173,1513,2225,443,123,148,580,833,1473,137,245;662,213,1234,199,1353,1358,1408,235,917,1395,1347,194,565,179,768,650;119,137,1908,1324,1085,661,1557,1661,1828,1865,432,110,658,821,1740,145;1594,222,4140,963,209,2782,180,2591,4390,244,4328,3748,4535,192,157,3817;334,275,395,128,347,118,353,281,430,156,312,386,160,194,63,141;146,1116,153,815,2212,2070,599,3018,2640,47,125,2292,165,2348,2694,184;1704,2194,1753,146,2063,1668,1280,615,163,190,2269,1856,150,158,2250,2459';
console.log('Day 2 Result:');
console.log('Part 1');
console.log(day2.sheetHash(day2Input));
console.log('Part 2');
console.log(day2.sheetHash2(day2Input));

var day3 = require('./3.js');

var day3Input = 265149;
console.log('Day 3 Result:');
console.log('Part 1');
console.log(day3.getDistance(day3Input));
console.log('Part 2');
console.log(day3.seekGreaterNumber(265149));*/

/*var day4 = require('./4.js');

var day4Input = require('./4.input1');

console.log('Day 4');
console.log('Part One - has duplicates');
let uniqCount = 0;
let nonAnaCount = 0;
day4Input.forEach(function(x){
  if (!day4.hasDupes(x)) uniqCount++;
  if (!day4.hasAnagram(x)) nonAnaCount++;
})
console.log(uniqCount);
console.log('Part Two - has anagram');
console.log(nonAnaCount);*/

/*var day5 = require('./5');
var day5Input = require('./5.input1');
console.log('Day 5');
console.log('Part One - step count');
console.log(day5.traverse(day5Input));
console.log('Part Two - step count v2');
console.log(day5.traverse(day5Input, true));

var day6 = require('./6')
var day6Input = [14,0,15,12,11,11,3,5,1,6,8,4,9,1,8,4];
console.log('Day 6 Result');
console.log('Part 1');
console.log(day6.redistCycleCount(day6Input));
day6Input = [14,0,15,12,11,11,3,5,1,6,8,4,9,1,8,4];
console.log('Part 2');
console.log(day6.redistCycleCount(day6Input, true));*/

/*var day7 = require('./7');
var day7Input = require('./7.input1');
console.log('Day 7 Result');
console.log('Part 1');
console.log(day7.findBottomFromTextList(day7Input));
console.log('Part 2');
let builtTree = day7.buildTree(day7Input.map(day7.buildNode, day7));
console.log(day7.getCorrectWeightForUnbalanced(builtTree));*/

/*var day8 = require('./8');
var day8Input = require('./8.input1');
console.log('Day 8 Result');
console.log('Part 1');
let register = {};
day8Input.forEach((line)=>{
  register = day8.parseLine(line, register);
})
console.log(day8.getMaxReg(register));
console.log('Part 2');
register = {};
let max = -Infinity;
day8Input.forEach((line)=>{
  register = day8.parseLine(line, register);
  let localMax = day8.getMaxReg(register);
  if (localMax > max) max = localMax;
})
console.log(max);*/

/*var day9 = require('./9');
var day9Input = require('./9.input1');
console.log('Day 9 Result');
console.log('Part 1');
console.log(day9.scoreFromString(day9Input));
console.log('Part 2');
console.log(day9.buildStreamArr(day9.splitStreamString(day9Input)).uncanceledCount)*/

/*var day10 = require('./10');
var day1Input = [106,118,236,1,130,0,235,254,59,205,2,87,129,25,255,118];
console.log('Day 10 Result');
console.log('Part 1');
console.log(day10.hashSequentiallyAndCheck(day10.buildSeqArr(256), day1Input));
console.log('Part 2');
console.log(day10.fullHash(day1Input.join(',')));*/

/*var day11 = require('./11');
var day11Input = require('./11.input1');
console.log('Day 11 Result');
console.log('Part 1');
console.log(day11.getStepsFromDirObj(day11.simplifyDirectionObj(day11.buildDirectionObj(day11Input))));
console.log('Part 2')
console.log(day11.getMaxDistanceFromList(day11Input));*/

/*var day12 = require('./12')
var day12Input = require('./12.input1')
console.log('Day 12 Result')
console.log('Part 1')
console.log(day12.exploreTree(day12.initializeTree(day12Input), '0').length)
console.log('Part 2')
console.log(day12.getUniqueHashes(day12.exploreFullTree(day12.initializeTree(day12Input)).hash).length)*/

/*var day13 = require('./13')
var day13Input = require('./13.input1')
console.log('Day 13 Result')
console.log('Part 1')
console.log(day13.traverseFirewall(day13.buildFirewall(day13Input)))
console.log('Part 2')
console.log(day13.findSafeDelay(day13.buildFirewall(day13Input)))*/

var day14 = require('./14')
var day14Input = day14.buildHashGrid('jxqlasbh');
console.log('Day 14 Result')
console.log('Part 1')
console.log(day14.countHashGrid(day14Input))
console.log('Part 2')
console.log(day14.getRegions(day14Input))