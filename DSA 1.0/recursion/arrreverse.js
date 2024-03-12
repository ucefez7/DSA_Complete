function reverseArray(arr) {
    if (arr.length === 0) {
      return [];
    } else {
      const firstElement = arr[0];
      const restOfArray = arr.slice(1);
      return reverseArray(restOfArray).concat(firstElement);
    }
  }
  console.log(reverseArray([1,2,3,3.4,5,6,7]))