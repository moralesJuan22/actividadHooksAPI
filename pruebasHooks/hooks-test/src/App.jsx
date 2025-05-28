  import UseStateToggle from './pages/UseState/UseStateToggle';
  import UseStateList from './pages/UseState/UseStateList';
  import UseStateToggleInvisible from './pages/UseState/ToggleEstadoInvisible';
  import Sintaxis from './pages/UseEffect/Sintaxis';
  import EjemploUseEffect from './pages/UseEffect/EjemploPráctico';
  import DependenciaVacia from './pages/UseEffect/DependenciaVacia';
  import SinArrayDependencias from './pages/UseEffect/SinArrayDependencias';
  import SinArrayDependencias2 from './pages/UseEffect/SinArrayDependencias2';
  import EjemploConDependencias from './pages/UseEffect/EjemploDependencias';

function App() {


  return (
    <div className="App">
      <h1>Hooks en React</h1>
      <p>Por Juan Morales</p>

      <h2>Ejercicios de UseState</h2>

      <h3>1. Toggle (encendido/apagado)</h3>
    
    <UseStateToggle />

    <p><strong>Estado encendido:</strong> Guarda si el interruptor está encendido o apagado.
      <br></br>
    <strong>setEncendido:</strong> Cambia el valor de <em>encendido</em> al hacer clic en el botón.
        <br></br>
    <strong>Condicional en el renderizado:</strong> El texto y el botón cambian según el estado de <em>encendido</em> (ya sea “Encendido” o “Apagado”).</p>

      <h3>2. Lista Select</h3>

      <UseStateList />

      <p><strong>Selección</strong> Estado que almacena el valor actualmente seleccionado de la lista <em>select</em>.
      <br></br>
      <strong>setSelección:</strong> Función que actualiza el estado cuando el usuario cambia la opción en el <em>select </em>.
      <br></br>
      <strong>onChange:</strong> Event handler que se ejecuta cada vez que el usuario selecciona una nueva opción. Captura el valor con <em>evento.target.value</em> y lo actualiza en el estado.
      </p>

      <h3>3. Toggle con estado invisible</h3>

      <UseStateToggleInvisible />

      <p>Este ejemplo usa el hook useState para alternar la visibilidad de un contenido. El estado <em>isVisible</em> determina si se muestra un texto dentro de un <em>div</em>. El botón cambia su texto entre <strong>"Mostrar"</strong> y <strong>"Ocultar"</strong> y, al hacer clic, cambia el valor de isVisible para mostrar u ocultar el contenido.</p>

      <br></br>
      <br></br>

      <h2>Ejercicios de useEffect</h2>

      <h3>1. Sintaxis básica</h3>

      <Sintaxis />

      <p>
        El hook <em>useEffect</em> en React permite ejecutar efectos secundarios en componentes funcionales, como actualizaciones de datos o suscripciones a eventos. A continuación, te explicamos sus principales elementos:
        <br></br>
        <br></br>
        <strong>Función de efecto:</strong> El primer argumento de <em>useEffec</em> es una función que se ejecuta después de cada renderizado del componente. Aquí puedes realizar acciones como llamadas a API, suscripciones o cambios en el DOM.
        <br></br>
        <strong>Función de limpieza:</strong> Al retornar una función dentro de <em>useEffect</em>, defines una <em>acción de limpieza</em> que se ejecutará antes de desmontar el componente o antes de que el efecto se vuelva a ejecutar. Esto es útil para liberar recursos, como detener suscripciones o limpiar temporizadores.
        <br></br>
        <strong>Array de dependencias:</strong> El segundo argumento es un <em>array de dependencias</em> que indica cuándo debe ejecutarse el efecto. Si el array está vacío ([]), el efecto se ejecutará <em>solo una vez al montar el componente</em> y no se volverá a ejecutar en renderizados futuros. Si incluye variables o estados, el efecto se ejecutará cada vez que alguno de ellos cambie.
      </p>

      <h3>2. Ejemplo Práctico</h3>

      <EjemploUseEffect />

      <p><em>useEffect</em> actualiza el título de la página cada vez que cambia el contador.
        <br></br>
        Al pasar <em>[contador]</em> como dependencia, el efecto se ejecuta solo cuando contador cambia. Si se pasa un array vacío ([]), solo se ejecutaría una vez, al montarse el componente.</p>

        <h3>3. Ejemplo con Dependencia Vacía</h3>

        <DependenciaVacia />

        <p>
          Ejecución Solo al Montar el Componente. Este ejemplo muestra cómo usar <em>useEffect</em> con un array vacío ([]) para ejecutar un efecto solo una vez, cuando el componente se monta, ideal para inicializaciones o llamadas a APIs.
          <br></br>
          <br></br>
          El efecto dentro de <em>useEffect</em> se ejecuta solo una vez, justo después de que el componente se haya montado.
          <br></br>
          El array vacío [] como segundo argumento indica que no hay dependencias, por lo que el efecto solo se ejecuta una vez cuando el componente se monta por primera vez.
        </p>

        <h3>4. Sin Array de Dependencias</h3>

        <SinArrayDependencias />

        <p>
          Si no proporcionas un array de dependencias en useEffect, el efecto se ejecutará después de cada renderizado del componente, lo que incluye la primera vez que el componente se monta. Esto puede ser útil cuando deseas ejecutar un efecto cada vez que el componente se renderiza, sin depender de ningún valor específico.
          <br></br>
          <br></br>
          <strong>Sin array de dependencias:</strong> Al no pasar un array de dependencias ([]), <em>useEffect</em> se ejecuta <strong>siempre que el componente se renderiza</strong>. Esto incluye tanto la primera ejecución al montar el componente como cualquier actualización posterior del componente.
          <br></br>
          <strong>Función de limpieza:</strong> Si la función de limpieza es definida (con <em>return</em> dentro de <em>useEffect</em>), se ejecutará antes de la siguiente ejecución del efecto o cuando el componente se desmonte.
          <br></br>
          <strong>Actualización del estado:</strong> Al hacer clic en el botón para incrementar el contador, se provoca un nuevo renderizado, lo que desencadenará la ejecución del <em>useEffect</em> de nuevo.
          <br></br>
          <br></br>
          Este enfoque se utiliza cuando necesitas realizar alguna acción cada vez que el componente se renderiza, sin importar qué valores hayan cambiado.
        </p>

        <h3>5. Otro ejemplo sin Array de Dependencias</h3>

        <SinArrayDependencias2 />

        <p>
          En <strong>React</strong>, al usar <em>useEffect</em> sin dependencias, el efecto se ejecuta <strong>después de cada renderizado</strong>. Esto es útil para realizar acciones en cada actualización del componente, como manejar suscripciones o temporizadores. También puedes incluir una función de limpieza para ejecutar antes de la siguiente ejecución del efecto o cuando el componente se desmonte.
        </p>

        <h3>6. Consumir una API Rest</h3>

        <SinArrayDependencias2 />

        <p>
          Dentro del <em>useEffect</em> puede definirse una función asíncrona (por ejemplo, para consultar una API) y llamarla inmediatamente al cargar el componente. Sin embargo, como <em>useEffect</em> no puede ser directamente asíncrono, se recomienda definir la función asíncrona dentro de él y luego invocarla.
          <br></br>
          <br></br>
          <strong>Función fetchDatos:</strong> Dentro de <em>useEffect</em>, se define una función asíncrona fetchDatos que consulta la API y maneja la respuesta.
          <br></br>
          <strong>Llamada a la API:</strong> Se utiliza <em>fetch</em> para obtener los datos de la API y luego se actualiza el estado con los datos obtenidos.
          <br></br> 
          <strong>Manejo de Carga:</strong> Se mantiene un estado <em>loading</em> para mostrar un mensaje de <strong>“Cargando…”</strong> mientras los datos se están obteniendo, y después se muestra la respuesta.
        </p>

        <h3>7. Ejemplo con Dependencias</h3>

        <EjemploConDependencias />

        <p>
          Cuando usas dependencias en <em>useEffect</em>, el efecto se ejecuta cada vez que las dependencias cambian. Si pasas variables dentro del array de dependencias, React ejecutará el efecto nuevamente siempre que esas variables cambien.
          <br></br>
          <br></br>
          Este es un ejemplo donde se consulta una API cada vez que cambia el valor de una variable <em>query</em> (por ejemplo, una palabra clave de búsqueda)
          <br></br>
          <br></br>
          <strong>Dependencia query:</strong> El <em>useEffect</em> ahora depende de la variable <em>query</em>. Cada vez que cambie el valor de query (como resultado de escribir en el input), se ejecutará nuevamente la función que consulta la API.
          <br></br>
          <strong>Consulta a la API:</strong> La URL de la API se construye dinámicamente en función de <em>query</em>, por lo que el efecto se ejecuta con la nueva consulta cada vez que el valor de <em>query</em> cambia.
          <br></br>
          <strong>Actualización del estado query:</strong> Cuando el usuario escribe en el campo de texto, se actualiza <em>query</em>, lo que dispara una nueva ejecución del efecto.
        </p>

    </div>
  )
}

export default App
