let img = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png",
"./images/dice5.png","./images/dice6.png"]

// Function to select a random image from the array
function selectRandomImage() {
    var randomIndex = Math.floor(Math.random() * img.length);
    return img[randomIndex];
}

// Select the <img> elements with the "img1" and "img2" classes
var img1Elements = document.getElementsByClassName("img1");
var img2Elements = document.getElementsByClassName("img2");

// Select a random image for each class and set the src attribute to display the selected image
for (var i = 0; i < img1Elements.length; i++) {
     var value1 = img1Elements[i].src = selectRandomImage();

}
    let index = img.indexOf(value1);
    console.log(index + 1 )

for (var j = 0; j < img2Elements.length; j++) {
    var value2 = img2Elements[j].src = selectRandomImage();
}
      let index2 = img.indexOf(value2);
      console.log(index2 + 1)

//check who won
if (index > index2){
    document.getElementsByTagName("h1")[0].innerHTML="Player 1 won "
}else if (index2 > index){
    document.getElementsByTagName("h1")[0].innerHTML="Player 2 won "
} else {
    document.getElementsByTagName("h1")[0].innerHTML="Draw!!"
}

