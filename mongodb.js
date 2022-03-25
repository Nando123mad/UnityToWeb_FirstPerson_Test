// import * as {MongoClient} from 'mongodb';
import { MongoClient } from 'mongodb';
//const {MongoClient} = require('./node_modules/mongodb');

console.log("Hello we're running mongodb.js!!!");

main();
var databaseinfo;
// document.getElementById("unity-container").addEventListener("click", FetchGameInfo);

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://Nando123mad:155708Fern!@unitytoweb.wvite.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
 
 
    const client = new MongoClient(uri);
    const dbName = "Test";
    const dbCol = "UnityTest";
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await findOneListingByName(client, dbName, dbCol);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}


async function findOneListingByName(client, dbName, dbCol) {
    const result = await client.db(dbName).collection(dbCol).find().forEach(data => {
        console.log(data)
        databaseinfo = data;
    });
}

function FetchGameInfo(){
    console.log(">>>>Click Detected!")
    myGameInstance.SendMessage('Javascript_Hook', 'ChangeAuthorName', "Fernando Rodriguez");
    myGameInstance.SendMessage('Javascript_Hook', 'ChangeArtTitle', "Javascript");
    myGameInstance.SendMessage('Javascript_Hook', 'ChangeArtDescription', "Hello, this is a test. I am sending this information to my Unity instance through javascript in order to submit API information later on. Next test would be to send an image or video url to then be streamed.");
    myGameInstance.SendMessage('Javascript_Hook', 'ChangeProfileImg', "https://cdn.filestackcontent.com/A3hV17nNeRRSF0Chr2HLqz/https://lh3.googleusercontent.com/k8-GC9GRIBQeF3CS_gGGomtRUtaojp9uw-8EUQzz2-mln4Ew5xp58vCvaJSVHPxKbVfvIsCSQLd4efpt6btY");
    myGameInstance.SendMessage('Javascript_Hook', 'ChangeContentUrl', "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4");
  }
