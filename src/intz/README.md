# react-intz

Component-based internationalization for React.

## Setup

Trivial:

`npm install --save react-intz`

## Usage

### Locale files

Locale files are JSON files. The file below is an example for English, which can have any name, but for clarity let's name it `en.json`:

```javascript
{
  "Another": "Another",
  "Something": "Something",
  "{0} can be {1}": "{0} can be {1}"
}
```

And the corresponding Portuguese, `pt.json`:

```javascript
{
  "Another": "Outro",
  "Something": "Alguma coisa",
  "{0} can be {1}": "{0} pode ser {1}"
}
```

The locale files can be saved anywhere, as long as you can import them into your provider JS file, as shown below.

### Providing localization

Example of an `App` component:

```javascript
import {Provider as IntzProvider} from 'react-intz';

import en from './en'; // import en.json and pt.json
import pt from './pt';

// "lang" is a string with initial language
// "locales" is an object with all JSON translations

const App = () => (
  <IntzProvider lang="en" locales={{en, pt}}>
  </IntzProvider>
);
```

Changing the `lang` prop dinamically will automatically translate all strings in the application. The recommended approach is to use a state management library like Redux or MobX to keep track of `lang`, so it can be changed by components down the tree.

### Using

Import the `Intz` component, which will translate strings:

```javascript
import Intz from 'react-intz';

const Foo = () => (
  <div>
    <Intz str="Something"/>
  </div>
);
```

Translating formatted strings:

```javascript
// "args" is an array with the interpolations

const Foo = () => (
  <div>
    <Intz str="{0} can be {1}" args={[30, 100]}/>
  </div>
);
```

And interpolations can be translated too:

```javascript
const Foo = () => (
  <div>
    <Intz str="{0} can be {1}"
      args={[<Intz str="Another"/>, <Intz str="Something"/>]}
      />
  </div>
);
```

### The `Meta` component

The `Meta` component, which receives a function as child, will give you the following object:

```javascript
{
  translate: function(str, args) { /* ... */ },
  curLang: 'en',
  locales: {
    en: {
      "Another": "Another",
      "Something": "Something",
      "{0} can be {1}": "{0} can be {1}"
    },
    pt: {
      "Another": "Outro",
      "Something": "Alguma coisa",
      "{0} can be {1}": "{0} pode ser {1}"
    }
  }
}
```

The `translate` function can be used to imperatively translate strings:

```javascript
import {Meta as IntzMeta} from 'react-intz';

const Foo = () => (
  <div>
    <IntzMeta>
      {meta =>
        meta.translate('Something')
      }
    </IntzMeta>
  </div>
);
```