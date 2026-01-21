import { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const KNOWLEDGE_BASE = {
    greetings: ["Hi there! Ready to boost your career?", "Hello! How can I help you land an internship?", "Hey! Ask me about resumes or interviews."],
    resume: [
        "For your resume, use the 'X-Y-Z' formula: 'Accomplished [X] as measured by [Y], by doing [Z]'.",
        "Keep your resume to 1 page. Recruiters scan it in 6 seconds.",
        "Highlight your projects! Since you are from a Tier-3 college, your hands-on work matters more than grades.",
        "Use a clean, ATS-friendly format. Avoid graphics or columns if possible."
    ],
    interview: [
        "Research the company values before the interview.",
        "Prepare the 'Tell me about yourself' answer. It's the first impression!",
        "Use the STAR method (Situation, Task, Action, Result) for behavioral questions.",
        "Don't forget to ask THEM questions at the end. It shows interest."
    ],
    skills: [
        "Focus on 'T-shaped' skills: Deep knowledge in one area (e.g., React) and broad knowledge in others (Git, UI/UX).",
        "Build a capstone project that solves a real problem.",
        "Contribute to Open Source to stand out."
    ],
    default: "I'm still learning! Try asking about 'Resume', 'Interview', 'Skills', or specific roles like 'Frontend'."
};

export default function Chatbot({ role }) {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi! I'm your Career Assistant. I can help with Resumes, Interview Prep, and Skill Gaps.", isBot: true }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const getBotResponse = (userInput) => {
        const lower = userInput.toLowerCase();

        // 1. Role Specifics (High Priority)
        if (role) {
            if (lower.includes('interview') && role.interviewTips) {
                return `For ${role.title}, remember: ${role.interviewTips[Math.floor(Math.random() * role.interviewTips.length)]}`;
            }
            if (lower.includes('skill') || lower.includes('learn')) {
                return `To excel as a ${role.title}, focus deeply on: ${role.requiredSkills.slice(0, 3).join(', ')}.`;
            }
        }

        // 2. General Categories
        if (lower.includes('resume') || lower.includes('cv')) return KNOWLEDGE_BASE.resume[Math.floor(Math.random() * KNOWLEDGE_BASE.resume.length)];
        if (lower.includes('interview')) return KNOWLEDGE_BASE.interview[Math.floor(Math.random() * KNOWLEDGE_BASE.interview.length)];
        if (lower.includes('skill') || lower.includes('stack')) return KNOWLEDGE_BASE.skills[Math.floor(Math.random() * KNOWLEDGE_BASE.skills.length)];
        if (lower.includes('hi') || lower.includes('hello') || lower.includes('hey')) return KNOWLEDGE_BASE.greetings[Math.floor(Math.random() * KNOWLEDGE_BASE.greetings.length)];

        if (lower.includes('thank')) return "You're welcome! Go get that dream job! 🚀";

        // 3. Fallback
        return KNOWLEDGE_BASE.default;
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userText = input;
        setMessages(prev => [...prev, { text: userText, isBot: false }]);
        setInput('');
        setIsTyping(true);

        // Simulate think time
        setTimeout(() => {
            const response = getBotResponse(userText);
            setMessages(prev => [...prev, { text: response, isBot: true }]);
            setIsTyping(false);
        }, 1000);
    };

    // Voice Input Logic
    const startListening = () => {
        if ('webkitSpeechRecognition' in window) {
            const recognition = new window.webkitSpeechRecognition();
            recognition.continuous = false;
            recognition.lang = 'en-US';

            recognition.onstart = () => {
                setIsTyping(true);
                setMessages(prev => [...prev, { text: "Listening... 🎤", isBot: true }]);
            };

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                setInput(transcript);
                // Auto send after voice
                setTimeout(() => {
                    setMessages(prev => prev.filter(m => m.text !== "Listening... 🎤"));
                    setMessages(prev => [...prev, { text: transcript, isBot: false }]);
                    setInput('');
                    setTimeout(() => {
                        const response = getBotResponse(transcript);
                        setMessages(prev => [...prev, { text: response, isBot: true }]);
                        setIsTyping(false);
                    }, 800);
                }, 500);
            };

            recognition.onerror = () => {
                setIsTyping(false);
                setMessages(prev => prev.filter(m => m.text !== "Listening... 🎤"));
                alert("Microphone access denied or error occurred.");
            };

            recognition.start();
        } else {
            alert("Voice input not supported in this browser.");
        }
    };

    // Quick Action Chips
    const sendQuickAction = (action) => {
        setInput(action);
        // triggering submit manually or just calling logic?
        // mocking user interaction:
        setMessages(prev => [...prev, { text: action, isBot: false }]);
        setIsTyping(true);
        setTimeout(() => {
            const response = getBotResponse(action);
            setMessages(prev => [...prev, { text: response, isBot: true }]);
            setIsTyping(false);
        }, 800);
    };

    return (
        <div className={`chatbot-wrapper ${isOpen ? 'open' : ''}`}>
            {!isOpen && (
                <button className="chat-fab animate-fade-in" onClick={() => setIsOpen(true)}>
                    <span style={{ fontSize: '1.5rem' }}>🤖</span>
                </button>
            )}

            {isOpen && (
                <div className="chat-window glass-panel animate-fade-in">
                    <div className="chat-header">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ width: '30px', height: '30px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>🤖</div>
                            <h3>Career Buddy</h3>
                        </div>
                        <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
                    </div>

                    <div className="chat-messages">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`message ${msg.isBot ? 'bot' : 'user'} ${msg.text === 'Listening... 🎤' ? 'typing' : ''}`}>
                                {msg.text}
                            </div>
                        ))}
                        {isTyping && messages[messages.length - 1]?.text !== "Listening... 🎤" && <div className="message bot typing">...</div>}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="chat-chips">
                        <button onClick={() => sendQuickAction("Resume Tips")}>Resume</button>
                        <button onClick={() => sendQuickAction("Interview Help")}>Interview</button>
                        <button onClick={() => sendQuickAction("Key Skills")}>Skills</button>
                    </div>

                    <form onSubmit={handleSend} className="chat-input-area">
                        <button type="button" onClick={startListening} title="Voice Input">🎤</button>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask anything..."
                        />
                        <button type="submit">Send</button>
                    </form>
                </div>
            )}
        </div>
    );
}
