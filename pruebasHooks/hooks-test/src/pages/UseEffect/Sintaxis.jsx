import { useEffect } from 'react';

function ComponenteConEfecto() {
// Ejecución inicial del componente
useEffect(() => {
  // Código que quieres ejecutar cuando el componente se monta
  console.log('Hola');

  // Retorno opcional: función de limpieza que se ejecuta cuando el componente se desmonta
  return () => {
    console.log('Mundo');
  };
}, [/* dependencias */]); // Dependencias vacías: solo se ejecuta una vez al montar y desmontar
}

export default ComponenteConEfecto;