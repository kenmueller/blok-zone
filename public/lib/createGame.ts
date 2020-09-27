import firebase from './firebase'

import 'firebase/firestore'

const firestore = firebase.firestore()

const createGame = async () =>
	(await firestore.collection('games').add({})).id

export default createGame
