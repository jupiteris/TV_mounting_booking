import React from 'react';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';
import Step5 from './step5';
import Step6 from './step6';
import Step7 from './step7';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../../components/tv_mount_steps/Footer';
import { connect } from 'react-redux';
import './steps.css';

const useStyles = makeStyles(() => ({
	steps: {
		width: '60%',
		height: '100%',
		margin: '0 auto',
		display: 'flex',
		justifyContent: 'center',
	},
	step: {
		width: '90%',
		paddingTop: 30,
	},
	footer: {
		position: 'absolute',
		width: '59%',
		bottom: 10,
	},
}));
const StepPage = ({ currentStep }) => {
	const classes = useStyles();
	return (
		<div className={classes.steps}>
			<div className={classes.step}>
				{currentStep === 0 && <Step1 />}
				{currentStep === 1 && <Step2 />}
				{currentStep === 2 && <Step3 />}
				{currentStep === 3 && <Step4 />}
				{currentStep === 4 && <Step5 />}
				{currentStep === 5 && <Step6 />}
				{currentStep === 6 && <Step7 />}
			</div>
			{currentStep !== 4 && (
				<div className={classes.footer}>
					<Footer />
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	currentStep: state.step.currentStep,
});

export default connect(mapStateToProps, {})(StepPage);