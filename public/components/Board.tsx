import { Fragment } from 'react'
import cx from 'classnames'

import { Pieces } from '../models/Piece'

import styles from 'styles/Board.module.scss'

const SIZE = 14
const DIMENSION = Array.from(Array(SIZE).keys())

export interface BoardProps {
	pieces: Pieces
}

const Board = ({ pieces }: BoardProps) => {
	return (
		<div className={styles.root}>
			{DIMENSION.map(y => (
				<Fragment key={y}>
					{DIMENSION.map(x => (
						<span
							key={x}
							className={cx(
								styles.cell,
								styles[pieces.find(piece =>
									piece.x === x && piece.y === y
								)?.color ?? 'empty']
							)}
						/>
					))}
				</Fragment>
			))}
		</div>
	)
}

export default Board
