import firebase from 'firebase/app'

if (!firebase.apps.length)
	firebase.initializeApp({
		apiKey: 'AIzaSyBZkqv4od5ZPaIVeYQKamOP9Ml-CrbvSaw',
		authDomain: 'blok-zone.firebaseapp.com',
		databaseURL: 'https://blok-zone.firebaseio.com',
		projectId: 'blok-zone',
		storageBucket: 'blok-zone.appspot.com',
		messagingSenderId: '154115524311',
		appId: '1:154115524311:web:ba2871109132f30a251292',
		measurementId: 'G-8NKN38KH92'
	})

export default firebase
