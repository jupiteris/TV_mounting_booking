import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import DateGroup from './DateGroup';
import { setDateBlockIndex } from '../../redux/actions/actions';
import { connect } from 'react-redux';

const datesBlocks = [0, 1, 2, 3, 4, 5];

const CarouselDateGroupSelector = ({ dateBlockIndex }) => {
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
				startPosition={dateBlockIndex.blockIndex}
			>
				{datesBlocks.map((datesBlock) => (
					<DateGroup key={datesBlock} datesBlockIndex={datesBlock} />
				))}
			</OwlCarousel>
		</div>
	);
};

const mapStateToProps = (state) => ({
	dateBlockIndex: state.step.dateBlockIndex,
});

export default connect(mapStateToProps, { setDateBlockIndex })(
	CarouselDateGroupSelector
);
