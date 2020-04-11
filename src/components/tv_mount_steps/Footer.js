import React, { useState, useEffect } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { connect } from 'react-redux';
import {
	setStep,
	setSizeIndex,
	setAddictionalPrice,
	setBracketsPrice,
	setTotalPrice,
	resetDateAndTime,
} from '../../redux/actions/actions';
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
		width: '100%',
		color: '#7c7c7c',
		fontWeight: 500,
		fontSize: 10,
	},
	total: {
		'& span': {
			fontSize: 16,
			fontWeight: 800,
			'@media (max-width: 414px)': {
				fontSize: 14,
			},
		},
		width: '35%',
	},
	details: {
		color: '#3C99FF',
		cursor: 'pointer',
	},
	moveIcons: {
		display: 'flex',
		justifyContent: 'flex-end',
		width: '65%',
		'& button': {
			fontWeight: 500,
			fontSize: 14,
			textTransform: 'none',
			'@media (max-width: 414px) and (min-width: 321px)': {
				fontSize: 12,
				padding: '5px 10px',
				'& svg': {
					fontSize: '18px !important',
				},
			},
			'@media (max-width: 320px)': {
				fontSize: 10,
				padding: '4px 8px',
				'& svg': {
					fontSize: '15px !important',
				},
			},
			'& span': {
				margin: 0,
			},
		},
	},
	drawer: {
		borderRadius: 20,
	},
	back: {
		'& button': {
			backgroundColor: 'transparent',
			color: 'black',
			border: 0,
			boxShadow: 'none',
		},
		marginRight: 50,
		'@media (max-width: 320px)': {
			marginRight: 30,
		},
	},
	forward: {
		'& button': {
			backgroundColor: '#0575C2',
			color: 'white',
			borderRadius: 20,
		},
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: 'white',
		border: 0,
		boxShadow: 5,
		padding: '20px 10px',
		width: '90%',
		display: 'flex',
		alignItems: 'center',
		flexFlow: 'column',
		justifyContent: 'center',
		minHeight: 150,
	},
	note: {
		display: 'flex',
		alignItems: 'center',
		fontSize: 12,
		flexFlow: 'column',
		fontWeight: 600,
		'& span': {
			lineHeight: 0.6,
		},
	},
	btnDiv: {
		marginTop: 30,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '90%',
		'& button:nth-child(1)': {
			fontSize: 12,
			background: '#22d1c3',
			color: 'white',
			marginRight: 10,
		},
		'& button:nth-child(2)': {
			fontSize: 12,
			textDecoration: 'underline',
			textDecorationColor: '#22d1c3',
			marginLeft: 10,
		},
	},
}));

const Footer = ({
	currentStep,
	footerVisible,
	sizes,
	sizePrice,
	bracketsPrice,
	totalPrice,
	sizeIndex,
	bookingTimes,
	addictionalPrice,
	addictionalQuizs,
	setStep,
	setSizeIndex,
	setBracketsPrice,
	setAddictionalPrice,
	setTotalPrice,
	resetDateAndTime,
}) => {
	const classes = useStyles();
	const [sizeLen, setSizeLen] = useState(0);
	const [open, setOpen] = useState(false);
	const [booked, setBooked] = useState(true);
	useEffect(() => {
		const selectedSizes = sizes.filter((size) => size.qty > 0);
		//if step is 2
		if (currentStep === 1) {
			let bracketPriceBySizes = 0;
			setSizeLen(selectedSizes.length);
			selectedSizes.forEach((ele, index) => {
				//add the price till the current inner step of the step2(bracket)
				if (index <= sizeIndex) bracketPriceBySizes += ele.bracketsPrice;
			});
			setBracketsPrice(bracketPriceBySizes);
		}
		//if step is 3
		if (currentStep === 2) {
			let tvCount = 0;
			let addicPrice = 0;
			selectedSizes.forEach((ele) => {
				tvCount += ele.qty;
			});
			addictionalQuizs.forEach((ele) => {
				if (!ele.selected) return;
				if (ele.id !== 2) {
					addicPrice += tvCount * ele.price;
				} else {
					addicPrice += ele.price;
				}
			});
			setAddictionalPrice(addicPrice);
		}
		setTotalPrice(sizePrice + bracketsPrice + addictionalPrice);
	}, [
		sizes,
		currentStep,
		addictionalQuizs,
		sizeIndex,
		sizePrice,
		bracketsPrice,
		addictionalPrice,
	]);
	const handleForward = (forward) => {
		//if step is 2
		if (currentStep === 1 && sizeIndex + 1 < sizeLen) {
			setSizeIndex(sizeIndex + 1);
		} else if (currentStep === 5 && !forward) {
			if (!bookingTimes.length) {
				console.log('here');
				setBooked(false);
				setOpen(true);
			} else if (bookingTimes.length > 0 && bookingTimes.length < 3) {
				setBooked(true);
				setOpen(true);
			} else {
				setStep(currentStep + 1);
			}
		} else {
			setOpen(false);
			setStep(currentStep + 1);
		}
	};
	const handleBack = () => {
		if (currentStep <= 0) return;
		//if step is 2
		if (currentStep === 1 && sizeIndex > 0) {
			setSizeIndex(sizeIndex - 1);
		} else {
			setStep(currentStep - 1);
		}
	};

	const handleClose = () => {
		setOpen(false);
		resetDateAndTime();
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
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<div className={classes.total}>
							<span>${totalPrice}</span>
							&nbsp;TV Mounting
						</div>
						<div className={classes.moveIcons}>
							<div className={classes.back}>
								<Button
									variant="contained"
									startIcon={<ArrowBackIosIcon />}
									onClick={handleBack}
									disabled={currentStep ? false : !footerVisible}
									style={{
										opacity: currentStep ? 1 : 0.5,
										visibility: currentStep ? 'visible' : 'hidden',
									}}
								>
									Back
								</Button>
							</div>
							<div className={classes.forward}>
								<Button
									variant="contained"
									endIcon={<ArrowForwardIosIcon />}
									onClick={(e) => handleForward(false)}
									style={{ opacity: footerVisible ? 1 : 0.5 }}
									disabled={!footerVisible}
								>
									{currentStep === 3 ? 'Skip' : 'Next Step'}
								</Button>
								<Modal
									aria-labelledby="transition-modal-title"
									aria-describedby="transition-modal-description"
									className={classes.modal}
									open={open}
									closeAfterTransition
									BackdropComponent={Backdrop}
									BackdropProps={{
										timeout: 500,
									}}
								>
									<Fade in={open}>
										<div className={classes.paper}>
											<div className={classes.note}>
												{booked ? (
													<>
														<span>We suggest selecting at least 3</span>
														<br />
														<span>
															possible appointment start times for faster
														</span>
														<br />
														<span>appointment confirmtion.</span>
													</>
												) : (
													<span>Please select the booked Time</span>
												)}
											</div>
											<div className={classes.btnDiv}>
												{booked ? (
													<>
														<Button onClick={handleClose}>
															Add more times
														</Button>
														<Button onClick={(e) => handleForward(true)}>
															No, Thanks
														</Button>
													</>
												) : (
													<Button onClick={handleClose}>
														Add Booking Time
													</Button>
												)}
											</div>
										</div>
									</Fade>
								</Modal>
							</div>
						</div>
					</div>
					<span
						className={classes.details}
						onClick={toggleDrawer(true)}
						style={{ opacity: sizePrice ? 1 : 0.5 }}
					>
						More Details
					</span>
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
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	currentStep: state.step.currentStep,
	footerVisible: state.step.footerVisible,
	sizePrice: state.step.sizePrice,
	bracketsPrice: state.step.bracketsPrice,
	totalPrice: state.step.totalPrice,
	addictionalPrice: state.step.addictionalPrice,
	addictionalQuizs: state.step.addictionalQuizs,
	sizes: state.step.sizes,
	sizeIndex: state.step.sizeIndex,
	bookingTimes: state.step.bookingTimes,
});

export default connect(mapStateToProps, {
	setStep,
	setSizeIndex,
	setBracketsPrice,
	setAddictionalPrice,
	setTotalPrice,
	resetDateAndTime,
})(Footer);
