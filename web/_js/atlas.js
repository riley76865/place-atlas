


/*
	========================================================================
	The /r/place Atlas
	
	An Atlas of Reddit's /r/place, with information to each
	artwork	of the canvas provided by the community.
	
	Copyright (C) 2017 Roland Rytz <roland@draemm.li>
	Licensed under the GNU Affero General Public License Version 3
	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU Affero General Public License as
	published by the Free Software Foundation, either version 3 of the
	License, or (at your option) any later version.
	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
	For more information, see:
	http://place-atlas.stefanocoding.me/license.txt
	
	========================================================================
*/




window.addEventListener("error", function (e) {
	console.log(e);
	var errorMessage = "<p class=\"error\">An error has occurred:</p>";
	errorMessage += "<p class=\"errorBody\">" + e.message + "</p>";
	errorMessage += "<p class=\"errorBody\">on line " + e.lineno + "</p>";
	errorMessage += "<p class=\"error\">If this keeps happening, feel free to send me a <a href=\"mailto:roland.rytz@gmail.com\">mail</a>.</p>";
	document.getElementById("loadingContent").innerHTML = errorMessage;
});

function pointIsInPolygon (point, polygon) {
    // ray-casting algorithm based on
    // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
    
    var x = point[0], y = point[1];
    
    var inside = false;
    for (var i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        var xi = polygon[i][0], yi = polygon[i][1];
        var xj = polygon[j][0], yj = polygon[j][1];
        
        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    
    return inside;
};

var atlas = [
	{"id":0,"name":"Pinewood Logo/Rubix cube (Destroyed)","description":"Originally the logo for the Roblox group Pinewood Builders, the logo transformed into a game of tic tac toe, and then a Rubix cube. It was destroyed after being invaded by Iran","website":"https://pinewoodbuilders.reddit.com/","subreddit":"r/PinewoodBuilders","center":[39.5,279.5],"path":[[22.5,295.5],[23.5,274.5],[35.5,262.5],[55.5,262.5],[55.5,283.5],[43.5,295.5]]},
	{"id":1,"name":"CCKUFI Robin","description":"The icon of CcKuFi, the subreddit of users who made it to the highest tier in Reddit's 2016 April Fools Event, Robin.","subreddit":"ccKufiPrFaShleWoli0","center":[783.5,669.5],"path":[[771.5,661.5],[771.5,680.5],[789.5,680.5],[789.5,664.5],[806.5,664.5],[806.5,660.5],[771.5,660.5]]},
];

//console.log("There are "+atlas.length+" entries in the Atlas.");

/*
atlas.sort(function(a, b){
	if (a.id < b.id) {
		return -1;
	}
	if (a.id > b.id) {
		return 1;
	}
		// a must be equal to b
	return 0;
});

for(var i = 0; i < atlas.length; i++){
	if(atlas[i-1]){
		if(atlas[i-1].id == atlas[i].id){
			console.log(atlas[i-1].id + ": "+ atlas[i-1].name);
			console.log(atlas[i  ].id + ": "+ atlas[i  ].name);
		}
	}
}

console.log("biggest id: "+atlas[atlas.length-1].id + ", " + atlas[atlas.length-1].name);
*/


/*
for(var i = 0; i < atlas.length; i++){
	if(typeof atlas[i].website == "undefined"){
		console.log(atlas[i].name);
	} else if(atlas[i].website.trim() != ""){
		if(atlas[i].website.trim().substring(0, 4) != "http"){
			console.log(atlas[i].name + ": " + atlas[i].website);
		}
	}
}
*/

// sort by center.y, so that lines will overlap less
atlas.sort(function (a, b) {
	if (a.center[1] < b.center[1]) {
		return -1;
	}
	if (a.center[1] > b.center[1]) {
		return 1;
	}
	// a must be equal to b
	return 0;
});




/*

// Populate with test data

for(var i = 0; i < 10000; i++){
	var x = ~~(Math.random() * 1000)+0.5;
	var y = ~~(Math.random() * 1000)+0.5;
	var w = ~~(Math.random()*100);
	var h = ~~(Math.random()*100);
	atlas.push({
		"id": 5,
		"name": "test"+(i+3),
		"website": "",
		"subreddit": "",
		"center": [0, 0],
		"path":[
			[x, y],
			[x+w, y],
			[x+w, y+h],
			[x, y+h]
		]
	});
}

*/

