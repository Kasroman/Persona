/**
 * A partir du tableau, 
 * généré des cartes persona 
 * toutes les informations du tableau doivent être afficher sur une carte persona
 * 
 * 1 - Crée une version d'un personna en dur directement dans le HTML pour avoir un modèle
 *  {
        nom: "Emile",
        prenom: "Melp",
        age: 57
        sexe: "Masculin",
        description: "Emile Adore le foot et les pizza il commande régulèrement sur notre sit pour passer une bonne soirée avec ses amis",
        photo: "/JohnDoe.jpg"
    },
    Faite une fonction qui crée chacun des élément 
    Faite ensuite une fonction qui remplis les émélent avec les valeurs du tableau
    Vous pouvez maintenant afficher les élément dans votre html
 * 
 */


let personaArray = [
    {
        nom: "Doe",
        prenom: "John",
        age: 32,
        sexe: "Masculin",
        localisation: "Il vit en Espagne depuis 2008.Dans la ville de Barcelone",
        hobies: "Passioné de cuir, il aime fabriquer des objet en tout genre sac à main, portefeuille, ceinture.",
        gout: "Ouvrier du batiment",
        etude: "Formation de commercial",
        sport: "ne fait pas de sport",
        voyage: "Est partis dans divers pays du monde , Amerique latine, Canada, Pologne",
        photo: "/JohnDoe.jpg"
    },
    {
        nom: "Molette",
        prenom: "Amy",
        age: 24,
        sexe: "Feminin",
        localisation: "Elle en Hollande",
        hobies: "Elle adore jardiner, faire pousser des tomate de qualité extraordinaire et s'occuper de ses petites plante",
        etude: "Aucune",
        gout: "Ouvrier du batiment",
        sport: "Course a pied",
        voyage: "Elle est partis plusieur fois en Norvege voir sa soeur",
        photo: "/AmyMolette.jpg"
    },
    {
        nom: "Menvussa",
        prenom: "Gerrard",
        age: 28,
        sexe: "Masculin",
        localisation: "Il vit dans la région Toulousaine depuis 15 ans environ",
        hobies: "Passioné de jeux vidéo il les à tous, avec une preference pour les jeux 'old school'",
        etude: "Bac +2",
        gout: "Ouvrier du batiment",
        sport: "Karaté",
        voyage: "Aucun",
        photo: "/GerardMenvussa.jpg"
    },
    {
        nom: "Obistro",
        prenom: "Pascal",
        age: 52,
        sexe: "Masculin",
        localisation: "Il vit a Berlin",
        hobies: "Passioné de musique, il chante régulièrement",
        etude: "Aucun",
        gout: "Ouvrier du batiment",
        sport: "Salle de musculation 2 fois par semmaine",
        voyage: "En europe essentiellement",
        photo: "/PascalObistro.jpg"
    },
    {
        nom: "Truelle",
        prenom: "Patrick",
        age: 19,
        sexe: "Non renseigner",
        localisation: "Il vit au Portugal",
        hobies: "Il joue du piano",
        etude: "equivalent d'un CAP ",
        gout: "Ouvrier du batiment",
        sport: "Badmington",
        voyage: "Aucun",
        photo: "/PatrickTruelle.jpg"
    },
]

const container = document.querySelector('#container');

personaArray.forEach((persona) => {
    createCard(persona, container);
});

function createCard(obj, elem){
    const article = document.createElement('article');
    const img = document.createElement('img');
    img.src = './img/profile.webp';
    img.classList.add('rounded-full', 'border-2', 'border-purple-700', 'w-[150px]', 'float-left', 'm-2', 'mx-10');
    article.append(img);
    for (const[key, value] of Object.entries(obj)){
        if(key !== 'photo'){
            const p = document.createElement('p');
            const span = document.createElement('span');
            
            span.textContent = `${key} : `;
            p.textContent = `${value}`;
    
            span.classList.add('font-bold', 'text-zinc-300');
            p.classList.add('mx-3');
            p.prepend(span);
     
            article.append(p);
        } 
    }
    elem.append(article);

    article.classList.add('w-[40%]', 'min-w-[300px]', 'max-w-[90%]', 'h-[auto]', 'bg-slate-900', 'rounded-[30px]', 'm-5', 'p-3', 'shadow-[0_0px_5px_rgba(192,38,211,0.5)]', 'text-purple-700');
}

