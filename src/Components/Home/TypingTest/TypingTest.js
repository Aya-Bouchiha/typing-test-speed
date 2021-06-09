import axios from 'axios';
import { API_URL } from '../../../Settings/Api/ApiSettings';
import styled from 'styled-components';
import CardInfo from './CardInfo/CardInfo';
import Typography from '@material-ui/core/Typography';
import { useRef, useState, useEffect, useCallback } from 'react';
import { Colors } from '../../../Styles/Colors.js';
import { LettersFontSize } from '../../../Styles/TypingTest/LettersFontSize';
import { TYPING_DURATION } from '../../../Settings/TypingTest/TypingDuration';
const TypingTest = () => {
	// words that the user should type in the textArea
	const [words, setWords] = useState([]);
	const textAreaRef = useRef(null);
	const [duration, setDuration] = useState(TYPING_DURATION);
	const [showCard, setShowCard] = useState(false);
	// for setinterval function that
	const [intervalState, setIntervalState] = useState(null);
	const [isFocused, setIsFocused] = useState(false);
	// the card info that will appear after a periode of time specified in duration state
	const [cardTypingTestInfo, setCardTypingTestInfo] = useState({
		typedLetters: 0,
		correctLetters: 0,
	});
	// getting differents words from `https://random-word-api.herokuapp.com/word?number=${WORDS_NUMBER}`
	const fetchData = useCallback(async () => {
		axios
			.get(API_URL)
			.then((response) => response.data)
			.then((data) => {
				setWords(
					data
						.join(' ')
						.split('')
						.map((letter, index) => (
							<span key={index} id={`letter__${index}`}>
								{letter}
							</span>
						)),
				);
				document
					.querySelectorAll('.typing__words span')
					.forEach((span) => (span.className = ''));
			});
	}, []);
	/* !handleInput
	 * changing the color of the correct letter to "green"
	 * changing the color of the incorect letter to "red" & underlining it
	 */
	const handleInput = () => {
		let typedLetters = textAreaRef.current.value.split('');
		words.forEach((word, index) => {
			if (typedLetters[index] == null) {
				document.getElementById(`letter__${index}`).className = '';
			} else if (word['props']['children'] === typedLetters[index]) {
				document.getElementById(`letter__${index}`).className =
					'letter__correct';
			} else {
				document.getElementById(`letter__${index}`).className =
					'letter__incorrect';
			}
		});
		// adding a small cursor
		document.getElementById(
			`letter__${textAreaRef.current.value.length}`,
		).className = 'typing__cursor';
	};

	useEffect(() => {
		// when user focus in the textArea we will dercrement the duration like a counter
		if (isFocused && duration === TYPING_DURATION) {
			setIntervalState(
				setInterval(
					() => setDuration((duration) => duration - 1),
					1000,
				),
			);
			// if the duraion arrived to {0} we will stop the interval
		} else if (duration === 0) {
			clearInterval(intervalState);
			// leaving focus from textArea
			textAreaRef?.current.blur();
			// setIsFocused(false);
			setCardTypingTestInfo(() => {
				return {
					typedLetters: textAreaRef?.current?.value?.length,
					correctLetters:
						document.querySelectorAll('.letter__correct').length,
				};
			});
			// showing the card
			setShowCard(true);
			// getting new words
			if (!isFocused) fetchData();
		}
	}, [duration, isFocused]);
	useEffect(() => {
		fetchData();
	}, []);

	const handleFocus = () => {
		// showing the cursor
		document.getElementById(
			`letter__${textAreaRef.current.value.length ?? 0}`,
		).className = 'typing__cursor';
		setIsFocused(true);
	};
	
	const handleBlur = () => {
		// hiding the cursor
		document.querySelector('.typing__cursor').className = '';
		setIsFocused(false);
	};

	return (
		<Container id="typing__test__speed">
			<Typography variant='h3' color='primary'>
				Typing Test Speed
			</Typography>
			<Typography variant='h1' color='primary'>
				{duration}
			</Typography>
			<main style={{ height: 0 }}>
				<div className='typing__textArea'>
					<InputTextField
						unselectable='on'
						onFocus={handleFocus}
						onBlur={handleBlur}
						onInput={handleInput}
						ref={textAreaRef}
					/>
				</div>
				<div className='typing__words'>{words.length > 0 && words}</div>
			</main>
			{showCard && (
				<CardInfo
					{...cardTypingTestInfo}
					setDuration={setDuration}
					setShowCard={setShowCard}
					textAreaRef={textAreaRef}
				/>
			)}
		</Container>
	);
};

const Container = styled.section`
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
	position: relative;
	width: 100%;
	flex-wrap: wrap;
	padding: 1em 2em;
	font-size: ${LettersFontSize};
	.typing__words {
		position: relative;
		top: -400px;
		padding: 1em;
		z-index: 0;
		background-color:#f3ededc4;
		box-shadow: 1px 1px 9px 0px ${Colors.cyan};
		user-select: none; // for not selecting the text and copying it into the textArea
		span {
			font-weight: bold;
			padding: 0.9px; // 'letter spacing'
		}
	}
	h3 {
		width: fit-content;
		padding-bottom: 2px;
		border-bottom: 5px solid ${Colors['cyan']};
		position: relative;
		color: ${Colors['cyan']};
		font-size: clamp(1em, 5vw, 3em);
		font-weight: bold;
		margin-bottom: 40px;
		text-transform: capitalize;
		letter-spacing: 1px;
		word-spacing: 3px;
	}
	.typing__textArea {
		width: 100%;
	}
`;
const InputTextField = styled.textarea`
	width: 100%;
	height: 400px;
	font-size: 1.3em;
	position: relative;
	padding: 1em;
	z-index: 2;
	border: none;
	color: transparent;
	background: transparent;
	resize: none;
	user-select: none;
	&:focus {
		outline: none;
	}
	&::selection {
		background: transparent;
	}
`;

export default TypingTest;

// musique, quote
