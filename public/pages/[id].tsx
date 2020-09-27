import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import firebase from 'lib/firebase'
import Color from 'models/Color'
import { Pieces } from 'models/Piece'
import Board from 'components/Board'

import styles from 'styles/Game.module.scss'

import 'firebase/firestore'

const { FieldValue } = firebase.firestore
const firestore = firebase.firestore()

const GamePage = () => {
	const willInit = useRef(true)
	
	const router = useRouter()
	const id = router.query.id as string
	
	const [color, setColor] = useState<Color | null>(null)
	const [pieces, setPieces] = useState<Pieces | null>(null)
	
	useEffect(() => (
		id && firestore.doc(`games/${id}`).onSnapshot(snapshot => {
			if (willInit.current) {
				switch (snapshot.get('players') ?? 0) {
					case 0: // First player
						setColor('red')
						break
					case 1: // Second player
						setColor('blue')
						break
					default: // Game is full
						return router.replace('/')
				}
				
				// Increment the number of players
				snapshot.ref.update({
					players: FieldValue.increment(1)
				})
				
				// Make sure to not initialize again
				willInit.current = false
			}
		
			// Update the pieces
			setPieces(snapshot.get('pieces') ?? [])
		}, console.error)
	), [willInit, router, id, setColor, setPieces])
	
	return (
		<div className={styles.root}>
			<Head>
				<title key="title">Red vs Blue - Blok Zone</title>
			</Head>
			<p>You are {color ?? '...'}</p>
			{pieces && <Board pieces={pieces} />}
		</div>
	)
}

export default GamePage
