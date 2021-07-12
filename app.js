








let projet = document.querySelector("#projects_elements");

fetch("http://localhost:3500/api/projets").then(function (response) {
    return response.json()
}).then(function (donnee) {





    console.log(donnee)

    donnee.forEach(function (element) {
        console.log(element);







        let card_project = document.createElement('div');
        // card_project.setAttribute('id', 'card_project');
        card_project.classList.add("card_project");
        projet.appendChild(card_project);


        let image_projet = document.createElement('div');
        image_projet.classList.add("image_projet");
        card_project.appendChild(image_projet);


        let card_link = document.createElement('a');
        card_link.setAttribute('href',  element.lien);
        image_projet.appendChild(card_link);



        let projet__image = document.createElement('img');
        projet__image.classList.add("img-fluid");

        projet__image.setAttribute('src', element.image);
        projet__image.setAttribute('alt', "image du projet");

        card_link.appendChild(projet__image);



        let projet_nom_box = document.createElement('div');
        projet_nom_box.classList.add("nom_projet");
        card_project.appendChild(projet_nom_box);


        let projets_nom = document.createElement('p');
        projets_nom.textContent = element.name;
        projet_nom_box.appendChild(projets_nom);

        let descriptio_projet = document.createElement('div');
        descriptio_projet.classList.add("description_projet");
        card_project.appendChild(descriptio_projet);



        let projet_detail = document.createElement('h7');
        projet_detail.textContent = element.detail;
        descriptio_projet.appendChild(projet_detail);

    });

})
