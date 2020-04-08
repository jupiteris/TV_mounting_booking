import React from 'react';
import Header from '../../../components/tv_mount_steps/Header';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	thanksImg: {
		width: '100%',
		marginTop: 50,
	},
	div: {
		display: 'flex',
		alignItems: 'center',
		flexFlow: 'column',
		marginTop: 30,
	},
	thanks: {
		fontSize: 20,
		fontWeight: 600,
		color: '#4dd1c3',
	},
	dummytext: {
		fontSize: 14,
		fontWeight: 400,
		color: '#7c7c7c',
	},
}));

const Step8 = () => {
	const classes = useStyles();
	return (
		<>
			<Header step="7" stepTitle="Thanks for your interest" />
			<img
				src="/img/thanks.jpg"
				className={classes.thanksImg}
				alt="thanks"
			></img>
			<div className={classes.div}>
				<span className={classes.thanks}>Thanks You!!</span>
				<span className={classes.dummytext}>Lorem lpsum Dummy text</span>
			</div>
		</>
	);
};

export default Step8;
