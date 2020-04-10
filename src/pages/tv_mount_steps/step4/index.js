import React from 'react';
import Header from '../../../components/tv_mount_steps/Header';
import { makeStyles } from '@material-ui/core/styles';
import OtherHelpPaper from '../../../components/tv_mount_steps/OtherHelpPaper';
// import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

const useStyles = makeStyles(() => ({
	helps: {
		height: 700,
		overflowY: 'auto',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
		'@media (max-height: 568px)': {
			height: 400,
		},
		'@media (max-height: 669px) and (min-height: 569px)': {
			height: 480,
		},
		'@media (max-height: 736px) and (min-height: 670px)': {
			height: 580,
		},
		'@media (max-height: 823px) and (min-height: 737px)': {
			height: 600,
		},
	},
	skipField: {
		position: 'absolute',
		marginLeft: '-5%',
		width: '100%',
		height: 85,
		bottom: -68,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		background: '#e7f1f4',
	},
	skipBtn: {
		width: '50%',
		background: '#b5e9e5',
		color: '#fff',
		fontSize: 20,
	},
}));

const Step4 = ({ otherHelps }) => {
	const classes = useStyles();

	return (
		<>
			<Header step="4" stepTitle="What else can we help <br/>you set up" />
			<div className={classes.helps}>
				{otherHelps.map((help) => (
					<OtherHelpPaper key={help.id} helpObj={help} />
				))}
			</div>
			{/* <div className={classes.skipField}>
				<Button
					variant="contained"
					disableElevation
					className={classes.skipBtn}
				>
					Skip
				</Button>
			</div> */}
		</>
	);
};

const mapStateToProps = (state) => ({
	otherHelps: state.step.otherHelps,
});

export default connect(mapStateToProps, {})(Step4);
