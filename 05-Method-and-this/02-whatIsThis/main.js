ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

```js
var name = 'Joe';
function makeUser() {
  return {
    name: 'John',
    ref: this
  };
}
let user = makeUser(); ==> Called ใน window this ถูก solve ใน window 
console.log(user.ref.name); // * == joe
```