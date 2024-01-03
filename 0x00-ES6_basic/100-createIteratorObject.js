export default function createIteratorObject(report) {
  let list = [];
  for (const value of Object.values(report.allEmployees)) {
    list = [...list, ...value];
  }
  return list;
}
