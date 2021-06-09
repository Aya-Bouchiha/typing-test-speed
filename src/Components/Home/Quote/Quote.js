import { QuotesArray } from '../../../Data/Quote/QuotesArray.js';
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-material-ui-carousel';
import styled from 'styled-components';

const Quote = () => {
	return (
		<StyledCarousel>
			{QuotesArray.map((item, index) => (
				<Item key={index} {...item} />
			))}
		</StyledCarousel>
	);
};
export default Quote;

const Item = ({ text, author }) => {
	return (
		<BlockQuote>
			<q>{text}</q>
			<Typography variant='subtitle2' color='primary'>
				{author}
			</Typography>
		</BlockQuote>
	);
};

const BlockQuote = styled.blockquote`
	max-width: 600px;
	display: grid;
	place-items: center;
	margin: 0 auto;
	padding: 1em 2em;
	q {
		font-size: 1.5em;
		font-weight: bold;
		letter-spacing: 2px;
	}
`;

const StyledCarousel = styled(Carousel)`
	height: 250px;
	margin-top: 36px;
	text-align: center;
`;
