const arrayArticles = [
  `   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
    adipisci voluptate ullam consequatur inventore dicta, accusantium
    aperiam in aspernatur cum possimus est atque saepe repellat, quod
    exercitationem distinctio similique doloremque.`,
  `   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
    adipisci voluptate ullam consequatur inventore dicta, accusantium
    aperiam in aspernatur cum possimus est atque saepe repellat, quod
    exercitationem distinctio similique doloremque.`,
  `   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
    adipisci voluptate ullam consequatur inventore dicta, accusantium
    aperiam in aspernatur cum possimus est atque saepe repellat, quod
    exercitationem distinctio similique doloremque.`,
  `   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
    adipisci voluptate ullam consequatur inventore dicta, accusantium
    aperiam in aspernatur cum possimus est atque saepe repellat, quod
    exercitationem distinctio similique doloremque.`,
  `   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
    adipisci voluptate ullam consequatur inventore dicta, accusantium
    aperiam in aspernatur cum possimus est atque saepe repellat, quod
    exercitationem distinctio similique doloremque.`,
];

const arrayPets = [
  {
    nome: "Pudim",
    idade: "2 anos",
    imagem:
      "https://img.freepik.com/fotos-gratis/o-gato-de-bengala-dourado-sobre-fundo-preto_155003-10555.jpg?size=626&ext=jpg",
  },
  {
    nome: "Sapeca",
    idade: "3 anos",
    imagem:
      "https://img.freepik.com/fotos-gratis/close-vertical-de-um-lindo-gato-europeu-de-pelo-curto_181624-34587.jpg?w=360&t=st=1686366032~exp=1686366632~hmac=4ba0d46cc34517ffcfd3486d9d634cd85c951cf0ec55af7475789226c7bc7d43",
  },
  {
    nome: "Linguarudo",
    idade: "4 anos",
    imagem:
      "https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg?size=626&ext=jpg&ga=GA1.1.2142478578.1686366023&semt=sph",
  },
  {
    nome: "Pudim",
    idade: "2 anos",
    imagem:
      "https://img.freepik.com/fotos-gratis/o-gato-de-bengala-dourado-sobre-fundo-preto_155003-10555.jpg?size=626&ext=jpg",
  },
  {
    nome: "Feopudo",
    idade: "2 anos",
    imagem:
      "https://img.freepik.com/fotos-gratis/vista-frontal-do-conceito-de-cachorro-fofo-engracado_23-2148786532.jpg?size=626&ext=jpg&ga=GA1.1.2142478578.1686366023&semt=sph",
  },
  {
    nome: "Pequeno Garfield",
    idade: "5 meses",
    imagem:
      "https://img.freepik.com/fotos-gratis/o-gato-vermelho-ou-branco-eu-no-estudio-branco_155003-13189.jpg?size=626&ext=jpg&ga=GA1.1.2142478578.1686366023&semt=sph",
  },
  {
    nome: "Orelha",
    idade: "2 anos",
    imagem:
      "https://img.freepik.com/fotos-gratis/cachorro-basenji-inteligente-e-amigavel-dando-a-pata-de-perto-isolado-no-branco_346278-1626.jpg?size=626&ext=jpg&ga=GA1.2.2142478578.1686366023&semt=sph",
  },
];

// CRIANDO E MANIPULANDO ARTICLES DINAMICAMENTE
for (let i = 0; i < arrayArticles.length; i++) {
  // CRIANDO O ELEMENTO
  const article = document.createElement("article");

  // ADD A CLASS dica_artigo A CADA ARTICLE CRIADO
  article.classList.add("dica_artigo");

  // PASSANDO CONTEUDO A CADA ARTICLE CRIADO
  article.innerText = arrayArticles[i];

  // MOSTRAR CADA ARTICLE NO DOM
  const articlePai = document.getElementById("article_pai");
  articlePai.appendChild(article);
}

// CRIANDO A MANIPULANDO CARDS DE PETS DINAMICAMENTE
for (let i = 0; i < arrayPets.length; i++) {
  // CRIAR O ELEMENTO DIV QUE SERÁ O CARD
  const card = document.createElement("div");

  // ADD A CLASS card à div criada
  card.classList.add("card");
  // PASSANDO CONTEUDO AO NOSSO CARD
  card.innerHTML = `
    <img src=${arrayPets[i].imagem} />
    <h3>${arrayPets[i].nome}</h3>
    <p>${arrayPets[i].idade}</p>
  `;

  // ADD O CARD AO DOM
  const petsSection = document.getElementById("pets");
  petsSection.appendChild(card);
}
