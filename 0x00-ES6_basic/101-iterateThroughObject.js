/* radix */
export default function iterateThroughObject(reportWithIterator) {
  let employees = "";
  for (let [employee, i] of Object.entries(reportWithIterator)) {
    if (parseInt(i) === reportWithIterator.length - 1) {
      employees += employee;
    } else {
      employees += `${employee} | `;
    }
  }
  return employees;
}
