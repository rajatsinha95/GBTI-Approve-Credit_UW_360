import React from 'react';
import { PolicyCheckItem } from '../types';
import { CheckCircle2, XCircle, Home, Briefcase, User, Wallet, Clock, FileText, ShieldCheck, HelpCircle } from 'lucide-react';

interface RightPanelProps {
  checks: PolicyCheckItem[];
}

const getIcon = (type: string) => {
    switch (type) {
        case 'home': return <Home size={12} className="text-emerald-600" />;
        case 'briefcase': return <Briefcase size={12} className="text-blue-600" />;
        case 'user': return <User size={12} className="text-indigo-600" />;
        case 'wallet': return <Wallet size={12} className="text-amber-600" />;
        case 'clock': return <Clock size={12} className="text-sky-600" />;
        case 'file': return <FileText size={12} className="text-slate-600" />;
        default: return <FileText size={12} className="text-slate-600" />;
    }
};

const RightPanel: React.FC<RightPanelProps> = ({ checks }) => {
  const passedCount = checks.filter(c => c.status === 'pass').length;
  const totalCount = checks.length;

  return (
    <div className="bg-white rounded-md border border-slate-300 shadow-xs overflow-hidden flex flex-col h-full">
      {/* Header */}
      <div className="px-4 py-2.5 bg-slate-100/80 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 rounded-[4px] bg-[#0052CC] text-white font-bold text-[11px] flex items-center justify-center shadow-2xs">
            7
          </div>
          <div className="flex items-center gap-1.5">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">Policy Verification</h3>
            <HelpCircle size={13} className="text-slate-400 hover:text-slate-600 cursor-pointer" />
          </div>
        </div>
        
        <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-full text-[10px] font-bold">
          <CheckCircle2 size={11} className="text-emerald-600" />
          <span>{passedCount} / {totalCount} Passed</span>
        </div>
      </div>

      <div className="p-3 flex-1 overflow-y-auto custom-scrollbar">
        <div className="space-y-1.5">
            {checks.map((check) => (
                <div key={check.id} className="flex items-center justify-between p-2 bg-slate-50/70 rounded-lg border border-slate-200/70">
                    <div className="flex items-center gap-2 min-w-0">
                        <div className="p-1 bg-white rounded-md shadow-2xs border border-slate-200 shrink-0">
                            {getIcon(check.iconType)}
                        </div>
                        <div className="flex flex-col min-w-0">
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tight leading-none mb-0.5 truncate">{check.label}</span>
                            <span className="text-xs font-semibold text-slate-800 leading-none truncate">{check.value}</span>
                        </div>
                    </div>
                    <div className="shrink-0 ml-2">
                        {check.status === 'pass' ? (
                            <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center">
                                <CheckCircle2 className="text-emerald-600" size={11} />
                            </div>
                        ) : (
                            <div className="w-4 h-4 rounded-full bg-rose-100 flex items-center justify-center">
                                <XCircle className="text-rose-600" size={11} />
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
