require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/ih6kg94X7jQEB1kbZJf4UlfkfZTYALl_',
      accounts: [ 'a39668f48fde79765633704451d50af125eafe400fd1baf37ff145164273c1e0' ],
    }
  }
}