// This function simply does the following:
// 1. compare 2 arrays of objects (arr1 & arr2)
// 2. returns the first arr1 object that has an ID equivalent to any ID inside arr2 objects.

const findOneEquivalentID = (arr1: any[], arr2: any[]) => {
  return arr1.find((item1) => arr2.some((item2) => item1.id === item2.id));
};

export default findOneEquivalentID;
