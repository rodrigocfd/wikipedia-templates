# React Use Locale

Simple, scalable internationalization for React using hooks.

1. [Basic usage](#1-basic-usage)
2. [Using JSON files](#2-using-json-files)
3. [Splitting locale files](#3-splitting-locale-files)
4. [Interpolating strings](#4-interpolating-strings)

## 1. Basic usage

The simplest usage is having all translations in a JSON constant, then pass them as a prop to `LocaleProvider` component wrapper:

```javascript
import {LocaleProvider} from 'react-use-locale';
import MyComponent from './MyComponent';

const currentLang = 'en';

const locales = {
  'en': {
    'Name': 'Name',
    'Surname': 'Surname'
  },
  'pt': {
    'Name': 'Nome',
    'Surname': 'Sobrenome'
  }
};

function App() {
  return (
    <LocaleProvider lang={currentLang} locales={locales}>
      <MyComponent/>
    </LocaleProvider>
  );
}
```

Changing the `lang` parameter of the `LocaleProvider` component will automatically switch the language of all strings.

Finally, on the components that will have translated strings, call the `useLocale` hook, which will return a `t` function, used to translate the strings:

```javascript
import useLocale from 'react-use-locale';

function MyComponent() {
  const [t] = useLocale('*');

  return (
    <div>
      <div>{t`Name`}</div>
      <div>{t`Surname`}</div>
    </div>
  );
}
```

## 2. Using JSON files

Instead of having a single huge constant, let's put the locale strings in JSON files, one for each locale.

First, `en.json`:

```json
{
  "Name": "Name",
  "Surname": "Surname"
}
```

Then, `pt.json`:

```json
{
  "Name": "Nome",
  "Surname": "Sobrenome"
}
```

Now we load both:

```javascript
import {LocaleProvider} from 'react-use-locale';
import MyComponent from './MyComponent';

import en from './en';
import pt from './pt';

const locales = {en, pt};
const currentLang = 'en';

function App() {
  return (
    <LocaleProvider lang={currentLang} locales={locales}>
      <MyComponent/>
    </LocaleProvider>
  );
}
```

This loading can be made asynchronously as well, the library is unopinionated about this.

## 3. Splitting locale files

Instead of having all strings in a single, *huge* file, we can split them into several files. We start with the base file, common to all logical modules of our app, `en.json`:

```json
{
  "Name": "Name",
  "Surname": "Surname"
}
```

And the corresponding `pt.json`:

```json
{
  "Name": "Nome",
  "Surname": "Sobrenome"
}
```

Then let's say we have a "Dogs" logical module in our app. The strings of this module can have their own locale file, `en_Dogs.json`:

```json
{
  "Snout": "Snout",
  "Tail": "Tail",
  "Color": "Color"
}
```

And `pt_Dogs.json`:

```json
{
  "Snout": "Focinho",
  "Tail": "Cauda",
  "Color": "Cor"
}
```

We load all these files into `LocaleProvider`:

```javascript
import en from './en';
import pt from './pt';
import en_Dogs from './en_Dogs';
import pt_Dogs from './pt_Dogs';

const locales = {en, en_Dogs, pt, pt_Dogs};
const currentLang = 'en';

function App() {
  return (
    <LocaleProvider lang={currentLang} locales={locales}>
      <MyComponent/>
    </LocaleProvider>
  );
}
```

Now you can specify a component to have strings solely read from the base file, `en.json`:

```javascript
const [t] = useLocale('*');
```

Or to use the strings from the Dogs file:

```javascript
const [t] = useLocale('*_Dogs');
```

The base file is always a fallback. If a string is not found in `en_Dogs.json`, it will be searched in `en.json`.

Also, notice that Dogs file can have an arbitrary name. The correct locale will be identified by replacing the `*` with the current locale, in the above example, `*_Dogs` will be replaced by `en_Dogs` and `pt_Dogs`.

## 4. Interpolating strings

The `t` function can be used with [tagged template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates) or as an ordinary function, these two will output the same result:

```javascript
<div>{t`Surname`}</div>
<div>{t('Surname')}</div>
```

When used as a function, `t` accepts a variable number of arguments to interpolate. For example, suppose these strings in `en.json`:

```json
{
  "brother": "brother",
  "This {0} is {1}": "This {0} is {1}"
}
```

And the respective `pt.json`:

```json
{
  "brother": "irmão",
  "This {0} is {1}": "É {1} este {0}"
}
```

Interpolation is done this way:

```javascript
function MyComponent() {
  const [t] = useLocale('*');

  return (
    <div>
      <div>{t('This {0} is {1}', 'person', 100)}</div>
    </div>
  );
}
```

This will output `This person is 100` for `en`, and `Este 100 é person` for `pt`.

But interpolated arguments can also be translated recursively:

```javascript
t('This {0} is {1}', t`brother`, 100);
```

What will output `This brother is 100` and `Este 100 é irmão`.