import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles(() => ({
	header: {
		display: 'flex',
		justifyContent: 'flex-start',
		color: '#22d1c3',
		marginLeft: 5,
	},
	stepNo: {
		fontSize: 18,
		fontWeight: 550,
	},
	followIcon: {
		fontSize: 17,
		marginTop: 6,
	},
	stepTitle: {
		fontSize: 18,
		color: '#7c7c7c',
		fontWeight: 430,
	},
	textFilter: {
		margin: 0,
	},
}));

const Header = ({ step, stepTitle }) => {
	const classes = useStyles();
	return (
		<div className={classes.header}>
			<span className={classes.stepNo}>{step}</span>
			<ArrowForwardIcon className={classes.followIcon} />
			&nbsp;&nbsp;
			<span className={classes.stepTitle}>
				{stepTitle.split('<br/>').map((i, index) => {
					return (
						<p
							key={i}
							className={classes.textFilter}
							style={{ marginTop: index === 1 && -5 }}
						>
							{i}
						</p>
					);
				})}
			</span>
		</div>
	);
};
export default Header;
