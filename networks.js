var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('24e4c312'),
  addressVersion: 26,
  privKeyVersion: 155,
  P2SHVersion: 26,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('ef30848c9d17085ec851bac035680cb6d27a3f3f91f797ceba35080d9f090000'),
    merkle_root: hex('2ecb9b9f866f29aeec0c87a04ef1483847cd0bd179912466fccd17bfaeba6d96'),
    height: 0,
    nonce: 204611,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1506659510,
    bits: 0x1e0fffff,
  },
  dnsSeeds: [
    '80.209.237.202',
	'80.209.237.200',
	'80.209.237.198'
  ],
  defaultClientPort: 45850
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};
