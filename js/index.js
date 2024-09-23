class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
}

const nUser = prompt("Quante persone vuoi salvare?");

for (let i = 0; i < nUser; i++) {
  const nome = prompt("Digita il nome");
  const cognome = prompt("Digita il cognome");
  const eta = parseInt(prompt("Digita l'età"));
  const abitazione = prompt("Digita la città di appartenenza");

  const utente = new User(nome, cognome, eta, abitazione);
  console.log(utente);
}

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  sharesOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

const pet1 = new Pet("Fido", "Mario Rossi", "Cane", "Labrador");
const pet2 = new Pet("Micio", "Mario Rossi", "Gatto", "Persiano");
const pet3 = new Pet("Rex", "Luigi Bianchi", "Cane", "Beagle");

console.log(pet1.sharesOwner(pet2));
console.log(pet1.sharesOwner(pet3));
