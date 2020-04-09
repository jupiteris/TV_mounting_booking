import React, { useEffect } from 'react';
import BracketPapter from '../../../components/tv_mount_steps/BracketPaper';
import Header from '../../../components/tv_mount_steps/Header';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { setFooterVisible } from '../../../redux/actions/actions';

const useStyles = makeStyles(() => ({
	sizeHeader: {
		display: 'flex',
		padding: '45px 20px 2px 20px',
		marginBottom: -20,
		fontSize: 10,
		color: '#b7b7b7',
		fontWeight: 500,
		'@media (max-height: 568px)': {
			padding: '25px 20px 2px 20px',
			fontSize: 8,
		},
	},
	nameSide: {
		width: '64%',
	},
	qtySide: {
		width: '36%',
		textAlign: 'center',
	},
}));

const bracketSchemas = [1, 2, 3, 4];
//step2 can include several inner steps according to the number of the selected size of the last step.
const Step2 = ({ sizes, sizeIndex, brackets, setFooterVisible }) => {
	const classes = useStyles();
	const selectedSizes = sizes.filter((size) => size.qty > 0);
	//individual size information of the each inner step in the bracket step(step2)
	const sizeName = selectedSizes[sizeIndex].name;
	const sizeId = selectedSizes[sizeIndex].id;
	const bracketsPrice = selectedSizes[sizeIndex].bracketsPrice;

	useEffect(() => {
		let bracketDisible = brackets[3].selecteds.find(
			(ele) => ele.sizeId === sizeId
		);
		bracketDisible = bracketDisible && bracketDisible.selected;
		setFooterVisible(bracketDisible || bracketsPrice);
	}, [brackets, sizeId]);
	return (
		<>
			<Header
				step="2"
				stepTitle={'Please choose the brackets <br/>of your ' + sizeName}
			/>
			<div className={classes.sizeHeader}>
				<div className={classes.nameSide}>TYPE OF BRACKET</div>
				<div className={classes.qtySide}>QTY</div>
			</div>
			{bracketSchemas.map((bracket) => (
				<BracketPapter id={bracket} key={bracket} sizeId={sizeId} />
			))}
		</>
	);
};

const mapStateToProps = (state) => ({
	sizes: state.step.sizes,
	sizeIndex: state.step.sizeIndex,
	bracketsDisible: state.step.bracketsDisible,
	brackets: state.step.brackets,
});

export default connect(mapStateToProps, { setFooterVisible })(Step2);
