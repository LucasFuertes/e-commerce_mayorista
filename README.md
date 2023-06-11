# Proyecto e-commerce

Este proyecto consiste en crear un simple negocio online de una tienda, el cuál posee un sencillo procedimiento de pasos desde la entrada a la página web hasta la adquisición del id de la orden generada. Usando el navbar, se puede filtrar los productos por su categoría, así logrando buscar un tipo de articulo en específico. Una vez que se elige la cantidad de artículos, el carrito almacena la cantidad solicitada y hace una suma del total de todos los artículos, dando la opción de eliminar productos del carrito individualmente, o borrar todo con un simple botón. En caso de elegir la opción "Checkout", se deberá llenar todos los espacios del formulario con los datos solicitados. Y una vez colocados los datos, el cliente debe crear la orden para recibir un id de su orden generada.
Aunque este proyecto fue difícil de comprender, fui armándome de paciencia para aprender sobre todo lo que estaba pasando en cada línea de código que iba haciendo poco a poco. Por supuesto, los estilos no se quedan atrás, pero usé un diseño simple para no darle demasiado tiempo, e invertirlo en el código principal.

Nota: Este proyecto a sido estructurado con [Create React App](https://github.com/facebook/create-react-app).

## Versión de Node

Para evitar problemas con las funciones y métodos implementados en el proyecto, es necesario que use la versión de Node 18.16.0

### `npm install`

En caso de que algunos archivos esenciales falten, como por ejemplo "node_modules" o "package-lock.json", debe dirigirse al directorio de la carpeta raiz y escribir en su consola de comandos lo siguiente:  

```bash
npm install
```

De esta forma, mientras el archivo "package.json exista, todas las dependencias especificadas en el archivo antes mencionado, se instalarán nuevamente en el proyecto, recuperándose así archivos como "node_modules" y "package-lock.json"

## Comandos complementarios utilizados

Aparte del comando "create-react-app", también se han usado otros distintos comandos para implementar librerías y dependencias

### `npm start`

Este comando ejecuta el proyecto dentro de un "localhost"(ser)en su navegador web 

### `npm install react-router-dom`

Con este comando, se puede instalar una librería bastante útil para el uso de rutas dentro de un proyecto de react

### `npm install firebase`

Este comando sirve para instalar las dependencias que se requieren para vincular el proyecto con la base de datos de Firebase

### `npm install react-bootstrap bootstrap`

Como necesitaba algunos diseños de bootstrap para mi proyecto hecho en react, opté por usar la librería "React-bootstrap", que trae estructuras como el Navbar en formato de componentes React