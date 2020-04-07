import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(() => ({
	title: {
		fontWeight: 500,
		color: '#b7b7b7',
		fontSize: 9,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '0px 20px',
		marginTop: 30,
	},
	expand: {
		padding: 0,
		color: '#d5d5d5',
	},
}));

const ExpandableTitle = ({ title, handleExpand, expandState }) => {
	const classes = useStyles();
	return (
		<div className={classes.title}>
			<div>{title}</div>
			<div>
				{expandState ? (
					<IconButton
						aria-label="expand-less"
						className={classes.expand}
						onClick={handleExpand}
					>
						<ExpandLessIcon />
					</IconButton>
				) : (
					<IconButton
						aria-label="expand-more"
						className={classes.expand}
						onClick={handleExpand}
					>
						<ExpandMoreIcon />
					</IconButton>
				)}
			</div>
		</div>
	);
};
export default ExpandableTitle;
