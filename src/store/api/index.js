import { firebase, usersCollection} from '../../firebase'

export const registerUser = async ({email, password}) => {
  try {
    const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const {user} = response;
    const userProfile = {
      uid: user.uid,
      email: email,
    }
    await usersCollection.doc(user.uid).set(userProfile);
    return {isAuth: true, user: userProfile};
  } catch (error) {
    return { error: error.message }
  }
  // return new Promise(resolve => {
  //   firebase.auth().createUserWithEmailAndPassword(email, password).then((response) => {
  //     const { user } = response;
  //     const userProfile = {
  //       uid: user.uid,
  //       email: email,
  //     }
  //     usersCollection.doc(user.uid).set(userProfile).then((response) => {
  //       // resolve({ isAuth: true, user: userProfile })
  //       return { isAuth: true, user: userProfile };
  //     }).catch((error) => {
  //       return { error: error.message }
  //     })
  //   })
  // })
}
