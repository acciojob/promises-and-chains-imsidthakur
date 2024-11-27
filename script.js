const form = document.getElementById("form");
const btn = document.getElementById("btn");

btn.addEventListener("click", async (event) => {
  event.preventDefault(); // Prevent form submission and page reload

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  if (!name || !age) {
    return;
  }

  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (age < 18) {
        rej(`Oh sorry ${name}. You aren't old enough.`);
      } else {
        res(`Welcome, ${name}. You can vote`);
      }
    }, 4000);
  });

  await promise
    .then((message) => {alert(message)})
    .catch((error) => {alert(error)});
});
