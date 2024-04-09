export default function appendToEachArrayValue(array, appendString) {
  const newArray = []; // Use let for variables that will change
  for (const value of array) {
    newArray.push(appendString + value);
  }

  return newArray;
}
