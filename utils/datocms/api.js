import { request, GraphQLClient } from "graphql-request"

const API_URL = "https://graphql.datocms.com"
const API_TOKEN = process.env.DATOCMS_API_KEY

const client = new GraphQLClient(API_URL, {
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
})
// See: https://www.datocms.com/blog/offer-responsive-progressive-lqip-images-in-2020
const responsiveImageFragment = `
  fragment responsiveImageFragment on ResponsiveImage {
  srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    bgColor
    base64
  }
`

async function fetchAPI(query, variables = {}) {
  const data = await client.request(query, variables).catch((err) => {
    console.log(err.response.errors) // GraphQL response errors
    console.log(err.response.data)
  })
  return data
}

export const getAllSeriesForDashboard = async () => {
  const data = await fetchAPI(`
    query  {
      allSeries {
        seriesName
        slug
        video {
          name
          description
        }
      }
    }
  `)

  return await data?.allSeries
}

export const getSeries = async (variables) => {
  const data = await fetchAPI(
    `
    query ($slug: String!) {
      series(filter: {slug: {eq: $slug}}) {
        seriesName
        description
        video {
          name
          description(markdown: false)
          link
        }
      }
    }
  `,
    variables
  )(data)

  return await data?.series
}
