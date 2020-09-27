import Color from './Color'

export enum Piece {
	SmallT,
	BigT,
	Square,
	Single,
	Corner,
	TwoLong,
	ThreeLong,
	FourLong,
	LongL,
	LongCorner,
	SEdge,
	TripleBothSides,
	SquareEdge,
	CornerWithEdges,
	TripleSides,
	SmallTEdge,
	SingleFourEdge,
	SmallEdgeLong
}

export interface PieceData {
	color: Color
	x: number
	y: number
}

export type Pieces = Record<Piece, PieceData>
