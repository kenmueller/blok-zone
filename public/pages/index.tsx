import { useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'

import createGame from 'lib/createGame'

import styles from 'styles/Home.module.scss'

const Home = () => {
	useEffect(() => {
		createGame().then(id => Router.replace('/[id]', `/${id}`))
	}, [])
	
	return (
		<div className={styles.root}>
			<Head>
				<title key="title">Blok Zone</title>
			</Head>
			<h1>Creating <span className={styles.logo}>Blok Zone</span> game...</h1>
		</div>
	)
}

export default Home
