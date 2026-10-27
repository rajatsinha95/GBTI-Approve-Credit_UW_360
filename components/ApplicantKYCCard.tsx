import React, { useState } from 'react';
import { CustomerProfile } from '../types';
import { 
  User, 
  CheckCircle2, 
  HelpCircle, 
  Phone, 
  Calendar, 
  Briefcase, 
  MapPin, 
  ShieldCheck, 
  FileText,
  BadgeCheck,
  UserCheck,
  ExternalLink,
  X,
  FileCheck,
  Building,
  Check,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ApplicantKYCCardProps {
  customer: CustomerProfile;
}

export const GUYANA_REGIONS = [
  'Region 4 - Demerara-Mahaica (Georgetown)',
  'Region 1 - Barima-Waini',
  'Region 2 - Pomeroon-Supenaam',
  'Region 3 - Essequibo Islands-West Demerara',
  'Region 5 - Mahaica-Berbice',
  'Region 6 - East Berbice-Corentyne',
  'Region 7 - Cuyuni-Mazaruni',
  'Region 8 - Potaro-Siparuni',
  'Region 9 - Upper Takutu-Upper Essequibo',
  'Region 10 - Upper Demerara-Berbice'
];

export const GBTI_BRANCHES = [
  'GBTI Water Street Head Office',
  'GBTI Regent Street, Georgetown',
  'GBTI Diamond, East Bank Demerara',
  'GBTI Providence, East Bank Demerara',
  'GBTI Parika, East Bank Essequibo',
  'GBTI New Amsterdam, Berbice',
  'GBTI Anna Regina, Essequibo Coast',
  'GBTI Corriverton, Berbice',
  'GBTI Lethem, Region 9'
];

const ApplicantKYCCard: React.FC<ApplicantKYCCardProps> = ({ customer }) => {
  const [isDossierOpen, setIsDossierOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'identity' | 'address' | 'employment' | 'compliance'>('identity');
  
  // Localized form state for GBTI Bank Guyana
  const [kycData, setKycData] = useState({
    nationalId: '104-892-315',
    graTin: '108-421-992',
    nisNumber: 'B-482019-3',
    passportNumber: 'GY-P 048219',
    driverLicence: 'GY-DL-84210',
    fullName: customer.name || 'John Doe',
    nationality: 'Guyanese (Citizen by Birth)',
    maritalStatus: 'Married',
    dob: customer.dob || '15 February 1990',
    placeOfBirth: 'Georgetown Public Hospital, Demerara',
    streetAddress: '123 Kingston Road, Apt 4B',
    neighbourhood: 'New Kingston',
    city: 'Kingston',
    region: 'St. Andrew / Kingston Parish',
    country: 'Jamaica',
    proofOfAddressType: 'GPL Electricity Bill (Guyana Power & Light)',
    utilityAccountNo: 'GPL-ACC-0842-1928-1',
    utilityBillDate: '15 Mar 2026',
    employer: customer.company || 'Guyana Power & Light Inc. (GPL)',
    designation: customer.designation || 'Senior Systems Engineer',
    sector: 'Public Utilities & Energy',
    employerAddress: '40 Main Street, Georgetown, Guyana',
    employmentType: 'Permanent Salaried',
    monthlyNetPay: 'GYD 1,420,000',
    incomeProofDoc: 'GRA Form 7B (Annual Return) & Last 3 Months Payslips',
    gbtiBranch: 'GBTI Water Street Head Office',
    pepStatus: 'Non-PEP (Standard Retail Risk)',
    fiuScreening: 'Clean • 0 Matches on FIU Guyana & UN Sanctions Database',
    creditBureau: 'Creditinfo Guyana Inc.',
    bureauScore: '762 (Prime Grade A)',
  });

  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = () => {
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      setIsDossierOpen(false);
    }, 1200);
  };

  return (
    <>
      <div id="section-applicant-kyc" className="bg-white rounded-[2px] border border-slate-300 shadow-2xs overflow-hidden flex flex-col font-sans">
        {/* Section Header */}
        <div className="px-3.5 py-2 bg-slate-100/90 border-b border-slate-300 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-[2px] bg-[#F26522] text-white font-bold text-[11px] flex items-center justify-center shadow-2xs">
              1
            </div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">Applicant & KYC Details</h3>
              <HelpCircle size={13} className="text-slate-400 hover:text-slate-600 cursor-pointer" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsDossierOpen(true)}
              className="text-[10px] font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-300 px-2 py-0.5 rounded-[2px] flex items-center gap-1 transition-colors cursor-pointer"
              title="Click to view complete GBTI Bank KYC Dossier"
            >
              <CheckCircle2 size={11} className="text-emerald-600" />
              6/6 verified
            </button>
            <span className="hidden sm:inline text-[10px] text-slate-500 font-medium">
              Last edit: GBTI Sourcing • Today 10:24
            </span>
          </div>
        </div>

        {/* Main Applicant Grid */}
        <div className="p-3.5 space-y-3 flex-1 flex flex-col justify-between">
          {/* Applicant Card Tile */}
          <div className="bg-slate-50 p-3 rounded-[2px] border border-slate-200 space-y-2.5">
            {/* User Identity */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-[2px] bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-700 shrink-0">
                <User size={18} />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <h4 className="text-sm font-bold text-slate-900 tracking-tight">{kycData.fullName}</h4>
                  <span className="text-[9px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-1.5 py-0.2 rounded-[2px] flex items-center gap-0.5">
                    <BadgeCheck size={10} /> Verified
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium truncate">Primary Applicant • Salaried (Tier A++)</span>
                <span className="text-[11px] text-[#0B3564] font-semibold truncate">{kycData.employer} ({kycData.designation})</span>
              </div>
            </div>

            {/* Core Info 2x2 Grid */}
            <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-slate-200/80">
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">DATE OF BIRTH</span>
                <span className="text-xs font-semibold text-slate-800 mt-0.5">{kycData.dob} (36 Yrs)</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">MOBILE</span>
                <span className="text-xs font-semibold text-slate-800 mt-0.5">{customer.mobile || '+592 624 5891'}</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">CREDITINFO SCORE</span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-xs font-black text-emerald-700">{customer.bureauScore || 762}</span>
                  <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">Prime (Grade A)</span>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">RELATIONSHIP</span>
                <span className="text-xs font-semibold text-slate-800 mt-0.5">{customer.relationshipYears || 12} Years (ETB • GBTI)</span>
              </div>
            </div>

            {/* Address Line */}
            <div className="pt-2 border-t border-slate-200/80 flex items-center gap-1.5 text-[11px] text-slate-600">
              <MapPin size={12} className="text-slate-400 shrink-0" />
              <span className="font-medium shrink-0">Permanent:</span>
              <span className="font-semibold text-slate-800 truncate" title={customer.address || `${kycData.streetAddress}, ${kycData.neighbourhood}, ${kycData.city}, ${kycData.country}`}>
                {customer.address || `${kycData.streetAddress}, ${kycData.neighbourhood}, ${kycData.city}, ${kycData.country}`}
              </span>
            </div>
          </div>

          {/* Verification Badges Row - Guyana Localised Identity & Documents */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">VERIFICATION DOCUMENTS (GUYANA)</span>
              <button 
                onClick={() => setIsDossierOpen(true)}
                className="text-[10px] font-bold text-[#0B3564] hover:underline flex items-center gap-0.5 cursor-pointer"
              >
                View Dossier <ExternalLink size={10} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              
              {/* Guyana National ID (NIC) */}
              <div 
                onClick={() => { setActiveTab('identity'); setIsDossierOpen(true); }}
                className="flex items-center justify-between p-2 rounded-[2px] bg-white border border-slate-300 shadow-2xs hover:border-[#F26522] transition-colors cursor-pointer"
                title="Guyana Elections Commission (GECOM) National Registration ID"
              >
                <div className="flex items-center gap-1.5 min-w-0">
                  <FileText size={12} className="text-blue-600 shrink-0" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-[9px] font-bold text-slate-400 uppercase">National ID (NIC)</span>
                    <span className="text-[10px] font-mono font-semibold text-slate-800 truncate">{kycData.nationalId}</span>
                  </div>
                </div>
                <CheckCircle2 size={12} className="text-emerald-600 shrink-0 ml-1" />
              </div>

              {/* Guyana Revenue Authority (GRA) Tax Identification Number (TIN) */}
              <div 
                onClick={() => { setActiveTab('identity'); setIsDossierOpen(true); }}
                className="flex items-center justify-between p-2 rounded-[2px] bg-white border border-slate-300 shadow-2xs hover:border-[#F26522] transition-colors cursor-pointer"
                title="Guyana Revenue Authority (GRA) Tax Identification Number"
              >
                <div className="flex items-center gap-1.5 min-w-0">
                  <FileText size={12} className="text-blue-600 shrink-0" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-[9px] font-bold text-slate-400 uppercase">GRA TIN</span>
                    <span className="text-[10px] font-mono font-semibold text-slate-800 truncate">{kycData.graTin}</span>
                  </div>
                </div>
                <CheckCircle2 size={12} className="text-emerald-600 shrink-0 ml-1" />
              </div>

              {/* Income Verification: GRA Form 7B / GPL Payslip */}
              <div 
                onClick={() => { setActiveTab('employment'); setIsDossierOpen(true); }}
                className="flex items-center justify-between p-2 rounded-[2px] bg-white border border-slate-300 shadow-2xs hover:border-[#F26522] transition-colors cursor-pointer"
                title="GRA Form 7B Tax Return & GPL Official Payslips"
              >
                <div className="flex items-center gap-1.5 min-w-0">
                  <FileText size={12} className="text-blue-600 shrink-0" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-[9px] font-bold text-slate-400 uppercase">GRA 7B / Payslip</span>
                    <span className="text-[10px] font-semibold text-slate-800 truncate">G$ 20.16M gross</span>
                  </div>
                </div>
                <CheckCircle2 size={12} className="text-emerald-600 shrink-0 ml-1" />
              </div>

              {/* Guyana Driver's Licence (GRA Motor Vehicle Div.) */}
              <div 
                onClick={() => { setActiveTab('identity'); setIsDossierOpen(true); }}
                className="flex items-center justify-between p-2 rounded-[2px] bg-white border border-slate-300 shadow-2xs hover:border-[#F26522] transition-colors cursor-pointer"
                title="Guyana Driver's Licence (GRA Motor Vehicle Division)"
              >
                <div className="flex items-center gap-1.5 min-w-0">
                  <FileText size={12} className="text-blue-600 shrink-0" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-[9px] font-bold text-slate-400 uppercase">Driver's Lic.</span>
                    <span className="text-[10px] font-mono font-semibold text-slate-800 truncate">{kycData.driverLicence}</span>
                  </div>
                </div>
                <CheckCircle2 size={12} className="text-emerald-600 shrink-0 ml-1" />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive GBTI Bank Guyana KYC Dossier & AML Verification Modal */}
      <AnimatePresence>
        {isDossierOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDossierOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200"
            >
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0B3564] text-white flex items-center justify-center font-black shadow-sm shrink-0">
                    <ShieldCheck size={22} className="text-emerald-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-tight">GBTI Bank • Applicant KYC Dossier</h3>
                      <span className="text-[9px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded-full">
                        6/6 Verified • AML Clean
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Guyana Bank for Trade and Industry • File: GBTI/MTG/26/041287 • AML/CFT Act 2009 Compliant
                    </p>
                  </div>
                </div>

                <button 
                  onClick={() => setIsDossierOpen(false)}
                  className="p-1.5 hover:bg-slate-200 text-slate-400 hover:text-slate-700 rounded-lg transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Sub-Navigation Tabs */}
              <div className="px-6 bg-white border-b border-slate-200 flex items-center gap-4 text-xs font-bold overflow-x-auto custom-scrollbar shrink-0">
                <button
                  onClick={() => setActiveTab('identity')}
                  className={`py-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                    activeTab === 'identity' 
                      ? 'text-[#0B3564] border-[#0B3564]' 
                      : 'text-slate-500 border-transparent hover:text-slate-800'
                  }`}
                >
                  1. National Identity & Civil Status
                </button>
                <button
                  onClick={() => setActiveTab('address')}
                  className={`py-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                    activeTab === 'address' 
                      ? 'text-[#0B3564] border-[#0B3564]' 
                      : 'text-slate-500 border-transparent hover:text-slate-800'
                  }`}
                >
                  2. Guyana Address & Utility Verification
                </button>
                <button
                  onClick={() => setActiveTab('employment')}
                  className={`py-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                    activeTab === 'employment' 
                      ? 'text-[#0B3564] border-[#0B3564]' 
                      : 'text-slate-500 border-transparent hover:text-slate-800'
                  }`}
                >
                  3. Employment & Income Proof
                </button>
                <button
                  onClick={() => setActiveTab('compliance')}
                  className={`py-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                    activeTab === 'compliance' 
                      ? 'text-[#0B3564] border-[#0B3564]' 
                      : 'text-slate-500 border-transparent hover:text-slate-800'
                  }`}
                >
                  4. GBTI AML/CFT & Sanctions
                </button>
              </div>

              {/* Modal Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-5 custom-scrollbar bg-slate-50/50">
                {activeTab === 'identity' && (
                  <div className="space-y-4">
                    <div className="bg-blue-50/70 border border-blue-200/80 rounded-xl p-3 flex items-start gap-2.5 text-xs text-blue-900">
                      <ShieldCheck size={16} className="text-[#0B3564] shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-bold">Guyana Regulatory KYC Compliance:</strong> Identity documents are verified against the Guyana Elections Commission (GECOM) National Register of Registrants and the Guyana Revenue Authority (GRA) Tax Registration Database.
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Full Legal Name */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Full Legal Name (as per National ID)
                        </label>
                        <input 
                          type="text" 
                          value={kycData.fullName}
                          onChange={(e) => setKycData({ ...kycData, fullName: e.target.value })}
                          placeholder="e.g. John Doe"
                          className="w-full text-xs font-semibold px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:border-[#0B3564]"
                        />
                        <span className="text-[10px] text-emerald-600 font-medium flex items-center gap-1 mt-1">
                          <Check size={11} /> Verified against Guyana NIC #104-892-315
                        </span>
                      </div>

                      {/* Nationality */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Nationality & Citizenship
                        </label>
                        <select 
                          value={kycData.nationality}
                          onChange={(e) => setKycData({ ...kycData, nationality: e.target.value })}
                          className="w-full text-xs font-semibold px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:border-[#0B3564]"
                        >
                          <option value="Guyanese (Citizen by Birth)">Guyanese (Citizen by Birth)</option>
                          <option value="Guyanese (Citizen by Descent / Naturalisation)">Guyanese (Citizen by Descent / Naturalisation)</option>
                          <option value="CARICOM National (CSME Skills Certificate)">CARICOM National (CSME Skills Certificate)</option>
                          <option value="Resident Foreign National (Guyana Work Permit)">Resident Foreign National (Guyana Work Permit)</option>
                        </select>
                      </div>

                      {/* Guyana National ID Number (NIC) */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Guyana National Identification Card (NIC) No.
                        </label>
                        <input 
                          type="text" 
                          value={kycData.nationalId}
                          onChange={(e) => setKycData({ ...kycData, nationalId: e.target.value })}
                          placeholder="e.g. 104-892-315 (9 digits)"
                          className="w-full text-xs font-mono font-bold px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:border-[#0B3564]"
                        />
                        <span className="text-[10px] text-emerald-600 font-medium flex items-center gap-1 mt-1">
                          <Check size={11} /> Valid 9-digit GECOM format • Validated
                        </span>
                      </div>

                      {/* GRA Tax Identification Number (TIN) */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          GRA Tax Identification Number (TIN)
                        </label>
                        <input 
                          type="text" 
                          value={kycData.graTin}
                          onChange={(e) => setKycData({ ...kycData, graTin: e.target.value })}
                          placeholder="e.g. 108-421-992 (9-digit GRA TIN)"
                          className="w-full text-xs font-mono font-bold px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:border-[#0B3564]"
                        />
                        <span className="text-[10px] text-emerald-600 font-medium flex items-center gap-1 mt-1">
                          <Check size={11} /> Registered with Guyana Revenue Authority • In good standing
                        </span>
                      </div>

                      {/* National Insurance Scheme (NIS) Number */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          National Insurance Scheme (NIS) Number
                        </label>
                        <input 
                          type="text" 
                          value={kycData.nisNumber}
                          onChange={(e) => setKycData({ ...kycData, nisNumber: e.target.value })}
                          placeholder="e.g. B-482019-3"
                          className="w-full text-xs font-mono font-bold px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:border-[#0B3564]"
                        />
                        <span className="text-[10px] text-emerald-600 font-medium flex items-center gap-1 mt-1">
                          <Check size={11} /> Continuous contribution history recorded
                        </span>
                      </div>

                      {/* Guyana Driver's Licence */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Guyana Driver's Licence No. (GRA Licensing)
                        </label>
                        <input 
                          type="text" 
                          value={kycData.driverLicence}
                          onChange={(e) => setKycData({ ...kycData, driverLicence: e.target.value })}
                          placeholder="e.g. GY-DL-84210"
                          className="w-full text-xs font-mono font-bold px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:border-[#0B3564]"
                        />
                        <span className="text-[10px] text-emerald-600 font-medium flex items-center gap-1 mt-1">
                          <Check size={11} /> Valid Motor Vehicle Licence Class B
                        </span>
                      </div>

                      {/* Passport Number */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Republic of Guyana Passport No.
                        </label>
                        <input 
                          type="text" 
                          value={kycData.passportNumber}
                          onChange={(e) => setKycData({ ...kycData, passportNumber: e.target.value })}
                          placeholder="e.g. GY-P 048219"
                          className="w-full text-xs font-mono font-bold px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:border-[#0B3564]"
                        />
                        <span className="text-[10px] text-slate-500 font-medium mt-1 block">
                          Issued in Georgetown • Expiry: 14 Aug 2031
                        </span>
                      </div>

                      {/* Date of Birth & Place */}
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                            Date of Birth
                          </label>
                          <input 
                            type="text" 
                            value={kycData.dob}
                            onChange={(e) => setKycData({ ...kycData, dob: e.target.value })}
                            placeholder="DD Mon YYYY"
                            className="w-full text-xs font-semibold px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:border-[#0B3564]"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                            Marital Status
                          </label>
                          <select 
                            value={kycData.maritalStatus}
                            onChange={(e) => setKycData({ ...kycData, maritalStatus: e.target.value })}
                            className="w-full text-xs font-semibold px-2 py-2 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:border-[#0B3564]"
                          >
                            <option value="Married">Married</option>
                            <option value="Single">Single</option>
                            <option value="Common-Law Union">Common-Law</option>
                            <option value="Divorced">Divorced</option>
                            <option value="Widowed">Widowed</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'address' && (
                  <div className="space-y-4">
                    <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-3 flex items-start gap-2.5 text-xs text-emerald-950">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-bold">Proof of Address Standard (GBTI Bank):</strong> Proof of physical residential address in Guyana requires a valid utility bill (GPL, GWI, or GTT) or registered Tenancy Agreement not older than 90 days.
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Lot & Street */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Lot Number & Street
                        </label>
                        <input 
                          type="text" 
                          value={kycData.streetAddress}
                          onChange={(e) => setKycData({ ...kycData, streetAddress: e.target.value })}
                          placeholder="e.g. 123 Kingston Road, Apt 4B"
                          className="w-full text-xs font-semibold px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:border-[#0B3564]"
                        />
                      </div>

                      {/* Ward / Neighbourhood */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Ward / Neighbourhood / Area
                        </label>
                        <input 
                          type="text" 
                          value={kycData.neighbourhood}
                          onChange={(e) => setKycData({ ...kycData, neighbourhood: e.target.value })}
                          placeholder="e.g. New Kingston"
                          className="w-full text-xs font-semibold px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:border-[#0B3564]"
                        />
                      </div>

                      {/* City / Town */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Town / City
                        </label>
                        <input 
                          type="text" 
                          value={kycData.city}
                          onChange={(e) => setKycData({ ...kycData, city: e.target.value })}
                          placeholder="e.g. Kingston"
                          className="w-full text-xs font-semibold px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:border-[#0B3564]"
                        />
                      </div>

                      {/* Administrative Region */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Guyana Administrative Region (1 - 10)
                        </label>
                        <select 
                          value={kycData.region}
                          onChange={(e) => setKycData({ ...kycData, region: e.target.value })}
                          className="w-full text-xs font-semibold px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:border-[#0B3564]"
                        >
                          {GUYANA_REGIONS.map((reg) => (
                            <option key={reg} value={reg}>{reg}</option>
                          ))}
                        </select>
                      </div>

                      {/* Country */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Country
                        </label>
                        <input 
                          type="text" 
                          value={kycData.country}
                          disabled
                          className="w-full text-xs font-semibold px-3 py-2 bg-slate-100 border border-slate-200 rounded-lg text-slate-600"
                        />
                      </div>

                      {/* Proof of Address Document Type */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Proof of Address Verification Document
                        </label>
                        <select 
                          value={kycData.proofOfAddressType}
                          onChange={(e) => setKycData({ ...kycData, proofOfAddressType: e.target.value })}
                          className="w-full text-xs font-semibold px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:border-[#0B3564]"
                        >
                          <option value="GPL Electricity Bill (Guyana Power & Light)">GPL Electricity Bill (Guyana Power & Light)</option>
                          <option value="GWI Water Bill (Guyana Water Incorporated)">GWI Water Bill (Guyana Water Incorporated)</option>
                          <option value="GTT Telephone / Fibre Bill (One Communications)">GTT Telephone / Fibre Bill (One Communications)</option>
                          <option value="Registered Tenancy Agreement">Registered Tenancy Agreement</option>
                          <option value="Affidavit of Address (Commissioner of Oaths / JP)">Affidavit of Address (Commissioner of Oaths / JP)</option>
                        </select>
                      </div>

                      {/* Utility Account / Meter Number */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Utility Meter / Account Number
                        </label>
                        <input 
                          type="text" 
                          value={kycData.utilityAccountNo}
                          onChange={(e) => setKycData({ ...kycData, utilityAccountNo: e.target.value })}
                          placeholder="e.g. GPL-ACC-0842-1928-1"
                          className="w-full text-xs font-mono font-bold px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:border-[#0B3564]"
                        />
                      </div>

                      {/* Utility Document Date */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Bill Issue Date (Must be ≤ 90 days)
                        </label>
                        <input 
                          type="text" 
                          value={kycData.utilityBillDate}
                          onChange={(e) => setKycData({ ...kycData, utilityBillDate: e.target.value })}
                          placeholder="DD Mon YYYY"
                          className="w-full text-xs font-semibold px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:border-[#0B3564]"
                        />
                        <span className="text-[10px] text-emerald-600 font-medium flex items-center gap-1 mt-1">
                          <Check size={11} /> Bill is within 45 days • Verified by physical visit
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'employment' && (
                  <div className="space-y-4">
                    <div className="bg-slate-100/80 border border-slate-200 rounded-xl p-3 flex items-start gap-2.5 text-xs text-slate-800">
                      <Briefcase size={16} className="text-[#0B3564] shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-bold">Employment & Income Assessment:</strong> Verified via direct employer payroll remit, official job letter on company letterhead, recent pay stubs, and GRA Form 7B annual declaration.
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Employer */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Employer Name
                        </label>
                        <input 
                          type="text" 
                          value={kycData.employer}
                          onChange={(e) => setKycData({ ...kycData, employer: e.target.value })}
                          placeholder="e.g. Guyana Power & Light Inc. (GPL)"
                          className="w-full text-xs font-semibold px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:border-[#0B3564]"
                        />
                        <span className="text-[10px] text-emerald-600 font-medium flex items-center gap-1 mt-1">
                          <Check size={11} /> Tier-A++ Prime Employer (Guyana Public Utility)
                        </span>
                      </div>

                      {/* Sector */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Industry Sector
                        </label>
                        <select 
                          value={kycData.sector}
                          onChange={(e) => setKycData({ ...kycData, sector: e.target.value })}
                          className="w-full text-xs font-semibold px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:border-[#0B3564]"
                        >
                          <option value="Public Utilities & Energy">Public Utilities & Energy</option>
                          <option value="Oil & Gas / Energy Support Services">Oil & Gas / Energy Support Services</option>
                          <option value="Banking & Financial Services">Banking & Financial Services</option>
                          <option value="Manufacturing & Agribusiness">Manufacturing & Agribusiness</option>
                          <option value="Government & Public Administration">Government & Public Administration</option>
                          <option value="Information Technology & Telecom">Information Technology & Telecom</option>
                        </select>
                      </div>

                      {/* Designation */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Job Title / Designation
                        </label>
                        <input 
                          type="text" 
                          value={kycData.designation}
                          onChange={(e) => setKycData({ ...kycData, designation: e.target.value })}
                          placeholder="e.g. Senior Systems Engineer"
                          className="w-full text-xs font-semibold px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:border-[#0B3564]"
                        />
                      </div>

                      {/* Employment Type */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Employment Classification
                        </label>
                        <select 
                          value={kycData.employmentType}
                          onChange={(e) => setKycData({ ...kycData, employmentType: e.target.value })}
                          className="w-full text-xs font-semibold px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:border-[#0B3564]"
                        >
                          <option value="Permanent Salaried">Permanent Salaried</option>
                          <option value="Contractual Salaried">Contractual Salaried</option>
                          <option value="Self-Employed / Sole Proprietor">Self-Employed / Sole Proprietor</option>
                          <option value="Company Director / Partner">Company Director / Partner</option>
                        </select>
                      </div>

                      {/* Employer Address */}
                      <div className="md:col-span-2">
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Employer Registered Address
                        </label>
                        <input 
                          type="text" 
                          value={kycData.employerAddress}
                          onChange={(e) => setKycData({ ...kycData, employerAddress: e.target.value })}
                          placeholder="e.g. 40 Main Street, Georgetown, Guyana"
                          className="w-full text-xs font-semibold px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:border-[#0B3564]"
                        />
                      </div>

                      {/* Income Verification Document */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Primary Income Verification Document
                        </label>
                        <select 
                          value={kycData.incomeProofDoc}
                          onChange={(e) => setKycData({ ...kycData, incomeProofDoc: e.target.value })}
                          className="w-full text-xs font-semibold px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:border-[#0B3564]"
                        >
                          <option value="GRA Form 7B (Annual Return) & Last 3 Months Payslips">GRA Form 7B (Annual Return) & Last 3 Months Payslips</option>
                          <option value="Official Job Letter & 6-Month GBTI Bank Statements">Official Job Letter & 6-Month GBTI Bank Statements</option>
                          <option value="Audited Financials & GRA Tax Compliance Certificate">Audited Financials & GRA Tax Compliance Certificate</option>
                          <option value="NIS Contribution Schedule & Payroll Slip">NIS Contribution Schedule & Payroll Slip</option>
                        </select>
                      </div>

                      {/* Monthly Net Pay */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Verified Monthly Net Salary (GYD)
                        </label>
                        <input 
                          type="text" 
                          value={kycData.monthlyNetPay}
                          onChange={(e) => setKycData({ ...kycData, monthlyNetPay: e.target.value })}
                          placeholder="e.g. GYD 1,420,000"
                          className="w-full text-xs font-mono font-bold px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:border-[#0B3564]"
                        />
                        <span className="text-[10px] text-emerald-600 font-medium flex items-center gap-1 mt-1">
                          <Check size={11} /> Remitted via automated payroll credit to GBTI
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'compliance' && (
                  <div className="space-y-4">
                    <div className="bg-slate-900 text-white rounded-xl p-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <ShieldCheck size={18} className="text-emerald-400" />
                        <h4 className="text-xs font-bold uppercase tracking-wider">GBTI Bank AML/CFT & Sanctions Screening</h4>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        Conducted under the Anti-Money Laundering and Countering the Financing of Terrorism (AML/CFT) Act 2009 (as amended) and Bank of Guyana Risk-Based Supervision Framework.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Sourcing GBTI Branch */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Origination GBTI Branch
                        </label>
                        <select 
                          value={kycData.gbtiBranch}
                          onChange={(e) => setKycData({ ...kycData, gbtiBranch: e.target.value })}
                          className="w-full text-xs font-semibold px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:border-[#0B3564]"
                        >
                          {GBTI_BRANCHES.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>

                      {/* PEP Status */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Politically Exposed Person (PEP) Status
                        </label>
                        <select 
                          value={kycData.pepStatus}
                          onChange={(e) => setKycData({ ...kycData, pepStatus: e.target.value })}
                          className="w-full text-xs font-semibold px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:border-[#0B3564]"
                        >
                          <option value="Non-PEP (Standard Retail Risk)">Non-PEP (Standard Retail Risk)</option>
                          <option value="Domestic PEP (Guyana Senior Public Official)">Domestic PEP (Guyana Senior Public Official)</option>
                          <option value="Foreign PEP">Foreign PEP</option>
                          <option value="Immediate Family / Close Associate of PEP">Immediate Family / Close Associate of PEP</option>
                        </select>
                      </div>

                      {/* FIU Guyana Screening */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          FIU Guyana & UN Sanctions Screening
                        </label>
                        <input 
                          type="text" 
                          value={kycData.fiuScreening}
                          disabled
                          className="w-full text-xs font-semibold px-3 py-2 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800"
                        />
                      </div>

                      {/* Credit Bureau */}
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          National Licensed Credit Bureau
                        </label>
                        <input 
                          type="text" 
                          value="Creditinfo Guyana Inc."
                          disabled
                          className="w-full text-xs font-semibold px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-700"
                        />
                        <span className="text-[10px] text-emerald-600 font-medium flex items-center gap-1 mt-1">
                          <Check size={11} /> Bureau Score: 762 (Prime Grade A) • Zero Past-Due DPD
                        </span>
                      </div>
                    </div>

                    <div className="p-3 bg-emerald-50/80 rounded-xl border border-emerald-200/80 text-xs text-emerald-950 space-y-1">
                      <div className="flex items-center gap-1.5 font-bold">
                        <CheckCircle2 size={13} className="text-emerald-600" />
                        <span>Compliance Officer Attestation</span>
                      </div>
                      <p className="text-[11px] text-emerald-900 leading-snug">
                        All mandatory customer identification documents (NIC, GRA TIN, GPL utility proof, employer letter) have been verified in accordance with GBTI Bank KYC & AML Policies.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-3.5 border-t border-slate-200 bg-slate-50 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <CheckCircle2 size={14} className="text-emerald-600" />
                  <span>GBTI Bank • Bank of Guyana Regulated</span>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setIsDossierOpen(false)}
                    className="px-3.5 py-1.5 text-xs font-bold text-slate-600 hover:text-slate-800 bg-white border border-slate-300 rounded-lg transition-colors cursor-pointer"
                  >
                    Close Dossier
                  </button>

                  <button 
                    onClick={handleSave}
                    className="px-4 py-1.5 text-xs font-bold text-white bg-[#F26522] hover:bg-[#d85213] rounded-[4px] shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    {saveSuccess ? (
                      <>
                        <Check size={13} className="text-emerald-400" />
                        <span>KYC Verified & Saved!</span>
                      </>
                    ) : (
                      <>
                        <FileCheck size={13} className="text-emerald-400" />
                        <span>Save & Re-verify KYC</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ApplicantKYCCard;
