import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Checkbox from '@material-ui/core/Checkbox';
import Popper from '@material-ui/core/Popper';
import { connect } from 'react-redux';
import { setOtherHelp } from '../../redux/actions/actions';
import CustomizedCard from './CustomizedCard';

const useStyles = makeStyles(() => ({
	card: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	nameDiv: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: '64%',
		fontSize: 14,
		fontWeight: 430,
		color: '#030303',
		'& span': {
			'@media (max-height: 640px)': {
				padding: 0,
			},
		},
		'@media (max-width: 414px)': {
			fontSize: 10,
			width: '60%',
		},
	},
	checkbox: {
		color: '#22d1c3 !important',
	},
	featureContent: {
		marginLeft: 10,
	},
	qtyDiv: {
		width: '36%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		fontWeight: 1000,
		fontSize: 18,
		'& button': {
			padding: 0,
		},
		'@media (max-width: 414px)': {
			fontSize: 12,
			width: '40%',
		},
	},
	addIcon: {
		color: '#22d1c3',
	},
	removeIcon: {
		color: '#e7e7e7',
	},
	helpIcon: {
		fontSize: '25px !important',
		'@media (max-width: 414px)': {
			fontSize: '15px !important',
		},
		color: '#22d1c3',
	},
}));

const ExternalCard = ({ externalObj, mainId, setOtherHelp }) => {
	const classes = useStyles();
	const [checked, setChecked] = React.useState(externalObj.checked);
	const [qty, setQty] = React.useState(externalObj.qty);

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};
	const handleIncrease = () => {
		if (qty >= 25) return;
		setQty(qty + 1);
		setOtherHelp({
			mainId: mainId,
			subId: externalObj.id,
			checked: checked,
			qty: qty + 1,
		});
	};
	const handledecrease = () => {
		if (qty <= 0) return;
		setQty(qty - 1);
		setOtherHelp({
			mainId: mainId,
			subId: externalObj.id,
			checked: checked,
			qty: qty - 1,
		});
	};

	const [anchorEl, setAnchorEl] = React.useState(null);
	const handleClick = (event) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const open = Boolean(anchorEl);
	const id = open ? 'spring-popper' : undefined;

	return (
		<div className={classes.card}>
			<div className={classes.nameDiv} style={{ width: !checked && '100%' }}>
				<Checkbox
					checked={checked}
					onChange={handleChange}
					className={classes.checkbox}
				/>
				<div className={classes.featureContent}>{externalObj.content}</div>
			</div>
			<div
				className={classes.qtyDiv}
				style={{ visibility: checked ? 'visible' : 'hidden' }}
			>
				<IconButton aria-label="decrease" onClick={handledecrease}>
					<RemoveCircleOutlineIcon className={classes.removeIcon} />
				</IconButton>
				<span>{qty}</span>
				<IconButton aria-label="increase" onClick={handleIncrease}>
					<AddCircleOutlineIcon className={classes.addIcon} />
				</IconButton>
				<IconButton
					aria-label="help"
					onClick={handleClick}
					aria-describedby={id}
				>
					<HelpOutlineIcon className={classes.helpIcon} />
				</IconButton>
				<Popper
					placement="right-start"
					disablePortal={false}
					onClose={handleClose}
					modifiers={{
						flip: {
							enabled: true,
						},
						preventOverflow: {
							enabled: true,
							boundariesElement: 'scrollParent',
						},
					}}
					id={id}
					open={open}
					anchorEl={anchorEl}
					transition
				>
					<CustomizedCard handleClose={handleClose} />
				</Popper>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { setOtherHelp })(ExternalCard);
