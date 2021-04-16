require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture strategy response spice public hunt define army gesture'; 
let testAccounts = [
"0x3a2bab059ee600bf80a83e9f4028cb120958d2686d698f676c6b45dd3d49820d",
"0x7f879977f66917875cd219744be358f0ccaf95830582775ab85aca5c0a9d1574",
"0x5a4445180ae1d457ec62ac468b95b98122682c91e29153e6eca58689d125df9d",
"0x6d6560c225a004bb8a17bc022c1e5ba6f229c7ed5fa4613251f72018a467f4fc",
"0xf873d82d417da727a31170be10f81c53a1be48f41c9f07bc424bfb1f47f66081",
"0x77b1f02448b1dc3f9a7be5fd82c608ed87ff19bfba6f661ff062a01a6b7a33d1",
"0x2614bc6108bd341e1878cb401305f5dedef4cc37ce885c297864bf0e67a1ac4f",
"0x0c22e822218bc5d410d2b8116269a3906118376c045054096271365b50b70976",
"0x2b1e5c6330995c7075b4be85483ca071a43fb44e2b9fc227fc8168aada237649",
"0x335e61b4ccd5527adff82b3c98087e1c9ca08ec6972b79855e44a871c25a93a6"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
