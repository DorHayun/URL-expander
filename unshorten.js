
//Create the context menu for right clicking on a link
var context = "link"
var contextItem = chrome.contextMenus.create({"title": "Unshorten","contexts":[context]});
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    getLongURL(info.linkUrl);
});
var request = new XMLHttpRequest();

//Finds the "expanded" url from a shortened link
function getLongURL(url){
    request.onreadystatechange = processURL();
    request.open('GET', url,false);
    request.send();
}

//Process the url and catch any exceptions 
function processURL(){
    try{
        if (request.readyState== XMLHttpRequest.DONE){
        if (request.status==200){
            alert(request.responseURL);
            request = new XMLHttpRequest();
            //return request.responseURL;
        }
        else{
            alert("An error has occured making the request" + request.status);
        }
    }
    }
    catch(e){
        alert('Caught Exception: ' + e.description);
    }
    
}
