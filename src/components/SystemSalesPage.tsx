import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Zap, ArrowRight, ShieldCheck, TrendingUp, Users, FileText, ClipboardCheck } from 'lucide-react';
import { SystemProduct } from '../constants/systems';

interface SystemSalesPageProps {
  system: SystemProduct;
  setPage: (page: string) => void;
}

export const SystemSalesPage = ({ system, setPage }: SystemSalesPageProps) => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Navigation / Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button 
          onClick={() => setPage('agent-library')}
          className="flex items-center gap-2 text-slate-500 hover:text-brand-primary transition-colors font-bold text-sm uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" />
          The Operator’s Kit
        </button>
      </div>

      {/* Section 1: Above the Fold */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-24">
        <div className="max-w-3xl">
          <span className="label-caps text-brand-primary mb-4 block">
            Operational System — {system.number}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            {system.name}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            {system.painSentence}
          </p>
          
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-bold mb-12 border border-emerald-100 dark:border-emerald-900/30">
            <CheckCircle2 className="w-5 h-5" />
            Target Outcome: {system.targetOutcome}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button 
              onClick={() => setPage('triage')}
              className="btn-primary px-10 py-5 text-lg"
            >
              Find My Margin Leak
            </button>
            <p className="text-xs text-slate-500 dark:text-slate-500 max-w-[240px]">
              Most operators start with the 72-Hour Triage to confirm fit before installing a system.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: The Problem */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="label-caps mb-4 block">The Problem</span>
            <h2 className="text-4xl font-bold mb-6">{system.problemHeadline}</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {system.problemBody}
            </p>
          </div>
          <div className="card bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/20 p-8">
            <TrendingUp className="w-12 h-12 text-red-500 mb-6" />
            <h3 className="text-xl font-bold text-red-900 dark:text-red-400 mb-2">The Cost of Inaction</h3>
            <p className="text-red-800/70 dark:text-red-300/70">
              Every day this system isn't installed, your agency is losing margin to manual rework, routing errors, and approval drag.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: How it Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <span className="label-caps mb-4 block">The System</span>
          <h2 className="text-4xl font-bold mb-16">How it works</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {system.steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-black text-slate-100 dark:text-slate-900 absolute -top-8 -left-4 -z-10">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-brand-primary text-slate-900 text-xs flex items-center justify-center font-bold">
                    {i + 1}
                  </span>
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: What's Included */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          <div>
            <span className="label-caps text-slate-500 mb-4 block">What's Included</span>
            <h2 className="text-4xl font-bold mb-8">Everything needed for a production-ready install.</h2>
            <p className="text-slate-400 text-lg mb-8">
              We don't just hand you a tool. We install a validated operational loop directly into your agency stack.
            </p>
            <div className="flex items-center gap-4 p-6 bg-slate-800 rounded-2xl border border-slate-700">
              <ShieldCheck className="w-10 h-10 text-brand-primary" />
              <div>
                <h4 className="font-bold">10-Day Installation</h4>
                <p className="text-sm text-slate-400">Tested, trained, and handed off to your team.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {system.deliverables.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <span className="text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Target Outcomes */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <span className="label-caps mb-4 block">Target Outcomes</span>
          <h2 className="text-4xl font-bold mb-16">Measurable impact on your operations.</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {system.outcomes.map((outcome, i) => (
              <div key={i} className="card text-center py-12">
                <div className="text-4xl font-bold text-brand-primary mb-2">{outcome.metric}</div>
                <p className="text-slate-600 dark:text-slate-400 font-medium">{outcome.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Right for you if */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-24">
        <div className="max-w-3xl mx-auto px-4">
          <span className="label-caps mb-4 block text-center">This is right for you if</span>
          <h2 className="text-4xl font-bold mb-12 text-center">You are ready to stop being the bottleneck.</h2>
          
          <div className="space-y-4">
            {system.rightForYou.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0 mt-1">
                  <Zap className="w-3 h-3" />
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: How to get started */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="label-caps mb-4 block">How to get started</span>
          <h2 className="text-4xl font-bold mb-8">The 72-Hour Operations Triage</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
            Every system installation begins with the 72-Hour Operations Triage. The triage confirms which system fits your specific bottleneck and scopes the install before any build work begins.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card text-left p-8">
              <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center font-bold mb-6">1</div>
              <h3 className="text-xl font-bold mb-2">Buy the Triage ($997)</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">We map your bottleneck and confirm system fit.</p>
            </div>
            <div className="card text-left p-8">
              <div className="w-10 h-10 bg-brand-primary text-slate-900 rounded-full flex items-center justify-center font-bold mb-6">2</div>
              <h3 className="text-xl font-bold mb-2">System Installation</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">We install your system in 10 days. Tested, trained, and handed off.</p>
            </div>
          </div>

          <button 
            onClick={() => setPage('triage')}
            className="btn-primary px-12 py-5 text-xl mb-4"
          >
            Find My Margin Leak
          </button>
          <p className="text-sm text-slate-500">
            Triage: $997 flat. System install: $2,000–$5,000 base + performance bonus.
          </p>
        </div>
      </section>

      {/* Section 8: Bottom CTA Strip */}
      <section className="bg-brand-primary py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">Ready to stop losing margin here?</h2>
            <p className="text-slate-800 font-medium">The triage confirms the fit. The install delivers the fix. No call required.</p>
          </div>
          <button 
            onClick={() => setPage('triage')}
            className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-colors shadow-xl"
          >
            Find My Margin Leak
          </button>
        </div>
      </section>
    </div>
  );
};
