import React from 'react';
import BracketPapter from '../../../components/tv_mount_steps/BracketPaper';
import Header from '../../../components/tv_mount_steps/Header';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const useStyles = makeStyles(() => ({
	sizeHeader: {
		display: 'flex',
		padding: '50px 20px 0px 20px',
		marginBottom: -20,
		fontSize: 11,
		color: '#b7b7b7',
		fontWeight: 500,
	},
	nameSide: {
		width: '70%',
	},
	qtySide: {
		width: '30%',
		textAlign: 'center',
	},
}));

const Step2 = ({ brackets, sizes }) => {
	const classes = useStyles();
	const sizeName = sizes.find((size) => size.selected === true).name;
	return (
		<>
			<Header
				step="2"
				stepTitle={'Please choose the brackets of your ' + sizeName}
			/>
			<div className={classes.sizeHeader}>
				<div className={classes.nameSide}>TYPE OF BRACKET</div>
				<div className={classes.qtySide}>QTY</div>
			</div>
			{brackets.map((bracket) => (
				<BracketPapter id={bracket.id} key={bracket.id} />
			))}
		</>
	);
};

const mapStateToProps = (state) => ({
	brackets: state.step.brackets,
	sizes: state.step.sizes,
});

export default connect(mapStateToProps, {})(Step2);
