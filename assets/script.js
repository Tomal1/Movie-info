let textInput = document.querySelector("#textInput");
let submitBtn = document.querySelector("#submitBtn");


submitBtn.addEventListener("click", function(event){
    event.preventDefault();

    fetch(`http://www.omdbapi.com/?t=${textInput.value}&apikey=6aa91fd2`)
    
    .then(function (response) {

        console.log(response.status);

        return response.json();
    })

    .then(function(data){
        console.log(data);

        let actor = data.Actors
        let actorSep = actor.split(",");
        console.log(actorSep);

        for(let i = 0; i < actorSep.length; i++) {
            let actorCon = document.createElement("div");
            actorCon.classList.add("actorCon");
            actorCon.innerHTML = actorSep[i];
            document.body.appendChild(actorCon);
        }


        let hero = document.createElement("img");
        hero.setAttribute("src", data.Poster);
        hero.classList.add("hero");
        document.body.append(hero);

  
        let plot = document.body.append(data.Plot);
      
        



    })

})