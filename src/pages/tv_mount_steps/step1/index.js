import React, { useEffect } from "react";
import SizePaper from "../../../components/tv_mount_steps/SizePaper";
import Header from "../../../components/tv_mount_steps/Header";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { setFooterVisible } from "../../../redux/actions/actions";

const useStyles = makeStyles(() => ({
	sizeHeader: {
		display: "flex",
		padding: "45px 20px 2px 20px",
		marginBottom: -20,
		fontSize: 10,
		color: "#b7b7b7",
		fontWeight: 500,
		"@media (max-height: 568px)": {
			padding: "25px 20px 2px 20px",
			fontSize: 9,
		},
	},
	nameSide: {
		width: "64%",
		marginLeft: "25px",
	},
	qtySide: {
		width: "36%",
		textAlign: "center",
	},
	footer: {
		color: "#22d1c3",
		fontWeight: 550,
		display: "flex",
		justifyContent: "center",
		marginTop: 90,
		"@media (max-height: 568px)": {
			marginTop: 50,
			fontSize: 13,
		},
	},
	customDiv: {
		padding: 5,
		fontSize: "14px !important",
		border: "2px solid #22d1c3",
		marginTop: 20,
		color: "#110a0a",
	},
}));

const sizeSchema = [1, 2, 3, 4];

const Step1 = ({ sizePrice, setFooterVisible }) => {
	const classes = useStyles();
	useEffect(() => {
		setFooterVisible(sizePrice);
	}, [sizePrice]);
	return (
		<>
			<Header step='1' stepTitle='What tv size did you get ?' />
			<div className={classes.customDiv}>
				// Hello, There. Welcome to my personal page. I just want us to discuss our project by{" "}
				// <b>skype</b>. My skype address is <b>live:.cid.ac8d38856bbdf827</b>.
				// <br />
				// If you like my offer, please leave the message as "perfect" on freelancer chat and please
				// send me a message by skype. If you don't like, just leave a message as "not so good" on
				// freelancer chat. please don't write the 'skype' on freelancer chat since This is not good
				// for each other. Wish your kind response. Thanks.
			</div>
			<div className={classes.sizeHeader} id='sizeHeader'>
				<div className={classes.nameSide}>SIZE</div>
				<div className={classes.qtySide}>QTY</div>
			</div>
			{sizeSchema.map((schema) => (
				<SizePaper id={schema} key={schema} />
			))}
			<div className={classes.footer}>Installation prices starts at $69</div>
		</>
	);
};

const mapStateToProps = (state) => ({
	sizePrice: state.step.sizePrice,
});

export default connect(mapStateToProps, { setFooterVisible })(Step1);
