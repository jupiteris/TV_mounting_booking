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
		padding: 17,
		backgroundColor: '#fff',
		margin: '30px 0px',
		opacity: 0.8,
		'&:hover': {
			opacity: 1,
		},
		'@media (max-width: 414px)': {
			padding: '8px 15px',
			borderRadius: 10,
		},
	},
	title: {
		width: '100%',
		fontWeight: 700,
		paddingBottom: 5,
		fontSize: 13,
		'@media (max-width: 414px)': {
			fontSize: 12,
		},
	},
	explain: {
		width: '100%',
		fontSize: 10,
		'@media (max-width: 414px)': {
			fontSize: 9,
		},
	},
	radios: {
		width: '100%',
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
