# Dashcore Payment Protocol

[![Build Status](https://img.shields.io/travis/dashevo/dashcore-payment-protocol.svg?branch=master)](https://travis-ci.org/dashevo/dashcore-payment-protocol)
[![NPM Package](https://img.shields.io/npm/v/@dashevo/dashcore-payment-protocol.svg)](https://www.npmjs.org/package/@dashevo/dashcore-payment-protocol)

A module for [dashcore-lib](https://github.com/dashevo/dashcore-lib) that implements [Payment Protocol](https://github.com/bitcoin/bips/blob/master/bip-0070.mediawiki) and other related BIPs.

## Getting Started

```sh
npm install dashcore-lib
npm install dashcore-payment-protocol
```

There are many examples of how to use it on the developer guide [section for payment protocol](https://bitcore.io/api/paypro). For example, the following code would verify a payment request:

```javascript
const PaymentProtocol = require('dashcore-payment-protocol');

const body = PaymentProtocol.PaymentRequest.decode(rawbody);
const request = new PaymentProtocol().makePaymentRequest(body);

const version = pr.get('payment_details_version');
const pki_type = pr.get('pki_type');
const pki_data = pr.get('pki_data');
const serializedDetails = pr.get('serialized_payment_details');
const signature = pr.get('signature');

// Verify the signature
const verified = request.verify();
```

## Contributing

Feel free to dive in! [Open an issue](https://github.com/dashevo/dashcore-payment-protocol/issues/new) or submit PRs.

## License

[MIT](LICENSE) &copy; Dash Core Group, Inc.
