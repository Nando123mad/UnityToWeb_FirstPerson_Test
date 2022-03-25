console.log( "This is confirmation that we are inside the fetching detail script!");
var FetchedData;

fetch("./Test.json")
.then(response => {
   return response.json();
})
.then(jsondata => {
    FetchedData = jsondata;
    console.log(jsondata)
});


document.getElementById("unity-container").addEventListener("click", FetchGameInfo);

function FetchGameInfo(){
    console.log(">>>>Click Detected!")
    myGameInstance.SendMessage('Javascript_Hook', 'ChangeAuthorName', "Fernando Rodriguez");
    myGameInstance.SendMessage('Javascript_Hook', 'ChangeArtTitle', "Javascript");
    myGameInstance.SendMessage('Javascript_Hook', 'ChangeArtDescription', "Hello, this is a test. I am sending this information to my Unity instance through javascript in order to submit API information later on. Next test would be to send an image or video url to then be streamed.");
    myGameInstance.SendMessage('Javascript_Hook', 'ChangeProfileImg', "https://cdn.filestackcontent.com/A3hV17nNeRRSF0Chr2HLqz/https://lh3.googleusercontent.com/k8-GC9GRIBQeF3CS_gGGomtRUtaojp9uw-8EUQzz2-mln4Ew5xp58vCvaJSVHPxKbVfvIsCSQLd4efpt6btY");
    myGameInstance.SendMessage('Javascript_Hook', 'ChangeContentUrl', "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4");
  }
