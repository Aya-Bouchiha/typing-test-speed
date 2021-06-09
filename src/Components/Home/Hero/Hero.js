import Navbar from '../Navbar/Navbar.js';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Background from '../../../Static/Img/Background.jpg';
import { Colors } from '../../../Styles/Colors';
const Hero = () => {
	return (
		<Container>
			<Navbar />
			{/* hero text */}
			<div className='hero__text'>
				<h4>Evolve Your Typing Test Speed</h4>
				<p>
					and easily determine your current
					<strong> typing test speed </strong> in minute.
				</p>
				<div>
					<a href='#typing__test__speed'>
						<Button
							startIcon={<ExpandMore />}
							variant='contained'
							color='primary'>
							Test Now!
						</Button>
					</a>
				</div>
			</div>
			<a href='https://www.freepik.com/photos/business'>
				Background: Business photo created by pressfoto -
				www.freepik.com
			</a>
		</Container>
	);
};

export default Hero;

const Container = styled.div`
	background-image: url(${Background});
	height: 100vh;
	background-size: cover;
	background-color: #2f3030e0;
	background-position: 0;
	background-blend-mode: overlay;
	padding: 1em 2em;
	color: white;
	.hero__text {
		height: calc(100vh - 55px - 2em);
		display: flex;
		justify-content: center;
		flex-direction: column;
		max-width: 550px;
		margin: 0 auto;
		h4 {
			font-size: clamp(1em, 5vw, 3em);
			font-weight: bold;
			margin-bottom: 0.4em;
		}
		p {
			margin-bottom: 1.4em;
			strong {
				color: ${Colors['cyan']};
			}
		}
	}
	> a:last-child {
		color: #ffffff17;
	    position: relative;
	    bottom: 7px;
	}
`;
