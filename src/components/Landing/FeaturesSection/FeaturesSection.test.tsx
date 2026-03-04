import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FeaturesSection } from './FeaturesSection';

describe('FeaturesSection Component', () => {
  it('should render the Generate Dadada feature card', () => {
    render(<FeaturesSection />);
    const featureTitle = screen.getByText('Generate Dadada');
    expect(featureTitle).toBeInTheDocument();

    const featureDescription = screen.getByText(
      "Experience the magic of AI-generated music with our 'Generate Dadada' feature. Create unique soundscapes effortlessly."
    );
    expect(featureDescription).toBeInTheDocument();
  });
});