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

let pet1, pet2;

document.getElementById("petForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  if (!pet1) {
    pet1 = new Pet(petName, ownerName, species, breed);
    alert(`Primo pet salvato: ${petName}`);
  } else if (!pet2) {
    pet2 = new Pet(petName, ownerName, species, breed);
    alert(`Secondo pet salvato: ${petName}`);
  } else {
    alert("Hai già salvato due pets.");
  }

  document.getElementById("petForm").reset();
});

document
  .getElementById("compareForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const owner1 = document.getElementById("pet1Owner").value;
    const owner2 = document.getElementById("pet2Owner").value;

    if (pet1 && pet2) {
      const areSameOwner = pet1.sharesOwner(pet2);
      document.getElementById(
        "result"
      ).innerText = `${pet1.petName} e ${pet2.petName} condividono lo stesso padrone? ${areSameOwner}`;
    } else {
      document.getElementById("result").innerText =
        "Devi prima creare due pets.";
    }

    document.getElementById("compareForm").reset();
  });
