import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import DateGroup from './DateGroup';

const datesBlocks = [0, 1, 2, 3, 4, 5];

const CarouselDateGroupSelector = () => {
	const [selectedDatesBlock, setSelectedDatesBlock] = useState();
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
				items={1}
				dots={false}
				center={true}
				smartSpeed={1000}
				onChange={handleChange}
			>
				{datesBlocks.map((datesBlock) => (
					<DateGroup key={datesBlock} datesBlock={datesBlock} />
				))}
			</OwlCarousel>
		</div>
	);
};

export default CarouselDateGroupSelector;
