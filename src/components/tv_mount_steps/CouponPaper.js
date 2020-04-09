import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EventNoteIcon from '@material-ui/icons/EventNote';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	root: {
		borderRadius: 20,
		padding: 15,
		backgroundColor: '#fff',
		'@media (max-height: 640px)': {
			padding: '10px 8px',
			borderRadius: 10,
		},
	},
	title: {
		fontSize: 11,
		color: '#22d1c3',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		'@media (max-width: 414px)': {
			fontSize: 9,
		},
	},
	icon: {
		'& svg': {
			fontSize: 24,
			padding: 5,
			background: '#dffcfa',
			borderRadius: 8,
		},
		width: '30%',
	},
	content: {
		width: '90%',
	},
	coupon: {
		background: '#f2f2f2',
		borderRadius: 5,
		fontSize: 12,
		textAlign: 'center',
		marginTop: 10,
		fontWeight: 500,
		padding: 1,
		'@media (max-width: 414px)': {
			fontSize: 10,
		},
	},
	btnDiv: {
		padding: '7px 0px',
		display: 'flex',
		justifyContent: 'center',
	},
	btn: {
		width: '33%',
		background: '#22d1c3',
		color: 'white',
		fontWeight: 500,
		fontSize: 9,
		borderRadius: 5,
		'@media (max-width: 414px)': {
			fontSize: 8,
			minWidth: 40,
			borderRadius: 3,
			padding: '2px 0px !important',
		},
		textTransform: 'none',
	},
}));

const CouponPaper = ({ width }) => {
	const classes = useStyles();
	return (
		<Paper elevation={0} className={classes.root} style={{ width: width }}>
			<div className={classes.title}>
				<div className={classes.icon}>
					<EventNoteIcon />
				</div>
				<div className={classes.content}>Add Coupon</div>
			</div>
			<div className={classes.coupon}>HTAD43</div>
			<div className={classes.btnDiv}>
				<Button className={classes.btn}>Apply</Button>
			</div>
		</Paper>
	);
};

export default CouponPaper;
