import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  BarChart3, 
  BookOpen, 
  Layers, 
  TrendingUp, 
  CheckCircle2, 
  ChevronRight, 
  ExternalLink, 
  Zap, 
  Clock, 
  AlertCircle,
  TrendingDown,
  Mail,
  User,
  LogOut
} from 'lucide-react';
import { DecisionInsight } from '../services/aiClient';

interface DashboardProps {
  user: { name: string; email: string };
  diagnosticResult?: DecisionInsight;
  onLogout: () => void;
  setPage: (p: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ user, diagnosticResult, onLogout, setPage }) => {
  // Mock diagnostic result if none provided
  const [result, setResult] = useState<DecisionInsight | null>(diagnosticResult || null);

  useEffect(() => {
    if (!diagnosticResult) {
      // Simulate fetching user data
      const mockResult: DecisionInsight = {
        classification: 'Yellow',
        score: 65,
        frictionAreas: [
          'Founder dependency on trivial approvals',
          'Lack of documented decision boundaries'
        ],
        insight: {
          categoryPercentage: '65% Operational, 25% Strategic, 10% Trivial',
          repeatedTypes: ['Expense Approvals', 'Content Review'],
          frictionPatterns: 'Moderate friction in daily operations. Some delegation is working but lacks structure.'
        },
        installableRule: 'Expenses under $250 are auto-approved if within monthly budget.',
        timeReclaimed: '3-5 hours/week'
      };
      setResult(mockResult);
    }
  }, [diagnosticResult]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-2">Welcome back, {user.name.split(' ')[0]}</h1>
          <p className="text-slate-600 dark:text-slate-400">Your AI Agency Dashboard • {user.email}</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => setPage('diagnostic')}
            className="btn-primary flex items-center gap-2 px-6 py-3"
          >
            <Zap className="w-5 h-5" />
            New Diagnostic
          </button>
          <button 
            onClick={onLogout}
            className="btn-outline flex items-center gap-2 px-6 py-3"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Diagnostic Summary */}
        <div className="lg:col-span-2 space-y-8">
          <div className="card">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-brand-primary" />
                <h2 className="text-2xl font-bold">Diagnostic Summary</h2>
              </div>
              {result && (
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                  result.classification === 'Red' ? 'bg-red-50 text-red-600' : 
                  result.classification === 'Yellow' ? 'bg-yellow-50 text-yellow-600' : 'bg-emerald-50 text-emerald-600'
                }`}>
                  {result.classification} Alert
                </div>
              )}
            </div>

            {result ? (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <span className="label-caps block mb-1">Permission Drag Score</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold">{result.score}</span>
                      <span className="text-slate-400">/ 100</span>
                    </div>
                  </div>
                  <div>
                    <span className="label-caps block mb-3">Key Friction Areas</span>
                    <div className="space-y-2">
                      {result.frictionAreas.map((area, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <AlertCircle className="w-4 h-4 text-red-400" />
                          {area}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="p-4 bg-slate-200 dark:bg-slate-800 rounded-xl border border-slate-300 dark:border-slate-700">
                    <span className="label-caps block mb-1">Time Reclaimed Potential</span>
                    <span className="text-2xl font-bold text-brand-primary">{result.timeReclaimed}</span>
                  </div>
                  <div>
                    <span className="label-caps block mb-2">Pattern Insight</span>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{result.insight.frictionPatterns}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-500">No diagnostic data found. Run a diagnostic to see your results here.</p>
              </div>
            )}
          </div>

          {/* Recommended Resources */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card group cursor-pointer" onClick={() => setPage('teach')}>
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-bold">Recommended Teach</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">Based on your score, we recommend the 'Permission Drag' playbook.</p>
              <div className="flex items-center text-brand-primary font-bold text-sm group-hover:gap-2 transition-all">
                Access Playbook <ChevronRight className="w-4 h-4" />
              </div>
            </div>
            <div className="card group cursor-pointer" onClick={() => setPage('tool')}>
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-6 h-6 text-brand-primary" />
                <h3 className="text-xl font-bold">Recommended Tools</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">Install the 'Decision Infrastructure Kit' to reclaim {result?.timeReclaimed || 'hours'}.</p>
              <div className="flex items-center text-brand-primary font-bold text-sm group-hover:gap-2 transition-all">
                View Kit <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar / Next Steps */}
        <div className="space-y-8">
          <div className="card bg-slate-900 text-white border-none">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-brand-primary" />
              <h3 className="text-xl font-bold">Next Structural Move</h3>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 mb-8">
              <p className="text-brand-primary font-bold mb-2">Implement V1 Decision Log</p>
              <p className="text-xs text-slate-400">Reduce founder dependency by 40% in the first 30 days.</p>
            </div>
            <button 
              onClick={() => setPage('triage')}
              className="btn-primary w-full py-3"
            >
              Book Triage Session
            </button>
          </div>

          <div className="card">
            <h3 className="text-lg font-bold mb-4">Your Account</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                  <User className="w-5 h-5 text-slate-500" />
                </div>
                <div>
                  <p className="text-sm font-bold">{user.name}</p>
                  <p className="text-xs text-slate-500">{user.email}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <button className="text-sm text-slate-500 hover:text-brand-primary flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Update Email Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
