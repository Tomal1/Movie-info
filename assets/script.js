let textInput = document.querySelector("#textInput");
let submitBtn = document.querySelector("#submitBtn");
let contents = document.querySelector("#contents");


function formReset(event){
    event.preventDefault();
    contents.innerHTML ="";
    applyAPI();
}


function applyAPI(){
    
    fetch(`http://www.omdbapi.com/?t=${textInput.value}&apikey=6aa91fd2`)
    .then(function (response) {
      console.log(response.status);
        return response.json();
    })


    .then(function(data){
        console.log(data);

        if(data.Error){
            contents.innerHTML = `"${textInput.value}" is not found, please check spelling`;
        } else{


    //realise year
        let yearCon = document.createElement("div");
        yearCon.classList.add("yearCon");
        yearCon.innerHTML =  data.Year;
        contents.appendChild(yearCon);

    // the actors are provided in an array so have to be split at the commas
        let actor = data.Actors
        let actorSep = actor.split(",");
        console.log(actorSep);

        for(let i = 0; i < actorSep.length; i++) {
            let actorCon = document.createElement("div");
            actorCon.classList.add("actorCon");
            actorCon.innerHTML = actorSep[i];
            contents.appendChild(actorCon);
        }

///this is the main image
        let hero = document.createElement("img");
        hero.setAttribute("src", data.Poster);
        hero.classList.add("hero");
        contents.append(hero);

  /// this is the plot section
        let plotCon  = document.createElement("div");
        plotCon.classList.add("plot");
        plotCon.innerHTML = data.Plot;
        contents.appendChild(plotCon);

        let awardCon = document.createElement("div");
        awardCon.classList.add("awards");
        awardCon.innerHTML = data.Awards;
        contents.appendChild(awardCon);

        let boxCon = document.createElement("div");
        boxCon.classList.add("boxOffice");
        boxCon.innerHTML = `Box office: ${data.BoxOffice}`;
        contents.appendChild(boxCon);

        let RuntimeCon = document.createElement("div");
        RuntimeCon.classList.add("Runtime");
        RuntimeCon.innerHTML = `Runtime: ${data.Runtime}`;
        contents.appendChild(RuntimeCon);






        submitBtn.addEventListener("click", formReset);
    }

    })
}

submitBtn.addEventListener("click", formReset)