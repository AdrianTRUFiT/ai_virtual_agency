import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, CheckCircle2, Loader2 } from 'lucide-react';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted to aivirtualagency@gmail.com:', formData);
    setStatus('success');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Mail className="w-8 h-8" />
        </div>
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-slate-600 dark:text-slate-400">
          Ready to install a system? Have questions about our process? Send us a message and we'll get back to you within 24 hours.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card text-center py-16"
          >
            <CheckCircle2 className="w-16 h-16 text-brand-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Thank you for reaching out. We've received your message and will be in touch shortly.
            </p>
            <button 
              onClick={() => setStatus('idle')}
              className="btn-outline px-8"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="card space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="label-caps">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe"
                  className="input-field"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="label-caps">Work Email</label>
                <input 
                  required
                  type="email" 
                  placeholder="john@company.com"
                  className="input-field"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="label-caps">Company Name</label>
              <input 
                required
                type="text" 
                placeholder="Acme Agency"
                className="input-field"
                value={formData.company}
                onChange={e => setFormData({...formData, company: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="label-caps">How can we help?</label>
              <textarea 
                required
                rows={5}
                placeholder="Tell us about your current bottlenecks..."
                className="input-field resize-none"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-2"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
            <p className="text-[10px] text-center text-slate-400 uppercase tracking-widest font-bold">
              Forwarded to aivirtualagency@gmail.com
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};
