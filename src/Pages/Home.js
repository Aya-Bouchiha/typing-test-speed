import styled from 'styled-components';
import Hero from '../Components/Home/Hero/Hero';
import Quote from '../Components/Home/Quote/Quote';
import TypingTest from '../Components/Home/TypingTest/TypingTest';

const Home = () => {
	return (
		<div>
			<Hero />
			<Quote />
			<TypingTest />
		</div>
	);
};

export default Home;
