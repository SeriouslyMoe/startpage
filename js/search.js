String.prototype.replaceChars = function(character, replacement){
    var str = this;
    var a;
    var b;
    for(var i=0; i < str.length; i++){
        if(str.charAt(i) == character){
            a = str.substr(0, i) + replacement;
            b = str.substr(i + 1);
            str = a + b;
        }
    }
    return str;
}

function search(query){
    switch(query.substr(0, 2)){
	case "-a":
		query = query.substr(3);
		window.location = "https://animebytes.tv/torrents.php?searchstr=" +
			query.replaceChars(" ", "+");
		break;

	case "-c":
		query = query.substr(3);
		window.location = "http://champion.gg/champion/" + query;
		break;

    	case "-n":
        	query=query.substr(3);
        	window.location = "https://nyaa.pantsu.cat/search?c=_&s=0&max=50&userID=0&q=" +
            		query.replaceChars(" ", "+");
            break;

	case "-o":
		query=query.substr(3);
		window.location = "https://osu.ppy.sh/p/beatmaplist?q=" +
			query.replaceChars(" ", "%20");
		break;

	case "-v":
		query = query.substr(3);
		window.location = "http://vgmdb.net/search?q=" +
            		query.replaceChars(" ", "+");
		break;

	case "-w":
		query = query.substr(3);
		window.location = "https://en.wikipedia.org/wiki/Special:Search?search=" +
			query.replaceChars(" ", "+");
		break;

	case "-y":
    		query = query.substr(3);
    		window.location = "https://www.youtube.com/results?search_query=" +
        		query.replaceChars(" ", "+");
    		break;

        default:
            window.location="https://www.google.com/search?q=" +
                query.replaceChars(" ", "+");
    }
}

window.onload = function(){
    searchinput = document.getElementById("search");
    if(!!searchinput){
        searchinput.addEventListener("keypress", function(a){
            var key = a.keyCode;
            if(key == 13){
                var query = this.value;
                search(query);
            }
        });
    }
    var search_sqr = document.getElementById("search_sqr");
}
