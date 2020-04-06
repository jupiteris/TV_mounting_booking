import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
	detailPaper: {
		padding: 20,
	},
	closeButton: {
		position: 'relative',
		fontSize: 50,
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
			fontSize: 24,
			fontWeight: 500,
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: 1.08,
			letterSpacing: -0.29,
			color: '#46475c',
			marginTop: 0,
			marginBottom: 25,
		},
		'& h2': {
			fontSize: 18,
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
	},
	serviceName: {
		display: 'inline-block',
		fontSize: 14,
		maxWidth: 200,
	},
	servicePrice: {
		fontSize: 14,
		float: 'right',
	},
	myCartTotalPrice: {
		paddingTop: 15,
		marginTop: 15,
		borderTop: '1px solid #ccc',
		'& span': {
			fontSize: 18,
		},
	},
	noPayments: {
		width: '100%',
		margin: ' 30px 0px',
		padding: '15px 0px',
		borderRadius: 10,
		backgroundColor: '#5ddaed4d',
		fontSize: 16,
		fontWeight: 400,
		textAlign: 'center',
		color: '#414141',
	},
	requestSummeryRowHeader: {
		fontSize: 14,
		fontWeight: 500,
		fontStyle: 'normal',
		fontstretch: 'normal',
		lineHeight: 1.29,
		letterSpacing: 0.1,
		color: '#000',
	},
	requestSummeryRowsContainer: {
		fontSize: 16,
		fontWeight: 400,
		fontStyle: 'normal',
		fontStretch: 'normal',
		lineHeight: 1.63,
		letterspacing: 'normal',
		color: '#46515b',
		marginBottom: 20,
	},
});

const DetailsComponent = ({ toggleDrawer }) => {
	const classes = useStyles();
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
					<div className={classes.servicesAggregationDetailsWrapper}>
						<h3>
							<b>Over 81"</b>
						</h3>
						<div className={classes.servicesAggregationDetails}>
							<div className={classes.aggregateService}>
								<span className={classes.serviceName}>TV Mounting</span>
								<span className={classes.servicePrice}>$159</span>
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

export default DetailsComponent;
