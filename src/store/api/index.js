import { firebase, usersCollection} from '../../firebase'
import { setUser, setLoginUser } from '../actions';

export const registerUser =  ({email, password}) => async function (dispatch) {
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
    dispatch(setUser({ error: error.message }));
    return { error: error.message }
  }
}

export const loginUser =  ({email, password}) => async function (dispatch) {
  try {
    const response = await firebase.auth().signInWithEmailAndPassword(email, password);
    const userProfile = await usersCollection.doc(uid).get();
    const data = userProfile.data();
    dispatch(setLoginUser({ isAuth: true, user: data }));
    return {isAuth: true, user: data};
  } catch (error) {
    return { error: error.message }
  }
}
