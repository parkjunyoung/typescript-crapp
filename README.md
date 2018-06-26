# exex

```sh
yarn add redux react-redux immutable redux-actions
```

```sh
yarn add --dev @types/react-redux @types/redux-actions
```

```sh
yarn add --dev typings-for-css-modules-loader
```

### webpack.config.dev.js
```sh
test: /\.css$/,
use: [
    require.resolve('style-loader'),
    {
    loader: require.resolve('css-loader'),
    options: {
        importLoaders: 1,
        modules: true,
        localIdentName: '[path][name]__[local]--[hash:base64:5]'
    },
},
```