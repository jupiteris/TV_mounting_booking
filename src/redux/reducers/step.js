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

const initialState = {
	currentStep: 0,
	sizes: [
		{ id: 1, name: 'under 31”', qty: 0, selected: false, price: 69 },
		{ id: 2, name: '31-60”', qty: 0, selected: false, price: 99 },
		{ id: 3, name: '61-80”', qty: 0, selected: false, price: 139 },
		{ id: 4, name: 'over 80”', qty: 0, selected: false, price: 159 },
	],
	brackets: [
		{ id: 1, name: 'Fixed', qty: 0, selected: false, price: 28 },
		{ id: 2, name: 'Tilt', qty: 0, selected: false, price: 29 },
		{ id: 3, name: 'Full Motion', qty: 0, selected: false, price: 35 },
		{ id: 4, name: 'I have my own bracket', selected: false, price: 0 },
	],
	addictionalQuizs: [
		{
			id: 1,
			title: 'Will your TV be mounted on a brick or concrete wall?',
			explain:
				'(currently we do not install on stone, stucco, tile, Solely brick and concrete)',
			price: 35,
			options: {
				yesOption: 'Yes($35 per tv)',
				noOption: 'No, I have  dywall or plaster',
			},
			selected: true,
		},
		{
			id: 2,
			title: 'Does your current tv needs to be dismounted?',
			explain: '(select all that apply)',
			price: 25,
			options: {
				yesOption: 'Yes(+$25)',
				noOption: 'No',
			},
			selected: true,
		},
	],
	otherHelps: [
		{
			id: 1,
			title: 'MOST POPULAR',
			opened: true,
			featureContents: [
				{ id: 1, content: 'External cord concealment', checked: true, qty: 1 },
				{
					id: 2,
					content: 'In-wall cord concealment with power',
					checked: false,
					qty: 0,
				},
			],
			explain:
				'Please note in-wall concealment may not be ordered if tv is above a fireplace or on a brick/concrete wall',
		},
		{
			id: 2,
			title: 'EXTRA INSTALLATIONS',
			opened: false,
			featureContents: [
				{ id: 1, content: 'Install sound-bar', checked: true, qty: 1 },
				{
					id: 2,
					content: 'Install wall shelf',
					checked: false,
					qty: 0,
				},
			],
			explain:
				'Please note in-wall concealment may not be ordered if tv is above a fireplace or on a brick/concrete wall',
		},
		{
			id: 3,
			title: 'CABLES',
			opened: false,
			featureContents: [
				{ id: 1, content: 'Install sound-bar', checked: false, qty: 0 },
				{
					id: 2,
					content: 'Install sound-bar',
					checked: true,
					qty: 1,
				},
			],
			explain:
				'Please note in-wall concealment may not be ordered if tv is above a fireplace or on a brick/concrete wall',
		},
	],
	sizePrice: 0,
	bracketPrice: 0,
	addictionalPrice: 0,
	totalPrice: 0,
	footerVisible: false,
	bracketsDisible: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_STEP: {
			return {
				...state,
				currentStep: action.payload,
			};
		}
		case SET_SIZE: {
			const selectedSize = state.sizes.find(
				(size) => size.id === action.payload.id
			);
			return {
				...state,
				sizes: state.sizes.map((size) => {
					if (size.id === action.payload.id)
						return {
							...size,
							qty: action.payload.qty,
							selected: action.payload.qty ? true : false,
						};
					else return { ...size, selected: false, qty: 0 };
				}),
				sizePrice: action.payload.qty * selectedSize.price,
			};
		}
		case SET_BRACKET: {
			const selectedBracket = state.brackets.find(
				(bracket) => bracket.id === action.payload.id
			);
			return {
				...state,
				brackets: state.brackets.map((bracket) => {
					if (bracket.id === action.payload.id)
						return {
							...bracket,
							qty: action.payload.qty,
							selected: action.payload.qty ? true : false,
						};
					else
						return {
							...bracket,
							selected: false,
							qty: bracket.id !== 4 ? 0 : undefined,
						};
				}),
				bracketPrice: action.payload.qty * selectedBracket.price,
			};
		}
		case SET_ADDICTIONAL_QUIZ: {
			return {
				...state,
				addictionalQuizs: state.addictionalQuizs.map((ele) => {
					if (ele.id === action.payload) {
						return { ...ele, selected: !ele.selected };
					} else return ele;
				}),
			};
		}
		case SET_OTHER_HELP: {
			return {
				...state,
				otherHelps: state.otherHelps.map((otherHelp) => {
					if (otherHelp.id === action.payload.mainId) {
						return {
							...otherHelp,
							featureContents: otherHelp.featureContents.map((content) => {
								if (content.id === action.payload.subId) {
									return {
										...content,
										checked: action.payload.checked,
										qty: action.payload.qty,
									};
								} else return content;
							}),
						};
					} else return otherHelp;
				}),
			};
		}
		case INITIAL_BRACKET: {
			return {
				...state,
				brackets: state.brackets.map((bracket) => {
					return {
						...bracket,
						selected: false,
						qty: bracket.id !== 4 ? 0 : undefined,
					};
				}),
				bracketPrice: 0,
			};
		}
		case FOOTER_VISIBLE: {
			return {
				...state,
				footerVisible: action.payload,
			};
		}
		case BRACKETS_DISIBLE: {
			return {
				...state,
				bracketsDisible: action.payload,
			};
		}
		default:
			return state;
	}
}
