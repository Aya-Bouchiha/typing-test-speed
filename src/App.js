import Home from './Pages/Home';
import { Theme } from './Styles/MaterialUi/Theme';
import { ThemeProvider } from '@material-ui/core/styles';
const App = () => {
	return (
		<ThemeProvider theme={Theme}>
			<div className='app'>
				<Home />
			</div>

		</ThemeProvider>
	);
};

export default App;
