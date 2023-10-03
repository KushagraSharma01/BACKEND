let path=require('path');
console.log(path.join('abc','def'))
//output-> abc\def
console.log(path.join('abc','def','ghi'))
console.log(path.join('//abc//','//def//','//ghi//')) //removes extra slashes