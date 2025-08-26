1. La diferencia entre **extends** e **implements** en Typescript es que **extends** se utiliza para la herencia de clases. Permite que una clase herede propiedades y métodos de otra clase. En cambio, **implements** se utiliza para la implementacion de la interfaz. Permite que una clase proporcione implementaciones específicas para que los métodos definidos en una interfaz.

2. El tipado fuerte en typescript permite definir propiedades con tipos específicicos, incluyendo modificadores de acceso como private o public, y facilita la creacion de constructores , getter y setter con tipos definidos. 

3. En TypeScript, una clase abstracta es un tipo especial de clase que no se puede instanciar directamente, ya que su propósito principal es servir como una plantilla o base para otras clases que la hereden. 

4. El uso de getters y setters es fundamental para lograr el encapsulamiento en programación orientada a objetos, ya que permite controlar el acceso a los atributos de una clase, manteniendo sus datos protegidos y accesibles solo a través de métodos definidos.
 5. 
* Función que saluda, con un nombre obligatorio y un saludo opcional
```bash 
function saludar(nombre: string, saludo?: string): void {
    if (saludo) {
        console.log(`${saludo}, ${nombre}!`);
    } else {
        console.log(`Hola, ${nombre}!`);
    }
}


saludar("Tatiana");        
saludar("Tatiana", "Buenos días"); 
```
* Función que simula obtener datos de un API y devuelve una Promise
```bash 
function obtenerDatos(id: number): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve(`Datos del usuario ${id}`);
            } else {
                reject("ID inválido");
            }
        }, 1000);
    });
}


obtenerDatos(1)
    .then((datos) => console.log(datos))
    .catch((error) => console.error(error));
```
