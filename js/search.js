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

        case "-g":
            query = query.substr(3);
            window.location = "http://gelbooru.com/index.php?page=post&s=list&tags=" +
                query.replaceChars(" ", "+");
            break;

        case "-d":
            query = query.substr(3);
            window.location =
                "http://danbooru.donmai.us/posts?utf8=✓&tags" +
                query.replaceChars(" ", "+");
            break;

		case "-i":
	        query = query.substr(3);
	        window.location =
	            "https://www.google.com/search?site=&tbm=isch&q=" +
	            query.replaceChars(" ", "+");
	        break;

    	case "-n":
        	query=query.substr(3);
        	window.location =
            	"https://nyaa.se/?page=search&cats=0_0&filter=0&term=" +
            	query.replaceChars(" ", "%20");
            break;

		case "-w":
			query = query.substr(3);
			window.location =
				"https://en.wikipedia.org/wiki/Special:Search?search=" +
				query.replaceChars(" ", "+");
			break;

		case "-y":
    		query = query.substr(3);
    		window.location =
        		"https://www.youtube.com/results?search_query=" +
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
