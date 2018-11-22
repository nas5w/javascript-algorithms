import Sort from '../Sort';

export default class BogoSort extends Sort {
  /**
   * @param {*[]} originalArray
   * @return {*[]}
   */
  sort(originalArray) {
    // Clone original array to prevent it from modification.
    const array = [...originalArray];

    // Determine if the array is sorted
    function isSorted(arr) {
      for (let i = 0; i < arr.length - 1; i += 1) {
        if (arr[i] > arr[i + 1]) {
          return false;
        }
      }
      return true;
    }

    // If array has less than or equal to one elements then it is already sorted.
    if (array.length <= 1) {
      return array;
    }

    // Shuffle the array until it is sorted
    while (!isSorted(array)) {
      for (let i = array.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    return array;
  }
}
