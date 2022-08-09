var input = 25;
try {
   if (input < 10) {
     throw 'too small!';
   } else if (input > 20) {
     throw 'too big!';
   } else {
     console.log('Input was ' + input);
   }
} catch (error) {
   console.log('Input was ' + error);
} finally {
   console.log('Inside finally block!')
}


function div(a, b) {
  try {
    if (b <= 0) {
      throw new Error("Cannot divided by zero");
    } else {
      console.log(a / b);
    }
  } catch (error) {
    console.log(error.message);
  }
}
div(1, 1);


function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw "Parameter is not a number!";
  }
}

try {
  getRectArea(3, "A");
} catch (e) {
  console.error(e);
  // expected output: "Parameter is not a number!"
}


async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    if (response.status === 200) {
      const result = await response.json();
      console.log(result);
    } else {
      throw new Error("Failed to load Data");
    }
  } catch (error) {
    console.error(error);
    console.error("Server Error");
  }
}

getData();



async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    if (response.status === 200) {
      const result = await response.json();

      const id = result.userId;
      const albumsRes = await fetch(
        `https://jsonplaceholder.typicode.com/albums?userId=${id}`
      );
      if (albumsRes.status === 200) {
        const albums = await albumsRes.json();
        console.log(albums);
      } else {
        throw new Error("Failed to load albums data");
      }
    } else {
      throw new Error("Failed to load Todo data");
    }
  } catch (error) {
    console.log(error.message);
    console.log("Server Error");
  }
}

getData();