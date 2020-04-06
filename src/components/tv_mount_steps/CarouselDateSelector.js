import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import moment from 'moment';

const milisecPerDay = 24 * 60 * 60 * 1000;
const dates = [0, 1, 2, 3, 4, 5];
const today = new Date().getTime();

const CarouselDateSelector = () => {
	const [selectedDate, setSelectedDate] = useState();
	const handleChange = (e) => {
		console.log('index', e.item.index);
		console.log('current', e.item.current);
		console.log('count', e.item.count);
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
				onChange={handleChange}
			>
				{dates.map((date) => (
					<div className={date === 5 ? 'item active' : 'item'} key={date}>
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

export default CarouselDateSelector;
