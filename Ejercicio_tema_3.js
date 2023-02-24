class Coche {
  constructor(numPuertas) {
    this.numPuertas = numPuertas;
  }
  agregarPuerta() {
    this.numPuertas++;
  }
}
let main = function (a, b, c) {
  const miCoche = new Coche(6);
  miCoche.agregarPuerta();
  console.log(miCoche.numPuertas);
  console.log(a + b + c);
};
main(10, 23, 15);
