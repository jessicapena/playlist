/* global $ */

var songs = [
    "Todo Tiene Su Final", 
    "Turn off the Light", 
    "Garden (Say it Like Dat)", 
    "thank u, next"];
    
var images_links = [
    "https://images-na.ssl-images-amazon.com/images/I/51AqXKIX6JL._SS500.jpg", 
    "https://cdn.newsapi.com.au/image/v1/5e0f2e998d6041b99283555fd9fdb471", 
    "http://miixtapechiick.com/wp-content/uploads/2017/08/080117-bgr-performers-the-revolution-will-be-digitized-SZA-MAIN.jpg", 
    "https://flytimetv.com/wp-content/uploads/2018/11/1z.jpg"];
    
var artists = [
    "Hector Lavoe", 
    "Nelly Furtado", 
    "SZA", 
    "Arianna Grande"];
    
var songlengths = [
    "5:02", 
    "4:36", 
    "3:28", 
    "3:27"];
    
var links = [
    "https://open.spotify.com/track/2J4ExVGT9ITiXWe0e2UeF2?si=tANpQu6uTWm2YuDWtIhqng", 
    "https://open.spotify.com/track/7sVvY1tEvk5VfitXX2PDOk?si=9QvBkto3TvKwsbFjU8B1MQ", 
    "https://open.spotify.com/track/19woxaSpjOefa2JnAOoqW5?si=zGrI6GOhTKaPjhNpGQnIdg", 
    "https://open.spotify.com/track/2rPE9A1vEgShuZxxzR2tZH?si=DvasubslTs2IJ5FDwkMwfw"];




    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
function displaySongInfo(){

songs.forEach(function(songtitle) {
$("#songs").append("<p>" + songtitle + "</p>");
});

images_links.forEach(function(imagelink) {
$("#images").append("<img src=" + "'" + imagelink + "'" + ">");
});

artists.forEach(function(artist) {
$("#artists").append("<p>" + artist + "</p>");
});

songlengths.forEach(function(songlength) {
$("#lengths").append("<p>" + songlength + "</p>");
});

links.forEach(function(songlink) {
$("#links").append("<a href=" + "'" + songlink + "'" + ">" + "<p>Listen!</p>" + "</a>");
});
}

function emptySongInfo(){
    $("#songs").empty();
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    var songInput = $("#song").val();
     songs.push(songInput);
     
    var imageInput = $("#image").val();
     images_links.push(imageInput);
     
    var artistInput = $("#artist").val();
     artists.push(artistInput);
    
    var lengthInput = $("#length").val();
     songlengths.push(lengthInput);
     
    var linkInput = $("#link").val();
     links.push(linkInput);
    
    


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
