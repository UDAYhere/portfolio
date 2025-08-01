'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactSection = () => {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'system', content: 'Welcome to the contact terminal! 👋', timestamp: new Date() },
    { type: 'system', content: 'Type your message below and press Enter to send.', timestamp: new Date() },
    { type: 'system', content: 'Or use the social links to connect directly.', timestamp: new Date() }
  ]);
  const [cursorVisible, setCursorVisible] = useState(true);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to history
    setTerminalHistory(prev => [...prev, {
      type: 'user',
      content: message,
      timestamp: new Date()
    }]);

    // Simulate system response
    setIsTyping(true);
    setTimeout(() => {
      setTerminalHistory(prev => [...prev, {
        type: 'system',
        content: 'Message received! I\'ll get back to you soon. 🚀',
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1500);

    setMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: '#',
      color: '#0077B5',
      description: 'Connect professionally'
    },
    {
      name: 'GitHub',
      icon: '🐙',
      url: '#',
      color: '#333',
      description: 'View my code'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:hello@example.com',
      color: '#EA4335',
      description: 'Send direct email'
    }
  ];

  return (
    <section 
      id="contact" 
      className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-500/5 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? Drop me a message or connect directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Terminal Interface */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-purple-500/20 shadow-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-6 py-4 border-b border-purple-500/20">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-sm text-gray-300 font-mono">contact@portfolio:~$</span>
                  </div>
                </div>
              </div>

              {/* Terminal Content */}
              <div 
                ref={terminalRef}
                className="h-96 overflow-y-auto p-6 font-mono text-sm"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
              >
                {terminalHistory.map((entry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`mb-3 ${
                      entry.type === 'user' ? 'text-green-400' : 'text-blue-400'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-purple-400">
                        {entry.type === 'user' ? '>' : '$'}
                      </span>
                      <span className="flex-1">{entry.content}</span>
                    </div>
                    <div className="text-xs text-gray-500 ml-4 mt-1">
                      {entry.timestamp.toLocaleTimeString()}
                    </div>
                  </motion.div>
                ))}
                
                {/* Typing indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-blue-400 mb-3"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400">$</span>
                      <span>Typing</span>
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce" />
                        <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-150" />
                        <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-300" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Input line */}
                <div className="flex items-center gap-2 text-green-400">
                  <span className="text-purple-400">{'>'}</span>
                  <form onSubmit={handleSubmit} className="flex-1 flex items-center">
                    <input
                      ref={inputRef}
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message here..."
                      className="flex-1 bg-transparent text-green-400 placeholder-gray-500 outline-none border-none"
                      disabled={isTyping}
                    />
                    <span className={`w-2 h-5 bg-green-400 ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150`} />
                  </form>
                </div>
              </div>

              {/* Terminal Footer */}
              <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 px-6 py-3 border-t border-purple-500/20">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>Press Enter to send</span>
                  <span>Ctrl+C to clear</span>
                </div>
              </div>
            </div>

            {/* Send Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => inputRef.current?.focus()}
              className="mt-6 w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Send Message →
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Connect Directly
                </h3>
                <p className="text-gray-300 mb-8">
                  Prefer to reach out through social platforms? Here are my main channels:
                </p>
              </div>

              {/* Social Links Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {/* Background glow */}
                    <div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ backgroundColor: social.color }}
                    />
                    
                    <div className="relative z-10 text-center">
                      <div className="text-4xl mb-3">{social.icon}</div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {social.name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {social.description}
                      </p>
                    </div>

                    {/* Hover effect */}
                    <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-current opacity-0 group-hover:opacity-20 transition-all duration-300" />
                  </motion.a>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/20"
              >
                <h4 className="text-lg font-semibold text-white mb-3">
                  Quick Response
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  I typically respond within 24 hours. For urgent projects, feel free to reach out through multiple channels.
                </p>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-purple-400">📍</span>
                  <span>Available for remote work worldwide</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-purple-400">⏰</span>
                  <span>Response time: Within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-purple-400">💼</span>
                  <span>Open to freelance and full-time opportunities</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to start building?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you have a project in mind or just want to chat about technology, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => inputRef.current?.focus()}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start a Conversation →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                View Resume →
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection; 