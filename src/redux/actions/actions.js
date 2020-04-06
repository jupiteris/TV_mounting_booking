import {
	SET_STEP,
	SET_SIZE,
	FOOTER_VISIBLE,
	INITIAL_BRACKET,
	SET_BRACKET,
	BRACKETS_DISIBLE,
	SET_ADDICTIONAL_QUIZ,
	SET_OTHER_HELP,
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

export const initialBracket = () => async (dispatch) => {
	try {
		dispatch({ type: INITIAL_BRACKET });
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

export const setAddictionalQuiz = (id) => async (dispatch) => {
	try {
		dispatch({ type: SET_ADDICTIONAL_QUIZ, payload: id });
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

export const setBracketsDisible = (disible) => async (dispatch) => {
	try {
		dispatch({ type: BRACKETS_DISIBLE, payload: disible });
	} catch (err) {
		console.log(err);
	}
};
