// var giphyApiKey = "put key here ";

function sendingRequest() {
  var input = document.getElementById("input").value;

  var newChild = document.createElement("div");
  newChild.innerText = input;
  document.body.appendChild(newChild);

  var giphyUrl = `https://api.giphy.com/v1/gifs/search?q=${input}&appi_key=${giphyApiKey}`;

  fetch(giphyApiKey)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    console.log(json);
    var img = document.createElement("img");
    img.src = json("data")[0]("images")("fixed_height")("url");
    documen.body.appendChild(img);
  })
}
