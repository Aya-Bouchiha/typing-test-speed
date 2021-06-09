import { createMuiTheme } from '@material-ui/core/styles/';
import { Colors } from '../Colors.js';
export const Theme = createMuiTheme({
	palette: {
		primary: { main: Colors['cyan'] },
		secondary: { main: Colors['lightCyan'] },
	},
});
