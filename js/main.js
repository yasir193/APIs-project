// ***************************************NAVBAR AND TOGGLE******************************************************
let oo =  $(".ua").innerWidth();
$(".gear").css("left" , +oo);


$(".gear").click(function(){
    if( $(".ua").css("left") == "0px" ){
        $(".ua").animate({ left: -oo  } ,500 );
        $(".gear").animate({left: 0} ,500);
        $(".iconn").attr("class" , "fa-solid fa-navicon iconn fa-3x");
    }else{
        $(".ua").animate({ left: 0} , 500);
        $(".gear").animate({left: +oo}, 500 );
        $(".iconn").attr("class" , "fa-solid fa-xmark iconn fa-3x");
    }
    
})
// **********************************************************************************************************


// ********************************************* API FOR HOME SECTION ****************************************
let requestHome = new XMLHttpRequest

let allimages = [];
requestHome.open("get", "https://www.themealdb.com/api/json/v1/1/search.php?s=")
requestHome.send();
requestHome.addEventListener("readystatechange", function(){
    if(requestHome.readyState == 4 && requestHome.status == 200){
        allimages = JSON.parse(requestHome.response).meals;
        displayHomeSection()
    }
})

function displayHomeSection(){
    var all ="";
    
    for( i = 0 ; i<allimages.length ; i++ ){
        
        all += `<div class="col-md-3">
        <div>
            <img onclick="diss(${i})" src="${allimages[i].strMealThumb}" class="w-100 mt-4 mb-2 imgHomeSection" alt="">
        </div>
    </div>`
    }
    document.querySelector(".homeSectionAPI").innerHTML = all;
    
}



function diss(index){
    document.querySelector(".homeSectionAPI").innerHTML = `<div class="col-md-3 mt-3">
    <div class="div1">
        <img src="${allimages[index].strMealThumb}" class="w-100 imgHomeSection" alt="">
        <h3>${allimages[index].strMeal}</h3>
    </div>
</div>

<div class="col-md-9 mt-3">
    <div class="div2">
        <h3>Instructions</h3>
        <p>${allimages[index].strInstructions}</p>
        <h3>Area : ${allimages[index].strArea}</h3>
        <h3>Category : ${allimages[index].strCategory}</h3>
        <h3>Recipes :</h3>
        <span class="bg-danger imgHomeSection m-2">${allimages[index].strMeasure1+allimages[index].strIngredient1}</span>
        <span class="bg-danger imgHomeSection m-2">${allimages[index].strMeasure2+allimages[index].strIngredient2}</span>
        <span class="bg-danger imgHomeSection m-2">${allimages[index].strMeasure3+allimages[index].strIngredient3}</span>
        <span class="bg-danger imgHomeSection m-2">${allimages[index].strMeasure4+allimages[index].strIngredient4}</span>
        <span class="bg-danger imgHomeSection m-2">${allimages[index].strMeasure5+allimages[index].strIngredient5}</span>
        <span class="bg-danger imgHomeSection m-2">${allimages[index].strMeasure6+allimages[index].strIngredient6}</span>
        <span class="bg-danger imgHomeSection m-2">${allimages[index].strMeasure7+allimages[index].strIngredient7}</span>
        <span class="bg-danger imgHomeSection m-2">${allimages[index].strMeasure8+allimages[index].strIngredient8}</span>
        <span class="bg-danger imgHomeSection m-2">${allimages[index].strMeasure9+allimages[index].strIngredient9}</span>
        <span class="bg-danger imgHomeSection m-2">${allimages[index].strMeasure10+allimages[index].strIngredient10}</span>
        <span class="bg-danger imgHomeSection m-2">${allimages[index].strMeasure11+allimages[index].strIngredient11}</span>
        <span class="bg-danger imgHomeSection m-2">${allimages[index].strMeasure12+allimages[index].strIngredient12}</span>
        <span class="bg-danger imgHomeSection m-2">${allimages[index].strMeasure13+allimages[index].strIngredient13}</span>
        <span class="bg-danger imgHomeSection m-2">${allimages[index].strMeasure14+allimages[index].strIngredient14}</span>
        <span class="bg-danger imgHomeSection m-2">${allimages[index].strMeasure15+allimages[index].strIngredient15}</span>
        <span class="bg-danger imgHomeSection m-2">${allimages[index].strMeasure16+allimages[index].strIngredient16}</span>
        
        <h3 class="imgHomeSection mt-3">Tags:<span class="bg-warning-subtle text-bg-warning imgHomeSection m-2">${allimages[index].strTags}</span></h3>
        <div>
            <button class="btn btn-success"><a class="navList" href="${allimages[index].strSource}">Source</a></button>
            <button class="btn btn-danger"><a class="navList" href="${allimages[index].strYoutube}">Youtube</a></button>
        </div>
    
    
    </div> 
</div>`
}
// ************************************EEEEEEEEENTRY POINT******************************************8
function getSearchAPI(){

    let requestSearch = new XMLHttpRequest;
    let allimagess = [];
    requestSearch.open("get", "https://www.themealdb.com/api/json/v1/1/categories.php")
    requestSearch.send();
    requestSearch.addEventListener("readystatechange", function(){
        if(requestSearch.readyState == 4 && requestSearch.status == 200){
            allimagess = JSON.parse(requestSearch.response).categories;
            displaySearchSection()
            
        }
    })

    function displaySearchSection(){
    var all2 ="";
    
    for( i = 0 ; i<allimagess.length ; i++ ){
        let q = allimagess[i].strCategory    
        all2 += `<div class="col-md-3">
        <div>
            <img onclick="AllBeefs(${"'"+q+"'"})" src="${allimagess[i].strCategoryThumb}" class="w-100 mt-4 mb-2 imgHomeSection" alt="">
        </div>
    </div>`
    
    // console.log(allimagess[i].strCategory);
    }
    document.querySelector(".homeSectionAPI").innerHTML = all2;
    
    }
}


// console.log(y.replace(/^"(.*)"$/, '$1'));
function AllBeefs(cate){
    let requestSearchBeef = new XMLHttpRequest;
    let allimagess = [];
    

    requestSearchBeef.open("get", `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cate}`)
    requestSearchBeef.send();
    requestSearchBeef.addEventListener("readystatechange", function(){
        if(requestSearchBeef.readyState == 4 && requestSearchBeef.status == 200){
            allimagess = JSON.parse(requestSearchBeef.response).meals;
            displaySearchBeefs()
            console.log(allimagess);
        }
    })
    function displaySearchBeefs(){
        var all2 ="";
        // ${allimagess[i].idMeal}
        for( i = 0 ; i<allimagess.length; i++ ){
            
            all2 += `<div class="col-md-3">
            <div>
                <img onclick="getSubBeef(${allimagess[i].idMeal})" src="${allimagess[i].strMealThumb}" class="w-100 mt-4 mb-2 imgHomeSection" alt="">
            </div>
        </div>`
        }
        document.querySelector(".homeSectionAPI").innerHTML = all2;
    }



}
// *********************************************************************************************************
function getSubBeef(id){
    let requestSubBeef = new XMLHttpRequest;
    let allimageso = [];
    requestSubBeef.open("get", `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    requestSubBeef.send();
    requestSubBeef.addEventListener("readystatechange", function(){
        if(requestSubBeef.readyState == 4 && requestSubBeef.status == 200){
            allimageso = JSON.parse(requestSubBeef.response).meals;
            display();
            
        }
    })
    
    function display(){
        var all ="";
        
        for( i = 0 ; i<allimageso.length ; i++ ){
            
            all += `<div class="col-md-3">
            <div>
                <img onclick="" src="${allimageso[i].strMealThumb}" class="w-100 mt-4 mb-2 imgHomeSection" alt="">
            </div>
        </div>`
        }
        document.querySelector(".homeSectionAPI").innerHTML = `<div class="col-md-3 mt-3">
        <div class="div1">
            <img src="${allimageso[0].strMealThumb}" class="w-100 imgHomeSection" alt="">
            <h3>${allimageso[0].strMeal}</h3>
        </div>
    </div>
    
    <div class="col-md-9 mt-3">
        <div class="div2">
            <h3>Instructions</h3>
            <p>${allimageso[0].strInstructions}</p>
            <h3>Area : ${allimageso[0].strArea}</h3>
            <h3>Category : ${allimageso[0].strCategory}</h3>
            <h3>Recipes :</h3>
            <span class="bg-danger imgHomeSection m-2">${allimageso[0].strMeasure1+allimageso[0].strIngredient1}</span>
            <span class="bg-danger imgHomeSection m-2">${allimageso[0].strMeasure2+allimageso[0].strIngredient2}</span>
            <span class="bg-danger imgHomeSection m-2">${allimageso[0].strMeasure3+allimageso[0].strIngredient3}</span>
            <span class="bg-danger imgHomeSection m-2">${allimageso[0].strMeasure4+allimageso[0].strIngredient4}</span>
            <span class="bg-danger imgHomeSection m-2">${allimageso[0].strMeasure5+allimageso[0].strIngredient5}</span>
            <span class="bg-danger imgHomeSection m-2">${allimageso[0].strMeasure6+allimageso[0].strIngredient6}</span>
            <span class="bg-danger imgHomeSection m-2">${allimageso[0].strMeasure7+allimageso[0].strIngredient7}</span>
            <span class="bg-danger imgHomeSection m-2">${allimageso[0].strMeasure8+allimageso[0].strIngredient8}</span>
            <span class="bg-danger imgHomeSection m-2">${allimageso[0].strMeasure9+allimageso[0].strIngredient9}</span>
            <span class="bg-danger imgHomeSection m-2">${allimageso[0].strMeasure10+allimageso[0].strIngredient10}</span>
            <span class="bg-danger imgHomeSection m-2">${allimageso[0].strMeasure11+allimageso[0].strIngredient11}</span>
            <span class="bg-danger imgHomeSection m-2">${allimageso[0].strMeasure12+allimageso[0].strIngredient12}</span>
            <span class="bg-danger imgHomeSection m-2">${allimageso[0].strMeasure13+allimageso[0].strIngredient13}</span>
            <span class="bg-danger imgHomeSection m-2">${allimageso[0].strMeasure14+allimageso[0].strIngredient14}</span>
            <span class="bg-danger imgHomeSection m-2">${allimageso[0].strMeasure15+allimageso[0].strIngredient15}</span>
            <span class="bg-danger imgHomeSection m-2">${allimageso[0].strMeasure16+allimageso[0].strIngredient16}</span>
            
            <h3 class="imgHomeSection mt-3">Tags:<span class="bg-warning-subtle text-bg-warning imgHomeSection m-2">${allimageso[0].strTags}</span></h3>
            <div>
                <button class="btn btn-success"><a class="navList" href="${allimageso[0].strSource}">Source</a></button>
                <button class="btn btn-danger"><a class="navList" href="${allimageso[0].strYoutube}">Youtube</a></button>
            </div>
        
        
        </div> 
    </div>`;
        
    }    

}


// **********************************************************************************************************

function getArea(){
    let requestSearchByArea = new XMLHttpRequest;
    let allicons = [];
    requestSearchByArea.open("get", "https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    requestSearchByArea.send();
    requestSearchByArea.addEventListener("readystatechange", function(){
        if(requestSearchByArea.readyState == 4 && requestSearchByArea.status == 200){
            allicons = JSON.parse(requestSearchByArea.response).meals;
            displayByArea()
            
        }
    })


    function displayByArea(){
        var allic ="";
        
    for( i = 0 ; i<allicons.length ; i++ ){
        let z = allicons[i].strArea
        allic += `<div class="col-md-3 mt-4 mb-4">
        <div onclick="displaySpecificArea(${"'"+z+"'"})" class="text-center">
            <i class="fa-solid fa-3x fa-home"></i>
            <h3>${allicons[i].strArea}</h3>
        </div>
    </div>`
    // console.log(z);
    }
    document.querySelector(".homeSectionAPI").innerHTML = allic;
    
    }
}
    
function displaySpecificArea(title){

    let another = new XMLHttpRequest;
    let alll = [];
    another.open("get" , `https://www.themealdb.com/api/json/v1/1/filter.php?a=${title}`)
    another.send();
    another.addEventListener("readystatechange" , function(){
        if(another.readyState == 4 && another.status == 200){
            alll = JSON.parse(another.response).meals
            // console.log(alll);
            disssplayy()
        }
    })

    function disssplayy(){
        let alli = "";
        for(let i = 0 ; i<alll.length ; i++){
            alli+=`<div class="col-md-3">
            <div>
                <img onclick="AreaRecipes(${alll[i].idMeal})" src="${alll[i].strMealThumb}" class="w-100 mt-4 mb-2 imgHomeSection" alt="">
            </div>
        </div>`
        }
        document.querySelector(".homeSectionAPI").innerHTML = alli
    }
}


function AreaRecipes(id){
    let anoother = new XMLHttpRequest;
    let allim = [];
    anoother.open("get", `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    anoother.send();
    anoother.addEventListener("readystatechange", function(){
        if(anoother.readyState == 4 && anoother.status == 200){
            allim = JSON.parse(anoother.response).meals;
            displayA();
        }

    })

    function displayA(){

        var all ="";
        
        for( i = 0 ; i<allim.length ; i++ ){
            
            all += `<div class="col-md-3">
            <div>
                <img onclick="" src="${allim[i].strMealThumb}" class="w-100 mt-4 mb-2 imgHomeSection" alt="">
            </div>
        </div>`
        }
        document.querySelector(".homeSectionAPI").innerHTML = `<div class="col-md-3 mt-3">
        <div class="div1">
            <img src="${allim[0].strMealThumb}" class="w-100 imgHomeSection" alt="">
            <h3>${allim[0].strMeal}</h3>
        </div>
    </div>
    
    <div class="col-md-9 mt-3">
        <div class="div2">
            <h3>Instructions</h3>
            <p>${allim[0].strInstructions}</p>
            <h3>Area : ${allim[0].strArea}</h3>
            <h3>Category : ${allim[0].strCategory}</h3>
            <h3>Recipes :</h3>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure1+allim[0].strIngredient1}</span>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure2+allim[0].strIngredient2}</span>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure3+allim[0].strIngredient3}</span>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure4+allim[0].strIngredient4}</span>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure5+allim[0].strIngredient5}</span>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure6+allim[0].strIngredient6}</span>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure7+allim[0].strIngredient7}</span>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure8+allim[0].strIngredient8}</span>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure9+allim[0].strIngredient9}</span>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure10+allim[0].strIngredient10}</span>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure11+allim[0].strIngredient11}</span>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure12+allim[0].strIngredient12}</span>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure13+allim[0].strIngredient13}</span>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure14+allim[0].strIngredient14}</span>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure15+allim[0].strIngredient15}</span>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure16+allim[0].strIngredient16}</span>
            
            <h3 class="imgHomeSection mt-3">Tags:<span class="bg-warning-subtle text-bg-warning imgHomeSection m-2">${allim[0].strTags}</span></h3>
            <div>
                <button class="btn btn-success"><a class="navList" href="${allim[0].strSource}">Source</a></button>
                <button class="btn btn-danger"><a class="navList" href="${allim[0].strYoutube}">Youtube</a></button>
            </div>
        
        
        </div> 
    </div>`;
        
    }

}
// ************************************************************************************************


function getIngredients(){
    let requestSearchByIngredients = new XMLHttpRequest;
    let alliconss = [];
    requestSearchByIngredients.open("get", "https://www.themealdb.com/api/json/v1/1/list.php?i=list")
    requestSearchByIngredients.send();
    requestSearchByIngredients.addEventListener("readystatechange", function(){
        if(requestSearchByIngredients.readyState == 4 && requestSearchByIngredients.status == 200){
            alliconss = JSON.parse(requestSearchByIngredients.response).meals;
            displayByIngredients()
            
        }
    })


    function displayByIngredients(){
        var allicc ="";
        
    for( i = 0 ; i<20 ; i++ ){
        let p = alliconss[i].strIngredient
        allicc += `<div class="col-md-3 mt-4 mb-4">
        <div onclick="displaySpecificIngredients(${"'"+p+"'"})" class="text-center">
            <i class="fa-solid fa-3x fa-drumstick-bite"></i>
            <h3>${alliconss[i].strIngredient}</h3>
            <p class="hamada">${alliconss[i].strDescription}</p>
        </div>
    </div>`
    // console.log(z);
    }
    document.querySelector(".homeSectionAPI").innerHTML = allicc;
    
    }
}
    
function displaySpecificIngredients(title){

    let anooother = new XMLHttpRequest;
    let allll = [];
    anooother.open("get" , `https://www.themealdb.com/api/json/v1/1/filter.php?i=${title}`)
    anooother.send();
    anooother.addEventListener("readystatechange" , function(){
        if(anooother.readyState == 4 && anooother.status == 200){
            allll = JSON.parse(anooother.response).meals
            // console.log(alll);
            disssplayyy()
        }
    })

    function disssplayyy(){
        let allii = "";
        for(let i = 0 ; i<allll.length ; i++){
            allii+=`<div class="col-md-3">
            <div>
                <img onclick="IngredientsRecipes(${allll[i].idMeal})" src="${allll[i].strMealThumb}" class="w-100 mt-4 mb-2 imgHomeSection" alt="">
            </div>
        </div>`
        }
        document.querySelector(".homeSectionAPI").innerHTML = allii
    }
}



function IngredientsRecipes(id){
    let anoother = new XMLHttpRequest;
    let allim = [];
    anoother.open("get", `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    anoother.send();
    anoother.addEventListener("readystatechange", function(){
        if(anoother.readyState == 4 && anoother.status == 200){
            allim = JSON.parse(anoother.response).meals;
            displayA();
        }

    })

    function displayA(){

        var all ="";
        
        for( i = 0 ; i<allim.length ; i++ ){
            
            all += `<div class="col-md-3">
            <div>
                <img onclick="" src="${allim[i].strMealThumb}" class="w-100 mt-4 mb-2 imgHomeSection" alt="">
            </div>
        </div>`
        }
        document.querySelector(".homeSectionAPI").innerHTML = `<div class="col-md-3 mt-3">
        <div class="div1">
            <img src="${allim[0].strMealThumb}" class="w-100 imgHomeSection" alt="">
            <h3>${allim[0].strMeal}</h3>
        </div>
    </div>
    
    <div class="col-md-9 mt-3">
        <div class="div2">
            <h3>Instructions</h3>
            <p>${allim[0].strInstructions}</p>
            <h3>Area : ${allim[0].strArea}</h3>
            <h3>Category : ${allim[0].strCategory}</h3>
            <h3>Recipes :</h3>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure1+allim[0].strIngredient1}</span>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure2+allim[0].strIngredient2}</span>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure3+allim[0].strIngredient3}</span>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure4+allim[0].strIngredient4}</span>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure5+allim[0].strIngredient5}</span>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure6+allim[0].strIngredient6}</span>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure7+allim[0].strIngredient7}</span>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure8+allim[0].strIngredient8}</span>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure9+allim[0].strIngredient9}</span>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure10+allim[0].strIngredient10}</span>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure11+allim[0].strIngredient11}</span>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure12+allim[0].strIngredient12}</span>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure13+allim[0].strIngredient13}</span>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure14+allim[0].strIngredient14}</span>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure15+allim[0].strIngredient15}</span>
            <span class="bg-danger imgHomeSection m-2">${allim[0].strMeasure16+allim[0].strIngredient16}</span>
            
            <h3 class="imgHomeSection mt-3">Tags:<span class="bg-warning-subtle text-bg-warning imgHomeSection m-2">${allim[0].strTags}</span></h3>
            <div>
                <button class="btn btn-success"><a class="navList" href="${allim[0].strSource}">Source</a></button>
                <button class="btn btn-danger"><a class="navList" href="${allim[0].strYoutube}">Youtube</a></button>
            </div>
        
        
        </div> 
    </div>`;
        
    }

}











// ****************************************************************** SSSSSSEARCH ***********************************************************

function search(){

    document.querySelector(".homeSectionAPI").innerHTML = `<div class="col-md-6 text-center">
    <div>
        <label for="it">Search by name</label>
        <input onclick="g()" id="it" class="form-control w-75 t m-auto" type="text">
    </div>

</div>
<div class="col-md-6 text-center">
    <div>
        <label for="io">Search by letter</label>
        <input onclick="p()" id="io" class="form-control w-75 t2 m-auto" type="text">
    </div>

</div>`


}

function g(){

    document.querySelector("#it").addEventListener("keyup" ,function(){
    let searchAPI = new XMLHttpRequest;
    let searchArray = [];
    searchAPI.open("get", `https://www.themealdb.com/api/json/v1/1/search.php?s=${document.querySelector("#it").value}`)
    searchAPI.send();
    searchAPI.addEventListener("readystatechange", function(){
        if(searchAPI.readyState == 4 && searchAPI.status == 200){
            searchArray = JSON.parse(searchAPI.response).meals;
            console.log(searchArray);
            displaysearch();
        }


    })
    function displaysearch(){
        var all ="";
        
        for( i = 0 ; i<searchArray.length ; i++ ){
            
            all += `<div class="col-md-3">
            <div>
                <img onclick="searchRecipes(${searchArray[i].idMeal})" src="${searchArray[i].strMealThumb}" class="w-100 mt-4 mb-2 imgHomeSection" alt="">
            </div>
        </div>`
        }
        document.querySelector(".rowSection").innerHTML = all;
    
    
    
    
    
    
    
    
    
    
    
    
    }




    })
    



}

function searchRecipes(id){
    let aoother = new XMLHttpRequest;
    let alim = [];
    aoother.open("get", `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    aoother.send();
    aoother.addEventListener("readystatechange", function(){
        if(aoother.readyState == 4 && aoother.status == 200){
            alim = JSON.parse(aoother.response).meals;
            displayAA();
        }

    })

    function displayAA(){

        var all ="";
        
        for( i = 0 ; i<alim.length ; i++ ){
            
            all += `<div class="col-md-3">
            <div>
                <img onclick="" src="${alim[i].strMealThumb}" class="w-100 mt-4 mb-2 imgHomeSection" alt="">
            </div>
        </div>`
        }
        document.querySelector(".rowSection").innerHTML =``
        document.querySelector(".homeSectionAPI").innerHTML = `<div class="col-md-3 mt-3">
        <div class="div1">
            <img src="${alim[0].strMealThumb}" class="w-100 imgHomeSection" alt="">
            <h3>${alim[0].strMeal}</h3>
        </div>
    </div>
    
    <div class="col-md-9 mt-3">
        <div class="div2">
            <h3>Instructions</h3>
            <p>${alim[0].strInstructions}</p>
            <h3>Area : ${alim[0].strArea}</h3>
            <h3>Category : ${alim[0].strCategory}</h3>
            <h3>Recipes :</h3>
            <span class="bg-danger imgHomeSection m-2">${alim[0].strMeasure1+alim[0].strIngredient1}</span>
            <span class="bg-danger imgHomeSection m-2">${alim[0].strMeasure2+alim[0].strIngredient2}</span>
            <span class="bg-danger imgHomeSection m-2">${alim[0].strMeasure3+alim[0].strIngredient3}</span>
            <span class="bg-danger imgHomeSection m-2">${alim[0].strMeasure4+alim[0].strIngredient4}</span>
            <span class="bg-danger imgHomeSection m-2">${alim[0].strMeasure5+alim[0].strIngredient5}</span>
            <span class="bg-danger imgHomeSection m-2">${alim[0].strMeasure6+alim[0].strIngredient6}</span>
            <span class="bg-danger imgHomeSection m-2">${alim[0].strMeasure7+alim[0].strIngredient7}</span>
            <span class="bg-danger imgHomeSection m-2">${alim[0].strMeasure8+alim[0].strIngredient8}</span>
            <span class="bg-danger imgHomeSection m-2">${alim[0].strMeasure9+alim[0].strIngredient9}</span>
            <span class="bg-danger imgHomeSection m-2">${alim[0].strMeasure10+alim[0].strIngredient10}</span>
            <span class="bg-danger imgHomeSection m-2">${alim[0].strMeasure11+alim[0].strIngredient11}</span>
            <span class="bg-danger imgHomeSection m-2">${alim[0].strMeasure12+alim[0].strIngredient12}</span>
            <span class="bg-danger imgHomeSection m-2">${alim[0].strMeasure13+alim[0].strIngredient13}</span>
            <span class="bg-danger imgHomeSection m-2">${alim[0].strMeasure14+alim[0].strIngredient14}</span>
            <span class="bg-danger imgHomeSection m-2">${alim[0].strMeasure15+alim[0].strIngredient15}</span>
            <span class="bg-danger imgHomeSection m-2">${alim[0].strMeasure16+alim[0].strIngredient16}</span>
            
            <h3 class="imgHomeSection mt-3">Tags:<span class="bg-warning-subtle text-bg-warning imgHomeSection m-2">${alim[0].strTags}</span></h3>
            <div>
                <button class="btn btn-success"><a class="navList" href="${alim[0].strSource}">Source</a></button>
                <button class="btn btn-danger"><a class="navList" href="${alim[0].strYoutube}">Youtube</a></button>
            </div>
        
        
        </div> 
    </div>`;
        
    }

}


function p(){
document.querySelector("#io").addEventListener("keyup" ,function(){
    let searchAPI = new XMLHttpRequest;
    let searchArray = [];
    searchAPI.open("get", `https://www.themealdb.com/api/json/v1/1/search.php?f=${document.querySelector("#io").value}`)
    searchAPI.send();
    searchAPI.addEventListener("readystatechange", function(){
        if(searchAPI.readyState == 4 && searchAPI.status == 200){
            searchArray = JSON.parse(searchAPI.response).meals;
            console.log(searchArray);
            displaysearch();
        }


    })
    function displaysearch(){
        var all ="";
        
        for( i = 0 ; i<searchArray.length ; i++ ){
            
            all += `<div class="col-md-3">
            <div>
                <img onclick="searcRecipes(${searchArray[i].idMeal})" src="${searchArray[i].strMealThumb}" class="w-100 mt-4 mb-2 imgHomeSection" alt="">
            </div>
        </div>`
        }
        document.querySelector(".rowSection").innerHTML = all;
    
    
    
    
    
    
    
    
    
    
    
    
    }




    })
    



}



function searcRecipes(id){
    let aother = new XMLHttpRequest;
    let aalim = [];
    aother.open("get", `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    aother.send();
    aother.addEventListener("readystatechange", function(){
        if(aother.readyState == 4 && aother.status == 200){
            aalim = JSON.parse(aother.response).meals;
            displayAAA();
        }

    })

    function displayAAA(){

        var all ="";
        
        for( i = 0 ; i<aalim.length ; i++ ){
            
            all += `<div class="col-md-3">
            <div>
                <img onclick="" src="${aalim[i].strMealThumb}" class="w-100 mt-4 mb-2 imgHomeSection" alt="">
            </div>
        </div>`
        }
        document.querySelector(".rowSection").innerHTML = ``
        document.querySelector(".homeSectionAPI").innerHTML = `<div class="col-md-3 mt-3">
        <div class="div1">
            <img src="${aalim[0].strMealThumb}" class="w-100 imgHomeSection" alt="">
            <h3>${aalim[0].strMeal}</h3>
        </div>
    </div>
    
    <div class="col-md-9 mt-3">
        <div class="div2">
            <h3>Instructions</h3>
            <p>${aalim[0].strInstructions}</p>
            <h3>Area : ${aalim[0].strArea}</h3>
            <h3>Category : ${aalim[0].strCategory}</h3>
            <h3>Recipes :</h3>
            <span class="bg-danger imgHomeSection m-2">${aalim[0].strMeasure1+aalim[0].strIngredient1}</span>
            <span class="bg-danger imgHomeSection m-2">${aalim[0].strMeasure2+aalim[0].strIngredient2}</span>
            <span class="bg-danger imgHomeSection m-2">${aalim[0].strMeasure3+aalim[0].strIngredient3}</span>
            <span class="bg-danger imgHomeSection m-2">${aalim[0].strMeasure4+aalim[0].strIngredient4}</span>
            <span class="bg-danger imgHomeSection m-2">${aalim[0].strMeasure5+aalim[0].strIngredient5}</span>
            <span class="bg-danger imgHomeSection m-2">${aalim[0].strMeasure6+aalim[0].strIngredient6}</span>
            <span class="bg-danger imgHomeSection m-2">${aalim[0].strMeasure7+aalim[0].strIngredient7}</span>
            <span class="bg-danger imgHomeSection m-2">${aalim[0].strMeasure8+aalim[0].strIngredient8}</span>
            <span class="bg-danger imgHomeSection m-2">${aalim[0].strMeasure9+aalim[0].strIngredient9}</span>
            <span class="bg-danger imgHomeSection m-2">${aalim[0].strMeasure10+aalim[0].strIngredient10}</span>
            <span class="bg-danger imgHomeSection m-2">${aalim[0].strMeasure11+aalim[0].strIngredient11}</span>
            <span class="bg-danger imgHomeSection m-2">${aalim[0].strMeasure12+aalim[0].strIngredient12}</span>
            <span class="bg-danger imgHomeSection m-2">${aalim[0].strMeasure13+aalim[0].strIngredient13}</span>
            <span class="bg-danger imgHomeSection m-2">${aalim[0].strMeasure14+aalim[0].strIngredient14}</span>
            <span class="bg-danger imgHomeSection m-2">${aalim[0].strMeasure15+aalim[0].strIngredient15}</span>
            <span class="bg-danger imgHomeSection m-2">${aalim[0].strMeasure16+aalim[0].strIngredient16}</span>
            
            <h3 class="imgHomeSection mt-3">Tags:<span class="bg-warning-subtle text-bg-warning imgHomeSection m-2">${aalim[0].strTags}</span></h3>
            <div>
                <button class="btn btn-success"><a class="navList" href="${aalim[0].strSource}">Source</a></button>
                <button class="btn btn-danger"><a class="navList" href="${aalim[0].strYoutube}">Youtube</a></button>
            </div>
        
        
        </div> 
    </div>`;
        
    }

}









// ***********************************************************************************************************











function contactUs(){


    document.querySelector(".homeSectionAPI").innerHTML = `    <div class="container">



    <div class="row">

        <div class="col-md-6 text-center">
            <div>
                
                <input placeholder="enter your name" onclick="" id="" class="form-control w-75 my-2 m-auto" type="text">
            </div>
        
        </div>
        <div class="col-md-6 text-center">
            <div>
                
                <input placeholder="enter your email" onclick="" id="" class="form-control w-75 my-2 m-auto" type="text">
            </div>
        
        </div>
        <div class="col-md-6 text-center">
            <div>
                
                <input placeholder="enter your phone" onclick="" id="" class="form-control w-75 my-2 m-auto" type="text">
            </div>
        
        </div>
        <div class="col-md-6 text-center">
            <div>
                
                <input placeholder="enter your age" onclick="" id="" class="form-control w-75 my-2 m-auto" type="text">
            </div>
        
        </div>
        <div class="col-md-6 text-center">
            <div>
                
                <input placeholder="enter your password" onclick="" id="" class="form-control w-75 my-2 m-auto" type="text">
            </div>
        
        </div>
        <div class="col-md-6 text-center">
            <div>
                
                <input placeholder="re-enter your password" onclick="" id="" class="form-control w-75 my-2 m-auto" type="text">
            </div>
        
        </div>
        <div class=" col-12 w-25 d-flex m-auto">

            <button class="m-auto text-center btn btn-outline-danger">Sign Up</button>

        </div>
    </div>

</div>`






}