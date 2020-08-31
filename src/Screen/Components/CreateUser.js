import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { users } from '../../graphql/queries/queries';

const createUser = gql`
  mutation
    CreateUser($name: String!) {
      createUser (name: $name) {
        id
        name
        cars {
          id
          make
          model
          color
        }
      }
    }
  
`;

export default class CreateUser extends Component {

  state = {
    name: ''
  }

  resetFields = () => {
    this.setState({ name: '' });
  }

  handleOnChange = e => {
    this.setState({
      name: e.target.value
    })

  }

  handleOnSubmit = (e, createUser) => {
    e.preventDefault();
    createUser({
      variables: {
        name: this.state.name
      }
    });

    this.resetFields();
  }

  render() {
    return(
      <Mutation 
        mutation={ createUser } 
        refetchQueries={[{
          query: users
        }]}
        // wait until "data.loading" goes away!
        awaitRefetchQueries={ true }
      >
        {/* need to return from <Mutation /> */}
        { (createUser, { loading, error }) => (
          <>
            <form onSubmit={ event => this.handleOnSubmit(event, createUser) }>
              <label>
                <span>Name</span>
                <input 
                  type="text"
                  value={ this.state.name }
                  onChange={ this.handleOnChange }
                />
              </label>
              <div>
                <button>Create User</button>
              </div>
            </form>
            <div>
              { loading && <div>Adding a new user</div> }
              { error && <p>Error!</p> }
            </div>
          </>
        )}
      </Mutation>
    );
  }
}