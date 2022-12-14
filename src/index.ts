let mensaje: String = "Hola mundo"

mensaje = "Cadena ha cambiado por esta que lees"

mensaje = "He cambiado nuevamente"

console.log(mensaje)

/*Inferencia de TS*/
let cadenaInferida = "Soy una cadena automáticamente inferida"
let numeroInferido = 34_342_233;
let booleanoInferido = true;

let algoInferido;

/*Declaración explicita */
let cadenaExplicitaNoInicializada: string;
let cadenaExplicita: string = "Soy una cadena declarada explicitamente e inicializada"


/*Declaración de Arregloa */
let cadenas =  ["Lorem", "Ipsum", "Sit"]; /*Array de strings inferidas*/
let numeros: number[] = [2, 4, 5]; /*Array de numero explicito */

let arregloDeBooleanos: Array<Boolean> = [true, false, true]; /*Array declarado directamente con la Interfaz*/



/*Uso de métodos exlusivos para tipo de dato
TS reconoce los métodos para cada variable y los sugiere
*/

numeros.map(x => x.toExponential);
cadenas.map(x => x.length);


/*Tuplas 
Son colecciones definidas que pueden contener objatos de distintos tipos de datos siempre que cumplan con el orden y tipado declarado
*/

let tupla: [number, string] = [1, 'Cadena']
let tuplaConArray: [number, string[]] = [1, ['Array', 'dentro', "De la tupla"]];

/*Enums
Tipo numerado sirve para relacionar pares Palabra: Abreviación. Util para almacenar estados o abreviacioens de cosas como Tallas de ropa, Opciones de datos. ETC
Se declara así:

enum Nombre { CosaUno, CosaDos, CosaTres } ---> Automáticamente sus equivalentes se asignan 0, 1, 2

Ejemplo de posibles estados de una persona
*/

enum Talla { Casado = 'C', Soltero = 'S' , UnionLibre = 'U'}

/*
const
Genera código en index.js cuando se le asigna valores a las constantes
*/

const enum Pais {
    Colombia = 'CO', Ecuador = 'EC', Brasil = 'BR'
}
const estado = Pais.Colombia;

/*Objetos 

Objeto literal
*/
const objeto: {
    readonly id: number, /*Solo lectura*/
    nombre: string,
    apellido?: string /*Opcional */
    pais: Pais
} = {id: 2, nombre: "David", pais: Pais.Ecuador}

/*Declaración de Tipo type
Util para declarar la estructura de un objeto y reutilizarla
*/
type Direccion = {
    calle: string,
    ciudad: string
    pais: Pais
}

type Ciudadano = {
    readonly id: number, /*Solo lectura*/
    nombre: string,
    apellido?: string /*Opcional */
    direccion: Direccion
}

/*Objeto hecho apartir de type Ciudadano */
const Camila: Ciudadano = {
    id: 3,
    nombre: "Camila",
    direccion: {
        calle: 'Avenida Brasil',
        ciudad: 'Brasilia',
        pais: Pais.Brasil
    }
}

