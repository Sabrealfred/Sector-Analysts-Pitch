import type { SlideDefinition } from '../types/slides';

export const Slide07InvestmentTerms: SlideDefinition = {
  type: 'content',
  title: 'Acquisition Structure',
  subtitle: 'Flexible deal structure with seller financing and earnout options',
  content: (
    <div className="space-y-8">
      {/* Purchase Price Breakdown */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8 rounded-lg border-l-4 border-blue-400">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-xl font-light mb-2">Proposed Purchase Price</div>
            <div className="text-base text-blue-200">2.8x revenue multiple based on $2.5M normalized revenue</div>
          </div>
          <div className="text-right">
            <div className="text-6xl font-light">$7M</div>
            <div className="text-base text-blue-300 mt-2">Enterprise Value</div>
          </div>
        </div>
      </div>

      {/* Deal Structure Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base">
        <div className="border border-slate-300">
          <div className="bg-slate-900 text-white p-4">
            <div className="text-sm uppercase tracking-wide text-slate-400 mb-1">Structure Option A</div>
            <h3 className="text-lg font-semibold">All-Cash Deal</h3>
          </div>
          <div className="p-5 space-y-4">
            <div>
              <div className="text-3xl font-light text-slate-900 mb-1">$7.0M</div>
              <div className="text-sm text-slate-600">Total Consideration</div>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <div className="text-sm font-semibold uppercase tracking-wide text-slate-900 mb-3">Payment Terms</div>
              <div className="space-y-3 text-base">
                <div className="bg-green-50 p-4">
                  <div className="font-semibold text-green-900 mb-2">$7.0M Cash at Close</div>
                  <ul className="space-y-1 text-slate-700 text-sm">
                    <li>• Wire transfer at closing</li>
                    <li>• Clean exit for sellers</li>
                    <li>• No earnout contingencies</li>
                    <li>• Subject to working capital adjustment</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <div className="text-sm font-semibold uppercase tracking-wide text-slate-900 mb-2">Buyer Profile</div>
              <div className="text-base text-slate-700 leading-relaxed">Best for buyers with immediate capital access seeking full control</div>
            </div>
          </div>
        </div>

        <div className="border border-slate-300">
          <div className="bg-slate-900 text-white p-4">
            <div className="text-sm uppercase tracking-wide text-slate-400 mb-1">Structure Option B</div>
            <h3 className="text-lg font-semibold">Seller Financing + Earnout</h3>
          </div>
          <div className="p-5 space-y-4">
            <div>
              <div className="text-3xl font-light text-slate-900 mb-1">$7.5M</div>
              <div className="text-sm text-slate-600">Total Potential Value</div>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <div className="text-sm font-semibold uppercase tracking-wide text-slate-900 mb-3">Payment Terms</div>
              <div className="space-y-3 text-sm">
                <div className="bg-blue-50 p-3">
                  <div className="font-semibold text-blue-900 mb-1">$4.5M Cash at Close</div>
                  <div className="text-sm text-slate-600">64% upfront payment</div>
                </div>
                <div className="bg-purple-50 p-3">
                  <div className="font-semibold text-purple-900 mb-1">$2.0M Seller Note</div>
                  <ul className="space-y-1 text-slate-700 text-xs">
                    <li>• 5-year term, 6% interest</li>
                    <li>• Monthly payments of $38.7K</li>
                    <li>• Subordinated to senior debt</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-3">
                  <div className="font-semibold text-orange-900 mb-1">$1.0M Earnout</div>
                  <ul className="space-y-1 text-slate-700 text-xs">
                    <li>• Based on Year 2-3 revenue targets</li>
                    <li>• Payable over 24 months</li>
                    <li>• Tied to $5.5M+ revenue achievement</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <div className="text-sm font-semibold uppercase tracking-wide text-slate-900 mb-2">Buyer Profile</div>
              <div className="text-sm text-slate-700 leading-relaxed">Lower upfront capital requirement with shared growth incentives</div>
            </div>
          </div>
        </div>
      </div>

      {/* Transition & Protections */}
      <div className="border border-slate-200">
        <div className="bg-slate-50 p-4 border-b border-slate-200">
          <h3 className="text-base font-semibold uppercase tracking-wide text-slate-900">Transaction Terms & Protections</h3>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-base text-slate-700">
          <div>
            <div className="font-semibold text-slate-900 mb-2">Seller Transition</div>
            <ul className="space-y-2 text-sm">
              <li>• 12-24 month transition period (key person)</li>
              <li>• Consulting agreement: $15K/month for 12 months</li>
              <li>• Client relationship transfer support</li>
              <li>• Non-compete: 5 years, 100-mile radius</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-2">Due Diligence Requirements</div>
            <ul className="space-y-2 text-sm">
              <li>• 60-day due diligence period</li>
              <li>• Full access to client contracts and compliance records</li>
              <li>• Audited financials for last 3 years</li>
              <li>• ADV 2A/2B filings and exam history</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-2">Reps & Warranties</div>
            <ul className="space-y-2 text-sm">
              <li>• Standard M&A representations (18-month survival)</li>
              <li>• Escrow holdback: $500K for 12 months</li>
              <li>• Client retention threshold: 80% for earnout</li>
              <li>• Clean SEC/FINRA compliance history required</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Use of Acquisition */}
      <div className="border border-slate-200">
        <div className="bg-slate-50 p-4 border-b border-slate-200">
          <h3 className="text-base font-semibold uppercase tracking-wide text-slate-900">Post-Acquisition Investment Plan</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-light text-slate-900 mb-2">$1.2M</div>
              <div className="text-sm uppercase tracking-wide text-slate-600 mb-2">Technology Platform</div>
              <div className="text-xs text-slate-500">Client portal, multi-custodian, crypto integration</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-slate-900 mb-2">$600K</div>
              <div className="text-sm uppercase tracking-wide text-slate-600 mb-2">Team Expansion</div>
              <div className="text-xs text-slate-500">Technology, compliance, operations hires</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-slate-900 mb-2">$300K</div>
              <div className="text-sm uppercase tracking-wide text-slate-600 mb-2">Regulatory & Compliance</div>
              <div className="text-xs text-slate-500">Crypto licensing, custody agreements</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-slate-900 mb-2">$200K</div>
              <div className="text-sm uppercase tracking-wide text-slate-600 mb-2">Marketing & Growth</div>
              <div className="text-xs text-slate-500">Digital marketing, client acquisition</div>
            </div>
          </div>
          <div className="mt-6 text-sm text-slate-500">
            <div className="font-semibold text-slate-900 mb-2">36-Month Investment Timeline</div>
            <div className="text-xs space-y-1">
              <div>• Months 1-6: Complete due diligence, close transaction, initiate platform foundation (Phase 1)</div>
              <div>• Months 7-18: Build crypto integration and enhanced client portal (Phase 2)</div>
              <div>• Months 19-36: Launch advanced features and multi-custodian optimization (Phase 3)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Financing Options */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-6">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="text-base font-semibold mb-2">Buyer Financing Options</div>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>• SBA 7(a) loan: Up to $5M at 75-80% LTV</li>
              <li>• Seller financing reduces cash requirement to $4.5M</li>
              <li>• Private equity co-investment structures available</li>
            </ul>
          </div>
          <div>
            <div className="text-base font-semibold mb-2">Expected Timeline</div>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>• LOI execution: 2 weeks from offer</li>
              <li>• Due diligence: 60 days</li>
              <li>• SEC approval (Form ADV transfer): 30-45 days</li>
              <li>• Target close: Q1 2026</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};
