import { useParams } from 'react-router-dom';

const Country = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Country Details for {id}</h1>
      {/* Fetch and display country details based on the id */}
    </div>
  );
};

export default Country;