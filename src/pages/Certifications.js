import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Python Certification',
      description: 'Completed Python course on Coursera. Learned Python, Pandas, NumPy, and more.',
      image: 'python.jpg', // Replace with actual image path
      link: 'https://coursera.org/verify/QKMHUU4NCLHR', // Replace with actual link
    },
    {
      id: 2,
      title: 'Generative AI Certification',
      description: 'Completed Generative AI: Introduction and Applications by IBM.',
      image: 'gen.jpg', // Replace with actual image path
      link: 'https://coursera.org/verify/3ESXXEPFSM9D', // Replace with actual link
    },
    {
      id: 3,
      title: 'Gen-AI Prompt Engineering',
      description: 'Completed Generative AI Prompt Engineering: Introduction and advance prompt engineering by IBM.',
      image: 'prompt.jpg', // Replace with actual image path
      link: 'https://coursera.org/verify/RK959CCZCKGY', // Replace with actual link
    },
    {
        id: 4,
        title: 'Web Development Certification',
        description: 'Learned HTML, CSS, JavaScript through a comprehensive web development course.',
        image: 'web.jpg', // Replace with actual image path
        link: 'https://coursera.org/verify/2SVR3PLRHM59', // Replace with actual link
      },
    // Add more certifications here as needed
  ];

  return (
    <div className="certifications-container">
      <h1>My Certifications</h1>
      <div className="certifications-grid">
        {certifications.map((cert) => (
          <div key={cert.id} className="cert-card">
            {/* <img src={cert.image} alt={cert.title} className="cert-image" /> */}
            <h2>{cert.title}</h2>
            <p>{cert.description}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
