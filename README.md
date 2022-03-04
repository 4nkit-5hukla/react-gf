# ReactGFL [![npm](https://img.shields.io/npm/v/react-gfl.svg?style=for-the-badge)](https://www.npmjs.com/package/react-gfl)

This is a simple component that can automatically handle loading Google fonts for you.

You simply pass it a config array and it will load the fonts for you by appending a `<link />` tag to the document head. It will update itself if the config changes, and will remove itself on unmount.

## Installation

Install with either yarn or npm:

```
yarn add react-gfl
npm install --save react-gfl
```

## Usage

```JavaScript
// Import the Component, you can call it whatever you like.
import ReactGFL from 'react-gfl';

const App = () => (
  <>
    {/* Use it! */}
    <ReactGFL
      fonts={[
        {
          font: 'Roboto',
          weights: [400, '400i'],
        },
        {
          font: 'Roboto Mono',
          weights: [400, 700],
        },
      ]}
      subsets={['cyrillic-ext', 'greek']}
      display={'swap'}
    />

    <p style={{ fontFamily: 'Roboto Mono, monospaced' }}>This will be in Roboto Mono!</p>
    <p style={{ fontFamily: 'Roboto, sans-serif' }}>This will be in Roboto!</p>
  </>
);
```

## Props

The Component takes two props: `fonts` and `subsets`.

#### `fonts`

`fonts` should be an array of objects describing the fonts you want to load:

```JavaScript
[
    {
        font: 'Roboto Mono', // The name of the font on Google Fonts.
        weights: [400, 700], // An array of weights you want to load, can be strings or numbers.
    },
    // ...
    // You can include as many of these objects as you want.
]
```

#### `subsets`

`subsets` should be an array of subsets you want to load. **This prop is optional** - if you do not specify a `subsets` prop then the 'subset' query param will be omitted from the URL and only latin will be loaded.

```JavaScript
['cyrillic-ext', 'greek']
```
