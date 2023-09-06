const search = () => {
    const searchBox = document.getElementById("search_text_area").value.toUpperCase();
    const storeItems = document.getElementById("items");
    const product = document.querySelectorAll(".item")
    const pName = storeItems.getElementsByTagName("h1")

    for (var i=0; i < pName.length; i++){
        let match = product[i].getElementsByTagName('h1')[0];



        if(match){
          let textvalue =  match.textContent || match.innerHTML
          if(textvalue.toUpperCase().indexOf(searchBox) > -1) {
            product[i].style.display = "";

          }else{
            product[i].style.display = "none";
          }
        }
    }
};