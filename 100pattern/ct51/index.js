class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFound Error";
    this.stack = "not found 404";
  }
}

function showMsg(fullname) {
  if (fullname === "") {
    const error = new NotFoundError("404 not found");
    error.stack = "404 fullname not found";
    throw error;
  }

  if (fullname === "a") {
    // throw "something wrong"; // bad
    // throw new Error("something went wrong"); //good
    const error = new Error("invalid input");
    error.name = "validation error";
    error.stack = "invalid marry input";
    throw error;
  }
  return fullname;
}

try {
  console.log(showMsg("a"));
} catch (error) {
  if (error instanceof NotFoundError) {
    console.error(error.message);
  } else {
    console.error(error.message);
    console.error(error.name);
    console.error(error.stack);
  }
}
