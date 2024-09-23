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

const pets = []; // Array per memorizzare gli oggetti Pet

document.getElementById("petForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const pet = new Pet(petName, ownerName, species, breed);
  pets.push(pet); // Aggiungi il pet all'array

  alert(`Pet salvato: ${petName}`);

  // Resetta il form
  document.getElementById("petForm").reset();
});

document
  .getElementById("compareForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const pet1Name = document.getElementById("pet1Name").value;
    const pet2Name = document.getElementById("pet2Name").value;

    const pet1 = pets.find((p) => p.petName === pet1Name);
    const pet2 = pets.find((p) => p.petName === pet2Name);

    if (pet1 && pet2) {
      const areSameOwner = pet1.sharesOwner(pet2);
      document.getElementById(
        "result"
      ).innerText = `${pet1Name} e ${pet2Name} condividono lo stesso padrone? ${areSameOwner}`;
    } else {
      document.getElementById("result").innerText =
        "Devi prima creare entrambi gli animali.";
    }

    // Resetta il form di confronto
    document.getElementById("compareForm").reset();
  });
