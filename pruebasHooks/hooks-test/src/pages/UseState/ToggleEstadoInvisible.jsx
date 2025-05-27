import React, { useState } from 'react';

function ToggleComponent() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Ocultar' : 'Mostrar'}
      </button>
      
      {isVisible && (
        <div>
            <br></br>         
            ¡Este contenido se puede mostrar u ocultar!
        </div>
      )}
    </div>
  );
}

export default ToggleComponent;