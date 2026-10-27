import React from 'react';
import { CustomerProfile, DecisionRecommendation } from '../types';
import { 
  ChevronRight, 
  RefreshCw, 
  CheckCircle2, 
  Sparkles, 
  FileCheck
} from 'lucide-react';

interface HeaderProps {
  customer: CustomerProfile;
  approvedAmount?: string;
  recommendation?: DecisionRecommendation;
  onStartAnalysis?: () => void;
  isAnalysisStarted?: boolean;
  isAnalysisComplete?: boolean;
  activeSection?: string;
  onSelectSection?: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  customer, 
  approvedAmount, 
  recommendation, 
  onStartAnalysis, 
  isAnalysisStarted, 
  isAnalysisComplete 
}) => {
  return (
    <header className="w-full font-sans bg-[#FAFBFD] border-b border-[#CBD5E1] shadow-2xs">
      {/* Underwriting Outcome (Directly at the Top of Screen) */}
      <div className="w-full px-4 lg:px-6 py-2">
        <div className="max-w-[1720px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#0B5C9E] bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-[2px] shrink-0">
              Underwriting Outcome
            </span>
            <p className="text-xs text-slate-800 font-medium truncate">
              {isAnalysisComplete 
                ? "Straight-Through Approval Achieved. Customer Approved for Requested Facility of G$ 43,200,000 (TDSR: 18.39%, Bureau: 762). Approval Decision Completed with zero policy exceptions."
                : isAnalysisStarted 
                ? "Multi-agent evaluation completed: Zero policy deviations detected. Straight-Through Approval confirmed."
                : "Application Approved: Customer Approved for Requested Facility of G$ 43,200,000. Eligible and Approved with zero counter-offer required."}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 ml-auto md:ml-0">
            <div className="hidden lg:flex items-center gap-1.5 text-xs">
              <span className="text-[10px] font-bold text-slate-500 uppercase">Sanction Pricing:</span>
              <span className="font-mono font-bold text-slate-900 bg-white px-2 py-0.5 rounded-[2px] border border-slate-300">
                8.75% p.a.
              </span>
            </div>

            {/* Re-verify Policy */}
            <button 
              id="header-run-ai-btn"
              onClick={onStartAnalysis}
              disabled={isAnalysisStarted && !isAnalysisComplete}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-[2px] font-bold text-xs transition-colors border ${
                isAnalysisComplete 
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300 cursor-default' 
                  : isAnalysisStarted 
                  ? 'bg-slate-100 text-slate-400 border-slate-300 cursor-not-allowed'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300 active:scale-98 cursor-pointer'
              }`}
            >
              {isAnalysisComplete ? (
                <><CheckCircle2 size={13} className="text-emerald-600" /> Decision Synced</>
              ) : isAnalysisStarted ? (
                <><RefreshCw size={13} className="animate-spin text-slate-500" /> Verifying...</>
              ) : (
                <><Sparkles size={13} className="text-amber-500" /> Re-verify Policy</>
              )}
            </button>

            {/* Generate Sanction Letter (Newgen Orange) */}
            <button 
              id="header-submit-next-btn"
              className="flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold text-white bg-[#F26522] hover:bg-[#d85213] rounded-[2px] shadow-2xs transition-colors active:scale-98 whitespace-nowrap cursor-pointer"
            >
              <FileCheck size={13} />
              <span>Generate Sanction Letter</span>
              <ChevronRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
