import { GraphQLClient } from "graphql-request";

const url = 'https://hardenberg.stepzen.net/api/jaunty-squid/__graphql';

const apikey = process.env.EXPO_PUBLIC_GRAPHQL_API_KEY;

const client = new GraphQLClient(url, {
    headers:{
        Authorization:`apikey ${apikey}`
    },
});

export default client;