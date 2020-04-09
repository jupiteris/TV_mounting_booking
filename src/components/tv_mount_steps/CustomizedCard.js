import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		'@media (max-width: 414px)': {
			maxWidth: 220,
		},
		'& p': {
			'@media (max-width: 414px)': {
				fontSize: '8px !important',
			},
		},
		'& h2': {
			'@media (max-width: 414px)': {
				fontSize: '10px !important',
			},
		},
		'& img': {
			'@media (max-width: 414px)': {
				height: '100px',
			},
		},
		'& button': {
			'@media (max-width: 414px)': {
				fontSize: 10,
			},
		},
	},
});

const CustomizedCard = ({ handleClose }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					component="img"
					alt="Contemplative Reptile"
					height="140"
					image="/img/modal.jpg"
					title="Contemplative Reptile"
					style={{ objectFit: 'fill' }}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						Lizard
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions style={{ justifyContent: 'flex-end' }}>
				<Button size="small" color="primary" onClick={handleClose}>
					Close
				</Button>
			</CardActions>
		</Card>
	);
};

export default CustomizedCard;
