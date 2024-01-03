export default function createIteratorObject(report) {
  const list = [];
  for (const value of Object.values(report.allEmployees)) {
    list = [...list, ...value];
  }
  return list;
}