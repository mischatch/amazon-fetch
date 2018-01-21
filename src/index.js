var amazon = require('amazon-product-api');
// import amazon from 'amazon-product-api';

let client = amazon.createClient({
  awsId: "AKIAIC2FGZKSUKJ3O53Q",
  awsSecret: "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",
  awsTag: "amazonfetch-20"
});

client.itemLookup({
  idType: 'UPC',
  itemId: '884392579524'
}).then(results => {
debugger
  console.log(JSON.stringify(results));
}).catch(err => {
  console.log(err);
});
