# deep-merge-node

step 1 : npm install

if you added any changes you have to built it again. you can do it with this command

```
npm run build

```

### Usage(example)

```
const MainDeepMerge = require('node-deep-merge')

let object = { 'a': [{ 'b': 2 }, { 'd': 4 }]};
let other = { 'a': [{ 'c': 3 }, { 'e': 5 }]};


const deepMerge = new MainDeepMerge();

console.log(deepMerge.merge(object,other))

```
