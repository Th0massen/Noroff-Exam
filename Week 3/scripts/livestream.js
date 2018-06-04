
var nasatv = document.getElementById("nasa-tv");
var livenews = document.getElementById("live-news");
var liveISS = document.getElementById("live-iss");
var nasastream = document.getElementById("liveNASAstream");
var newsstream = document.getElementById("liveNewsstream");
var ISSstream = document.getElementById("liveISSstream");
var myScope = document;
var iframes = myScope.getElementsByTagName("iframe");

function displayLiveISS(){
    if(nasatv.style.display = "block"){
        nasatv.style.display = "none";
        livenews.style.display = "none";
        liveISS.style.display = "block";
        stopVids();
    } else if( livenews.style.display = "block"){
        livenews.style.display = "none";
        nasatv.style.display = "none";
        liveISS.style.display = "block";
        stopVids();
    } 
    else{
        console.log("ISS live is already playing");
    }
}

function displayNews(){
    if(nasatv.style.display = "block"){
        nasatv.style.display = "none";
        liveISS.style.display = "none";
        livenews.style.display = "block";
        stopVids();
    }else if(liveISS.style.display = "block"){
        liveISS.style.display = "none";
        nasatv.style.display = "none";
        livenews.style.display = "block";
        stopVids();
    }
    else{
        console.log("live news is already playing");
    }
}

function displayNasaTV(){
    if(liveISS.style.display = "block"){
        liveISS.style.display = "none";
        livenews.style.display = "none";
        nasatv.style.display = "block";
        stopVids();
    }else if(livenews.style.display = "block"){
        liveISS.style.display = "none";
        livenews.style.display = "none";
        nasatv.style.display = "block";
        stopVids();
    } else{
        console.log("live news is already playing");
    }
}

function stopVids(){
    if (iframes != null) {
        for (var i = 0; i < iframes.length; i++) {
            iframes[i].src = iframes[i].src;
        }
    }
}