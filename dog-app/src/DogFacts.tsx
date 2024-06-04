import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface FactAttributes {
  body: string;
}

interface Fact {
  id: string;
  type: string;
  attributes: FactAttributes;
}

const fetchFacts = async (): Promise<Fact[]> => {
  const { data } = await axios.get('https://dogapi.dog/api/v2/facts');
  return data.data;
};

const DogFacts: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<Fact[], Error>({
    queryKey: ['facts'],
    queryFn: fetchFacts,
  });

  if (isLoading) return <p>Loading facts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Dog Facts</h2>
      {data && data.map((fact) => (
        <div key={fact.id} className="container">
          <p>{fact.attributes.body}</p>
        </div>
      ))}
    </div>
  );
};

export default DogFacts;