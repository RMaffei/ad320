import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import BreedDetail from './BreedDetail';

interface BreedAttributes {
  name: string;
  description: string;
  hypoallergenic: boolean;
}

interface Breed {
  id: string;
  type: string;
  attributes: BreedAttributes;
}

const fetchBreeds = async (): Promise<Breed[]> => {
  const { data } = await axios.get('https://dogapi.dog/api/v2/breeds');
  return data.data;
};

const App: React.FC = () => {
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);
  const { data, error, isLoading, isError } = useQuery<Breed[], Error>({
    queryKey: ['breeds'],
    queryFn: fetchBreeds,
  });

  return (
    <div className="container">
      <h1>Dog Breed Information</h1>
      <select onChange={(e) => setSelectedBreed(e.target.value)} value={selectedBreed || ''}>
        <option value="">Select a breed</option>
        {data?.map((breed) => (
          <option key={breed.id} value={breed.id}>{breed.attributes.name}</option>
        ))}
      </select>
      {isLoading && <p>Loading breeds...</p>}
      {isError && <p>Error: {error?.message}</p>}
      {selectedBreed && <BreedDetail id={selectedBreed} />}
    </div>
  );
};

export default App;