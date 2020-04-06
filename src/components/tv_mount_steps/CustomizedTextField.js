import React, { useRef } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import ErrorSharpIcon from '@material-ui/icons/ErrorSharp';
import IconButton from '@material-ui/core/IconButton';

const HtmlTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: '#f5f5f9',
		color: 'rgba(0, 0, 0, 0.87)',
		maxWidth: 220,
		fontSize: theme.typography.pxToRem(12),
		border: '1px solid #dadde9',
	},
}))(Tooltip);

const useStyles = makeStyles({
	formGroup: {
		position: 'relative',
		width: '100%',
		marginTop: 20,
	},
	palceholder: {
		position: 'absolute',
		top: 9,
		left: 6,
		color: '#030303',
	},
	label: {
		fontSize: 16,
		color: '#030303',
		fontWeight: 450,
		opacity: 0.7,
	},
	star: {
		color: '#22d1c3',
	},
	formControl: {
		width: '100%',
		padding: '11px 1%',
		fontSize: 16,
		color: '#030303',
		fontWeight: 450,
		borderRadius: 10,
		borderWidth: 0,
	},
	errorMark: {
		position: 'absolute',
		color: '#ff1616',
		padding: 11,
		top: 0,
		right: 0,
	},
	errorDiv: {
		color: '#ff1616',
		fontSize: 12,
		background: '',
		opacity: 0.6,
	},
});

const CustomizedTextField = ({ label, name, value, invalid, handleChange }) => {
	const classes = useStyles();
	const ErrorInfo = ({ errorInfo }) => {
		return <div className={classes.errorDiv}>{errorInfo}</div>;
	};
	return (
		<div className={classes.formGroup}>
			{!value && (
				<div className={classes.palceholder}>
					<label className={classes.label}>{label}</label>
					<span className={classes.star}>&nbsp;*</span>
				</div>
			)}
			<input
				type="text"
				className={classes.formControl}
				name={name}
				value={value}
				onChange={(e) => handleChange(e)}
				style={{
					border: invalid && '1px solid #ff1616',
				}}
			/>
			{invalid && (
				<HtmlTooltip
					title={<ErrorInfo errorInfo={invalid} />}
					className={classes.errorMark}
					arrow
					placement="left-center"
				>
					<IconButton aria-label="Error Icon">
						<ErrorSharpIcon />
					</IconButton>
				</HtmlTooltip>
			)}
		</div>
	);
};

export default CustomizedTextField;
