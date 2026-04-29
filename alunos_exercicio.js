// =============== ATIVIDADES COM FOR ================ //


for(let i=1; i<=10; i++){
    console.log(i);}


// 2 Exiba todos os numeros pares de 2 20
for(let i=10; i>=1; i--){
    console.log(i);}


// 3: Exiba todos os numeros pares de 2 a 20
console.log("\n==== numeros pares até 20 ====")
for(let i=2; i<=20; i= i + 2) {
    console.log(i);}


// 4: Exiba a tabuada do numero 5 (5x1 ate 5x10);
console.log("\n=== tabuada do 5 ====")
for(let i=1; i<=10; i++){
    console.log(`5 x ${i} = ${5*i}`);

}

// 5: calcule e exiba a soma dos numeros de 1 ate 50
console.log("\n=== Soma de 1 a 50 =====");
for(let i =1; i<=50; i++){
    soma = soma + i;}
    console.log(`A soma é: ${soma}`);


// 6: conte de 1 até o numero 8 (use for):
for(let i=1; i<=8; i++){
    console.log(i);}


// 7: 
for(let i= 1; i<=15; i= 1 +2){
    console.log(i);}


// 8: verifique se uma pessoa com 17 anos é
let idade =17;
if(idade >=18){
console.log("maior de idade");
}else{
    console.log("menor de idade");
}


// 9: verifique se o numero 7 é par ou inpar








// 10: verifique se a nota 
let nota =7.5;
if(nota>=6){
    console.log("Aprovado")
}else{
    console.log("Reprovado");}

// 11: verifique se o numero 8 é maior que 10
let numero = 0;
if(numero > 10){
    console.log("8 é maior que 10");
}else{
    console.log("8 não e maior que 10");
}


// 12
let numeros = [1,2,3,4]
console.log("FOR")
for(let i= 0; i < numeros.lenght;){
    console.log(numeros(i));
}

console.log("forEach anonima")
numeros.forEach(function(n){
     console.log(n);
});

console.log("forEach arrow")
numeros.forEach(n => console.log(n));

// mostre todos os valores no terminal:



// dados do rray: 



// let frutas["maça", "banana", "uva", "abacate"];
const lista = ["Maçã", "Banana", "Laranja", "Uva"];
lista.forEach(item => {
    console.log(item);
  });
  for (const item of lista) {
    console.log(item);
  }
  console.table(lista);
  for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
  }
  
  