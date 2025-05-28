import { useState, useEffect } from 'react';
import axios from 'axios';

const useCharacter = (id) => {
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
                setCharacter(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        fetchCharacter();
    }, [id]);

    return { character, loading, error };

};

export default useCharacter;