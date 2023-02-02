// https://imdb-api.com/API/Search/k_ccxkk6gd/{filmin adi}
document.getElementById('btn').addEventListener('click',() => {
    document.getElementById('films').innerHTML=``
fetch(`https://imdb-api.com/en/API/Search/k_m52l4e8n/${document.getElementById('film-input').value}`)
    .then((resp) => resp.json())
    .then((data) => {
        // console.log(data.results);
        for (let film of data.results) {
            console.log(film);
            document.getElementById("films").innerHTML +=
             `
             <div class="container-fluid">
             <div class="row">
                 <div class="col-md-3">
                     <div style="width:222px;height:420px" class="card mb-3">
                         <img class="card-img-top" style="height: 300px" src="${film.image}" alt="Card image cap">
                         <div class="card-body">
                             <h5 class="card-title">${film.title}</h5>
                             <p class="card-text">${film.description}</p>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
            `
        }
        })
    })