import React, { useState } from 'react';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import './App.css';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <div className="App">
      {!selectedCharacter ? (
        <CharacterList onSelectCharacter={setSelectedCharacter} />
      ) : (
        <div>
          <button className='btnvolver' onClick={() => setSelectedCharacter(null)}>Volver a la lista</button>
          <CharacterDetail characterId={selectedCharacter} />
        </div>
      )}
    </div>
      );
}

export default App;