class Animal {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    saludar() {
      console.log(`Hola, soy ${this.nombre}`);
    }
  }
  
  class Perro extends Animal {
    constructor(nombre, raza) {
      super(nombre);
      this.raza = raza;
    }
  
    ladrar() {
      console.log('¡Guau! ¡Guau!');
    }
  }
  
  const miPerro = new Perro('Fido', 'Labrador');
  miPerro.saludar(); // Hola, soy Fido
  miPerro.ladrar(); // ¡Guau! ¡Guau!