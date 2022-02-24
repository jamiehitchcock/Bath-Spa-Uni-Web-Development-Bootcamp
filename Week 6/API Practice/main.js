const url = "https://swapi.dev/api/planets";

fetch(url)
.then((response) => {
        return response.json()
    })
.then((data) => {
    const planets = (data.results);
    planets.map((planet) => {
        createPlanetDiv(planet);
        console.log(planet);
    })
    
})
.catch((error) => console.log(error.message));

function createPlanetDiv(planet){
    const target = document.getElementById("target")
    const div = document.createElement("div");
    div.classList.add()
    const h3Name = document.createElement("h3");
    const pName = document.createElement("h3");
    pName.innerHTML = planet.name;
    const h3Pop = document.createElement("h3");
    const pPop = document.createElement("h3");
    pPop.innerHTML = planet.population;
    const h3terr = document.createElement("h3");
    const pTerr = document.createElement("h3");
    pTerr.innerHTML = planet.terrain;


    div.appendChild(pName);
    div.appendChild(pPop);
    div.appendChild(pTerr);

    target.appendChild(div);
}

