

let res = fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
  res
    .then((data) => data.json())
    .then((data1) => {
      let containerDiv = document.createElement("div");
      containerDiv.className = "container";

      for (let i = 0; i < data1.results.length; i++) {
        let pokemon = data1.results[i];
        console.log(pokemon.name);

        let div = document.createElement("div");
        div.className = " row  col-lg-3"; 
        div.innerHTML = `
          <div class="box">
            <div class="card" style="width: 100%;">
              <div class="card-header">
                <h5 class="card-title heading">${pokemon.name.toUpperCase()}</h5>
              </div>
              <div class="card-body">
                <img src="" class="card-img-top card-image" id="pokemonImage${i}" alt="">
              </div>
              <div class="card-footer">
              <button class=" btn btn-primary" onclick="fetchAndDisplayPokemonImage('${pokemon.url}', ${i})">Click For Image</button>
              </div>
            </div>
          </div>
        `;
        containerDiv.appendChild(div);
      }

      document.body.append(containerDiv);
    });

  function fetchAndDisplayPokemonImage(pokemonUrl, index) {
    fetch(pokemonUrl)
      .then((response) => response.json())
      .then((data) => {
        const imageUrl = data.sprites.front_default;
        const pokemonName = data.name;
        const imageElement = document.getElementById(`pokemonImage${index}`);
        imageElement.src = imageUrl;
        imageElement.alt = pokemonName;
      });
  }
