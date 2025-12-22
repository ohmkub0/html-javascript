const controller = new AbortController();
async function getData() {
  try {
    const response = await fetch("https://api.codingthailand.com/api/version", {
      signal: signal,
    });
    const data = response.json();
    return data;
  } catch (error) {
    if ((error.name = "AbortError")) {
      console.log("fecth request aborted");
    } else {
      console.log("fecth fail", error);
    }
  }
}
const version = await getData();
console.log(version);
setTimeout(() => controller.abort(), 2000);
