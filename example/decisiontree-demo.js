/**
 * Created by yuht on 2018. 8. 02..
 */
var ml = require('../lib/ml');
var Domain = require('./domain'); 

// var data=[
// 	['sunny',85,85,'FALSE'],
// 	['sunny',80,90,'TRUE'],
// 	['overcast',83,78,'FALSE'],
// 	['rain',70,96,'FALSE'],
// 	['rain',68,80,'FALSE'],
// 	['rain',65,70,'TRUE'],
// 	['overcast',64,65,'TRUE'],
// 	['sunny',72,95,'FALSE'],
// 	['sunny',69,70,'FALSE'],
// 	['rain',75,80,'FALSE'],
// 	['sunny',75,70,'TRUE'],
// 	['overcast',72,90,'TRUE'],
// 	['overcast',81,75,'FALSE'],
// 	['rain',71,80,'TRUE']
// ];
// var label=["Don't Play","Don't Play","Play","Play","Play","Don't Play","Play","Don't Play","Play","Play","Play","Play",
// 			"Play","Don't Play"];
// var data =[['slashdot','USA','yes',18],
//            ['google','France','yes',23],
//            ['digg','USA','yes',24],
//            ['kiwitobes','France','yes',23],
//            ['google','UK','no',21],
//            ['(direct)','New Zealand','no',12],
//            ['(direct)','UK','no',21],
//            ['google','USA','no',24],
//            ['slashdot','France','yes',19],
//            ['digg','USA','no',18,],
//            ['google','UK','no',18,],
//            ['kiwitobes','UK','no',19],
//            ['digg','New Zealand','yes',12],
//            ['slashdot','UK','no',21],
//            ['google','UK','yes',18],
//            ['kiwitobes','France','yes',19]];
// var label = ['None','Premium','Basic','Basic','Premium','None','Basic','Premium','None','None','None','None','Basic','None','Basic','Basic'];

//0-色泽,1-根蒂,2-敲声,3-纹理,4-脐部,5-触感,6-密度,7-含糖率,好瓜
// var data = [
// 	['青绿','蜷缩','浊响','清晰','凹陷','硬滑',0.697,0.46],
// 	['乌黑','蜷缩','沉闷','清晰','凹陷','硬滑',0.774,0.376],
// 	['乌黑','蜷缩','浊响','清晰','凹陷','硬滑',0.634,0.264],
// 	['青绿','蜷缩','沉闷','清晰','凹陷','硬滑',0.608,0.318],
// 	['浅白','蜷缩','浊响','清晰','凹陷','硬滑',0.556,0.215],
// 	['青绿','稍蜷','浊响','清晰','稍凹','软粘',0.403,0.237],
// 	['乌黑','稍蜷','浊响','稍糊','稍凹','软粘',0.481,0.149],
// 	['乌黑','稍蜷','浊响','清晰','稍凹','硬滑',0.437,0.211],
// 	['乌黑','稍蜷','沉闷','稍糊','稍凹','硬滑',0.666,0.091],
// 	['青绿','硬挺','清脆','清晰','平坦','软粘',0.243,0.267],
// 	['浅白','硬挺','清脆','模糊','平坦','硬滑',0.245,0.057],
// 	['浅白','蜷缩','浊响','模糊','平坦','软粘',0.343,0.099],
// 	['青绿','稍蜷','浊响','稍糊','凹陷','硬滑',0.639,0.161],
// 	['浅白','稍蜷','沉闷','稍糊','凹陷','硬滑',0.657,0.198],
// 	['乌黑','稍蜷','浊响','清晰','稍凹','软粘',0.36,0.37],
// 	['浅白','蜷缩','浊响','模糊','平坦','硬滑',0.593,0.042],
// 	['青绿','蜷缩','沉闷','稍糊','稍凹','硬滑',0.719,0.103]
// 	// ['青绿','蜷缩','浊响','清晰','凹陷','硬滑'],
// 	// ['乌黑','蜷缩','沉闷','清晰','凹陷','硬滑'],
// 	// ['乌黑','蜷缩','浊响','清晰','凹陷','硬滑'],
// 	// ['青绿','蜷缩','沉闷','清晰','凹陷','硬滑'],
// 	// ['浅白','蜷缩','浊响','清晰','凹陷','硬滑'],
// 	// ['青绿','稍蜷','浊响','清晰','稍凹','软粘'],
// 	// ['乌黑','稍蜷','浊响','稍糊','稍凹','软粘'],
// 	// ['乌黑','稍蜷','浊响','清晰','稍凹','硬滑'],
// 	// ['乌黑','稍蜷','沉闷','稍糊','稍凹','硬滑'],
// 	// ['青绿','硬挺','清脆','清晰','平坦','软粘'],
// 	// ['浅白','硬挺','清脆','模糊','平坦','硬滑'],
// 	// ['浅白','蜷缩','浊响','模糊','平坦','软粘'],
// 	// ['青绿','稍蜷','浊响','稍糊','凹陷','硬滑'],
// 	// ['浅白','稍蜷','沉闷','稍糊','凹陷','硬滑'],
// 	// ['乌黑','稍蜷','浊响','清晰','稍凹','软粘'],
// 	// ['浅白','蜷缩','浊响','模糊','平坦','硬滑'],
// 	// ['青绿','蜷缩','沉闷','稍糊','稍凹','硬滑']
// ];
// var label = ['是','是','是','是','是','是','是','是','否','否','否','否','否','否','否','否','否'];

var data = [
  ['凹陷','青绿','蜷缩','浊响','清晰','硬滑'],
  ['凹陷','乌黑','蜷缩','沉闷','清晰','硬滑'],
  ['凹陷','乌黑','蜷缩','浊响','清晰','硬滑'],
  ['稍凹','青绿','稍蜷','浊响','清晰','软粘'],
  ['稍凹','乌黑','稍蜷','浊响','稍糊','软粘'],
  ['平坦','青绿','硬挺','清脆','清晰','软粘'],
  ['凹陷','浅白','稍蜷','沉闷','稍糊','硬滑'],
  ['稍凹','乌黑','稍蜷','浊响','清晰','软粘'],
  ['平坦','浅白','蜷缩','浊响','模糊','硬滑'],
  ['稍凹','青绿','蜷缩','沉闷','稍糊','硬滑']
];
var label = ['是','是','是','是','是','否','否','否','否','否'];

var demo = new ml.DecisionTree({
	"data": data,
	"label": label
});

var tree = demo.train();
demo.print(tree);

