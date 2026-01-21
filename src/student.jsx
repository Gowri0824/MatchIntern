import { useState, useEffect } from 'react';
import { JOB_ROLES, MOCK_INTERNSHIPS } from './data/mockData';
import Chatbot from './Chatbot';
import { triggerConfetti } from './utils/confetti';
import './Student.css';

export default function Student() {
    const [isLoading, setIsLoading] = useState(true); // Skeleton State
    const [selectedRole, setSelectedRole] = useState(null);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [applyingJob, setApplyingJob] = useState(null);
    const [applicationStep, setApplicationStep] = useState('none');

    // Simulate Initial Load
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1500);
    }, []);

    const toggleSkill = (skill) => {
        setSelectedSkills(prev =>
            prev.includes(skill)
                ? prev.filter(s => s !== skill)
                : [...prev, skill]
        );
    };

    const calculateMatch = () => {
        if (!selectedRole) return 0;
        const required = selectedRole.requiredSkills;
        const matchCount = required.filter(skill => selectedSkills.includes(skill)).length;
        return Math.round((matchCount / required.length) * 100);
    };

    const matchScore = calculateMatch();
    const isStrongMatch = matchScore >= 75;
    const isPotentialMatch = matchScore >= 50 && matchScore < 75;
    const isEligible = matchScore >= 50;

    const reset = () => {
        setSelectedRole(null);
        setSelectedSkills([]);
        setShowResults(false);
        setApplicationStep('none');
    };

    const handleApplyClick = (job) => {
        setApplyingJob(job);
        setApplicationStep('form');
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            setApplicationStep('success');
            triggerConfetti(); // 🎉 Trigger Confetti
        }, 1000);
    };

    const closeApplication = () => {
        setApplyingJob(null);
        setApplicationStep('none');
    };

    // Skeleton Component
    if (isLoading) {
        return (
            <div className="student-container">
                <div className="skeleton-header animate-pulse"></div>
                <div className="grid-cards">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="skeleton-card animate-pulse"></div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="student-container">
            <header className="dashboard-header animate-fade-in">
                <h1 className="dashboard-title">Student Dashboard</h1>
                {selectedRole && (
                    <button onClick={reset} className="btn-reset">
                        Start Over
                    </button>
                )}
            </header>

            {/* Step 1: Select Role */}
            {!selectedRole && (
                <section className="animate-fade-in">
                    <h2 className="section-title">Choose your Career Path</h2>
                    <div className="grid-cards">
                        {JOB_ROLES.map(role => (
                            <div
                                key={role.id}
                                onClick={() => setSelectedRole(role)}
                                className="role-card glass-panel"
                            >
                                <div className="role-icon">
                                    {role.title[0]}
                                </div>
                                <h3 className="role-name">{role.title}</h3>
                                <p className="role-desc">{role.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Step 2: Skill Check */}
            {selectedRole && !showResults && (
                <section className="animate-fade-in">
                    <div className="skill-panel glass-panel">
                        <h2 className="section-title">Verify your Skills</h2>
                        <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-muted)' }}>
                            Select the skills you effectively possess for <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{selectedRole.title}</span>.
                        </p>

                        <div className="skill-grid">
                            {selectedRole.requiredSkills.map(skill => (
                                <div
                                    key={skill}
                                    className={`skill-checkbox ${selectedSkills.includes(skill) ? 'selected' : ''}`}
                                    onClick={() => toggleSkill(skill)}
                                >
                                    <div className="checkmark"></div>
                                    <span className="font-medium">{skill}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => setShowResults(true)}
                            disabled={selectedSkills.length === 0}
                            className="btn-analyze"
                        >
                            Analyze Eligibility
                        </button>
                    </div>
                </section>
            )}

            {/* Step 3: Results */}
            {showResults && (
                <section className="animate-fade-in">
                    <div className="results-panel glass-panel">
                        <div className="score-circle" style={{ background: `conic-gradient(var(--success) 0% ${matchScore}%, #f3f4f6 ${matchScore}% 100%)` }}>
                            <span>{matchScore}%</span>
                        </div>

                        <h2 className={`match-status ${isStrongMatch ? 'strong-match' : isPotentialMatch ? 'potential-match' : 'skill-gap'}`}>
                            {isStrongMatch ? "You're Match Ready!" : isPotentialMatch ? "Potential Match" : "Skill Gap Identified"}
                        </h2>

                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                            {isStrongMatch
                                ? "Your skill set aligns perfectly with industry standards."
                                : isPotentialMatch
                                    ? "You have a good foundation, but there's room to grow. Check out these opportunities."
                                    : `You need more preparation to crack ${selectedRole.title} roles.`}
                        </p>

                        {isEligible ? (
                            <div>
                                <h3 className="section-title" style={{ textAlign: 'left' }}>Recommended Internships ({MOCK_INTERNSHIPS.filter(job => job.roleId === selectedRole.id && matchScore >= job.minMatch).length})</h3>
                                <div className="jobs-grid">
                                    {MOCK_INTERNSHIPS
                                        .filter(job => job.roleId === selectedRole.id && matchScore >= job.minMatch)
                                        .map(job => (
                                            <div key={job.id} className={`job-card ${matchScore >= 75 ? 'strong' : 'potential'}`}>
                                                <div className="job-header">
                                                    <div>
                                                        <h4 className="job-title">{job.title}</h4>
                                                        <p className="company-name">{job.company}</p>
                                                    </div>
                                                    <span className={`match-badge ${matchScore >= 75 ? 'badge-strong' : 'badge-potential'}`}>
                                                        {matchScore >= 75 ? 'Strong Match' : 'Potential'}
                                                    </span>
                                                </div>

                                                <div className="job-footer">
                                                    <span>📍 {job.location}</span>
                                                    <span>💰 {job.stipend}</span>
                                                </div>
                                                <button
                                                    className="btn-apply"
                                                    style={{ marginTop: '1rem', width: '100%' }}
                                                    onClick={() => handleApplyClick(job)}
                                                >
                                                    Apply Now
                                                </button>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        ) : (
                            // Skill Gap View
                            <div className="grid gap-6 md:grid-cols-2" style={{ display: 'grid', gap: '2rem', gridTemplateColumns: '1fr 1fr', textAlign: 'left' }}>
                                <div className="missing-skills-list glass-panel">
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--danger)' }}>Missing Skills</h3>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {selectedRole.requiredSkills
                                            .filter(s => !selectedSkills.includes(s))
                                            .map(skill => (
                                                <li key={skill} className="missing-item">
                                                    <span style={{ color: 'var(--danger)' }}>✗</span> {skill}
                                                </li>
                                            ))}
                                    </ul>
                                </div>

                                <div className="glass-panel" style={{ padding: '1.5rem', background: 'white' }}>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--primary)' }}>Recommended Learning</h3>
                                    <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                                        <span style={{ display: 'block', fontWeight: 'bold', color: 'var(--text-main)' }}>Basics Mastery</span>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Get comfortable with the core skills first.</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* Application Modal */}
            {applicationStep === 'form' && applyingJob && (
                <div className="modal-overlay animate-fade-in">
                    <div className="modal-content glass-panel">
                        <h2 className="modal-title">Apply to {applyingJob.company}</h2>
                        <p className="modal-subtitle">{applyingJob.title}</p>

                        <form onSubmit={handleFormSubmit} className="application-form">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" required placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label>College/University</label>
                                <input type="text" required placeholder="Your College" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" required placeholder="email@example.com" />
                            </div>
                            <div className="form-group">
                                <label>Upload Resume (PDF)</label>
                                <input type="file" accept=".pdf" required className="file-input" />
                            </div>

                            <div className="form-actions">
                                <button type="button" onClick={closeApplication} className="btn-cancel">Cancel</button>
                                <button type="submit" className="btn-submit">Submit Application</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Success Modal / Guidance */}
            {applicationStep === 'success' && applyingJob && (
                <div className="modal-overlay animate-fade-in">
                    <div className="modal-content glass-panel success-panel">
                        <div className="success-icon">🎉</div>
                        <h2 className="modal-title">Application Sent!</h2>
                        <p className="modal-subtitle">Your resume has been sent to {applyingJob.company}.</p>

                        <div className="guidance-section">
                            <h3 className="guidance-title">What's Next?</h3>
                            <ul className="guidance-steps">
                                <li>1. Company reviews your profile (2-3 days).</li>
                                <li>2. You will receive an email for the interview round.</li>
                            </ul>

                            <h3 className="guidance-title">Interview Prep Tips for {applyingJob.title}</h3>
                            <ul className="tips-list">
                                {selectedRole.interviewTips?.map((tip, i) => (
                                    <li key={i}>💡 {tip}</li>
                                ))}
                            </ul>
                        </div>

                        <button onClick={closeApplication} className="btn-done">Back to Dashboard</button>
                    </div>
                </div>
            )}

            <Chatbot role={selectedRole} />
        </div>
    );
}
