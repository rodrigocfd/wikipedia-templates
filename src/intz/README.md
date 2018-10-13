# react-intz

Component-based internationalization for [React](https://github.com/facebook/react).

1. [Setup](#1-setup)
2. [Locale files](#2-locale-files)
3. [The `Provider` wrapper](#3-the-provider-wrapper)
4. [Translating strings with `Intz`](#4-translating-strings-with-intz)
5. [The `Meta` component](#5-the-meta-component)

## 1. Setup

Installation is trivial:

`npm install --save react-intz`

## 2. Locale files

Locale files are JSON files, one for each language. The file below is an example for English, which can have any name, but for clarity let's name it `en.json`:

```json
{
  "Another": "Another",
  "Something": "Something",
  "THISMSG": "This is a message.",
  "{0} can be {1}": "{0} can be {1}"
}
```

And the corresponding Portuguese, `pt.json`:

```json
{
  "Another": "Outro",
  "Something": "Alguma coisa",
  "THISMSG": "Esta é uma mensagem.",
  "{0} can be {1}": "{0} pode ser {1}"
}
```

The locale files can be saved anywhere, as long as you can import them into your provider JS file, as shown below.

## 3. The `Provider` wrapper

You should wrap your application within `Provider` component. For example, this is a root `App` component:

```javascript
import {Provider as IntzProvider} from 'react-intz';

import en from './en'; // import en.json and pt.json
import pt from './pt';

// "lang" is a string with current language, same name of JSON
// "locales" is an object with all JSON translations

const App = () => (
  <IntzProvider lang="en" locales={{en, pt}}>
    <Foo/>
  </IntzProvider>
);
```

Changing the `lang` prop dinamically will automatically translate all strings in the application.

**Tip:** if your application is planned to grow, to keep it scalable, it's a good idea to keep track of `lang` using a state management library like [Redux](https://github.com/reduxjs/react-redux) or [MobX](https://github.com/mobxjs/mobx-react).

### Prop types

For reference, these are the prop types for `Provider`:

```javascript
Provider.propTypes = {
  children: PropTypes.node,
  lang: PropTypes.string.isRequired,
  locales: PropTypes.object.isRequired
};
```

## 4. Translating strings with `Intz`

Import the `Intz` component, which will translate strings:

```javascript
import Intz from 'react-intz';

const Foo = () => (
  <div>
    <Intz str="Something"/>
  </div>
);
```

To translate formatted strings, pass an array to the `args` prop:

```javascript
// "args" is an array with the interpolations

const Foo = () => (
  <div>
    <Intz str="{0} can be {1}" args={[30, 100]}/>
  </div>
);
```

Formatted strings can have translated arguments as well. Since `args` array accepts strings, numbers and elements, just pass an `Intz` element:

```javascript
const Foo = () => (
  <div>
    <Intz str="{0} can be {1}"
      args={[<Intz str="Another"/>, <Intz str="Something"/>]}
      />
  </div>
);
```

### Prop types

For reference, these are the prop types for `Intz`:

```javascript
Intz.propTypes = {
  str: PropTypes.string.isRequired,
  args: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.number,
      PropTypes.string
    ])
  )
};
```

## 5. The `Meta` component

The `Meta` component, intended for advanced usage, receives a *function* as a child. This *function* will receive a single argument: an object with the `translate` function, the current language, and all the locale strings. Basic usage:

```javascript
import {Meta as IntzMeta} from 'react-intz';

const Foo = () => (
  <IntzMeta>
    {meta => {
      console.log(meta); // what's here? see below
      return <div>Hello</div>;
    }}
  </IntzMeta>
);
```

This will be the `console.log` output:

```javascript
{
  translate: function(str, args) { /* ... */ },
  curLang: 'en',
  locales: {
    en: {
      "Another": "Another",
      "Something": "Something",
      "THISMSG": "This is a message",
      "{0} can be {1}": "{0} can be {1}"
    },
    pt: {
      "Another": "Outro",
      "Something": "Alguma coisa",
      "THISMSG": "Esta é uma mensagem.",
      "{0} can be {1}": "{0} pode ser {1}"
    }
  }
}
```

The `translate` function can be used to imperatively translate strings:

```javascript
const Foo = () => (
  <IntzMeta>
    {meta => (
      <div>{meta.translate('Something')}</div>
    )}
  </IntzMeta>
);
```

Or if you like less typing, use [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment):

```javascript
const Foo = () => (
  <IntzMeta>
    {({translate: t}) => (
      <div>{t('Something')}</div>
    )}
  </IntzMeta>
);
```

`Meta` allows listing all available locales. The example below prints all locales, with the current one in uppercase:

```javascript
const Foo = () => (
  <IntzMeta>
    {meta => Object.entries(meta.locales).map(([localeLang, _]) =>
      meta.curLang === localeLang ?
        <div key={localeLang}>{localeLang.toUpperCase()}</div> :
        <div key={localeLang}>{localeLang}</div>
    )}
  </IntzMeta>
);
```

### Prop types

For reference, these are the prop types for `Meta`:

```javascript
Meta.propTypes = {
  children: PropTypes.func.isRequired
};
```
