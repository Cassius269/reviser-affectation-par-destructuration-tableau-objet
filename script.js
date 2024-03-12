let dog = {
    name : "Dog",
    color : "black",
    age : 4,

    sayAge :function (){
        return `${this.name} a ${this.age} ans`;
    }
  };
  
for(key in dog){
    console.log(key);
}


console.log(dog.sayAge());


// Affectation par décomposition

let students = ["John","Smith"];

let [first, seconde] = students;

console.log(first);
console.log(seconde);

const presentation = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

let [name, ,title] = presentation;

console.log(title);

// Affectation par décomposition d'une chaine de caractère et peuplement d'un objet
let user = {};
[user.name, user.surname] = "John Smith".split(' ');

console.log(user);

// boucle et affectation par décomposition
user.age = 30;

console.log(user);

for(const info in user) {
    console.log(info, ": ",user[info]);
};

// affectation par décomposition d'un objet
let options = {
    titre: "Menu",
    largeur: 100,
    hauteur: 200
  };
  
  let {titre, largeur, hauteur} = options;
  
  alert(titre);  // Menu
  alert(largeur);  // 100
  alert(hauteur); // 200