import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { connect } from 'react-redux';
import { setBracket, initialBracket } from '../../redux/actions/actions';

const IOSSwitch = withStyles((theme) => ({
	root: {
		width: 42,
		height: 26,
		padding: 0,
		'@media (max-width: 320px)': {
			width: 32,
			height: 20,
		},
	},
	switchBase: {
		padding: 1,
		'&$checked': {
			transform: 'translateX(16px)',
			color: theme.palette.common.white,
			'& + $track': {
				backgroundColor: '#22d1c3',
				opacity: 1,
				border: 'none',
			},
		},
		'&$focusVisible $thumb': {
			color: '#22d1c3',
			border: '6px solid #fff',
		},
	},
	thumb: {
		width: 24,
		height: 24,
		'@media (max-width: 320px)': {
			width: 18,
			height: 18,
		},
	},
	track: {
		borderRadius: 26 / 2,
		border: `1px solid ${theme.palette.grey[400]}`,
		backgroundColor: theme.palette.grey[50],
		opacity: 1,
		transition: theme.transitions.create(['background-color', 'border']),
	},
	checked: {},
	focusVisible: {},
}))(({ classes, ...props }) => {
	return (
		<Switch
			focusVisibleClassName={classes.focusVisible}
			disableRipple
			classes={{
				root: classes.root,
				switchBase: classes.switchBase,
				thumb: classes.thumb,
				track: classes.track,
				checked: classes.checked,
			}}
			{...props}
		/>
	);
});

const CustomizedSwitch = ({
	setBracket,
	initialBracket,
	id,
	checked,
	sizeId,
}) => {
	const [checkState, setCheckState] = useState(false);
	useEffect(() => {
		if (checked !== undefined && checked !== null) setCheckState(checked);
	}, [checked]);
	const handleChange = (event) => {
		setBracket({
			id: id,
			sizeId: sizeId,
			checked: event.target.checked,
		});
		if (event.target.checked) initialBracket(sizeId);
	};

	return <IOSSwitch checked={checkState} onChange={handleChange} />;
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { setBracket, initialBracket })(
	CustomizedSwitch
);
