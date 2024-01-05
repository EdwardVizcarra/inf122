//globales
var nombre="Juan";
console.log(nombre);
var apellido="Sanchez";
console.log(oapellido);
var edad=30;
console.log(edad);
var sueldo=1.234;
console.log(sueldo);
var casado= true;
console.log(casado);
//bloque
let presupuesto=1000;
console.log(presupuesto);
let gastos=500;
console.log(gastos);
//constantes
const IVA=13;
console.log(IVA);
const tipoCambio=6.98;
console.log(tipoCambio);
const verdad="ozuna";
console.log(verdad);
let numero=10;
if(numero%2==0){
    console.log(numero+" es par");
} else {
    console.log(numero+" no es par");
}
for(let i=0;i<5;i++){
    console.log(i);
}
let contador =0;
while(contador<5){
contador++;
console.log(contador);
}
//aritmeticos
let suma=5+5;
console.log(suma);
let resta=5-5;
console.log(resta);
let division=5/5;
let modulo=5%5;
console.log(modulo);
console.log(division);
let SumaMultiplicacion=5+(10*5);
console.log(SumaMultiplicacion);
let RestaDivision=5-(10/5);
console.log(RestaDivision);
//Composicion 
let mayorque=10>5;
let mayorigualque=13>=14;
let menorque=4<6;
let menorigualque=6<=9;
let igualque= "Hola" === "Hola";
let diferenteque="hola" != "hola";
//logicos
let and=tru&&true;
let or=false||true;
let not=true;
const persona = {
    nombre:"pedro",
    edad:25,
    Ocupacion: "Desarrollador"
};
console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.Ocupacion);
persona["apellido"] = "perez";
console.log(persona);
persona.nombre="Pedrito";
console.log(persona);
persona.edad=30;
persona.Ocupacion="Programador";
console.log(persona);

const colores =["rojo","verde","azul"];
console.log(colores);
console.log(colores.length);
console.log(colores[0]);
for(let i=0;i<colores.length;i++){
    console.log("Elemento: "+colores[i]+" Indice: "+i);
}
colores.push("amarrillo");
colores.push("negro");
colores.push("blanco");
console.log(colores);


//console.log(colores.find("rojo"));
colores.reverse();
colores.sort();
console.log(colores);
colores.push("VIOLETA");colores.push("CAFE");
colores.push([5,8,6]);
console.log(colores);
const p =colores.pop();
colores.find("CAFE");