import React, { useState, useEffect } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import CustomizedSwitch from './CustomizedSwitch';
import { connect } from 'react-redux';
import { setBracket, setFooterVisible } from '../../redux/actions/actions';

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
		padding: '15px 20px',
		backgroundColor: '#fff',
		margin: '30px 0px',
		opacity: 0.8,
		'&:hover': {
			opacity: 1,
		},
	},
	nameDiv: {
		width: '70%',
		fontWeight: 430,
		color: '#030303',
	},
	qtyDiv: {
		width: '30%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		fontWeight: 800,
		fontSize: 18,
	},
	switchDiv: {
		width: '30%',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		fontWeight: 800,
		fontSize: 18,
	},
	addIcon: {
		color: '#22d1c3',
	},
	removeIcon: {
		color: '#e7e7e7',
	},
}));

const BracketPaper = ({
	id,
	brackets,
	setBracket,
	setFooterVisible,
	bracketsDisible,
}) => {
	const classes = useStyles();
	const [paperState, setPaperState] = useState({});
	useEffect(() => {
		setPaperState(brackets.find((size) => size.id === id));
		const visiable = brackets.find((size) => size.selected === true)
			? true
			: false;
		setFooterVisible(bracketsDisible || visiable);
	}, [brackets, id, bracketsDisible]);
	const increaseSize = () => {
		if (paperState.qty >= 25) return;
		setBracket({ id: paperState.id, qty: paperState.qty + 1 });
	};
	const decreaseSize = () => {
		if (paperState.qty <= 0) return;
		setBracket({ id: paperState.id, qty: paperState.qty - 1 });
	};
	const handleSelect = () => {};

	return (
		<>
			<Paper
				elevation={0}
				style={{
					backgroundColor: paperState.qty ? '#38bfe8' : '#fff',
				}}
				className={classes.root}
				onClick={handleSelect}
			>
				<div className={classes.nameDiv}>{paperState.name}</div>
				{paperState.qty !== undefined ? (
					<div className={classes.qtyDiv}>
						<IconButton
							aria-label="decrease"
							onClick={decreaseSize}
							disabled={bracketsDisible}
							style={{ opacity: bracketsDisible ? 0.5 : 1 }}
						>
							<RemoveCircleOutlineIcon className={classes.removeIcon} />
						</IconButton>
						<span className="input-label">{paperState.qty}</span>
						<IconButton
							aria-label="increase"
							onClick={increaseSize}
							disabled={bracketsDisible}
							style={{ opacity: bracketsDisible ? 0.5 : 1 }}
						>
							<AddCircleOutlineIcon className={classes.addIcon} />
						</IconButton>
					</div>
				) : (
					<div className={classes.switchDiv}>
						<CustomizedSwitch />
					</div>
				)}
			</Paper>
		</>
	);
};

const mapStateToProps = (state) => ({
	brackets: state.step.brackets,
	bracketsDisible: state.step.bracketsDisible,
});

export default connect(mapStateToProps, {
	setBracket,
	setFooterVisible,
})(BracketPaper);
