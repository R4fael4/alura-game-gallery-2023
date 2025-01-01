function addGame() {
    var favGame = document.getElementById('game').value.trim();
 
    if (favGame === "") {
        alert("Please, insert an image url (jpg, png, jpeg.)");
        return;
    }

    var gameList = document.getElementById('gameList');

    if (gameList.children.length < 5) {
        var newImage = document.createElement("img");
        newImage.src = favGame;
        gameList.appendChild(newImage);

        var storedImages = JSON.parse(localStorage.getItem("storedImages")) || [];
        storedImages.push(favGame);
        localStorage.setItem("storedImages", JSON.stringify(storedImages));

        document.getElementById('game').value = ''; 
    } else {
        alert("Range limit -> 5 images.");
    }
}

function removeLastImage() {
    var gameList = document.getElementById('gameList');
    var storedImages = JSON.parse(localStorage.getItem("storedImages")) || [];

    if (gameList.children.length > 0) {
        gameList.removeChild(gameList.lastChild);
        storedImages.pop();
        localStorage.setItem("storedImages", JSON.stringify(storedImages));
    }
}

window.onload = function() {
    var storedImages = JSON.parse(localStorage.getItem("storedImages")) || [];

    for (var i = 0; i < storedImages.length && i < 5; i++) {
        var newImage = document.createElement("img");
        newImage.src = storedImages[i];
        document.getElementById('gameList').appendChild(newImage); 
    }
}
