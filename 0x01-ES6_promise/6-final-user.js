import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([uploadPhoto(fileName), signUpUser(firstName, lastName)])
    .then((values) =>
      values.map((value) => {
        return {
          status: value.status,
          value: value.value,
        };
      })
    )
    .catch(() => console.log("Signup system offline"));
}
