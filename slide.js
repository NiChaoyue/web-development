/*
  author: NiChaoyue
*/
const imagePaths = {
    'image1': ["Birth_of_Jesus.jpg","Manger.jpg"],
    'image2': ["water_into_wine.jpg","CANA.jpg"],
    'image3': ["Choose_twelve_disciples.jpg","licensed-image.jpg"],
    'image4': ["Exorcism_in_Gerasenes.jpg","Gerasenes.webp"],
    'image5': ["five_loaves_and_two_fish.jpg","bosaida.webp"],
    'image6': ["jesus calm sea.jpg","Galilee_Sea.jpg"],
    'image7': ["healing_the_blind.jpg","Jerusalem.jpg"],
    'image8': ["healing_a_lame.jpeg","Pool of Bethseda 11-10-22.jpg"],
    'image9': ["Women.jpg","temple.jpg"],
    'image10': ["Wash_Feets.jpg","wash_feet.jpg"],
    'image11': ["last_supper.jpg","Mark.jpg"],
    'image12': ["Arrest.jpg","Gethsemane.jpg"],
    'image13': ["Trial.jpg","Herod's Palace.jpg"],
    'image14': ["Crucifixion.jpg","golgotha.jpg"],
    'image15': ["Jesus_Resurrection.jpg", "empty_tomb.jpg"],
    'image16': ["Jesus_Ascension.jpg","Mount of Olives.jpg"]
};

let currentIndices = {
    'image1': 0,
    'image2': 0,
    'image3': 0,
    'image4': 0,
    'image5': 0,
    'image6': 0,
    'image7': 0,
    'image8': 0,
    'image9': 0,
    'image10': 0,
    'image11': 0,
    'image12': 0,
    'image13': 0,
    'image14': 0,
    'image15': 0,
    'image16': 0
};

function previousImage(imageId) {
    currentIndices[imageId] = (currentIndices[imageId] - 1 + imagePaths[imageId].length) % imagePaths[imageId].length;
    updateImage(imageId);
}

function nextImage(imageId) {
    currentIndices[imageId] = (currentIndices[imageId] + 1) % imagePaths[imageId].length;
    updateImage(imageId);
}
//Display the Image
function updateImage(imageId) {
    const imagePath = imagePaths[imageId][currentIndices[imageId]];
    document.getElementById(imageId).src = imagePath;
}
