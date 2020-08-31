import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import App from './Screen/App';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});


ReactDOM.render(
  <React.StrictMode>
    <div>
      <ApolloProvider client={ client }>
        <App />
      </ApolloProvider>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);