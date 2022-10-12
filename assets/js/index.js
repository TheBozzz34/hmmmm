console.log('Hello World');

function addImage() {
    axios.get('https://api.waifu.pics/sfw/waifu')
      .then(function (response) {
        console.log(response.data.url);
        let url = response.data.url;
        var img = document.createElement("img");
        img.src = url;
        var src = document.getElementById("content");
        src.appendChild(img);
        
    })
    .catch(function (error) {
        console.log(error);
  });
}

addImage();

document.getElementById("add").addEventListener("click", addImage);
