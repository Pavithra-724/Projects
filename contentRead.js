// var fs = require('fs');

// var str = fs.readFile('temp.txt', function count() {
// var word = "the"
// var res = str.split(" ");
// var count = 0;
// for(let i = 0;i < res.length; i++)
// {
//   if(word.equals(res[i]))
//   count++;
// }
// console.log(count);
// // return count;

//  module.exports = count;


// })

//  var fs = require('fs');

// var str = fs.readFile('temp.txt', function count(Words) {
//   var strSplit = str.split(" ");
//   var count = 0;
//    var wcount = str.length;
//    for (var i = 0; i < wcount; i++) {
// //     if( )
// //   }
// //   console.log("occurence of  Word in File: " + totalOcc);
// //   return totalOcc;
// // });

// // module.exports = Words;


const express = require("express");


var fs = require('fs');
var counts = fs.readFile('temp.txt', function(err, data) {
  console.log(counts);
    exports.wordcount = function(req, res) {
    var array = data.toString().split("");
    // var word = "the";
    var w = req.query.w;
      var count = 0;
      console.log("word : "+w);
    counts.wordcount(req.query.w, function(err, counts) {
    for(var i = 0;i < w.length; i++) {
      if(w==(data[i]))           //counts
      count++;
 }
        console.log(array[i]);
})
};
});
  
// module.exports = counts;











// function readFileToObject() {
// 	var wordCount={};
// 	var liner = new lineByLine(process.argv[2]);

// 	// read the file, line by line so that the whole file is not stored in memory.
// 	while(line = liner.next()){
// 		// if new word shows up. its count is 1
// 		if (wordCount[line] === undefined) {
// 			wordCount[line] = 1;
// 		} else {
// 		// if word already exists. update its count;
// 			wordCount[line] = wordCount[line]+1;
// 		}
// 	}
// 	return wordCount;

