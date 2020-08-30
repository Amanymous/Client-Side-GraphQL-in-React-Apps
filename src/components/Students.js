import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GetStudents = gql`
  query GetAllStudents {
    students {
      name
    }
  }
`;
export function Students() {
  const { loading, error, data } = useQuery(GetStudents);

  if (error) return <p>Error :(</p>;
  if (loading) return <p>Loading...</p>;
  console.log(data);
  return (
    <div>
      <h2>students list</h2>
    </div>
  );
}
