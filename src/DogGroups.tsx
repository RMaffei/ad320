import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface DogGroupAttributes {
  name: string;
}

interface BreedRelationship {
  id: string;
  type: string;
}

interface DogGroupRelationships {
  breeds: {
    data: BreedRelationship[];
  };
}

interface DogGroup {
  id: string;
  type: string;
  attributes: DogGroupAttributes;
  relationships: DogGroupRelationships;
}

const fetchDogGroups = async (): Promise<DogGroup[]> => {
  const { data } = await axios.get('https://dogapi.dog/api/v2/groups');
  return data.data;
};

interface DogGroupsProps {
  breedId: string;
}

const DogGroups: React.FC<DogGroupsProps> = ({ breedId }) => {
  const { data, error, isLoading, isError } = useQuery<DogGroup[], Error>({
    queryKey: ['dogGroups'],
    queryFn: fetchDogGroups,
  });

  if (isLoading) return <p>Loading dog groups...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const group = data?.find((group) =>
    group.relationships.breeds.data.some((breed) => breed.id === breedId)
  );

  return (
    <div>
      <h2>Dog Group</h2>
      {group ? (
        <div className="container">
          <p>{group.attributes.name}</p>
        </div>
      ) : (
        <p>No group found</p>
      )}
    </div>
  );
};

export default DogGroups;