








let projet = document.querySelector("#projetss_card");

fetch("http://localhost:3500/api/projets").then(function (response) {
    return response.json()
}).then(function (donnee) {





    console.log(donnee)

    donnee.forEach(function (element) {
        console.log(element);







        let projet__box = document.createElement('div');
        // projet__box.setAttribute('id', 'projet__box');
        projet__box.classList.add("col-md-4", "projet_box");
        projet.appendChild(projet__box);


        let projet_card = document.createElement('div');
        projet_card.classList.add("card", "projet_card");
        projet__box.appendChild(projet_card);



        let projet__image = document.createElement('img');
        projet__image.classList.add("card-img-top", "image_projet");

        projet__image.setAttribute('src', "./img/kda4.jpg ");
        projet_card.appendChild(projet__image);





        let card_body = document.createElement('div');
        card_body.classList.add("card-body");
        projet_card.appendChild(card_body);





        let card_title = document.createElement('h5');
        card_title.classList.add("card-title");
        card_title.textContent = element.name;
        card_body.appendChild(card_title);




        // let card_texte = document.createElement('p');
        // card_texte.classList.add("card-text");
        // card_texte.textContent = element.detail;
        // card_body.appendChild(card_texte);



        let button_box = document.createElement('div');
        button_box.setAttribute('role', 'group');
        button_box.setAttribute('arial-label', 'Second group');
        button_box.classList.add("btn-group", "me-2");
        card_body.appendChild(button_box);



        let Button = document.createElement('button');
        Button.classList.add("favorite", "styled");
        Button.setAttribute('type', 'button');

        Button.textContent = "VOIR";
        button_box.appendChild(Button);


    });

})



