"use strict";
const small = 0;
const medium = 1;
const large = 2;
function getRating(rating) {
    if (typeof rating === "number") {
        return 123;
    }
    else {
        return "123";
    }
}
console.log(getRating(5));
console.log(getRating("5"));
