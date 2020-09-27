import { useRouter } from 'next/router'

const GamePage = () => {
	const id = useRouter().query.id as string
	
	return (
		<div>
			{id}
		</div>
	)
}

export default GamePage
