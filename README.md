#overwrite-object

[PostCSS] plugin for easily invoking the colors on the [Google Material design color palette].

[PostCSS]: https://github.com/postcss/postcss
[Gulp]: https://github.com/gulpjs/gulp
[Google Material design color palette]: https://material.io/guidelines/style/color.html

## Installation

```js
npm install overwrite-object
```

## Example

```js
var overwriteObject = require('overwrite-object');

var obj1 = {
    name: {
        first: 'John',
        last: 'Smith'
    },
    age: 30,
    hobbies: [
        'mountain climbing', 'pets'
    ]
};
var obj2 = {
    name: {
        title: 'Mr'
    },
    age: 'N.A.',
    hobbies: [
        'eating out', 'long walks in the park'
    ]
};

var newObj = overwriteObject(obj1, obj2);
```

will produce

```js
var newObj = {
    name: {
        first: 'John',
        last: 'Smith',
        title: 'Mr'
    },
    age: 'N.A.',
    hobbies: [
        'mountain climbing', 'pets', 'eating out', 'long walks in the park'
    ]
};
```