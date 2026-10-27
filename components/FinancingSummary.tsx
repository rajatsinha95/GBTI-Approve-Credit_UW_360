import React from 'react';
import { FileText, ArrowRight, CheckCircle2, HelpCircle } from 'lucide-react';
import { FinancingSummaryData, CounterOffer } from '../types';

interface FinancingSummaryProps {
  data: FinancingSummaryData;
  counterOffer?: CounterOffer | null;
}

const FinancingSummary: React.FC<FinancingSummaryProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-[2px] border border-slate-300 shadow-2xs overflow-hidden flex flex-col h-full font-sans">
      {/* Header */}
      <div className="px-3.5 py-2 bg-slate-100/90 border-b border-slate-300 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-[2px] bg-[#F26522] text-white font-bold text-[11px] flex items-center justify-center shadow-2xs">
            5
          </div>
          <div className="flex items-center gap-1.5">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">Financing & Facility Summary</h3>
            <HelpCircle size={13} className="text-slate-400 hover:text-slate-600 cursor-pointer" />
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 px-2 py-0.5 rounded-[2px] flex items-center gap-1">
            <CheckCircle2 size={11} className="text-emerald-600" />
            Approved (STP)
          </span>
        </div>
      </div>

      <div className="p-3.5 space-y-3 flex-1 overflow-y-auto custom-scrollbar">
        <div className="space-y-2 bg-slate-50 p-2.5 rounded-[2px] border border-slate-200">
          <Row label="Product Type" value={data.productType} />
          <Row label="Purpose of Loan" value={data.purposeOfLoan} />
          <Row label="Loan Amount Req." value={data.loanAmountRequired} isBold />
          <Row label="Sanction Tenure" value={data.tenure} />
          <Row label="Monthly Installments" value={data.installments} />
        </div>

        {/* Approved Sanction Term Box */}
        <div className="p-2.5 bg-emerald-50 rounded-[2px] border border-emerald-200 relative">
          <div className="flex items-center gap-1.5 mb-1.5">
            <CheckCircle2 className="text-emerald-600 w-3.5 h-3.5" />
            <span className="text-[9px] font-bold text-emerald-800 uppercase tracking-wider">CUSTOMER APPROVED FOR REQUESTED FACILITY</span>
          </div>
          
          <div className="grid grid-cols-2 gap-2 mb-1.5">
            <div className="flex flex-col">
              <span className="text-[8px] font-bold text-emerald-700 uppercase">Sanctioned Amount</span>
              <span className="text-xs font-mono font-bold text-emerald-950 mt-0.5">G$ 43,200,000.00</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] font-bold text-emerald-700 uppercase">Sanctioned Tenure</span>
              <span className="text-xs font-mono font-bold text-emerald-950 mt-0.5">305 months</span>
            </div>
          </div>

          <div className="pt-1.5 border-t border-emerald-200/60">
            <p className="text-[10px] text-emerald-900 leading-snug font-medium">
              "Full requested amount approved with zero policy deviations or counter-offer intervention."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Row: React.FC<{ label: string; value: string; isBold?: boolean; isWarning?: boolean }> = ({ label, value, isBold, isWarning }) => (
  <div className="flex justify-between items-center text-xs">
    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">{label}</span>
    <span className={`font-semibold ${isWarning ? 'text-amber-700' : isBold ? 'text-slate-900 font-bold font-mono' : 'text-slate-800'}`}>{value}</span>
  </div>
);

export default FinancingSummary;
