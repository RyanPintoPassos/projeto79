menuListArray = ["Pizza Vegetariana",//adicionar mais itens
                    "Pizza de frango",
                    "Pizza Portuguesa",
                    "Pizza Quatro Queijos",
                    "Pizza Calabresa",
                    "Pizza Extravaganza"];

function getMenu(){
var htmldata;
//Completar o código
menuListArray.sort();
for(var i=0;i<menuListArray.lenght;i++){
    htmldata-htmldata+ menuListArray[i] + '<br>'
}
document.getElementById("displayAddedMenu").innerHTML = htmldata;
}

function addItem(){
var htmldata;
var item=document.getElementById("addItem").value;
//Completar o código

}

function addTop(){
//Completar o código
var item=document.getElementById("addItem").vaule;
menuListArray.push(item);
addItem();
}