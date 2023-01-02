const salary = document.getElementById("salary");
const salary_output = document.querySelector("output");
salary.addEventListener("input", () => {
  salary_output.innerHTML = salary.value;
});
