import { __destructure_map } from 'cherry-cljs/cljs.core.js'
(function () {
 let map__1, a, b;
map__1 = { "a": 1, "b": (1 + 2 + 3) };
map__1 = __destructure_map(map__1);
a = map__1["a"];
b = map__1["b"];
return (function () {
 return console.log((a + b));
})();
})();

export {  }