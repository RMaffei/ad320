import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import DogGroups from './DogGroups';
import DogFacts from './DogFacts';

interface BreedDetailProps {
  id: string;
}

interface BreedAttributes {
  name: string;
  description: string;
  hypoallergenic: boolean;
}

interface BreedDetail {
  id: string;
  type: string;
  attributes: BreedAttributes;
}

const fetchBreedDetails = async (id: string): Promise<BreedDetail> => {
  const { data } = await axios.get(`https://dogapi.dog/api/v2/breeds/${id}`);
  return data.data;
};

const BreedDetail: React.FC<BreedDetailProps> = ({ id }) => {
  const { data, error, isLoading, isError } = useQuery<BreedDetail, Error>({
    queryKey: ['breedDetail', id],
    queryFn: () => fetchBreedDetails(id),
  });

  return (
    <div className="container">
      {isLoading && <p>Loading breed details...</p>}
      {isError && <p>Error: {error?.message}</p>}
      {data && (
        <>
          <h2>{data.attributes.name}</h2>
          <DogFacts />
          <p>{data.attributes.description}</p>
          <p>Hypoallergenic: {data.attributes.hypoallergenic ? 'Yes' : 'No'}</p>
          <DogGroups breedId={id} />
        </>
      )}
    </div>
  );
};

export default BreedDetail;