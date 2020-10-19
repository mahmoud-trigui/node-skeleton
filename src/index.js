// put your code here
export const stringToSortedArray = (str, separator = ',') =>
  str
    .split(separator)
    .map(word => word.trim())
    .sort();
