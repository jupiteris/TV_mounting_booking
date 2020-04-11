import React, { useState, useEffect } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import { setSize } from '../../redux/actions/actions';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		flexFlow: 'column',
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
	baseDiv: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	nameDiv: {
		width: '64%',
		fontWeight: 600,
		fontSize: 14,
		color: '#030303',
		'@media (max-height: 670px)': {
			fontSize: 12,
		},
	},
	qtyDiv: {
		width: '36%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		fontWeight: 1000,
		fontSize: 16,
		'@media (max-height: 670px)': {
			fontSize: 14,
		},
		'& button': {
			padding: 0,
		},
	},
	midLine: {
		position: 'relative',
		borderBottom: '1px solid #f0eff4',
		margin: '15px -20px',
		'@media (max-width: 414px)': {
			margin: '10px -20px',
		},
	},
	triangle: {
		width: 0,
		height: 0,
		borderLeft: '12px solid transparent',
		borderRight: '12px solid transparent',
		borderBottom: '12px solid #C2F0ED',
		position: 'absolute',
		right: '18%',
		marginTop: -12,
		'@media (max-width: 414px)': {
			borderWidth: 8,
			marginTop: -8,
			marginRight: 5,
		},
	},
	addDiv: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		'& div:nth-child(1)': {
			width: '55%',
			fontSize: 14,
			fontWeight: 600,
			'@media (max-width: 414px)': {
				fontSize: 9,
			},
		},
		'& div:nth-child(2)': {
			width: '45%',
			display: 'flex',
			justifyContent: 'flex-end',
		},
	},
	btn: {
		width: '45%',
		border: '2px solid #e7e7e7',
		borderRadius: 10,
		marginLeft: 20,
		fontSize: 14,
		color: '#22d1c3',
		fontWeight: 600,
		'@media (max-width: 414px)': {
			fontSize: 10,
			minWidth: 20,
			borderRadius: 5,
			marginLeft: 8,
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
	const [open, setOpen] = useState(false);
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
	const handleSelect = () => {
		setOpen(true);
	};
	const handleClick = (decision) => {
		setOpen(false);
	};
	return (
		<>
			<Paper elevation={0} className={classes.root}>
				<div className={classes.baseDiv} onClick={handleSelect}>
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
				</div>
				{id > 2 && open && (
					<>
						<div className={classes.midLine}>
							<div className={classes.triangle}></div>
						</div>
						<div className={classes.addDiv}>
							<div>Will you help lift the TV?</div>
							<div>
								<Button
									className={classes.btn}
									onClick={(e) => handleClick(false)}
								>
									No
								</Button>
								<Button
									className={classes.btn}
									onClick={(e) => handleClick(true)}
								>
									Yes
								</Button>
							</div>
						</div>
					</>
				)}
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
