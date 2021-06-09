import styled from 'styled-components';
import Logo from '../../../Static/Img/Logo.png';
const Navbar = () => {
	return (
		<Header>
			<nav>
				<div className='header__logo'>
					<h2>KeyTest</h2>
				</div>
				<ul className='header__links'>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href='#typing__test__speed'>Typing Speed</a>
					</li>
				</ul>
			</nav>
		</Header>
	);
};

export default Navbar;

const Header = styled.header`
	height: 55px;
	width: 100%;
	nav {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		> ul {
			display: flex;
			flex-direction: row;
			width: 400px;
			justify-content: space-around;
			max-width: 60%;
			a {
				color: white;
				font-weight: bold;
				transition: border 0.2s cubic-bezier(0.79, 0.85, 0.58, 1);
                padding-bottom: 2px;
				&:hover {
					border-bottom: 3px solid white;
				}
			}
		}
	}
`;
