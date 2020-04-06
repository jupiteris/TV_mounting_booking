import React from 'react';
import SizePaper from '../../../components/tv_mount_steps/SizePaper';
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
		marginLeft: '25px',
	},
	qtySide: {
		width: '30%',
		textAlign: 'center',
	},
	footer: {
		color: '#22d1c3',
		fontWeight: 700,
		display: 'flex',
		justifyContent: 'center',
		marginTop: 60,
	},
}));

const Step1 = ({ sizes, totalPrice }) => {
	const classes = useStyles();
	return (
		<>
			<Header step="1" stepTitle="What tv size did you get ?" />
			<div className={classes.sizeHeader}>
				<div className={classes.nameSide}>SIZE</div>
				<div className={classes.qtySide}>QTY</div>
			</div>
			{sizes.map((size) => (
				<SizePaper id={size.id} key={size.id} />
			))}
			<div className={classes.footer}>Installation prices starts at $69</div>
		</>
	);
};

const mapStateToProps = (state) => ({
	sizes: state.step.sizes,
	totalPrice: state.step.totalPrice,
});

export default connect(mapStateToProps, {})(Step1);
