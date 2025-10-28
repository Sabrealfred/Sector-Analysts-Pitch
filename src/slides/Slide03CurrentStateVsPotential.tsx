import { TrendingUp, AlertCircle, Target, Zap } from 'lucide-react';
import type { SlideDefinition } from '../types/slides';

export const Slide03CurrentStateVsPotential: SlideDefinition = {
  type: 'content',
  title: 'Current State vs Growth Potential',
  subtitle: 'Technology modernization unlocks 2-3x revenue growth opportunity',
  content: (
    <div className="space-y-8">
      {/* Comparison Grid */}
      <div className="grid grid-cols-2 gap-8">
        {/* Current State */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 border-l-4 border-slate-600 rounded-r-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="text-slate-600" size={32} />
            <h3 className="text-2xl font-light text-slate-900">Current State</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg border border-slate-200">
              <div className="text-3xl font-light text-slate-900 mb-1">$309M</div>
              <div className="text-sm text-slate-600 uppercase tracking-wide">Assets Under Management</div>
            </div>

            <div className="bg-white p-5 rounded-lg border border-slate-200">
              <div className="text-3xl font-light text-slate-900 mb-1">$3.0M</div>
              <div className="text-sm text-slate-600 uppercase tracking-wide">Annual Revenue (~1% fee)</div>
            </div>

            <div className="bg-white p-5 rounded-lg border border-slate-200">
              <div className="text-3xl font-light text-slate-900 mb-1">800</div>
              <div className="text-sm text-slate-600 uppercase tracking-wide">Active Clients</div>
            </div>

            <div className="bg-white p-5 rounded-lg border border-slate-200">
              <div className="text-3xl font-light text-slate-900 mb-1">1,000+</div>
              <div className="text-sm text-slate-600 uppercase tracking-wide">Individual Accounts</div>
            </div>
          </div>
        </div>

        {/* Future Potential */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 border-l-4 border-green-600 rounded-r-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="text-green-600" size={32} />
            <h3 className="text-2xl font-light text-green-900">Future Potential (24-36 months)</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg border-2 border-green-300">
              <div className="text-3xl font-light text-green-900 mb-1">$620M+</div>
              <div className="text-sm text-green-700 uppercase tracking-wide font-semibold">Target AUM (2x Growth)</div>
            </div>

            <div className="bg-white p-5 rounded-lg border-2 border-green-300">
              <div className="text-3xl font-light text-green-900 mb-1">$6-9M</div>
              <div className="text-sm text-green-700 uppercase tracking-wide font-semibold">Projected Revenue (2-3x)</div>
            </div>

            <div className="bg-white p-5 rounded-lg border-2 border-green-300">
              <div className="text-3xl font-light text-green-900 mb-1">1,600+</div>
              <div className="text-sm text-green-700 uppercase tracking-wide font-semibold">Projected Clients</div>
            </div>

            <div className="bg-white p-5 rounded-lg border-2 border-green-300">
              <div className="text-3xl font-light text-green-900 mb-1">Multi-Asset</div>
              <div className="text-sm text-green-700 uppercase tracking-wide font-semibold">TradFi + Crypto Platform</div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Challenges & Opportunities */}
      <div className="grid grid-cols-2 gap-8">
        {/* Challenges */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-6">
          <h4 className="text-lg font-semibold text-red-900 mb-4 flex items-center gap-2">
            <Target size={20} />
            Current Limitations
          </h4>
          <ul className="space-y-3 text-sm text-red-800">
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold mt-1">•</span>
              <span><strong>No client-facing technology:</strong> Clients cannot access accounts or view positions online</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold mt-1">•</span>
              <span><strong>Single custodian dependency:</strong> Limited to one custody relationship, no flexibility</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold mt-1">•</span>
              <span><strong>No treasury management:</strong> Revenue-share arrangement with credit union instead of in-house</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold mt-1">•</span>
              <span><strong>TradFi-only offering:</strong> Missing crypto/digital asset opportunity ($3T+ market)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold mt-1">•</span>
              <span><strong>Manual operations:</strong> High operational overhead limits scalability</span>
            </li>
          </ul>
        </div>

        {/* Opportunities */}
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6">
          <h4 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
            <Zap size={20} />
            Growth Opportunities
          </h4>
          <ul className="space-y-3 text-sm text-blue-800">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold mt-1">•</span>
              <span><strong>Client portal platform:</strong> Self-service account access drives satisfaction & retention</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold mt-1">•</span>
              <span><strong>Multi-custodian architecture:</strong> Reduce counterparty risk, offer competitive pricing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold mt-1">•</span>
              <span><strong>Integrated treasury management:</strong> Capture cash management fees, improve margins</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold mt-1">•</span>
              <span><strong>Crypto/digital asset capabilities:</strong> Access high-growth market with qualified custodians</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold mt-1">•</span>
              <span><strong>Automation & scalability:</strong> Reduce costs, increase capacity without proportional headcount</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Investment Required */}
      <div className="bg-gradient-to-r from-purple-900 to-blue-900 text-white p-8 rounded-lg border-l-4 border-purple-400">
        <div className="grid grid-cols-3 gap-8 items-center">
          <div>
            <div className="text-sm text-purple-200 uppercase tracking-wider mb-2">Technology Investment</div>
            <div className="text-4xl font-light">$1.5-2.5M</div>
            <div className="text-sm text-purple-300 mt-1">Over 24-36 months</div>
          </div>
          <div>
            <div className="text-sm text-blue-200 uppercase tracking-wider mb-2">Expected ROI</div>
            <div className="text-4xl font-light">200-300%</div>
            <div className="text-sm text-blue-300 mt-1">Revenue increase</div>
          </div>
          <div>
            <div className="text-sm text-emerald-200 uppercase tracking-wider mb-2">Payback Period</div>
            <div className="text-4xl font-light">18-24 mo</div>
            <div className="text-sm text-emerald-300 mt-1">From implementation</div>
          </div>
        </div>
      </div>
    </div>
  )
};
