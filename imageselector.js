const raze = document.getElementById("raze");
const jett = document.getElementById("jett");
const reyna = document.getElementById("reyna");
const sova = document.getElementById("sova");
const sage = document.getElementById("sage");
const branch = document.getElementById("branch");
const killjoy = document.getElementById("killjoy");
const omen = document.getElementById("omen");
const viper = document.getElementById("viper");
const phoenix = document.getElementById("phoenix");

const noImage = document.getElementById("no-image");

const razeButton = document.getElementById("raze-button");
const jettButton = document.getElementById("jett-button");
const reynaButton = document.getElementById("reyna-button");
const sovaButton = document.getElementById("sova-button");
const sageButton = document.getElementById("sage-button");
const branchButton = document.getElementById("branch-button");
const killjoyButton = document.getElementById("killjoy-button");
const omenButton = document.getElementById("omen-button");
const viperButton = document.getElementById("viper-button");
const phoenixButton = document.getElementById("phoenix-button");

const selectedImageSpace = document.getElementById("selected-image-space");

const clearButton = document.getElementById("clear");
clearButton.style.display = "none";


function createImage(name){
    noImage.src = name.src
    noImage.alt = name.alt
    clearButton.style.display = "inline";
}


jett.addEventListener("click", function(){
    createImage(jett);
    
});

raze.addEventListener("click", function(){
    createImage(raze);
});

omen.addEventListener("click", function(){
    createImage(omen);
});

killjoy.addEventListener("click", function(){
    createImage(killjoy);
});

branch.addEventListener("click", function(){
    createImage(branch);
});

phoenix.addEventListener("click", function(){
    createImage(phoenix);
});

sage.addEventListener("click", function(){
    createImage(sage);
});

sova.addEventListener("click", function(){
    createImage(sova);
});

viper.addEventListener("click", function(){
    createImage(viper);
});

reyna.addEventListener("click", function(){
    createImage(reyna);
});


jettButton.addEventListener("click", function(){
    createImage(jett);
    
});

razeButton.addEventListener("click", function(){
    createImage(raze);
});

omenButton.addEventListener("click", function(){
    createImage(omen);
});

killjoyButton.addEventListener("click", function(){
    createImage(killjoy);
});

branchButton.addEventListener("click", function(){
    createImage(branch);
});

phoenixButton.addEventListener("click", function(){
    createImage(phoenix);
});

sageButton.addEventListener("click", function(){
    createImage(sage);
});

sovaButton.addEventListener("click", function(){
    createImage(sova);
});

viperButton.addEventListener("click", function(){
    createImage(viper);
});

reynaButton.addEventListener("click", function(){
    createImage(reyna);
});


clearButton.addEventListener("click", function(){
    noImage.src = "unimage.png";
    noImage.alt = "No image selected";
    clearButton.style.display = "none";
});
