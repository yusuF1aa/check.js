
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    console.log(value);
    await delay(1000); // Delay for 1 second
  }
}

// Example usage
iterateWithAsyncAwait(['Hello', 'World', 'This', 'is', 'Async/Await']);
const simulateApiCall = () => 
  new Promise((resolve) => setTimeout(() => resolve("Data from API"), 2000));

async function awaitCall() {
  console.log("Fetching data...");
  const data = await simulateApiCall(); // Simulate waiting for API response
  console.log(data); // Log the data
}

// Example usage
awaitCall();
const simulateErrorApiCall = () => 
  new Promise((_, reject) => setTimeout(() => reject(new Error("API call failed")), 2000));

async function awaitCallWithErrorHandling() {
  try {
    console.log("Fetching data...");
    const data = await simulateErrorApiCall(); // Simulate waiting for API response
    console.log(data); // This will not be reached if the API call fails
  } catch (error) {
    console.log("An error occurred while fetching data:", error.message); // Handle the error
  }
}

// Example usage
awaitCallWithErrorHandling();
