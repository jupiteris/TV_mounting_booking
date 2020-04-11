import {
	SET_STEP,
	SET_SIZE,
	FOOTER_VISIBLE,
	INITIAL_BRACKET,
	SET_BRACKET,
	SET_ADDICTIONAL_QUIZ,
	SET_OTHER_HELP,
	SET_SIZE_INDEX,
	SET_ADDICTIONAL_PRICE,
	SET_BRACKETS_PRICE,
	SET_CAROUSEL_INDEX,
	SET_DATE_BLOCK_INDEX,
	SET_EXPAND_MTH,
	SET_TOTAL_PRICE,
	SET_RESET_DATE_AND_TIME,
	SET_BOOKING_TIME,
} from '../actionTypes';

export const setStep = (step) => async (dispatch) => {
	try {
		dispatch({ type: SET_STEP, payload: step });
	} catch (err) {
		console.log(err);
	}
};

export const setSize = (size) => async (dispatch) => {
	try {
		dispatch({ type: SET_SIZE, payload: size });
	} catch (err) {
		console.log(err);
	}
};

export const setSizeIndex = (index) => async (dispatch) => {
	try {
		dispatch({ type: SET_SIZE_INDEX, payload: index });
	} catch (err) {
		console.log(err);
	}
};

export const initialBracket = (id) => async (dispatch) => {
	try {
		dispatch({ type: INITIAL_BRACKET, payload: id });
	} catch (err) {
		console.log(err);
	}
};

export const setBracket = (bracket) => async (dispatch) => {
	try {
		dispatch({ type: SET_BRACKET, payload: bracket });
	} catch (err) {
		console.log(err);
	}
};

export const setBracketsPrice = (price) => async (dispatch) => {
	try {
		dispatch({ type: SET_BRACKETS_PRICE, payload: price });
	} catch (err) {
		console.log(err);
	}
};

export const setAddictionalQuiz = (id) => async (dispatch) => {
	try {
		dispatch({ type: SET_ADDICTIONAL_QUIZ, payload: id });
	} catch (err) {
		console.log(err);
	}
};

export const setAddictionalPrice = (price) => async (dispatch) => {
	try {
		dispatch({ type: SET_ADDICTIONAL_PRICE, payload: price });
	} catch (err) {
		console.log(err);
	}
};

export const setOtherHelp = (obj) => async (dispatch) => {
	try {
		dispatch({ type: SET_OTHER_HELP, payload: obj });
	} catch (err) {
		console.log(err);
	}
};

export const setFooterVisible = (visible) => async (dispatch) => {
	try {
		dispatch({ type: FOOTER_VISIBLE, payload: visible });
	} catch (err) {
		console.log(err);
	}
};

export const setCarouselIndex = (index) => async (dispatch) => {
	try {
		dispatch({ type: SET_CAROUSEL_INDEX, payload: index });
	} catch (err) {
		console.log(err);
	}
};

export const setDateBlockIndex = (indexObj) => async (dispatch) => {
	try {
		dispatch({ type: SET_DATE_BLOCK_INDEX, payload: indexObj });
	} catch (err) {
		console.log(err);
	}
};

export const setExpandMth = (value) => async (dispatch) => {
	try {
		dispatch({ type: SET_EXPAND_MTH, payload: value });
	} catch (err) {
		console.log(err);
	}
};

export const setTotalPrice = (price) => async (dispatch) => {
	try {
		dispatch({ type: SET_TOTAL_PRICE, payload: price });
	} catch (err) {
		console.log(err);
	}
};

export const resetDateAndTime = () => async (dispatch) => {
	try {
		dispatch({ type: SET_RESET_DATE_AND_TIME });
	} catch (err) {
		console.log(err);
	}
};
export const setBookingTime = (time) => async (dispatch) => {
	try {
		dispatch({ type: SET_BOOKING_TIME, payload: time });
	} catch (err) {
		console.log(err);
	}
};
