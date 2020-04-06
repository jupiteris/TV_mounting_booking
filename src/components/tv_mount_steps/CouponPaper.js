import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EventNoteIcon from '@material-ui/icons/EventNote';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	root: {
		borderRadius: 20,
		padding: 20,
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 11,
		color: '#22d1c3',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
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
		padding: 10,
		borderRadius: 10,
		textAlign: 'center',
		marginTop: 10,
		fontWeight: 500,
	},
	btnDiv: { padding: 5, display: 'flex', justifyContent: 'center' },
	btn: { width: '40%', background: '#22d1c3', color: 'white', fontWeight: 500 },
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
