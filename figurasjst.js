//CODIGO CUADRADO
console.group("Cuadrados")

// const ladoCuadrado = 5;
// console.log(`Los lados del cuandrado miden: ${ladoCuadrado} cm`)

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log(`El perimetro del cuadrado mide: ${perimetroCuadrado} cm`)
const perimetroCuadrado = (lado) => lado * 4

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
const areaCuadrado = (lado) => lado * lado
// console.log(`El area del cuadrado es: ${areaCuadrado} cm^2`)

console.groupEnd()

//CODIGO TRIANGULO
console.group("Triangulos")

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log(`Los lados del triangulo son de: ${ladoTriangulo1} cm y ${ladoTriangulo1} cm. La base es de ${baseTriangulo} cm y la altura de ${alturaTriangulo} cm`)

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base
// console.log(`El perimetro del triangulo es de: ${perimetroTriangulo} cm`)

// const areaTriangulo = (baseTriangulo * alturaTriangulo / 2)
const areaTriangulo = (base, altura) => (base * altura / 2)
// console.log(`El area del Triangulo es de: ${areaTriangulo} cm^2`)

console.groupEnd()

//CODIG CIRCULO
console.group("Circulo")

//Radio
// const radioCirculo = 4;
// console.log(`El radio del circulo es de: ${radioCirculo} cm`)

//Diametro
// const diametroCirculo = radioCirculo * 2;
// console.log(`El diametro del circulo es de: ${diametroCirculo} cm`)
const diametroCirculo = (radio) => radio * 2

//PI
const PI = Math.PI;
console.log(`PI es de: ${PI}`)

//Circuferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log(`La circuferencia del circulo es de: ${perimetroTriangulo} cm`)
const perimetroCirculo = (radio) => {
    const diametro = diametroCirculo((radio))
    return diametro * PI
}

//Area
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log(`El area del circulo es de: ${areaCirculo} cm^2`)

const areaCirculo = (radio) => (radio * radio) * PI

console.groupEnd()