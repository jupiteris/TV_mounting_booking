import React, { useState } from 'react';
import Header from '../../../components/tv_mount_steps/Header';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import ExpandableTitle from '../../../components/tv_mount_steps/ExpandableTitle';
import CustomizedTextField from '../../../components/tv_mount_steps/CustomizedTextField';
import { Button } from '@material-ui/core';
import { setStep } from '../../../redux/actions/actions';

const useStyles = makeStyles(() => ({
	submit: {
		display: 'flex',
		justifyContent: 'center',
		padding: ' 50px 0px',
		'& button': {
			width: '94%',
			background: '#22d1c3',
			color: 'white',
			height: 50,
		},
	},
	// form: {
	// 	height: 600,
	// 	overflowY: 'auto',
	// 	'&::-webkit-scrollbar': {
	// 		display: 'none',
	// 		zIndex: 1,
	// 	},
	// },
}));

const Step5 = ({ currentStep, setStep }) => {
	const classes = useStyles();
	const [personalExpand, setPersonalExpand] = useState(true);
	const [contactExpand, setContactExpand] = useState(true);
	const [user, setUser] = useState({
		first_name: '',
		last_name: '',
		phone: '',
		email: '',
		address: '',
		city: '',
		zip_code: '',
	});
	const { first_name, last_name, phone, email, address, city, zip_code } = user;
	const [invalidObj, setInvalidObj] = useState({
		first_name: null,
		last_name: null,
		phone: null,
		email: null,
		address: null,
		city: null,
	});
	const handlePersonal = () => {
		setPersonalExpand(!personalExpand);
	};
	const handleContact = () => {
		setContactExpand(!contactExpand);
	};
	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};
	const validation = () => {
		let count = 0;
		let obj = {};
		if (!first_name) {
			obj.first_name = 'Required! Please input the First Name';
			count++;
		}
		if (!last_name) {
			obj.last_name = 'Required! Please input the Last Name';
			count++;
		}
		if (!phone) {
			obj.phone = 'Required! Please input the Phone Number';
			count++;
		} else if (!/^\d{10}$/i.test(phone)) {
			obj.phone = 'Invalid Phone Number. Phone Number must be 10 numbers.';
			count++;
		}
		if (!email) {
			obj.email = 'Required! Please input the Email';
			count++;
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
			obj.email = 'Invalid Email Address';
			count++;
		}
		if (!address) {
			obj.address = 'Required! Please input the Address';
			count++;
		}
		if (!city) {
			obj.city = 'Required! Please input the City';
			count++;
		}
		setInvalidObj({
			first_name: obj.first_name || null,
			last_name: obj.last_name || null,
			phone: obj.phone || null,
			email: obj.email || null,
			address: obj.address || null,
			city: obj.city || null,
		});
		return count;
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (validation()) return;
		setStep(currentStep + 1);
	};
	return (
		<>
			<Header step="5" stepTitle="Booking" />
			<form className={classes.form} onSubmit={handleSubmit} id="form">
				<ExpandableTitle
					title="PERSONAL INFORMATION"
					expandState={personalExpand}
					handleExpand={handlePersonal}
				/>
				{personalExpand && (
					<div>
						<CustomizedTextField
							label="First Name"
							name="first_name"
							value={first_name}
							invalid={invalidObj.first_name}
							handleChange={handleChange}
							required
						/>
						<CustomizedTextField
							label="Last Name"
							name="last_name"
							value={last_name}
							invalid={invalidObj.last_name}
							handleChange={handleChange}
							required
						/>
						<CustomizedTextField
							label="Phone"
							name="phone"
							value={phone}
							invalid={invalidObj.phone}
							handleChange={handleChange}
							required
						/>
						<CustomizedTextField
							label="Email"
							name="email"
							value={email}
							invalid={invalidObj.email}
							handleChange={handleChange}
							required
						/>
					</div>
				)}
				<ExpandableTitle
					title="CONTACT INFORMATION"
					expandState={contactExpand}
					handleExpand={handleContact}
				/>
				{contactExpand && (
					<div>
						<CustomizedTextField
							label="Address"
							name="address"
							value={address}
							invalid={invalidObj.address}
							handleChange={handleChange}
							required
						/>
						<CustomizedTextField
							label="City"
							name="city"
							value={city}
							invalid={invalidObj.city}
							handleChange={handleChange}
							required
						/>
						<CustomizedTextField
							label="Zip Code"
							name="zip_code"
							value={zip_code}
							handleChange={handleChange}
						/>
					</div>
				)}
				<div className={classes.submit}>
					<Button variant="contained" type="submit">
						Submit
					</Button>
				</div>
			</form>
		</>
	);
};

const mapStateToProps = (state) => ({
	currentStep: state.step.currentStep,
});

export default connect(mapStateToProps, { setStep })(Step5);
