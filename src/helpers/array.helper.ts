export const ArrayHelper = {
  shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length, randomIndex;

    // while there remain elements to shuffle.
    while (currentIndex !== 0) {

      // pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // and swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }
}
