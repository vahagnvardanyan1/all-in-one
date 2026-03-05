import { render } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { HeaderBar } from './styled';

// Test for header color
it('should have the correct background color', () => {
    const theme = createTheme({
        vars: {
            palette: {
                primary: {
                    mainChannel: '255, 0, 0',
                },
                divider: '#cccccc',
            },
        },
    });
    const { getByRole } = render(
        <ThemeProvider theme={theme}>
            <HeaderBar />
        </ThemeProvider>
    );
    const headerElement = getByRole('banner');
    expect(headerElement).toHaveStyle(`background-color: rgba(255, 0, 0 / 0.8)`);
});

// Regression test to ensure no side effects on sibling components
it('should not affect other component styles', () => {
    const theme = createTheme({
        vars: {
            palette: {
                primary: {
                    mainChannel: '0, 0, 0',
                },
                divider: '#cccccc',
            },
        },
    });
    const { getByRole } = render(
        <ThemeProvider theme={theme}>
            <HeaderBar />
        </ThemeProvider>
    );
    const headerElement = getByRole('banner');
    expect(headerElement).toHaveStyle(`background-color: rgba(0, 0, 0 / 0.8)`);
});