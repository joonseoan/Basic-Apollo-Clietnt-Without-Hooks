import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { users } from '../../graphql/queries/queries';

export default class User extends Component {
  render() {
    
    return(
      <div>
        <Query query={ users }>
          {res => {
            console.log(res);
            if(res.loading) return <div />;

            const { data } = res;

            return (
              <div>
                <ul>
                   {
                    data.users.length 
                    && (
                      data.users.map(({ id, name, cars }) => {
                        return (<li key={ id }>
                          { name }
                          <ul>
                            { 
                              cars.length 
                              ? (
                                cars.map(({ id, make, model, color }) => (
                                  <li key={ id }>
                                    { make } { model } { color }
                                  </li> 
                                )))
                              : <li>No Car</li>
                            }
                          </ul>
                        </li>
                    )})
                    ) 
                   }
                </ul>
              </div>
            );
          }}
        </Query>
      </div>
    )
  }
};