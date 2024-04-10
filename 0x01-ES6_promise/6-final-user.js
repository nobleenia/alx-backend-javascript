import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userSignup = await signUpUser(firstName, lastName).then((value) => ({
    sataus: 'fulilled',
    value,
  }));
  const photoUpload = await uploadPhoto(filename).catch((error) => ({
    status: 'rejected',
    value: `${error.name}: ${error.message}`,
  }));
  return [user, photo];
}
