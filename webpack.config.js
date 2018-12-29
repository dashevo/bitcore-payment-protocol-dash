const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    library: 'PaymentProtocol',
    path: path.resolve(__dirname, 'dist'),
    filename: 'dashcore-payment-protocol.js',
  },
};
