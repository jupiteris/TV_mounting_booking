import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';

const useStyles = makeStyles({
	detailPaper: {
		padding: 20,
	},
	closeButton: {
		position: 'relative',
		fontSize: 30,
		cursor: 'pointer',
	},
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
	orderDetail: {
		'& h1': {
			fontSize: 14,
			fontWeight: 500,
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: 1.08,
			letterSpacing: -0.29,
			color: '#46475c',
			marginTop: 0,
			marginBottom: 8,
		},
		'& h2': {
			fontSize: 12,
			marginBottom: 0,
			fontWeight: 400,
			fontStyle: 'normal',
			fontstretch: 'normal',
			lineHeight: 1.33,
			letterSpacing: 'normal',
			color: '#46475c',
		},
	},
	servicesAggregationDetailsWrapper: {
		'& h3': {
			margin: '2px 0px',
			fontSize: 12,
		},
		borderTop: '1px dashed #ccc',
		marginTop: 5,
		paddingTop: 5,
	},
	servicesAggregationDetails: {
		'& div': {
			fontSize: 11,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
		},
	},
	serviceType: {
		fontSize: 12,
	},
	deviceProperties: {
		fontSize: 11,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	myCartTotalPrice: {
		paddingTop: 5,
		marginTop: 5,
		borderTop: '1px solid #ccc',
		'& span': {
			fontSize: 12,
		},
	},
	noPayments: {
		width: '100%',
		margin: ' 7px 0px',
		padding: '10px 0px',
		borderRadius: 10,
		backgroundColor: '#5ddaed4d',
		fontSize: 12,
		fontWeight: 400,
		textAlign: 'center',
		color: '#414141',
	},
	requestSummeryRowHeader: {
		fontSize: 11,
		fontWeight: 500,
		fontStyle: 'normal',
		fontstretch: 'normal',
		lineHeight: 1.29,
		letterSpacing: 0.1,
		color: '#000',
	},
	requestSummeryRowsContainer: {
		fontSize: 11,
		fontWeight: 400,
		fontStyle: 'normal',
		fontStretch: 'normal',
		lineHeight: 1.63,
		letterspacing: 'normal',
		color: '#46515b',
		marginBottom: 20,
	},
});

const SizeInnerBracket = ({ sizeId, bracket }) => {
	const classes = useStyles();
	let sizeBracket;
	if (bracket.id === 4) {
		sizeBracket = bracket.selecteds.find((ele) => ele.sizeId === sizeId);
		if (!sizeBracket || !sizeBracket.selected) return '';
		else
			return (
				<div className={classes.deviceProperties}>
					<span className={classes.serviceName}>{bracket.name}</span>
				</div>
			);
	} else {
		sizeBracket = bracket.qtys.find((ele) => ele.sizeId === sizeId);
		if (!sizeBracket || !sizeBracket.qty) return '';
		else
			return (
				<div className={classes.deviceProperties}>
					<span className={classes.serviceName}>
						{bracket.name}&nbsp;
						{'(' + sizeBracket.qty + ')'}
					</span>
					<span className={classes.servicePrice}>
						{bracket.price * sizeBracket.qty}
					</span>
				</div>
			);
	}
};

const DetailsComponent = ({
	toggleDrawer,
	sizes,
	brackets,
	totalPrice,
	addictionalPrice,
}) => {
	const classes = useStyles();
	const selectedSizes = sizes.filter((size) => size.qty > 0);
	return (
		<div className={classes.fullList} role="presentation">
			<Paper elevation={0} className={classes.detailPaper}>
				<span className={classes.closeButton} onClick={toggleDrawer(false)}>
					&#215;
				</span>
				<div className={classes.orderDetail}>
					<h1>Your order details</h1>
					<h2>
						<b>TV Mounting</b>
					</h2>
					{selectedSizes.map((size) => (
						<div
							className={classes.servicesAggregationDetailsWrapper}
							key={size.id}
						>
							<h3>
								<b>{size.name}</b>
							</h3>
							<div className={classes.servicesAggregationDetails}>
								<div className={classes.aggregateService}>
									<span className={classes.serviceName}>
										TV Mounting ({size.qty} tv)
									</span>
									<span className={classes.servicePrice}>
										${size.qty * size.price}
									</span>
								</div>
							</div>

							<div>
								<div>
									<b className={classes.serviceType}>Braket Type</b>
								</div>
								{brackets.map((bracket) => (
									<SizeInnerBracket
										sizeId={size.id}
										bracket={bracket}
										key={bracket.id}
									/>
								))}
							</div>
						</div>
					))}
					{addictionalPrice > 0 && (
						<div className={classes.deviceProperties} style={{ marginTop: 7 }}>
							<b className={classes.serviceType}>Addictional Service</b>
							<span className={classes.servicePrice}>{addictionalPrice}</span>
						</div>
					)}
					<div className={classes.myCartTotalPrice}>
						<div>
							<span>Total</span>
							<span style={{ float: 'right' }}>
								<b>${totalPrice}</b>
							</span>
						</div>
						<div className={classes.noPayments}>
							No payment until the job is done!
						</div>
					</div>
					<div className={classes.userDetailsWrapper}>
						<div className={classes.requestSummeryWrapper}>
							<div className={classes.requestSummeryRow}>
								<div className={classes.requestSummeryRowHeader}>
									<b>TIME</b>
								</div>
								<div className={classes.requestSummeryRowsContainer}>
									<div>Apr 08 2020, 12pm - 1pm</div>
								</div>
							</div>
						</div>
					</div>
					<div style={{ height: 120 }}></div>
				</div>
			</Paper>
		</div>
	);
};

const mapStateToProps = (state) => ({
	sizes: state.step.sizes,
	brackets: state.step.brackets,
	totalPrice: state.step.totalPrice,
	sizeIndex: state.step.sizeIndex,
	addictionalPrice: state.step.addictionalPrice,
});

export default connect(mapStateToProps, {})(DetailsComponent);
