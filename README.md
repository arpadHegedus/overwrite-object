A tiny module to merge two objects and overwrite values cleverly.

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
