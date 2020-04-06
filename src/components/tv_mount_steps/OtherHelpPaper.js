import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ExternalCard from './ExternalCard';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import ExpandableTitle from './ExpandableTitle';
// import {  } from '../../redux/actions/actions';

const useStyles = makeStyles(() => ({
	root: {
		margin: '30px 0px',
	},
	paper: {
		marginTop: 10,
		borderRadius: 20,
		padding: '15px 20px',
		backgroundColor: '#fff',
		opacity: 0.8,
		'&:hover': {
			opacity: 1,
		},
	},
	line: {
		marginLeft: -20,
		marginRight: -20,
	},
	content: {
		fontWeight: 500,
		color: '#b7b7b7',
		fontSize: 11,
		padding: 5,
	},
	button: {
		display: 'flex',
		justifyContent: 'center',
	},
	okBtn: {
		minWidth: 30,
		padding: 0,
		borderRadius: 10,
		color: '#7e7e7e',
		fontSize: 9,
		background: '#d2d0d8',
		fontWeight: 600,
	},
}));

const OtherHelpPaper = ({ helpObj }) => {
	const classes = useStyles();
	const [expandState, setExpandState] = useState(helpObj.opened);
	const handleExpand = () => {
		setExpandState(!expandState);
	};
	return (
		<>
			<div className={classes.root}>
				<ExpandableTitle
					handleExpand={handleExpand}
					expandState={expandState}
					title={helpObj.title}
				/>
				<Paper elevation={0} className={classes.paper}>
					<ExternalCard
						externalObj={helpObj.featureContents[0]}
						mainId={helpObj.id}
					/>
					<hr className={classes.line} />
					<ExternalCard
						externalObj={helpObj.featureContents[1]}
						mainId={helpObj.id}
					/>
				</Paper>
				{expandState && (
					<>
						<div className={classes.content}>{helpObj.explain}</div>
						<div className={classes.button}>
							<Button
								variant="contained"
								disableElevation
								className={classes.okBtn}
								onClick={handleExpand}
							>
								OK
							</Button>
						</div>
					</>
				)}
			</div>
		</>
	);
};

const mapStateToProps = (state) => ({
	// sizes: state.step.sizes,
});

export default connect(mapStateToProps, {})(OtherHelpPaper);
