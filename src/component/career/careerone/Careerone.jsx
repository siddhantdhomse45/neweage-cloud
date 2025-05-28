import React, { useState, useEffect } from "react";
import styles from "./Careerone.module.css";

const jobData = [
  {
    title: "Shopify Developer",
    position: "Shopify Developer",
    experience: "2-5 Years",
    location: "Pimple Saudagar, Pune #onsite",
    description:
      "We are looking for a skilled Shopify Developer with 2–5 years of hands-on experience in theme customization and Liquid programming.",
    responsibilities: [
      "Design and develop custom Shopify themes and templates",
      "Collaborate with the design and marketing teams to enhance user experience",
      "Integrate third-party applications and APIs into Shopify stores",
      "Maintain and upgrade existing Shopify stores for optimal performance",
      "Troubleshoot and resolve issues in a timely manner",
      "Ensure responsive design and compatibility across various devices and browsers"
    ],
    skills: [
      "Experience with Shopify and Liquid templating language",
      "Strong proficiency in HTML, CSS, and JavaScript",
      "Familiarity with version control systems (Git)",
      "Understanding of e-commerce best practices",
      "Ability to optimize performance of online stores"
    ]
  },
  {
    title: "Business Development Executive",
    position: "Business Development Executive",
    experience: "Fresher - 5 Years",
    location: "Pimple Saudagar, Pune #onsite",
    description:
      "Identify and develop new business opportunities in the IT sector.",
    responsibilities: [
      "Generate leads, conduct market research, and develop business opportunities",
      "Establish and maintain relationships with potential clients",
      "Collaborate with sales and marketing teams to achieve business goals",
      "Participate in negotiations and close sales",
      "Prepare proposals, presentations, and reports for clients"
    ],
    skills: [
      "Excellent communication and interpersonal skills",
      "Strong analytical and problem-solving abilities",
      "Knowledge of IT services and solutions",
      "Ability to work under pressure and meet targets",
      "Proficiency in Microsoft Office Suite"
    ]
  },
  {
    title: "Node JS Developer",
    position: "Node JS Developer",
    experience: "2-5 Years",
    location: "Pimple Saudagar, Pune #onsite",
    description:
      "We are seeking a skilled Node.js Developer to join our dynamic and innovative development team.",
    responsibilities: [
      "Develop backend services and RESTful APIs using Node.js",
      "Work closely with front-end developers to integrate user-facing elements",
      "Write clean, maintainable, and efficient code",
      "Ensure high performance and responsiveness of the applications",
      "Participate in code reviews and ensure best practices are followed"
    ],
    skills: [
      "Proficiency in Node.js, Express.js",
      "Experience with databases like MongoDB, MySQL, or PostgreSQL",
      "Familiarity with RESTful API design and integration",
      "Version control experience using Git",
      "Strong debugging and troubleshooting skills"
    ]
  },
  {
    title: "Python Developer",
    position: "Python Developer",
    experience: "2-5 Years",
    location: "Pimple Saudagar, Pune #onsite",
    description: "Develop and maintain high-quality Python applications.",
    responsibilities: [
      "Design and develop scalable web applications",
      "Write reusable, testable, and efficient code",
      "Develop APIs and integrate with external services",
      "Troubleshoot, test, and maintain core product software",
      "Collaborate with front-end developers and project managers"
    ],
    skills: [
      "Strong knowledge of Python and frameworks like Flask/Django",
      "Experience with MySQL, PostgreSQL, or other relational databases",
      "Familiarity with RESTful API development",
      "Ability to write clean, efficient, and well-documented code",
      "Experience with unit testing and debugging tools"
    ]
  },
  {
    title: "PHP Developer",
    position: "PHP Developer",
    experience: "1-6 Years",
    location: "Pimple Saudagar, Pune #onsite",
    description:
      "We seek a skilled and motivated PHP Developer to join our dynamic team.",
    responsibilities: [
      "Develop and maintain web applications using PHP",
      "Write clean and efficient PHP code",
      "Collaborate with cross-functional teams to define application features",
      "Troubleshoot and debug applications",
      "Integrate third-party services and APIs"
    ],
    skills: [
      "Proficiency in PHP, MySQL, and other web technologies",
      "Experience with frameworks like Laravel or CodeIgniter",
      "Understanding of HTML, CSS, JavaScript",
      "Knowledge of API integrations",
      "Familiarity with Git and version control systems"
    ]
  },
  {
    title: "MERN and MEAN Developer",
    position: "MERN and MEAN Developer",
    experience: "1-6 Years",
    location: "Pimple Saudagar, Pune #onsite",
    description:
      "We seek a skilled and motivated MERN and MEAN Developer to join our dynamic team.",
    responsibilities: [
      "Build full-stack applications using MongoDB, Express, Angular/React, and Node.js",
      "Work on front-end and back-end development and ensure seamless integration",
      "Optimize the application for maximum speed and scalability",
      "Write unit tests to ensure the application’s reliability",
      "Collaborate with cross-functional teams to deliver high-quality software"
    ],
    skills: [
      "Experience with the MERN or MEAN stack",
      "Proficiency in JavaScript, React, Angular, Node.js, and Express",
      "Familiarity with version control systems (Git)",
      "Experience with MongoDB or other NoSQL databases",
      "Strong debugging and problem-solving skills"
    ]
  },
  {
    title: "Android Developer",
    position: "Android Developer",
    experience: "1-3 Years",
    location: "Pimple Saudagar, Pune #onsite",
    description:
      "We are seeking a talented and creative Android Developer to join our dynamic team.",
    responsibilities: [
      "Design and build advanced applications for the Android platform",
      "Should have good knowledge of Kotlin",
      "Collaborate with cross-functional teams to define, design, and ship new features",
      "Work with outside data sources and APIs",
      "Unit-test code for robustness, including edge cases, usability, and general reliability",
      "Work on bug fixing and improving application performance",
      "Continuously discover, evaluate, and implement new technologies to maximize development efficiency"
    ],
    skills: [
      "Proven software development experience and Android skills development",
      "Proven working experience in Android app development",
      "Have published at least one original Android app",
      "Experience with Android SDK",
      "Experience working with remote data via REST and JSON",
      "Experience with third-party libraries and APIs",
      "Working knowledge of the general mobile landscape, architectures, trends, and emerging technologies",
      "Solid understanding of the full mobile development life cycle"
    ]
  },

  {
    title: "iOS Developer",
    position: "iOS Developer",
    experience: "2-5 Years",
    location: "Pimple Saudagar, Pune #onsite",
    description:
      "We are looking for a passionate iOS Developer to join our development team and build high-quality iOS applications.",
    responsibilities: [
      "Design and build advanced applications for the iOS platform",
      "Collaborate with cross-functional teams to define, design, and ship new features",
      "Work with outside data sources and APIs",
      "Unit-test code for robustness, including edge cases, usability, and general reliability",
      "Work on bug fixing and improving application performance"
    ],
    skills: [
      "Experience with iOS frameworks such as UIKit, CoreData, and Core Animation",
      "Proficiency in Swift and Objective-C",
      "Experience with iOS SDK",
      "Familiarity with RESTful APIs and JSON",
      "Solid understanding of the full mobile development life cycle"
    ]
  },
  // Adding Frontend Web Designer job
  {
    title: "Frontend Web Designer",
    position: "Frontend Web Designer",
    experience: "1-3 Years",
    location: "Pimple Saudagar, Pune #onsite",
    description:
      "We are seeking a creative and talented Frontend Web Designer to join our team and build visually appealing and user-friendly websites.",
    responsibilities: [
      "Design and implement visually stunning websites",
      "Collaborate with developers to create responsive web pages",
      "Ensure website design consistency across various devices",
      "Maintain and update websites as per requirements",
      "Optimize website performance for speed and responsiveness"
    ],
    skills: [
      "Strong proficiency in HTML, CSS, and JavaScript",
      "Experience with responsive design and frameworks like Bootstrap",
      "Proficiency in design tools like Adobe XD, Figma, or Sketch",
      "Familiarity with version control systems (Git)",
      "Understanding of SEO best practices for website optimization"
    ]
  }

];
const Careerone = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateCards(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
    setShowSuccessMessage(false);
  };

  const handleCloseForm = () => {
    setShowApplicationForm(false);
    setSelectedJob(null);
    setShowSuccessMessage(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      coverLetter: '',
      resume: null
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    // For demo purposes, we'll just show the success message
    console.log('Form submitted:', formData);
    
    // Show success message
    setShowSuccessMessage(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
      handleCloseForm();
    }, 3000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>CURRENT OPENINGS</div>
      <div className={styles.grid}>
        {jobData.map((job, index) => (
          <div 
            key={index} 
            className={`${styles.jobCard} ${animateCards ? styles.cardVisible : ''}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className={styles.cardTitle}>{job.title}</div>
            <div className={styles.description}>{job.description}</div>
            <div><span className={styles.label}>Job Position:</span> {job.position}</div>
            <div><span className={styles.label}>Experience:</span> {job.experience}</div>
            <div><span className={styles.label}>Location:</span> {job.location}</div>
            <div className={styles.buttonGroup}>
              <button 
                className={styles.button} 
                onClick={() => handleApplyClick(job)}
                aria-label={`Apply for ${job.title}`}
              >
                Apply Now
              </button>
              <button 
                className={styles.button} 
                onClick={() => { setSelectedJob(job); setShowApplicationForm(false); }}
                aria-label={`View details for ${job.title}`}
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedJob && showApplicationForm && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span 
              className={styles.close} 
              onClick={handleCloseForm}
              aria-label="Close application form"
            >
              &times;
            </span>
            <h2>Application Form for {selectedJob.title}</h2>
            {showSuccessMessage ? (
              <div className={styles.successMessage}>
                <svg className={styles.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                  <circle className={styles.checkmarkCircle} cx="26" cy="26" r="25" fill="none"/>
                  <path className={styles.checkmarkCheck} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
                <h3>Thank You!</h3>
                <p>Your application has been submitted successfully.</p>
                <p>We'll review your information and get back to you soon.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label>Name</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Enter your name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Enter your email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Phone</label>
                  <input 
                    type="text" 
                    name="phone"
                    placeholder="Enter your phone number" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Cover Letter</label>
                  <textarea 
                    name="coverLetter"
                    placeholder="Write your cover letter here" 
                    rows="4" 
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <div className={styles.formGroup}>
                  <label>Resume</label>
                  <input 
                    type="file" 
                    accept=".pdf,.doc,.docx" 
                    onChange={handleFileChange}
                    required 
                  />
                </div>
                <div className={styles.formActions}>
                  <button type="submit" className={styles.submitButton}>
                    Submit Application
                  </button>
                  <button 
                    type="button" 
                    className={styles.cancelButton}
                    onClick={handleCloseForm}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
      
      {selectedJob && !showApplicationForm && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span 
              className={styles.close} 
              onClick={() => setSelectedJob(null)}
              aria-label="Close job details"
            >
              &times;
            </span>
            <h2>Job Description for {selectedJob.title}</h2>
            <p><strong>Job Position:</strong> {selectedJob.position}</p>
            <p><strong>Experience:</strong> {selectedJob.experience}</p>
            <p><strong>Location:</strong> {selectedJob.location}</p>
            <p>{selectedJob.description}</p>

            <h3>Responsibilities:</h3>
            <ol className={styles.responsibilities}>
              {selectedJob.responsibilities.map((res, idx) => (
                <li key={idx}>{res}</li>
              ))}
            </ol>

            <h3>Required Skills:</h3>
            <ol className={styles.skills}>
              {selectedJob.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ol>
            <div className={styles.modalActions}>
              <button 
                className={styles.applyButton} 
                onClick={() => handleApplyClick(selectedJob)}
              >
                Apply for this Job
              </button>
              <button 
                className={styles.closeDetailsButton}
                onClick={() => setSelectedJob(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careerone;
