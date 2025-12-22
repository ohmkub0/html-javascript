const fetchData = async (item) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("fetch " + item), 1000);
  });
};
// bad
const processItems = (items) => {
  items.forEach(async (item) => {
    const result = await fetchData(item);
    console.log(result);
  });
  console.log("processing complete");
};
processItems(["a", "b", "c"]);

console.log("==================")
// good
const processItems2 = async (items) => {
  for (const item of items) {
    const result = await fetchData(item);
    console.log(result);
  };
  console.log("processing complete");
};
processItems2(["a", "b", "c",'d']);