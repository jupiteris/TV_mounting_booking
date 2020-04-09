import React, { useState, useEffect } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import { setSize } from '../../redux/actions/actions';

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
		padding: 17,
		backgroundColor: '#fff',
		margin: '26px 0px',
		opacity: 1,
		'@media (max-height: 670px)': {
			padding: '8px 15px',
			borderRadius: 10,
		},
	},
	nameDiv: {
		width: '64%',
		fontWeight: 600,
		fontSize: 14,
		color: '#030303',
		'@media (max-height: 670px)': {
			fontSize: 10,
		},
	},
	qtyDiv: {
		width: '36%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		fontWeight: 1000,
		fontSize: 18,
		'@media (max-height: 670px)': {
			fontSize: 14,
		},
		'& button': {
			padding: 0,
		},
	},
	addIcon: {
		color: '#22d1c3',
	},
	removeIcon: {
		color: '#e7e7e7',
	},
}));

const SizePaper = ({ id, sizes, setSize }) => {
	const classes = useStyles();
	const [paperState, setPaperState] = useState({});
	useEffect(() => {
		setPaperState(sizes.find((size) => size.id === id));
	}, [sizes, id]);
	const increaseSize = () => {
		if (paperState.qty >= 25) return;
		setSize({ id: paperState.id, variant: 1, price: paperState.price });
	};
	const decreaseSize = () => {
		if (paperState.qty <= 0) return;
		setSize({ id: paperState.id, variant: -1, price: paperState.price });
	};
	const handleSelect = () => {};

	return (
		<>
			<Paper elevation={0} className={classes.root} onClick={handleSelect}>
				<div className={classes.nameDiv}>{paperState.name}</div>
				<div className={classes.qtyDiv}>
					<IconButton aria-label="decrease" onClick={decreaseSize}>
						<RemoveCircleOutlineIcon className={classes.removeIcon} />
					</IconButton>
					<span>{paperState.qty}</span>
					<IconButton aria-label="increase" onClick={increaseSize}>
						<AddCircleOutlineIcon className={classes.addIcon} />
					</IconButton>
				</div>
			</Paper>
		</>
	);
};

const mapStateToProps = (state) => ({
	sizes: state.step.sizes,
});

export default connect(mapStateToProps, {
	setSize,
})(SizePaper);
