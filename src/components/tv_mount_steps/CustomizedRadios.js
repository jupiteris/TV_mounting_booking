import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { setAddictionalQuiz } from '../../redux/actions/actions';
import { connect } from 'react-redux';

const useStyles = makeStyles({
	root: {
		'&:hover': {
			backgroundColor: 'transparent',
		},
		flexDirection: 'row',
	},
	icon: {
		borderRadius: '50%',
		width: 16,
		height: 16,
		boxShadow:
			'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
		backgroundColor: '#f5f8fa',
		backgroundImage:
			'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
		'$root.Mui-focusVisible &': {
			outline: '2px auto rgba(19,124,189,.6)',
			outlineOffset: 2,
		},
		'input:hover ~ &': {
			backgroundColor: '#ebf1f5',
		},
		'input:disabled ~ &': {
			boxShadow: 'none',
			background: 'rgba(206,217,224,.5)',
		},
	},
	checkedIcon: {
		backgroundColor: '#22d1c3',
		backgroundImage:
			'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
		'&:before': {
			display: 'block',
			width: 16,
			height: 16,
			backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
			content: '""',
		},
		'input:hover ~ &': {
			backgroundColor: '#22d1c3',
		},
	},
	radiosGroup: {
		flexDirection: 'row',
		padding: '15px 0px',
		'@media (max-height: 640px)': {
			padding: '10px 0px',
		},
		'& span': {
			'@media (max-width: 414px)': {
				fontSize: '10px !important',
			},
			'@media (max-width: 320px)': {
				fontSize: '9px !important',
			},
		},
	},
	radioWrap: {
		margin: 0,
		'& span': {
			padding: 0,
		},
		'& .MuiTypography-body1': {
			marginRight: 5,
		},
		'&:nth-child(1)': {
			'@media (max-width: 414px)': {
				width: '40% !important',
			},
			width: '30% !important',
		},
		'&:nth-child(2)': {
			'@media (max-width: 414px)': {
				width: '60% !important',
			},
			width: '70% !important',
		},
	},
});

// Inspired by blueprintjs
function StyledRadio(props) {
	const classes = useStyles();

	return (
		<Radio
			className={classes.root}
			disableRipple
			checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
			icon={<span className={classes.icon} />}
			{...props}
		/>
	);
}

const CustomizedRadios = ({
	options,
	id,
	setAddictionalQuiz,
	addictionalQuizs,
}) => {
	const classes = useStyles();
	const [paperState, setPaperState] = useState({});
	useEffect(() => {
		setPaperState(addictionalQuizs.find((ele) => ele.id === id));
	}, [addictionalQuizs, id]);
	const handleOption = () => {
		setAddictionalQuiz(id);
	};
	return (
		<RadioGroup
			defaultValue="yes"
			aria-label="addictional price"
			name="customized-radios"
			className={classes.radiosGroup}
			onChange={handleOption}
			value={paperState.selected ? 'yes' : 'no'}
		>
			<FormControlLabel
				value="yes"
				control={<StyledRadio />}
				label={options.yesOption}
				labelPlacement="start"
				className={classes.radioWrap}
				style={{ width: '33%' }}
			/>
			<FormControlLabel
				value="no"
				control={<StyledRadio />}
				labelPlacement="start"
				label={options.noOption}
				className={classes.radioWrap}
				style={{ width: '67%' }}
			/>
		</RadioGroup>
	);
};

const mapStateToProps = (state) => ({
	addictionalQuizs: state.step.addictionalQuizs,
});

export default connect(mapStateToProps, { setAddictionalQuiz })(
	CustomizedRadios
);
