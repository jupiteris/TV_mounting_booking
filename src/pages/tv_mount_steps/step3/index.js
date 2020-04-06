import React from 'react';
import Header from '../../../components/tv_mount_steps/Header';
// import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import AddictionalPaper from '../../../components/tv_mount_steps/AddictionalPaper';

// const useStyles = makeStyles(() => ({}));

const Step3 = ({ addictionalQuizs }) => {
	// const classes = useStyles();
	return (
		<>
			<Header step="3" stepTitle="I identify my ethnicity as:" />
			{addictionalQuizs.map((addictionalQuiz) => (
				<AddictionalPaper
					addictionalQuiz={addictionalQuiz}
					key={addictionalQuiz.id}
				/>
			))}
		</>
	);
};

const mapStateToProps = (state) => ({
	addictionalQuizs: state.step.addictionalQuizs,
});

export default connect(mapStateToProps, {})(Step3);
