export default function iterateThroughObject(reportWithIterator) {
  let employees = '';
  for (let i = 0; i < reportWithIterator.length; i++) {
    const employee = reportWithIterator[i];
    if (i === reportWithIterator.length - 1) {
      employees += employee;
    } else {
      employees += `${employee} | `;
    }
  }
  return employees;
}
