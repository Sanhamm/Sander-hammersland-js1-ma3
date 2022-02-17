const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=62a1eb0792414854a9c08e8c67a64146";
const out = document.querySelector("#out");

listGames = (list) => {     
    console.log(list);     
    list.splice(8, 20);     
    out.innerHTML = ""; 
    
    for (let item of list) {         
        let newdiv = `<div>
        <h2>${item.name}</h2>         
        <p>${item.rating}</p>         
        <p>${item.tags.length}</p>         
        </div>`;         
        out.innerHTML += newdiv;
    } 
};

    fetch(cors)  
    .then(response => response.json())     
    .then(data => console.log(data))     
    .catch(error =>{         
        console.error(error.message);
        out.innerHTML =`<div class="error> Something wrong!</div>`;    
     });