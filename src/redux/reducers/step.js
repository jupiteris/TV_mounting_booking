import {
	SET_STEP,
	SET_SIZE,
	FOOTER_VISIBLE,
	INITIAL_BRACKET,
	SET_BRACKET,
	SET_ADDICTIONAL_QUIZ,
	SET_OTHER_HELP,
	SET_SIZE_INDEX,
	SET_BRACKETS_PRICE,
	SET_ADDICTIONAL_PRICE,
	SET_DATE_INDEX,
	SET_DATE_BLOCK_INDEX,
	SET_TIME_INDEX,
	SET_EXPAND_MTH,
	SET_TOTAL_PRICE,
	// SET_BOOKING_TIME,
} from '../actionTypes';

const initialState = {
	currentStep: 0,
	sizeIndex: 0,
	sizes: [
		{ id: 1, name: 'under 31”', qty: 0, price: 69, bracketsPrice: 0 },
		{ id: 2, name: '31-60”', qty: 0, price: 99, bracketsPrice: 0 },
		{ id: 3, name: '61-80”', qty: 0, price: 139, bracketsPrice: 0 },
		{ id: 4, name: 'over 80”', qty: 0, price: 159, bracketsPrice: 0 },
	],
	brackets: [
		{ id: 1, name: 'Fixed', qtys: [], price: 28 },
		{ id: 2, name: 'Tilt', qtys: [], price: 29 },
		{ id: 3, name: 'Full Motion', qtys: [], price: 35 },
		{ id: 4, name: 'I have my own bracket', selecteds: [], price: 0 },
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
	bracketsPrice: 0,
	addictionalPrice: 0,
	totalPrice: 0,
	footerVisible: false,
	dateIndex: 0,
	dateBlockIndex: {},
	timeIndex: 0,
	expandMth: false,
	bookingTimes: [],
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
			const id = action.payload.id;
			const variant = action.payload.variant;
			const price = action.payload.price;
			return {
				...state,
				sizes: state.sizes.map((size) => {
					if (size.id === id)
						return {
							...size,
							qty: size.qty + variant,
						};
					else return size;
				}),
				sizePrice: state.sizePrice + variant * price,
			};
		}
		case SET_SIZE_INDEX: {
			return {
				...state,
				sizeIndex: action.payload,
			};
		}

		case INITIAL_BRACKET: {
			return {
				...state,
				brackets: state.brackets.map((bracket) => {
					if (bracket.id !== 4)
						return {
							...bracket,
							qtys: bracket.qtys.map((ele) => {
								if (ele.sizeId === action.payload) return { ...ele, qty: 0 };
								else return ele;
							}),
						};
					else return bracket;
				}),
			};
		}
		case SET_BRACKET: {
			const sizeId = action.payload.sizeId;
			const id = action.payload.id;
			const variant = action.payload.variant;
			const price = action.payload.price;
			const checked = action.payload.checked;
			return {
				...state,
				brackets: state.brackets.map((bracket) => {
					if (bracket.id === id && bracket.id !== 4)
						return {
							...bracket,
							qtys:
								bracket.qtys.length &&
								bracket.qtys.find((ele) => ele.sizeId === sizeId)
									? bracket.qtys.map((ele) => {
											if (ele.sizeId === sizeId)
												return {
													...ele,
													qty: ele.qty + variant,
												};
											else return ele;
									  })
									: [...bracket.qtys, { sizeId: sizeId, qty: variant }],
						};
					else if (bracket.id === id && bracket.id === 4)
						return {
							...bracket,
							selecteds:
								//if certain size is exist, just update
								bracket.selecteds.length &&
								bracket.selecteds.find((ele) => ele.sizeId === sizeId)
									? bracket.selecteds.map((ele) => {
											if (ele.sizeId === sizeId)
												return {
													...ele,
													selected: checked,
												};
											else return ele;
									  })
									: //if not exist, add
									  [
											...bracket.selecteds,
											{ sizeId: sizeId, selected: checked },
									  ],
						};
					else return bracket;
				}),
				sizes: state.sizes.map((size) => {
					if (checked && size.id === sizeId)
						return {
							...size,
							bracketsPrice: 0,
						};
					else if (
						!checked &&
						price &&
						typeof variant !== undefined &&
						size.id === sizeId
					) {
						return {
							...size,
							bracketsPrice: size.bracketsPrice + variant * price,
						};
					} else return size;
				}),
			};
		}
		case SET_BRACKETS_PRICE: {
			return {
				...state,
				bracketsPrice: action.payload,
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
		case SET_ADDICTIONAL_PRICE: {
			return {
				...state,
				addictionalPrice: action.payload,
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
		case SET_TOTAL_PRICE: {
			return {
				...state,
				totalPrice: action.payload,
			};
		}
		case FOOTER_VISIBLE: {
			return {
				...state,
				footerVisible: action.payload,
			};
		}
		case SET_DATE_INDEX: {
			return {
				...state,
				dateIndex: action.payload,
			};
		}
		case SET_DATE_BLOCK_INDEX: {
			return {
				...state,
				dateBlockIndex: action.payload,
			};
		}
		case SET_TIME_INDEX: {
			return {
				...state,
				timeIndex: action.payload,
			};
		}
		case SET_EXPAND_MTH: {
			return {
				...state,
				expandMth: action.payload,
			};
		}
		default:
			return state;
	}
}
