/**
 * Array Push and Pop Method
 */

const Stack = require("./Implement-A-Basic-Stack");

const stack = new Stack();
const text = "HELLO";

for (let i = 0; i < text.length; i++) {
  stack.push(text.charAt(i)); //charAt() = Since the text is a string
}

/**
 * So far, the text has gone inside the stack
 * Now, the text will be reversed if it take out from the stack
 */

let reversedText = "";
while (!stack.isEmpty()) {
  reversedText += stack.pop();
}

console.log(reversedText);

// JavaScript Array Stack Method
const jsStack = [];
const text1 = "HELLO";

for (let i = 0; i < text1.length; i++) {
  jsStack.push(text1.charAt(i));
}

let result1 = "";
while (jsStack.length) result1 += jsStack.pop();

console.log(result1);
