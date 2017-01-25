var music = null;

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
};

var populateList = function(music) {
var fill = document.querySelector('#albums')
  music.albums.items.forEach(function(album) {
    var li = document.createElement("li");
    li.innerText = album.name;
    fill.appendChild(li)

  })
}

var requestComplete = function() {
  if (this.status !== 200) return;
  var jsonString = this.responseText;
  music = JSON.parse(jsonString);
  populateList(music);
}

var app = function(){
  var url = "https://api.spotify.com/v1/search?q=pop&type=album";
  makeRequest(url, requestComplete);
}

window.onload = app;