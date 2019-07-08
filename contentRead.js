
const express = require("express");


var fs = require('fs');
exports.wordcount = function (req, res) {
    fs.readFile('temp.txt', 'utf8', function (err, contents) {
        console.log(contents);
        const contents_array = contents.split(" ");

        var word = req.query.word;

        var count = 0;
        for (var i = 0; i < contents_array.length; i++) {

            if (word == contents_array[i])
                count++;
        }
        res.send(word + " " + count + "");
    });
};
