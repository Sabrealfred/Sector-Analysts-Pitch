import type { SlideDefinition } from '../types/slides';

export const Slide11CommunityPartnerships: SlideDefinition = {
  type: 'content',
  title: 'Community Development & Strategic Partnerships',
  subtitle: 'Building a robust ecosystem through strategic alliances and community engagement',
  content: (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base">
        <div className="border border-slate-200 p-6 bg-gradient-to-br from-blue-50 to-white">
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-200">
            <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Community Building</h3>
          </div>
          <div className="space-y-3 text-base text-slate-700">
            <div>
              <div className="font-semibold text-blue-900 mb-2">Target Communities</div>
              <ul className="space-y-2 ml-4">
                <li>• <span className="font-medium">Institutional Investors:</span> Family offices, RIAs, and private wealth managers seeking regulated digital asset exposure</li>
                <li>• <span className="font-medium">DeFi Enthusiasts:</span> Crypto-native users looking for institutional-grade infrastructure and compliance</li>
                <li>• <span className="font-medium">Tech Professionals:</span> Developers and engineers interested in cutting-edge trading algorithms and Web3 integration</li>
              </ul>
            </div>
            <div className="pt-3 border-t border-slate-200">
              <div className="font-semibold text-blue-900 mb-2">Engagement Strategy</div>
              <ul className="space-y-1">
                <li>• Regular webinars and educational content</li>
                <li>• Open-source contributions to DeFi ecosystem</li>
                <li>• Community governance initiatives for platform features</li>
                <li>• Ambassador program for key markets</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border border-slate-200 p-6 bg-gradient-to-br from-purple-50 to-white">
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-200">
            <div className="w-12 h-12 bg-purple-600 text-white flex items-center justify-center rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Strategic Partnerships</h3>
          </div>
          <div className="space-y-3 text-base text-slate-700">
            <div>
              <div className="font-semibold text-purple-900 mb-2">Technology Partners</div>
              <ul className="space-y-2 ml-4">
                <li>• <span className="font-medium">Blockchain Infrastructure:</span> Layer 1/Layer 2 protocols for institutional-grade settlement and custody solutions</li>
                <li>• <span className="font-medium">Trading Venues:</span> Major centralized and decentralized exchanges for deep liquidity access</li>
                <li>• <span className="font-medium">Data Providers:</span> Premium market data and analytics platforms for alpha generation</li>
              </ul>
            </div>
            <div className="pt-3 border-t border-slate-200">
              <div className="font-semibold text-purple-900 mb-2">Financial Partners</div>
              <ul className="space-y-1">
                <li>• Swiss banking institutions for fiat on/off ramps</li>
                <li>• Insurance providers for digital asset coverage</li>
                <li>• Audit firms (Big 4) for compliance assurance</li>
                <li>• Legal advisors across multiple jurisdictions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-slate-200 p-6 bg-white">
        <h4 className="text-base font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Confirmed Partnership Pipeline
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm md:text-base">
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <div className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-2">In Discussion</div>
            <ul className="space-y-2 text-slate-700">
              <li>• Leading DeFi lending protocols for yield optimization</li>
              <li>• Swiss custody providers for institutional-grade asset security</li>
              <li>• Web3 infrastructure companies for cross-chain capabilities</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <div className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">LOI Stage</div>
            <ul className="space-y-2 text-slate-700">
              <li>• Regional blockchain associations in EU and APAC</li>
              <li>• Professional trading software providers</li>
              <li>• Compliance technology platforms (RegTech)</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <div className="text-sm font-semibold text-purple-700 uppercase tracking-wide mb-2">Strategic Goals</div>
            <ul className="space-y-2 text-slate-700">
              <li>• Partnerships with 5+ major exchanges by Q2 2026</li>
              <li>• Integration with 10+ DeFi protocols for diversified yield</li>
              <li>• Establishment of advisory board with industry leaders</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white p-6 rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-light mb-1">15+</div>
            <div className="text-sm text-slate-400 uppercase tracking-wide">Partnership Discussions</div>
          </div>
          <div>
            <div className="text-2xl font-light mb-1">60+</div>
            <div className="text-sm text-slate-400 uppercase tracking-wide">Countries Network Reach</div>
          </div>
          <div>
            <div className="text-2xl font-light mb-1">$10B+</div>
            <div className="text-sm text-slate-400 uppercase tracking-wide">Partner Combined TVL</div>
          </div>
          <div>
            <div className="text-2xl font-light mb-1">200+</div>
            <div className="text-sm text-slate-400 uppercase tracking-wide">HNWI/Family Office Network</div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-5">
        <div className="flex items-start gap-3">
          <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <div>
            <div className="font-semibold text-blue-900 text-base mb-1">Ecosystem Value Proposition</div>
            <div className="text-sm text-slate-700 leading-relaxed">
              Our strategic partnerships are designed to create a comprehensive ecosystem where traditional finance meets Web3 innovation. By aligning with best-in-class providers across custody, trading, compliance, and technology, we ensure that Mira Labs delivers institutional-grade infrastructure while maintaining the agility and innovation that defines the digital asset space.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
