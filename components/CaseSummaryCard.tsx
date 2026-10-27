import React from 'react';
import { FileText, Sparkles, Loader2, CheckCircle2, AlertTriangle, UserCheck, HelpCircle } from 'lucide-react';
import { AI_CASE_SUMMARY } from '../constants';

interface CaseSummaryCardProps {
  summary?: string;
  isGenerating?: boolean;
}

const CaseSummaryCard: React.FC<CaseSummaryCardProps> = ({ summary, isGenerating }) => {
  const content = summary || AI_CASE_SUMMARY.executiveSummary;

  return (
    <div id="section-case-summarisation" className="bg-white rounded-md border border-slate-300 shadow-xs overflow-hidden flex flex-col h-full">
      {/* Header */}
      <div className="px-4 py-2.5 bg-slate-100/80 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 rounded-[4px] bg-[#0052CC] text-white font-bold text-[11px] flex items-center justify-center shadow-2xs">
            9
          </div>
          <div className="flex items-center gap-1.5">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">AI Case Summarization</h3>
            <HelpCircle size={13} className="text-slate-400 hover:text-slate-600 cursor-pointer" />
          </div>
        </div>
        
        <div className="flex items-center gap-1.5 px-2 py-0.5 bg-blue-50 text-[#0B3564] rounded-full border border-blue-200/60 font-bold text-[10px]">
          <Sparkles size={11} className="text-amber-500" />
          <span>Holistic Assessment</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 space-y-3 flex-1 overflow-y-auto custom-scrollbar">
        {isGenerating ? (
          <div className="flex flex-col items-center justify-center h-48 text-slate-400">
            <Loader2 size={24} className="text-[#0B3564] animate-spin mb-2" />
            <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">Synthesizing Comprehensive Case Narrative...</span>
          </div>
        ) : (
          <>
            {/* Key Takeaway Highlight Callout */}
            <div className="p-3 bg-emerald-50/80 rounded-xl border border-emerald-200/80">
              <span className="text-[9px] font-black text-emerald-800 uppercase tracking-wider block mb-1">
                KEY TAKEAWAY: STRAIGHT-THROUGH APPROVAL ACHIEVED
              </span>
              <p className="text-xs text-emerald-950 font-semibold leading-relaxed">
                <strong className="text-emerald-800 font-bold">Application Approved.</strong> Customer Approved for Requested Facility of <strong className="text-[#0B3564]">G$ 43,200,000</strong> (DBR: 18.39%, LTV: 50.8%). Approval Decision Completed with zero counter-offers or manual review required.
              </p>
            </div>

            {/* Narrative Paragraphs */}
            <div className="text-xs text-slate-700 leading-relaxed font-normal space-y-2 bg-slate-50/60 p-3 rounded-xl border border-slate-200/60">
              {content.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Strengths & Policy Clearances Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-200/70 space-y-1">
                <span className="text-[9px] font-bold text-emerald-800 uppercase flex items-center gap-1">
                  <CheckCircle2 size={11} className="text-emerald-600" /> Approval Strengths
                </span>
                <ul className="text-[11px] text-slate-700 space-y-1 pl-3.5 list-disc marker:text-emerald-500">
                  {AI_CASE_SUMMARY.keyStrengths.map((s, i) => (
                    <li key={i} className="font-medium">{s}</li>
                  ))}
                </ul>
              </div>

              <div className="p-2.5 rounded-lg bg-blue-50/60 border border-blue-200/70 space-y-1">
                <span className="text-[9px] font-bold text-[#0B3564] uppercase flex items-center gap-1">
                  <CheckCircle2 size={11} className="text-[#0B3564]" /> Policy Clearances
                </span>
                <ul className="text-[11px] text-slate-700 space-y-1 pl-3.5 list-disc marker:text-blue-500">
                  {AI_CASE_SUMMARY.primaryConcerns.map((c, i) => (
                    <li key={i} className="font-medium">{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="px-4 py-2 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between text-[10px] text-slate-500">
        <span className="font-medium">Multi-Source Verification Complete</span>
        <span className="font-bold text-[#0B3564]">Underwriter Authority: Confirmed</span>
      </div>
    </div>
  );
};

export default CaseSummaryCard;
