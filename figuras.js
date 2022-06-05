//CODIGO CUADRADO
console.group("Cuadrados")

const perimetroCuadrado = (lado) => lado * 4

const areaCuadrado = (lado) => lado * lado

console.groupEnd()

//CODIGO TRIANGULO
console.group("Triangulos")

/*
Recuerden que todo lo que entra en un formulario es tipo string, el input type=“number” lo que hace es que solamente reciba caracteres tipo número. Pero no significa que lo que entra JS lo tome como Number en las funciones.

Para ello se debe hacer coerción de lo que queda en los values o hacer la coerción en las funciones mismas al definirlas.

Si esto no se hace, el resultado va a ser muy diferente a lo esperado. Por ejemplo la función de perimetro de triángulo. Si ponemos que estos valores trianglePerimeter(5, 5, 5); al llamar la función el resultado será 555
*/

const perimetroTriangulo = (lado1, lado2, base) => (Number(lado1) + Number(lado2) + Number(base))

const areaTriangulo = (base, altura) => (base * altura / 2)

console.groupEnd()

//CODIG CIRCULO
console.group("Circulo")

//DIAMETRO
const diametroCirculo = (radio) => radio * 2

//PI
const PI = Math.PI;
console.log(`PI es de: ${PI}`)

//PERIMETRO
const perimetroCirculo = (radio) => {
    const diametro = diametroCirculo(Number(radio))
    return diametro * PI
}

//AREA

const areaCirculo = (radio) => (Number(radio) * Number(radio)) * PI

console.groupEnd()

//INTERACCION CON HTML

//CUADRADO
const calcularPerimetroCuadrado = () => {
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}
const calcularAreaCuadrado = () => {
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const area = areaCuadrado(value)
    alert(area)
}

//TRIANGULO

const calcularPerimetroTriangulo = () => {
    const inputLado1 = document.getElementById("InputTrianguloLado1")
    const inputLado2 = document.getElementById("InputTrianguloLado2")
    const inputBase = document.getElementById("InputTrianguloBase")

    const valueLado1 = inputLado1.value;
    const valueLado2 = inputLado2.value;
    const valueBase = inputBase.value;

    const perimetroT = perimetroTriangulo(valueLado1,valueLado2,valueBase)
    alert(perimetroT)
}

const calcularAreaTriangulo = () => {
    const inputBase = document.getElementById("InputTrianguloBase")
    const inputAltura = document.getElementById("InputTrianguloAltura")

    const valueBase = inputBase.value;
    const valueAltura = inputAltura.value;

    const areaT = areaTriangulo(valueBase, valueAltura)
    alert(areaT)
}

//CIRCULO
const calcularDiametroCirculo = () => {
    const inputRadio = document.getElementById("InputCirculoRadio")
    const valueRadio = inputRadio.value;

    const diametroC = diametroCirculo(valueRadio)
    alert(diametroC)
}

const calcularPerimetroCirculo = () => {
    const inputRadio = document.getElementById("InputCirculoRadio")
    const valueRadio = inputRadio.value;

    const perimetroC = perimetroCirculo(valueRadio)
    alert(perimetroC)
}

const calcularAreaCirculo = () => {
    const inputRadio = document.getElementById("InputCirculoRadio")
    const valueRadio = inputRadio.value;

    const areaC = areaCirculo(valueRadio)
    alert(areaC)
}