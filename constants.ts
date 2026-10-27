import { CustomerProfile, RiskParameter, PolicyCheckItem, ReportMetric, DecisionRecommendation, ConsistencyCheck, BehaviourInsight, FraudResult, CollateralDetailsResult, CounterOffer, BureauSummaryData, FinancingSummaryData, CounterOfferSuiteItem, CreditNarrative, CaseSummarisation } from './types';

export const BUREAU_SUMMARY_DATA: BureauSummaryData = {
  bureauScore: 762,
  activeLoanAccounts: 3,
  loansTakenLast6Months: 0,
  closedAccounts: 7,
  creditEnquiriesLast12Months: 2,
  nonCreditEnquiriesLast12Months: 1,
  noOfDpds: 0,
  worstDpd: 0,
  assetClass: "Standard Performing",
  noOfPastDueAccounts: 0,
  overdueAmount: "0.00",
  outstandingLoanAmount: "5,288,860.00",
  repaymentTrack: 10,
  noOfSettledAccount: 0,
  settledAmountLast36Months: "0",
  noOfWriteOffAccount: 0,
  noOfRestructuredLoans: 0,
  suitFiledStatus: "No Adverse Record",
  writeOffAmountLast36Months: "0",
  missedPayment: 0,
};

export const FINANCING_SUMMARY_DATA: FinancingSummaryData = {
  productType: "Residential Mortgage",
  purposeOfLoan: "Purchase New Residential Property",
  loanAmountRequired: "G$ 43,200,000.00",
  tenure: "305 months",
  installments: "G$ 127,680.00",
};

export const CUSTOMER_DATA: CustomerProfile = {
  name: "John Doe",
  designation: "Senior Systems Engineer",
  company: "Guyana Power & Light Inc. (GPL)",
  dob: "15 February 1990",
  mobile: "18765123456",
  email: "john.doe@gplgy.com",
  address: "123 Kingston Road, Apt 4B, New Kingston, Kingston, Jamaica",
  connectionType: "ETB (Existing to Bank)",
  relationshipYears: 12,
  bureauScore: 762,
  loanAmount: "43,200,000.00",
  tenure: "305 months",
  ltv: 50.82,
  dbr: 18.39,
};

export const RISK_TABLE_DATA: RiskParameter[] = [
  { id: '1', parameter: 'Age at Maturity', value: '57 Yrs', expectedValue: '≤ 65 Yrs', policyOutput: 'Pass', isAlert: false },
  { id: '2', parameter: 'Current Employment Length', value: '5 Yrs 8 Mos', expectedValue: '≥ 2 Yrs', policyOutput: 'Pass', isAlert: false },
  { id: '3', parameter: 'Judgement', value: 'Nil / Clear Record', expectedValue: 'No Adverse Judgement', policyOutput: 'Pass', isAlert: false },
  { id: '4', parameter: 'TDSR', value: '18.39%', expectedValue: '≤ 45.00%', policyOutput: 'Pass', isAlert: false },
  { id: '5', parameter: 'Gross Income', value: 'G$ 1,680,000 / mo', expectedValue: '≥ G$ 500,000 / mo', policyOutput: 'Pass', isAlert: false },
  { id: '6', parameter: 'Credit History', value: 'Satisfactory (12 Yrs with GBTI)', expectedValue: 'Clean / No Derogatory', policyOutput: 'Pass', isAlert: false },
  { id: '7', parameter: 'Total Exposure', value: 'G$ 48,488,860', expectedValue: '≤ G$ 75,000,000', policyOutput: 'Pass', isAlert: false },
  { id: '8', parameter: 'Number of Past Applications Rejected (Last 12 Months)', value: '0', expectedValue: '≤ 1', policyOutput: 'Pass', isAlert: false },
  { id: '9', parameter: 'Creditinfo Bureau Score', value: '762', expectedValue: '> 710', policyOutput: 'Pass', isAlert: false },
  { id: '10', parameter: 'Loan to Value (LTV)', value: '50.82%', expectedValue: '≤ 80.00%', policyOutput: 'Pass', isAlert: false },
  { id: '11', parameter: 'Residence Vintage', value: '36 Months', expectedValue: '> 6 Months', policyOutput: 'Pass', isAlert: false },
  { id: '12', parameter: 'Health Status', value: 'Good', expectedValue: 'Good', policyOutput: 'Pass', isAlert: false },
  { id: '13', parameter: 'Assets to Liability Ratio', value: '3.4', expectedValue: '> 2.0', policyOutput: 'Pass', isAlert: false },
  { id: '14', parameter: 'No. of Active Loan Accounts', value: '3', expectedValue: '< 4', policyOutput: 'Pass', isAlert: false },
  { id: '15', parameter: 'Existing Loan O/s to Current Loan Amount Ratio', value: '0.12', expectedValue: '< 0.50', policyOutput: 'Pass', isAlert: false },
  { id: '16', parameter: 'Request for Facilities (Last 4 Months)', value: '0', expectedValue: '≤ 3', policyOutput: 'Pass', isAlert: false },
  { id: '17', parameter: 'Worst DPD', value: '0 DPD', expectedValue: '≤ 60 DPD', policyOutput: 'Pass', isAlert: false },
  { id: '18', parameter: 'Overdue Amount', value: 'G$ 0.00', expectedValue: '≤ G$ 10,000', policyOutput: 'Pass', isAlert: false },
  { id: '19', parameter: 'Legal Filed Loans', value: 'No', expectedValue: 'No', policyOutput: 'Pass', isAlert: false },
  { id: '20', parameter: 'Conduct of Account', value: 'No unpaids or excess drawings', expectedValue: 'Satisfactory Conduct', policyOutput: 'Pass', isAlert: false },
  { id: '21', parameter: 'Marketability of Asset', value: 'High Resale Value (Georgetown)', expectedValue: 'Standard or Higher', policyOutput: 'Pass', isAlert: false },
];

export const POLICY_CHECKS: PolicyCheckItem[] = [
  { id: '1', label: 'Creditinfo Score', value: '762 (Prime Grade A)', status: 'pass', iconType: 'file' },
  { id: '2', label: 'Gross Monthly Income', value: 'G$ 1,680,000.00', status: 'pass', iconType: 'wallet' },
  { id: '3', label: 'TDSR / DBR', value: '18.39% (Optimal)', status: 'pass', iconType: 'briefcase' },
  { id: '4', label: 'LTV Ratio', value: '50.82%', status: 'pass', iconType: 'home' },
  { id: '5', label: 'Age at Maturity', value: '57 Yrs (≤ 65 Yrs)', status: 'pass', iconType: 'user' },
  { id: '6', label: 'Employment Length', value: '5 Yrs 8 Mos (GPL)', status: 'pass', iconType: 'briefcase' },
  { id: '7', label: 'Collateral Transport', value: 'Georgetown (Clear Title)', status: 'pass', iconType: 'home' },
  { id: '8', label: 'Residence Vintage', value: '3+ Yrs (Verified)', status: 'pass', iconType: 'clock' },
  { id: '9', label: 'Judgement Record', value: 'Clean / No Judgements', status: 'pass', iconType: 'user' },
  { id: '10', label: 'Monthly Installment', value: 'G$ 127,680.00', status: 'pass', iconType: 'wallet' },
];

export const REPORT_DATA: ReportMetric[] = [
  {
    title: "Collateral Report",
    type: "collateral",
    points: [
      "Increasing Price Trend in Bel Air Park, Georgetown",
      "95% Marketability Rating for this prime residential location",
      "Assessed LTV of 50.82% well within Bank of Guyana 80% ceiling"
    ]
  },
  {
    title: "Risk Analysis Report",
    type: "risk",
    points: [
      "100% of tested Credit Policy parameters pass institutional thresholds",
      "Zero past-due DPDs and no adverse legal judgements on record",
      "Optimal TDSR of 18.39% leaving substantial financial cushion"
    ]
  }
];

export const SCORECARD_TAGS = [
  { label: "Prime A", color: "bg-green-500" },
  { label: "Approved", color: "bg-green-500" },
  { label: "Optimal TDSR", color: "bg-green-400" },
  { label: "Stable Tenured", color: "bg-green-400" },
  { label: "Verified Collateral", color: "bg-green-400" },
];

export const COLLATERAL_DETAILS = {
  propertyType: "Residential Property",
  location: "Bel Air Park, Georgetown, Guyana",
  area: "1850 sq. ft.",
  marketValue: "85,000,000",
  valuationDate: "10 Mar 2026",
  legalStatus: "Clear Transport / Title",
  occupancy: "Self-occupied",
  amenities: ["Gated Perimeter", "Back-up Generator", "Water Filtration", "Perimeter Lighting"],
  neighborhoodRisk: "Low",
  priceTrend: "Appreciating @ 8% annually"
};

export const CONSISTENCY_CHECKS: ConsistencyCheck[] = [
  { 
    source: 'Creditinfo vs GRA Return', 
    status: 'Match', 
    details: 'Income levels match across Creditinfo Guyana and GRA tax filing.' 
  },
  { 
    source: 'GBTI Bank vs Payslip', 
    status: 'Match', 
    details: 'Net pay verified with automated direct payroll credit.',
    comparison: [
      { 
        field: 'Monthly Net Pay', 
        sourceA: { name: 'GBTI Statement', value: 'G$ 1,420,000' }, 
        sourceB: { name: 'GPL Salary Slip', value: 'G$ 1,420,000' } 
      },
      { 
        field: 'Employer Name', 
        sourceA: { name: 'Bank Statement', value: 'GUYANA POWER & LIGHT' }, 
        sourceB: { name: 'Salary Slip', value: 'Guyana Power & Light Inc.' } 
      }
    ]
  },
  { 
    source: 'KYC vs Application', 
    status: 'Match', 
    details: 'Guyana National ID (104-892-315), GRA TIN (108-421-992), and GPL utility address verified.' 
  },
];

export const BEHAVIOUR_INSIGHTS: BehaviourInsight[] = [
  { category: 'Repayment', insight: 'Zero defaults across 12-year banking history with GBTI.', score: 'Positive' },
  { category: 'Spending', insight: 'High savings discipline with strong liquid reserve buffers.', score: 'Positive' },
  { category: 'Digital', insight: 'Consistent payroll direct deposit and active account turnover.', score: 'Positive' },
];

export const FRAUD_RESULT: FraudResult = {
  status: 'Low Risk',
  alerts: [],
  flags: [
    { label: 'Identity Verified (GECOM)', severity: 'Low' },
    { label: 'GRA TIN In Good Standing', severity: 'Low' },
    { label: 'Physical Address Verified (GPL)', severity: 'Low' },
  ]
};

export const COLLATERAL_RESULT: CollateralDetailsResult = {
  propertyType: "Residential Property",
  location: "Bel Air Park, Georgetown, Guyana",
  marketValue: "G$ 85.0M",
  ltv: "50.82%",
  ownershipStatus: "Freehold / Clear Transport Title",
  legalVerification: "Verified",
  confidence: 96,
  riskFlags: []
};

export const COUNTER_OFFER: CounterOffer = {
  loanAmount: "43,200,000.00",
  tenure: "305 months",
  interestRate: "8.75% (Standard GBTI Mortgage Rate)",
  rationale: "Straight-Through Approval Achieved: Full requested facility sanctioned at standard policy terms with zero structural adjustments or counter-offers required."
};

export const AI_COUNTER_OFFER_SUITE: CounterOfferSuiteItem[] = [
  {
    id: 'co-1',
    title: 'Requested Facility (Approved)',
    loanAmount: '43,200,000',
    tenure: '305 months',
    emi: '127,680',
    dbr: '18.4%',
    ltv: '50.8%',
    approvalIntent: 'Straight-Through Approval',
    recommended: true
  },
  {
    id: 'co-2',
    title: 'Accelerated 240-Mo Amortisation',
    loanAmount: '43,200,000',
    tenure: '240 months',
    emi: '142,500',
    dbr: '21.1%',
    ltv: '50.8%',
    approvalIntent: 'Eligible & Approved',
    recommended: false
  },
  {
    id: 'co-3',
    title: 'Short Term 180-Mo Amortisation',
    loanAmount: '43,200,000',
    tenure: '180 months',
    emi: '168,000',
    dbr: '24.9%',
    ltv: '50.8%',
    approvalIntent: 'Eligible & Approved',
    recommended: false
  },
  {
    id: 'co-4',
    title: 'Maximum Sanction Limit',
    loanAmount: '45,000,000',
    tenure: '305 months',
    emi: '133,000',
    dbr: '19.7%',
    ltv: '52.9%',
    approvalIntent: 'Pre-Approved Headroom',
    recommended: false
  }
];

export const DECISION_RECOMMENDATION: DecisionRecommendation = {
  decision: 'APPROVE',
  confidence: 98,
  riskScore: 12,
  probabilityOfDefault: 0.6,
  featureImportance: [
    { feature: 'TDSR / Debt Burden Ratio (18.39%)', importance: 92, impact: 'positive' },
    { feature: 'Creditinfo Bureau Score (762 Prime)', importance: 88, impact: 'positive' },
    { feature: 'Spotless 12-Yr GBTI Banking Record', importance: 82, impact: 'positive' },
    { feature: 'Collateral Valuation & LTV (50.82%)', importance: 78, impact: 'positive' },
    { feature: 'GPL Senior Utility Employment Stability', importance: 75, impact: 'positive' }
  ],
  reasoning: "Application Approved. John Doe meets all GBTI Bank credit eligibility, TDSR, and risk criteria with zero policy exceptions. Straight-Through Approval Achieved for the full requested mortgage facility of G$ 43,200,000 at 305 months without requiring any counter-offer or manual intervention.",
  primaryDrivers: [
    'Prime Creditinfo Score (762)', 
    'Optimal TDSR (18.39%)', 
    '12-Year Spotless Banking History', 
    'Clear Transport Title Valuation'
  ],
  suggestedAdjustments: []
};

export const AI_CASE_SUMMARY: CaseSummarisation = {
  executiveSummary: "Application Approved. John Doe presents an exemplary borrower profile, characterized by his established tenure as a Senior Systems Engineer at a Tier-A++ employer (Guyana Power & Light Inc. - GPL) and a prime Creditinfo Guyana score of 762. His financial verification confirms a stable monthly gross income of G$ 1,680,000 (net G$ 1,420,000), comfortably covering all obligations with a strong disposable surplus.\n\nAll GBTI Bank underwriting guidelines and Bank of Guyana policy benchmarks have been met with zero deviations. The requested mortgage facility of G$ 43,200,000 at 305 months entails a conservative Total Debt Service Ratio (TDSR) of 18.39% and an assessed Loan-to-Value (LTV) of 50.82%, well below institutional risk thresholds. Multi-source data triangulation confirms verified Guyana National ID (NIC), active GRA TIN, and clean repayment discipline.\n\nStraight-Through Approval Achieved: Customer Approved for Requested Facility with full finality. Approval Decision Completed without requiring any counter-offer, terms revision, or manual review intervention.",
  keyStrengths: [
    "Customer Approved for Requested Facility (G$ 43.20M)",
    "Straight-Through Approval Achieved with 98% Confidence",
    "12-Year Spotless Banking History with GBTI Bank",
    "Optimal TDSR (18.39%) against 45% Institutional Limit"
  ],
  primaryConcerns: [
    "Zero Policy Deviations Detected across all parameters",
    "Ultra-Low Probability of Default (< 1.0% modeled PD)"
  ],
  finalVerdict: "Mortgage Approved: Straight-Through Approval completed for the full requested facility of G$ 43,200,000 at requested 305-month tenure."
};

export const AI_CAM_PREVIEW = `
# CREDIT APPRAISAL MEMORANDUM (CAM)
**Ref:** GBTI-CAM-2026-9482 | **Date:** 14 May 2026 | **Bank:** GBTI Bank Limited, Guyana

## 1. Executive Summary
The applicant, John Doe, demonstrates exemplary creditworthiness with a Creditinfo Guyana score of 762 and zero defaults across a 12-year banking history with GBTI.

## 2. Income & Cashflow Analysis
Verified gross monthly income of G$ 1,680,000 (net G$ 1,420,000). TDSR at 18.39% with monthly installment of G$ 127,680.

## 3. Risk Assessment & KYC
Guyana National ID (104-892-315) & GRA TIN (108-421-992) verified. Probability of Default estimated at 0.6%. Assessed LTV of 50.82% against verified Georgetown residential collateral valuation of G$ 85,000,000.

## 4. Final Recommendation
APPLICATION APPROVED: Straight-Through Approval Achieved for requested facility of G$ 43,200,000 at 305 months in compliance with Bank of Guyana prudential guidelines.
`;

export const CREDIT_NARRATIVE: CreditNarrative = {
  decision: "Application Approved — Straight-Through Approval Achieved",
  contributingFactors: [
    { label: "Facility Sanction", detail: "Customer Approved for Requested Facility of G$ 43,200,000 at requested 305-month tenure with zero counter-offer required." },
    { label: "Employer Profile", detail: "Applicant is employed with 'Guyana Power & Light Inc. (GPL)', a Category A++ utility employer with prime sector stability." },
    { label: "Income Continuity", detail: "100% verified salary credits via direct payroll remittance with zero return cheque or dishonour history." },
    { label: "Repayment Resilience", detail: "Maintains a 58% disposable surplus with an optimal Total Debt Service Ratio (TDSR) of 18.39%." }
  ],
  riskSignals: [
    { label: "TDSR Headroom", severity: "Low", detail: "Current TDSR is 18.39%, leaving over 26% headroom below the 45% policy threshold." },
    { label: "Collateral Coverage", severity: "Low", detail: "Market valuation of G$ 85.0M provides 50.82% LTV coverage with clear, transportable title in Bel Air Park, Georgetown." }
  ],
  policyAlignments: [
    { policy: "Minimum Income", status: "Pass", detail: "Verified gross income (G$ 1,680,000) well exceeds standard GBTI minimum benchmark." },
    { policy: "LTV Benchmark", status: "Pass", detail: "Assessed LTV of 50.82% is comfortably below the 80% policy limit." },
    { policy: "Bureau Score", status: "Pass", detail: "Creditinfo Guyana score of 762 with zero past-due or written-off accounts." },
    { policy: "KYC & Residence Stability", status: "Pass", detail: "100% verified across Guyana National Registry (GECOM), GRA TIN, and GPL utility bill." }
  ],
  tradeOffs: [
    "Eligible and Approved: Full requested amount of G$ 43.20M approved without requiring terms revision.",
    "Zero manual review conditions; eligible for instant straight-through loan agreement issuance."
  ]
};
