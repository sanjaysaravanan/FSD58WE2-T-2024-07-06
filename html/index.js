let count = 0;

const h1Element = document.querySelector("h1");

h1Element.innerHTML = count;

const handleInc = () => {
  // JS Memory Modification
  count = count + 1;
  console.log("count: " + count);

  // Direct DOM Modification or Re-Rendering DOM
  h1Element.innerHTML = count;
};
