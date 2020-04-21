import { GraphQLClient } from "graphql-request"
export function request({ query, variables }) {
  const endpoint = `https://graphql.datocms.com/`
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ff012d7ea9e81dd1d3170399ebc730`,
    },
  })
  return client.request(query, variables)
}
