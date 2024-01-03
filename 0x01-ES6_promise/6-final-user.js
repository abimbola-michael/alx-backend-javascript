/* eslint-disable */
import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ])
    .then((values) => {
      const result = [];
      values.forEach((element) => {
        result.push({ status: element.status, value: element.value });
      });
      return result;
    })
    .catch((error) => {
      return [{ status: "rejected", value: error.message }];
    });
}
