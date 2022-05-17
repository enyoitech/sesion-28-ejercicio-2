/**
 * Para este ejercicio estaremos utilizando un arreglo de vehículos, dicho arreglo sera utilizado tanto en el formulario
 * para registrar un vehículo como en nuestro archivo html que muestra la lista de vehículos, para lograr que la información
 * persista guardaremos nuestro arreglo de vehículos en "localStorage", de este modo los cambios que hagamos estarán disponibles.
 */

/**
 * Inicialmente crearemos nuestro arreglo de vehículos, lo que haremos sera asignarle los datos a este arreglo en base a los datos
 * que tengamos en nuestro localStorage, por ende traeremos ese arreglo de vehículos y lo asignaremos a nuestra variable arrayVehiculos.
 */

const arrayVehiculos = JSON.parse(localStorage.getItem('vehiculos'));


/**
 * Guardaremos en nodo que contiene la tabla de nuestro html, y lo asignaremos a la variable "tabla", posteriormente modificaremos esa
 * tabla de modo que le agregaremos filas con informacion de vehiculos. 
 * 
 * Aclararemos que el id pertecene a al cuerpo de la tabla y no a la totalidad de la tabla.
 */

const tabla = document.getElementById('tabla-vehiculos')

/**
 * Haremos el llamadoa nuestro metodo cargarTabla(), metodo que se encarga de ponerle contenido a dicha tabla que sera mostrada en la vista
 */
cargarTabla();


/**
 * aqui accedemos al document.
 * utilizamos el selector 'getElementById' el cual recibe el id del nodo o elemento
 * del document que queremos accesar.
 * y  utilizamos el metodo addEventListener() el cual sirve para escuchar y recibe 2 argumentos
 * 1er argumento es el nombre del evento que pondremos a escuchar
 * 2do argumento es una expresion funcion anonima o tambien puede recibir una funcion arrow
 */



/**
 * Este evento se asiganara al boton regresar, el boton tiene un id bajo el mismo nombre, agregaremos una pequeña logica
 * que nos envie al la pagina anterior a esta, en este caso nos enviara nuevamente al formulario de vehiculos. 
 */
document
  .getElementById("regresar")
  .addEventListener("click", function (event) {
    /**
     * (event)  hace referencia al evento que se captura tambien es habitual usar (e)
     * event.preventDefault() se utiliza para evitar que el evento se ejecute por default
     * al cargar la pagina evitando que se envie el formulario vacio.
     */
    event.preventDefault();

    /**
     * Antes de navegar al documento anteior nos  aseguraremos de guardar en el localStorage nuestro array de vehiculos con la informacion actual,
     * de este modo cuando estemos en el formulario nuevamente podremos tener acceso al arreglo con la informacion reciente.
     */

    localStorage.setItem('vehiculos', JSON.stringify(arrayVehiculos));

    /**
     * La redireccion la haremos con "window.location.href" y asignaremos la ruta de nuestro formulario. 
     */
    window.location.href ="./../index.html";
  });
  


  /**
   * En este bloque tenemos la funcion que llena la tabla html, la logica del cuerpo de estea funcion es la siguiente;
   * 
   * Se recorrera mediante un ciclo for el arreglo de vehiculos ("arrayVehiculos"),el ciclo se realizara en funcion del 
   * tamaño del mencionado arreglo, usaremos la propiedad "length" de nuestro arreglo para determinar su tamaño.
   * 
   * Lo siguiente que haremos es crear una variable "fila" dicha variable tendra el contenido hmtl para crear la fila 
   * y posteriormente agregarla al cuerpo de la tabla.
   * 
   * Usaremos un template String para ello usamos backticks (`), de esta forma interpolaremos los datos de cada objeto vehiculo,
   * acederemos a las propiedades de cada vehiculo con las iteraciones del ciclo y posteriormente finalizaremos agregando el 
   * contenido de la varible fila a la tabla.
   */

function cargarTabla(){
  for (let index = 0; index < arrayVehiculos.length; index++) {
      let fila = `<tr>
                      <th scope="row"></th>
                      <td>${arrayVehiculos[index].marca}</td>
                      <td>${arrayVehiculos[index].modelo}</td>
                      <td>${arrayVehiculos[index].anio}</td>
                      <td>${arrayVehiculos[index].color}</td>
                  </tr>`
       tabla.innerHTML += fila;        
      }
}  



