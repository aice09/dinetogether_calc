const express = require('express')
const app = express()
const cors = require('cors')

const query = `
        fragment PairFields on Pair {
          id
          token0 {
            id
            symbol
            name
            totalLiquidity
            derivedBNB
            __typename
          }
          token1 {
            id
            symbol
            name
            totalLiquidity
            derivedBNB
            __typename
          }
          reserve0
          reserve1
          reserveUSD
          totalSupply
          trackedReserveBNB
          reserveBNB
          volumeUSD
          untrackedVolumeUSD
          token0Price
          token1Price
          __typename
        }


        query pairs($allPairs: [Bytes!]) {
          pairs(first: 500, where: {id_in: $allPairs}, orderBy: trackedReserveBNB, orderDirection: desc) {
            ...PairFields
            __typename
          }
        }

      `;
      

app.use(cors({
    origin: 'https://graphql.factorychain.io/subgraphs/name/swap/exchange/graphql',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],    
    body: JSON.stringify({
        query,
        variables: {
            allPairs: ["0x0ec3896dbe1d7a56f9395332359d894280b6f25c","0xc56293184590c44f6438f2c705baa953785e89f7"]
        }
    })
}));

//display all 

app.get('https://graphql.factorychain.io/subgraphs/name/swap/exchange/graphql', function (req, res) {
    //display all 
    console.log(res);
})

app.listen(3000)
