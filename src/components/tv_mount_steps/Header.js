import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles(() => ({
	header: {
		display: 'flex',
		justifyContent: 'flex-start',
		color: '#22d1c3',
		marginLeft: 10,
		fontSize: 18,
		'@media (max-width: 414px)': {
			fontSize: 14,
		},
		'@media (max-width: 320px)': {
			fontSize: 12,
		},
	},
	stepNo: {
		fontWeight: 550,
	},
	followIcon: {
		fontSize: '17px !important',
		marginTop: 6,
		'@media (max-width: 414px)': {
			fontSize: '13px !important',
			marginTop: 4,
		},
		'@media (max-width: 320px)': {
			fontSize: '10px !important',
			marginTop: 3,
		},
	},
	stepTitle: {
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
