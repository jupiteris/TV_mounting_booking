import React from 'react';
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
		border: '2px solid #dadde9',
	},
}))(Tooltip);

const useStyles = makeStyles({
	formGroup: {
		position: 'relative',
		width: '100%',
		marginTop: 15,
		'@media (max-height: 670px)': {
			marginTop: 10,
		},
	},
	palceholder: {
		position: 'absolute',
		top: 15,
		left: 6,
		color: '#030303',
		display: 'flex',
		alignItems: 'center',
		'@media (max-height: 670px)': {
			top: 6,
		},
	},
	label: {
		fontSize: 14,
		color: '#030303',
		opacity: 0.5,
		margin: 0,
		fontWeight: 600,
		'@media (max-width: 414px)': {
			fontSize: 12,
		},
		'@media (max-height: 823px) and (min-height: 671px)': {
			fontSize: 12,
		},
	},
	star: {
		color: '#22d1c3',
	},
	formControl: {
		width: '100%',
		padding: '15px 2%',
		fontSize: 14,
		color: '#030303',
		fontWeight: 450,
		borderRadius: 10,
		borderWidth: 0,
		'@media (max-width: 414px)': {
			fontSize: 12,
		},
		'@media (max-height: 671px)': {
			padding: '7px 2%',
		},
		'@media (max-height: 823px) and (min-height: 671px)': {
			fontSize: 12,
		},
	},
	errorMark: {
		position: 'absolute',
		color: '#ff1616',
		padding: '8px 3px !important',
		top: 0,
		'& svg': {
			width: 25,
			'@media (max-width: 414px)': {
				width: 15,
			},
		},
		'@media (max-width: 414px)': {
			padding: '11px -2px !important',
		},
	},
	errorDiv: {
		color: '#ff1616',
		fontSize: 12,
		background: '',
		opacity: 0.6,
	},
});

const CustomizedTextField = ({
	label,
	name,
	value,
	invalid,
	handleChange,
	required,
}) => {
	const classes = useStyles();
	const ErrorInfo = ({ errorInfo }) => {
		return <div className={classes.errorDiv}>{errorInfo}</div>;
	};
	const [open, setOpen] = React.useState(false);
	const handleTooltipClose = () => {
		setOpen(false);
	};
	const handleTooltipOpen = () => {
		setOpen(true);
	};
	return (
		<div className={classes.formGroup}>
			{!value && (
				<div className={classes.palceholder}>
					<label className={classes.label}>{label}</label>
					<span className={classes.star}>&nbsp;{required && '*'}</span>
				</div>
			)}
			<input
				type="text"
				className={classes.formControl}
				name={name}
				value={value}
				onChange={(e) => handleChange(e)}
				style={{
					border: invalid && '2px solid #eb8c8c',
				}}
			/>
			{invalid && (
				<HtmlTooltip
					title={<ErrorInfo errorInfo={invalid} />}
					className={classes.errorMark}
					arrow
					open={open}
					onClose={handleTooltipClose}
					placement="left-center"
				>
					<IconButton aria-label="Error Icon" onClick={handleTooltipOpen}>
						<ErrorSharpIcon />
					</IconButton>
				</HtmlTooltip>
			)}
		</div>
	);
};

export default CustomizedTextField;
