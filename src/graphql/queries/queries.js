import gql from 'graphql-tag';

export const users = gql`
  query {
    users {
      id,
      name,
      cars {
        id
        make
        model
        color
      }
    }
  }
`;