const model = document.querySelector("#gundam");

function getOrbit(){
    console.log(`${model.getCameraOrbit()}`);
}

function setOrbit(orbit) {
    model.cameraOrbit = orbit;
}
// GUN -0.9817344938497011rad 1.701696020694471rad 39.870771830159505m
// SHIELD 1.3744467859455318rad 1.2566370614359175rad 39.51606794957225m