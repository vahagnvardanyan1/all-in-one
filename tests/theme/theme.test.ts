import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@/providers/ThemeProvider/ThemeProvider';
import { Header } from '@/components/Header/Header';
import { ProfileHeader } from '@/components/AIProfile/ProfileHeader/ProfileHeader';
import { useThemeStore } from '@/stores/themeStore';

// Utility function to render components with the ThemeProvider
const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

// Test suite for theme switching functionality
describe('Dark Mode Feature', () => {
  it('should toggle theme mode when switch is toggled', () => {
    const { container } = renderWithTheme(<Header />);

    const themeSwitch = screen.getByRole('switch', { name: /toggle theme/i });
    const initialTheme = container.getAttribute('data-color-scheme');

    expect(themeSwitch).toBeInTheDocument();
    expect(initialTheme).toBe('light');

    themeSwitch.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    const toggledTheme = container.getAttribute('data-color-scheme');
    expect(toggledTheme).toBe('dark');
  });

  it('should apply correct styles for dark mode', () => {
    renderWithTheme(<ProfileHeader personality={{ name: 'Test', avatar: '', category: 'Cat', rating: 4.0, reviewCount: 2000, shortDescription: '', price: 9.99 }} />);

    const box = screen.getByRole('region', { hidden: true });
    expect(box).toHaveStyle({ backgroundColor: '#0a0a1a' });
  });

  it('should ensure all components are compatible with dark mode', () => {
    renderWithTheme(<Header />);

    const sidebarToggle = screen.getByRole('button', { name: /toggle sidebar/i });
    expect(sidebarToggle).toBeVisible();
    expect(sidebarToggle).toHaveStyle({ color: '#f1f5f9' }); // Text should be light in dark mode
  });
});