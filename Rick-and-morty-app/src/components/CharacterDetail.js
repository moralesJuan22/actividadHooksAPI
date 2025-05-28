import react from 'react';
import useChracter from '../useCharacter';
import '../App.css';

const CharacterDetail = ({ characterId }) => {
    const { character, loading, error } = useChracter(characterId);
    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error al obtener los datos</p>;

    return (
        <div className='contenedor'>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <p>Estado: {character.status}</p>
            <p>Especie: {character.species}</p>
            <p>Origen: {character.origin.name}</p>
        </div>
    );
};

export default CharacterDetail;
        