import React, { useState, useEffect } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import CustomizedSwitch from './CustomizedSwitch';
import { connect } from 'react-redux';
import { setBracket } from '../../redux/actions/actions';

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: 20,
		padding: 17,
		backgroundColor: '#fff',
		margin: '26px 0px',
		opacity: 1,
		'@media (max-height: 640px)': {
			padding: '8px 15px',
			borderRadius: 10,
		},
	},
	nameDiv: {
		width: '64%',
		fontWeight: 600,
		fontSize: 14,
		color: '#030303',
		'@media (max-height: 640px)': {
			fontSize: 12,
		},
	},
	qtyDiv: {
		width: '36%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		fontWeight: 1000,
		fontSize: 18,
		'@media (max-height: 640px)': {
			fontSize: 14,
		},
		'& button': {
			padding: 0,
		},
	},
	switchDiv: {
		width: '30%',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		fontWeight: 800,
		fontSize: 18,
	},
	addIcon: {
		color: '#22d1c3',
	},
	removeIcon: {
		color: '#e7e7e7',
	},
}));

const BracketPaper = ({ sizeId, id, brackets, setBracket }) => {
	const classes = useStyles();
	const [paperState, setPaperState] = useState({});
	const [qtyState, setQtyState] = useState();
	const [bracketsDisible, setBracketsDisible] = useState();

	//get the selected value to check whether switch is opened and closed according the certain size.
	useEffect(() => {
		let selected = brackets[3].selecteds.find((ele) => ele.sizeId === sizeId);
		selected = selected ? selected.selected : false;
		setBracketsDisible(selected);
	}, [brackets, sizeId]);

	useEffect(() => {
		//selected bracket
		const selectedBracket = brackets.find((bracket) => bracket.id === id);
		//set the state of the current bracket
		setPaperState(selectedBracket);
		//qty lists from selected bracket
		const selectedBracketQtys = selectedBracket.qtys;
		//set the qty of the current brcket according the certain size.
		//if qtys property is not exist(for example, 4th braket is for the switch)
		if (!selectedBracketQtys) setQtyState(undefined);
		else {
			const bracketQtyRelatedSize = selectedBracketQtys.find(
				(element) => element.sizeId === sizeId
			);
			if (bracketQtyRelatedSize) {
				setQtyState(bracketQtyRelatedSize.qty);
			} else {
				setQtyState(0);
			}
		}
	}, [brackets, id, sizeId]);
	const increaseSize = () => {
		if (qtyState >= 25) return;
		setBracket({
			sizeId: sizeId,
			id: paperState.id,
			variant: 1,
			price: paperState.price,
		});
	};
	const decreaseSize = () => {
		if (qtyState <= 0) return;
		setBracket({
			sizeId: sizeId,
			id: paperState.id,
			variant: -1,
			price: paperState.price,
		});
	};
	const handleSelect = () => {};

	return (
		<>
			<Paper elevation={0} className={classes.root} onClick={handleSelect}>
				<div className={classes.nameDiv}>{paperState.name}</div>
				{qtyState !== undefined ? (
					<div className={classes.qtyDiv}>
						<IconButton
							aria-label="decrease"
							onClick={decreaseSize}
							disabled={bracketsDisible}
							style={{ opacity: bracketsDisible ? 0.5 : 1 }}
						>
							<RemoveCircleOutlineIcon className={classes.removeIcon} />
						</IconButton>
						<span className="input-label">{qtyState}</span>
						<IconButton
							aria-label="increase"
							onClick={increaseSize}
							disabled={bracketsDisible}
							style={{ opacity: bracketsDisible ? 0.5 : 1 }}
						>
							<AddCircleOutlineIcon className={classes.addIcon} />
						</IconButton>
					</div>
				) : (
					<div className={classes.switchDiv}>
						<CustomizedSwitch
							id={paperState.id}
							sizeId={sizeId}
							checked={bracketsDisible}
						/>
					</div>
				)}
			</Paper>
		</>
	);
};

const mapStateToProps = (state) => ({
	brackets: state.step.brackets,
});

export default connect(mapStateToProps, {
	setBracket,
})(BracketPaper);
