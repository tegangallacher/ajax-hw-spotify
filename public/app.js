var music = null;

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
};

var requestComplete = function() {
  if (this.status !== 200) return;
  var jsonString = this.responseText;
  music = JSON.parse(jsonString);
  var musicArray = music.albums.items;
    populateList(musicArray);
  // populateList(music);
}

var app = function(){
  var url = "https://api.spotify.com/v1/search?q=christmas&type=album";
  makeRequest(url, requestComplete);
}


var populateList = function(musicArray){
  var albums = document.querySelector("#albums");
    musicArray.forEach(function(album){

    var albumBox = document.createElement("div")
    albumBox.id = "album_box"
    albums.appendChild(albumBox);



    var title = document.createElement("p");
    title.innerText = album.name + "\n";
    albumBox.appendChild(title);

    var image = document.createElement("img");
    image.src = album.images[0].url + "\n";
    image.width = 200;
    title.appendChild(image);

    var link = document.createElement("a");
    link.innerText = "Listen";
    link.href = album.external_urls.spotify;
    title.appendChild(link);

  })
  }

window.onload = app;