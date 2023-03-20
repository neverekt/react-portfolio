import React from 'react';
import { render, screen } from '@testing-library/react';
// import Project from './assets/Project';
import App from './App';

describe('App', () => {
  it('renders the header', () => {
    render(<App />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  it('renders the home page', () => {
    render(<App />);
    const homeElement = screen.getByRole('main');
    expect(homeElement).toBeInTheDocument();
  });

  it('renders the project gallery', () => {
    render(<App />);
    const projectGalleryElement = screen.getByTestId('project-gallery');
    expect(projectGalleryElement).toBeInTheDocument();
  });

  it('renders the contact page', () => {
    render(<App />);
    const contactElement = screen.getByTestId('contact');
    expect(contactElement).toBeInTheDocument();
  });
});

// const projectData = {
//   id: 1,
//   title: 'My Project',
//   description: 'This is a test project',
//   deployedUrl: 'https://www.example.com',
//   repoUrl: 'https://github.com/example',
//   imageUrl: 'https://www.example.com/image.png',
// };

// describe('Project', () => {
//   it('renders project title', () => {
//     render(<Project data={projectData} />);
//     const titleElement = screen.getByText(/My Project/i);
//     expect(titleElement).toBeInTheDocument();
//   });

//   it('renders project description', () => {
//     render(<Project data={projectData} />);
//     const descriptionElement = screen.getByText(/This is a test project/i);
//     expect(descriptionElement).toBeInTheDocument();
//   });

//   it('renders project image', () => {
//     render(<Project data={projectData} />);
//     const imageElement = screen.getByAltText(/My Project/i);
//     expect(imageElement).toBeInTheDocument();
//   });

//   it('renders project links', () => {
//     render(<Project data={projectData} />);
//     const deployedUrlElement = screen.getByRole('link', { name: /View deployed app/i });
//     expect(deployedUrlElement).toHaveAttribute('href', 'https://www.example.com');
//     const repoUrlElement = screen.getByRole('link', { name: /View source code/i });
//     expect(repoUrlElement).toHaveAttribute('href', 'https://github.com/example');
//   });
// });

