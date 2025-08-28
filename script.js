//your JS code here. If required.
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value.trim());

  if (name === "" || isNaN(age)) {
    alert("Please enter valid details");
  } else {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age >= 18) {
          resolve(`Welcome, ${name}. You can vote.`);
        } else {
          reject(`Oh sorry ${name}. You aren't old enough.`);
        }
      }, 4000);
    });

    myPromise
      .then((data) => {
        alert(data);
      })
      .catch((err) => {
        alert(err);
      });
  }
});
