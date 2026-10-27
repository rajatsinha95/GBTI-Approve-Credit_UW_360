import React from 'react';
import { BarChart3, ShieldCheck, Activity, AlertCircle, FileText, CheckCircle2, HelpCircle } from 'lucide-react';
import { BureauSummaryData } from '../types';

interface BureauSummaryProps {
  data: BureauSummaryData;
}

const BureauSummary: React.FC<BureauSummaryProps> = ({ data }) => {
  return (
    <div id="section-credit-bureau" className="bg-white rounded-[2px] border border-slate-300 shadow-2xs overflow-hidden flex flex-col h-full font-sans">
      {/* Header */}
      <div className="px-3.5 py-2 bg-slate-100/90 border-b border-slate-300 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-[2px] bg-[#F26522] text-white font-bold text-[11px] flex items-center justify-center shadow-2xs">
            4
          </div>
          <div className="flex items-center gap-1.5">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">Credit Bureau & Accounts</h3>
            <HelpCircle size={13} className="text-slate-400 hover:text-slate-600 cursor-pointer" />
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 px-2 py-0.5 rounded-[2px] flex items-center gap-1">
            <CheckCircle2 size={11} className="text-emerald-600" />
            Creditinfo Verified
          </span>
        </div>
      </div>

      <div className="p-3.5 space-y-3 flex-1 overflow-y-auto custom-scrollbar">
        {/* Score & Key Stats */}
        <div className="grid grid-cols-2 gap-3 p-2.5 bg-slate-50 rounded-[2px] border border-slate-200">
          <div className="flex flex-col">
            <span className="text-[9px] font-bold text-slate-500 tracking-wider uppercase mb-0.5">Creditinfo Score</span>
            <div className="flex items-baseline gap-1.5">
              <span className={`text-xl font-mono font-bold ${data.bureauScore > 750 ? 'text-emerald-800' : 'text-amber-700'}`}>
                {data.bureauScore}
              </span>
              <span className="text-[9px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-1 py-0.2 rounded-[2px] uppercase">
                Healthy Range
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] font-bold text-slate-500 tracking-wider uppercase mb-0.5">Outstanding Balance</span>
            <span className="text-base font-mono font-bold text-slate-900">G$ {data.outstandingLoanAmount}</span>
          </div>
        </div>

        {/* Detailed Grid */}
        <div className="space-y-2.5">
          <div className="space-y-1.5">
            <h4 className="text-[9px] font-bold text-slate-500 tracking-widest uppercase pb-1 border-b border-slate-200">
              ACTIVITY LOG
            </h4>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2">
              <ParamRow label="Active Accounts" value={data.activeLoanAccounts.toString()} />
              <ParamRow label="Loans (6M)" value={data.loansTakenLast6Months.toString()} isConcerning={data.loansTakenLast6Months > 2} />
              <ParamRow label="Hard Enquiries" value={data.creditEnquiriesLast12Months.toString()} isConcerning={data.creditEnquiriesLast12Months > 10} />
              <ParamRow label="Worst DPD" value={`${data.worstDpd} Days`} isConcerning={data.worstDpd > 0} />
            </div>
          </div>

          <div className="space-y-1.5">
            <h4 className="text-[9px] font-bold text-slate-500 tracking-widest uppercase pb-1 border-b border-slate-200">
              RISK PARAMETERS
            </h4>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2">
              <ParamRow label="Total DPDs" value={data.noOfDpds.toString()} isConcerning={data.noOfDpds > 0} />
              <ParamRow label="Overdue Amt" value={`G$ ${data.overdueAmount}`} isConcerning={parseFloat(data.overdueAmount.replace(/,/g, '')) > 0} />
              <ParamRow label="Settled Accs" value={data.noOfSettledAccount.toString()} isConcerning={data.noOfSettledAccount > 0} />
              <ParamRow label="Asset Class" value={data.assetClass} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ParamRow: React.FC<{ label: string; value: string; isConcerning?: boolean }> = ({ label, value, isConcerning }) => (
  <div className="flex flex-col">
    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tight mb-0.5">{label}</span>
    <span className={`text-[11px] font-mono font-bold ${isConcerning ? 'text-rose-600' : 'text-slate-900'}`}>{value}</span>
  </div>
);

export default BureauSummary;
