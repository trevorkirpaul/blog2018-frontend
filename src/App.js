import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Posts from 'queryComponents/Posts';

import './App.css';
// import Router from './Router';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <Posts />
    </div>
  </ApolloProvider>
);

// const App = () => {
//   return (
//     <div className="App">
//       <Router />
//     </div>
//   );
// };

export default App;
