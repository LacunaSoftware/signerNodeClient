# signerNodeClient
This repository stores the client library in Node.js for the [Lacuna Signer API](https://signer-lac.azurewebsites.net/swagger/index.html) and was made using the [swagger codegen library](https://swagger.io/tools/swagger-codegen/) along with other minor manual changes. This library was made using Node v.19.0.0.

## Building
In order to publish this library, you must first run `npm install` and `npm run build`, which will install dependencies and trigger the internal build.
## Publishing
After building, you may proceed running the following command:
```
npm publish
```
Make sure you have the correct credentials to publish this library. You might also fork this repository if you want to publish another version with modifications of this library.
