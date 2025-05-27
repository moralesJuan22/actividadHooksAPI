  import UseStateToggle from './pages/UseState/UseStateToggle';
  import UseStateList from './pages/UseState/UseStateList';
  import UseStateToggleInvisible from './pages/UseState/ToggleEstadoInvisible';
  import Sintaxis from './pages/UseEffect/Sintaxis';
  import EjemploUseEffect from './pages/UseEffect/EjemploPráctico';

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

    </div>
  )
}

export default App
