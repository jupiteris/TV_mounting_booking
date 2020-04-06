import React, { useState, useEffect } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Drawer from '@material-ui/core/Drawer';
import { connect } from 'react-redux';
import { setStep } from '../../redux/actions/actions';
import DetailsComponent from './DetailsComponent';

const useStyles = makeStyles(() => ({
	body: {
		padding: 10,
		display: 'flex',
		alignItems: 'center',
		backgroundColor: '#e7f1f4',
	},
	progress: {
		backgroundColor: '#b5e9e5',
		'& .MuiLinearProgress-barColorPrimary': {
			backgroundColor: '#6bddd4 !important',
		},
	},
	explain: {
		width: '50%',
		color: '#7c7c7c',
		fontWeight: 500,
		fontSize: 12,
		'& div': {
			padding: 5,
		},
		'& span': {
			fontSize: 18,
			fontWeight: 800,
		},
	},
	details: {
		color: '#3C99FF',
		cursor: 'pointer',
	},
	moveIcons: {
		width: '50%',
		display: 'flex',
		justifyContent: 'flex-end',
		'& svg': {
			color: '#22d1c3',
		},
	},
	drawer: {
		borderRadius: 20,
	},
}));

const Footer = ({
	currentStep,
	setStep,
	footerVisible,
	sizes,
	sizePrice,
	bracketPrice,
	addictionalQuizs,
}) => {
	const classes = useStyles();
	const [addictionalPrice, setAddictionalPrice] = useState(0);
	useEffect(() => {
		const selectedSize = sizes.find((size) => size.selected === true);
		if (!selectedSize) return;
		let price = 0;
		addictionalQuizs.forEach((ele) => {
			if (!ele.selected) return;
			if (ele.id !== 2) price += selectedSize.qty * ele.price;
			else price += ele.price;
		});
		setAddictionalPrice(price);
	}, [addictionalQuizs, sizes]);

	const handleForward = () => {
		setStep(currentStep + 1);
	};
	const handleBack = () => {
		if (currentStep <= 0) return;
		setStep(currentStep - 1);
	};
	const [drawerState, setDrawerState] = useState(false);
	const toggleDrawer = (open) => (event) => {
		if (!sizePrice) return;
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}
		setDrawerState(open);
	};
	return (
		<div>
			<LinearProgress
				variant="determinate"
				value={(currentStep * 100) / 7}
				className={classes.progress}
			/>
			<div className={classes.body}>
				<div className={classes.explain}>
					<div className={classes.totalPrice}>
						<span>
							${currentStep === 0 && sizePrice}
							{currentStep === 1 && sizePrice + bracketPrice}
							{currentStep >= 2 && sizePrice + bracketPrice + addictionalPrice}
							&nbsp;
						</span>
						TV Mounting
					</div>
					<div
						className={classes.details}
						onClick={toggleDrawer(true)}
						style={{ opacity: sizePrice ? 1 : 0.5 }}
					>
						More Details
					</div>
					<Drawer
						anchor={'bottom'}
						open={drawerState}
						onClose={toggleDrawer(false)}
						className={classes.drawer}
						style={{
							borderRadius: 20,
						}}
					>
						<DetailsComponent toggleDrawer={toggleDrawer} />
					</Drawer>
				</div>
				<div className={classes.moveIcons}>
					<IconButton
						aria-label="back"
						onClick={handleBack}
						disabled={currentStep ? false : !footerVisible}
						style={{
							opacity: currentStep ? 1 : footerVisible ? 1 : 0.5,
							display: currentStep ? 'block' : 'none',
						}}
					>
						<ArrowBackIcon />
					</IconButton>
					<IconButton
						aria-label="forward"
						onClick={handleForward}
						style={{ opacity: footerVisible ? 1 : 0.5 }}
						disabled={!footerVisible}
					>
						<ArrowForwardIcon />
					</IconButton>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	currentStep: state.step.currentStep,
	footerVisible: state.step.footerVisible,
	sizePrice: state.step.sizePrice,
	bracketPrice: state.step.bracketPrice,
	addictionalQuizs: state.step.addictionalQuizs,
	sizes: state.step.sizes,
});

export default connect(mapStateToProps, { setStep })(Footer);
