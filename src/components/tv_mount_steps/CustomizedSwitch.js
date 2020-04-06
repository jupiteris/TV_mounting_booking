import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { connect } from 'react-redux';
import {
	setBracketsDisible,
	initialBracket,
} from '../../redux/actions/actions';

const IOSSwitch = withStyles((theme) => ({
	root: {
		width: 42,
		height: 26,
		padding: 0,
		margin: theme.spacing(1),
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
	setBracketsDisible,
	bracketsDisible,
	initialBracket,
}) => {
	const handleChange = (event) => {
		setBracketsDisible(event.target.checked);
		if (event.target.checked) initialBracket();
	};

	return <IOSSwitch checked={bracketsDisible} onChange={handleChange} />;
};

const mapStateToProps = (state) => ({
	bracketsDisible: state.step.bracketsDisible,
});

export default connect(mapStateToProps, { setBracketsDisible, initialBracket })(
	CustomizedSwitch
);
