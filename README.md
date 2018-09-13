# Twizzlers

## Easy and reliable isomorphic multithreading for JavaScript

Automatically parallelizes your code whether run in the browser or node.

## IN PROGRESS

Not yet usable. More of a dream than a library. I'm creating this because I tried packages that claim to do this and they all fell far short of what they promised. This is probably because the authors didn't eat twizzlers.

## API

```javascript
// some module
import doStuff from "somewhere";

const foo = (bar, baz) => doStuff(foo, bar);

// some other place in your codebase
import { twizzlify } from "twizzlers";
import foo from "wherever/foo/is";

const twizzledFunc = twizzlify(foo);

// BOOM! This just ran on every CPU core
// Thread pool pattern will also be available
const whoaThatWasFast = twizzledFunc(123, {});

```
