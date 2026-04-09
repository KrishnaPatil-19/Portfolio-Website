import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/use-intersection-observer';
import { useRipple } from '../hooks/use-magnetic';

export function Contact() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const createRipple = useRipple();
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    const formData = new FormData(e.currentTarget);
    const scriptURL = "https://script.google.com/macros/s/AKfycbzXxHZEAAOXb0-T8sxRZa2Xi30oE4TXRmtZPlkYC-B8Z2ej9iBf-SbCh0PQwEfDLBatlA/exec";
    
    try {
      await fetch(scriptURL, { method: 'POST', body: formData });
      setStatus('sent');
      e.currentTarget.reset();
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Error:', error);
      setStatus('idle');
    }
  };

  return (
    <section id="contact" className="py-32 relative bg-white/[0.01]">
      <div className="container mx-auto px-6 max-w-3xl">
        <div 
          ref={ref}
          className={`glass p-8 md:p-12 rounded-3xl relative overflow-hidden fade-up-enter ${isIntersecting ? 'fade-up-enter-active' : ''}`}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Talk</h2>
            <p className="text-white/60">Have a project in mind or just want to say hi? Drop a message.</p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-white/80 font-medium">Email:</span>
                <a href="mailto:krishnapatilcontact@gmail.com" className="text-primary hover:underline">krishnapatilcontact@gmail.com</a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-white/80 font-medium">Location:</span>
                <span className="text-white/60">Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-white/80 font-medium">LinkedIn:</span>
                <a href="https://www.linkedin.com/in/krishna-patil-759269249/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">linkedin.com/in/krishna-patil-759269249/</a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-white/80 font-medium">GitHub:</span>
                <a href="https://github.com/KrishnaPatil-19" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/KrishnaPatil-19</a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Name</label>
                <input 
                  type="text" 
                  name="Name"
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Email</label>
                <input 
                  type="email" 
                  name="Email"
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Message</label>
              <textarea 
                name="Message"
                required
                rows={5}
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button 
              type="submit"
              disabled={status !== 'idle'}
              onClick={createRipple}
              className="relative overflow-hidden px-8 py-4 w-full rounded-xl bg-primary text-white font-bold transition-all hover:bg-primary/90 disabled:opacity-70"
            >
              <span className="relative z-10">
                {status === 'idle' && 'Send Message'}
                {status === 'sending' && 'Sending...'}
                {status === 'sent' && 'Message Sent!'}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
