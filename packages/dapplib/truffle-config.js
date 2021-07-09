require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom solution mansion creek stick mad grace glimpse fresh together'; 
let testAccounts = [
"0xdc260351ae4aa5006dac1437f864611f7a56185964f001d15859757dbed7e348",
"0xc9d9ae59e4048468732babc4bcccc6b14186d9d5fae4f4fd7b133e9337bf17a3",
"0x582531bf8d12287b1772b0e352c4acd47f0867b20967776824ae313a04966cd1",
"0x9922d1fcc75e3f1d9406ac4b6b5f3dc7014a59f1345d825d3bd7c563a08c510c",
"0xc41030e210c2f1fad398f19637f4ddb0c05848b7ef2ad90d8c6dc1623541ac04",
"0x42e828c810d42224fcb64bbaa0904e346d7476b6b9689780ede9fc0339ed4fa0",
"0x1150f6b4a01f6529f31be0d430f90197361881c8485b754a3ceeca56a1b97525",
"0xd15cffbc4e9b95d89bd77724ca97c016efaa95037206373cac16185aa264d30f",
"0xce18d2422132fef68db4909e4dc142b72cd590d1a6ef3e136d36efb65a960662",
"0xad05131e78ab7b0226a79d20860cddff1f8b9e5b425cb97668a72d3139c08b6c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

