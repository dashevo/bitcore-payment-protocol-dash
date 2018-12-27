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

## Release

### Publishing to NPM

To publish this package to NPM, first install and ensure all tests passing.

```sh
npm install
npm run test
npm run coverage  # to also check coverage
```

Also, browser bundle must be built, and it's a good idea to re-generate root
SSL certs which are packaged with this module every once in a while:

```sh
npm run build
npm run rootcerts
```

Don't forget to bump the version in `package.json` and `package-lock.json`
using whatever method is easiest.

Once all that is done, package maintainers can publish:

```sh
npm publish
```

### GitHub Release Follow-Up

A tag should be pushed to github once published:

```sh
git tag v1.2.3 && git push origin v1.2.3
```

And in order to ensure a common ancestor commit, develop should be
fast-forwarded to master and pushed:

```sh
git checkout develop && git merge --ff master && git push origin develop
```

### Note

Ideally we build a tag-based release process into the GitHub / CI integration
so that pushing a tag to GitHub will automatically perform all the above steps
in order to publish the module to NPM.

## Contributing

Feel free to dive in! [Open an issue](https://github.com/dashevo/dashcore-payment-protocol/issues/new) or submit PRs.

## License

[MIT](LICENSE) &copy; Dash Core Group, Inc.
