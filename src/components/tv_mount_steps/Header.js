import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles(() => ({
	header: {
		display: 'flex',
		justifyContent: 'flex-start',
		color: '#22d1c3',
	},
	stepNo: {
		fontSize: 20,
		fontWeight: 800,
	},
	followIcon: {
		fontSize: 16,
		marginTop: 5,
	},
	stepTitle: {
		fontSize: 20,
		color: '#7c7c7c',
		fontWeight: 600,
	},
	textFilter: {
		margin: 0,
	},
}));

const Header = ({ step, stepTitle }) => {
	const classes = useStyles();
	console.log(stepTitle.split('<br/>'));
	return (
		<div className={classes.header}>
			<span className={classes.stepNo}>{step}</span>
			<ArrowForwardIcon className={classes.followIcon} />
			&nbsp;&nbsp;
			<span className={classes.stepTitle}>
				{stepTitle.split('<br/>').map((i) => {
					return (
						<p key={i} className={classes.textFilter}>
							{i}
						</p>
					);
				})}
			</span>
		</div>
	);
};
export default Header;
