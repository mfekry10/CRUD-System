var pNameInput = document.getElementById("pName");
var pPriceInput = document.getElementById("pPrice");
var pCatInput = document.getElementById("pCat");
var pDescInput = document.getElementById("pDesc");

var arrItems ;
// get data from localstorage and set in array

if(localStorage.getItem("Product") == null){
    arrItems =[];
}
else{
    arrItems = JSON.parse(localStorage.getItem("Product"));
    displayItems();
}



function addProduct(){

    var itemProduct = {
        pName :pNameInput.value ,
        pPrice :pPriceInput.value ,
        pCat : pCatInput.value ,
        pDesc : pDescInput.value ,
    }
    // console.log(itemProduct)
    arrItems.push(itemProduct);
    // create Key called product in localStorge and convert to string
    localStorage.setItem("Product", JSON.stringify(arrItems));
    
    // console.log(arrItems)

    displayItems();
    clearAll();

}
// Display Data in table
function displayItems(){

    var hasal = ''

    for(var i = 0 ; i< arrItems.length; i++){

        hasal += `<tr>
        <td>${i}</td>
        <td>${arrItems[i].pName}</td>
        <td>${arrItems[i].pPrice}</td>
        <td>${arrItems[i].pCat}</td>
        <td>${arrItems[i].pDesc}</td>
        <td><button class="btn btn-warning" onclick="retriveItems(${i})">Update</button></td>
        <td><button class="btn btn-danger" onclick="deleteItems(${i})">Delete</button></td>
        
        </tr>        
        
        
        `

    }

    document.getElementById("tBody").innerHTML = hasal;

}
// Clear All Inputs
function clearAll(){
    pNameInput.value="";
    pPriceInput.value="";
    pCatInput.value="";
    pDescInput.value="";
}

//Delete Data

function deleteItems(pIndex){
    arrItems.splice(pIndex,1);
    displayItems();
    localStorage.setItem("Product" , JSON.stringify(arrItems));
}

var selectedIndex ;

// retrive Data when click update button in table
function retriveItems(pIndex){

    selectedIndex = pIndex;
  
        pNameInput.value = arrItems[pIndex].pName;
        pPriceInput.value = arrItems[pIndex].pPrice;
        pCatInput.value = arrItems[pIndex].pCat;
        pDescInput.value = arrItems[pIndex].pDesc;

   
   document.getElementById("add_btn").style.display ="none";
   var update =  document.getElementById("update_btn");
       update.setAttribute('style' , 'display : block !important')
}

function updateProduct(pIndex){

    

    arrItems[selectedIndex].pName = pNameInput.value ;
    arrItems[selectedIndex].pPrice =  pPriceInput.value ;
    arrItems[selectedIndex].pCat = pCatInput.value ;
    arrItems[selectedIndex].pDesc = pDescInput.value ;

    displayItems();
    localStorage.setItem("Product" , JSON.stringify(arrItems));
    clearAll();

    document.getElementById("add_btn").style.display ="block";
    var update =  document.getElementById("update_btn");
        update.setAttribute('style' , 'display : none !important')
    
}


function searchProduct(userWord){

    // for(var i = 0 ;i< arrItems.length;i++){

    //     if(arrItems[i].pName.includes(userWord)){

    //         console.log("dd");

    //     }
    // }



}