import React from 'react';
import Header from '../../../components/tv_mount_steps/Header';
import { connect } from 'react-redux';
import AddictionalPaper from '../../../components/tv_mount_steps/AddictionalPaper';

const Step3 = ({ addictionalQuizs }) => {
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
