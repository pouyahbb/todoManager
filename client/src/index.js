import React from 'react'
import ReactDOM from 'react-dom'

// provider for redux
import { Provider } from 'react-redux'
import store from './redux/store'

// provider for graphql
import { ApolloClient } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import './index.css'
import App from './App'

const httpLink = createHttpLink({
	uri: 'http://localhost:4000'
})

const cache = new InMemoryCache()

const client = new ApolloClient({
	link: httpLink,
	cache,
	headers: {
		'Content-Type': 'application/json',
	},
})

ReactDOM.render(
	<Provider store={store}>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</Provider>,
	document.getElementById('root')
)
