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
		fontSize: 40,
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
			fontSize: 18,
			fontWeight: 500,
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: 1.08,
			letterSpacing: -0.29,
			color: '#46475c',
			marginTop: 0,
			marginBottom: 15,
		},
		'& h2': {
			fontSize: 14,
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
			fontSize: 16,
		},
		borderTop: '1px dashed #ccc',
		marginTop: 5,
		paddingTop: 5,
	},
	serviceName: {
		display: 'inline-block',
		fontSize: 12,
		maxWidth: 200,
	},
	servicePrice: {
		fontSize: 12,
		float: 'right',
	},
	deviceProperties: {
		marginTop: 10,
		'& div': {
			fontSize: 12,
			'& b': {
				fontSize: 14,
			},
		},
	},
	myCartTotalPrice: {
		paddingTop: 5,
		marginTop: 5,
		borderTop: '1px solid #ccc',
		'& span': {
			fontSize: 14,
		},
	},
	noPayments: {
		width: '100%',
		margin: ' 10px 0px',
		padding: '10px 0px',
		borderRadius: 10,
		backgroundColor: '#5ddaed4d',
		fontSize: 14,
		fontWeight: 400,
		textAlign: 'center',
		color: '#414141',
	},
	requestSummeryRowHeader: {
		fontSize: 10,
		fontWeight: 500,
		fontStyle: 'normal',
		fontstretch: 'normal',
		lineHeight: 1.29,
		letterSpacing: 0.1,
		color: '#000',
	},
	requestSummeryRowsContainer: {
		fontSize: 12,
		fontWeight: 400,
		fontStyle: 'normal',
		fontStretch: 'normal',
		lineHeight: 1.63,
		letterspacing: 'normal',
		color: '#46515b',
		marginBottom: 20,
	},
});

const DetailsComponent = ({ toggleDrawer, sizes, sizeIndex }) => {
	const classes = useStyles();
	const selectedSizes = sizes.filter((size) => size.qty > 0);
	// const sizeName = selectedSizes[sizeIndex].name;
	// const sizeQty = selectedSizes[sizeIndex].qty;
	// const sizePrice = selectedSizes[sizeIndex].price;
	// const sizeId = selectedSizes[sizeIndex].id;
	// const bracketsPrice = selectedSizes[sizeIndex].bracketsPrice;
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
						<div className={classes.servicesAggregationDetailsWrapper}>
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
							<div className={classes.deviceProperties}>
								<div>
									<div>
										<b>Braket Type</b>
									</div>
									<div>Full motion</div>
								</div>
							</div>
						</div>
					))}
					<div className={classes.myCartTotalPrice}>
						<div>
							<span>Total</span>
							<span style={{ float: 'right' }}>
								<b>$159</b>
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
	sizeIndex: state.step.sizeIndex,
});

export default connect(mapStateToProps, {})(DetailsComponent);
