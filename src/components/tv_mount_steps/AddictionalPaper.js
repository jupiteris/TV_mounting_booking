import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CustomizedRadios from './CustomizedRadios';

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		flexFlow: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
		padding: '15px 20px',
		backgroundColor: '#fff',
		margin: '30px 0px',
		opacity: 0.8,
		'&:hover': {
			opacity: 1,
		},
	},
	title: {
		width: '100%',
		fontWeight: 800,
		paddingBottom: 15,
	},
	explain: {
		width: '100%',
		fontSize: 10,
	},
	radios: {
		width: '100%',
		fontSize: 11,
	},
}));

const AddictionalPaper = ({ addictionalQuiz }) => {
	const classes = useStyles();

	return (
		<>
			<Paper elevation={0} className={classes.root}>
				<div className={classes.title}>{addictionalQuiz.title}</div>
				<div className={classes.explain}>{addictionalQuiz.explain}</div>
				<div className={classes.radios}>
					<CustomizedRadios
						options={addictionalQuiz.options}
						id={addictionalQuiz.id}
					/>
				</div>
			</Paper>
		</>
	);
};
export default AddictionalPaper;
