import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import moment from 'moment';
import { setDateIndex } from '../../redux/actions/actions';
import { connect } from 'react-redux';

const milisecPerDay = 24 * 60 * 60 * 1000;
const dates = [0, 1, 2, 3, 4, 5];
const today = new Date().getTime();

const CarouselDateSelector = ({ dateIndex, setDateIndex }) => {
	const handleDrag = (e) => {
		let currentItem = e.item.index - 3;
		if ([-3, 0, 6].includes(currentItem)) currentItem = 0;
		else if ([-1, 5].includes(currentItem)) currentItem = 5;
		setDateIndex(currentItem);
	};
	return (
		<div className="upcomming-event-section" style={{ width: '70%' }}>
			<OwlCarousel
				className="upcomming-event-carousel owl-carousel owl-theme"
				loop
				nav
				items={3}
				dots={false}
				center={true}
				smartSpeed={1000}
				onDragged={handleDrag}
				startPosition={dateIndex}
			>
				{dates.map((date) => (
					<div className="item" key={date} value={date}>
						<div className="event-item">
							<div className="event-content">
								<div className="event-title mb-30">
									<h3 className="title">
										{moment(today + milisecPerDay * date).format('ddd')} <br />
										{moment(today + milisecPerDay * date).format('MMM DD')}
									</h3>
								</div>
							</div>
						</div>
					</div>
				))}
				{/* active */}
			</OwlCarousel>
		</div>
	);
};

const mapStateToProps = (state) => ({
	dateIndex: state.step.dateIndex,
});

export default connect(mapStateToProps, { setDateIndex })(CarouselDateSelector);
