import type { SlideDefinition } from '../types/slides';

export const Slide10ValuationFramework: SlideDefinition = {
  type: 'content',
  title: 'Valuation & Investment Returns',
  subtitle: 'Attractive entry multiple with significant value creation potential',
  content: (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-8">
        {/* Entry Valuation */}
        <div className="border border-slate-200">
          <div className="bg-slate-900 text-white p-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide">Purchase Price Analysis</h3>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-xs text-slate-600 uppercase tracking-wide">Enterprise Value</span>
                <span className="text-3xl font-light text-slate-900">$7.0M</span>
              </div>
              <div className="text-xs text-slate-500">Based on 2.8x normalized revenue multiple</div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-900 mb-3">Valuation Metrics</div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-xs text-slate-600">Current Revenue (2025)</span>
                  <span className="text-sm font-semibold">$3.0M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-slate-600">Revenue Multiple</span>
                  <span className="text-sm font-semibold text-blue-600">2.3x</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-200">
                  <span className="text-xs text-slate-600">Current AUM</span>
                  <span className="text-sm font-semibold">$309M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-slate-600">Valuation / AUM</span>
                  <span className="text-sm font-semibold text-green-600">2.3%</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-200">
                  <span className="text-xs text-slate-600">Current EBITDA (est.)</span>
                  <span className="text-sm font-semibold">$0.3M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-slate-600">EBITDA Multiple</span>
                  <span className="text-sm font-semibold text-purple-600">23x</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-900 mb-2">Per-Client Value</div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs text-slate-600">800 Active Clients</span>
                  <span className="text-sm font-semibold text-blue-600">$8,750/client</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparable Analysis */}
        <div className="border border-slate-200">
          <div className="bg-slate-900 text-white p-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide">Market Comparables</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="border-b border-slate-200 pb-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-600 mb-2">RIA Transaction Multiples</div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-slate-700">Revenue Multiple Range</span>
                  <span className="text-xl font-light text-slate-900">2.0-3.5x</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Based on 2023-2024 RIA M&A transactions for firms with $200-500M AUM. Source: Echelon Partners, Fidelity RIA M&A Study.
                </div>
              </div>

              <div className="border-b border-slate-200 pb-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-600 mb-2">EBITDA Multiple Range</div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-slate-700">EBITDA Multiple Range</span>
                  <span className="text-xl font-light text-slate-900">6-10x</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  For profitable RIAs with strong client retention and recurring revenue. Current multiples compressed due to rate environment.
                </div>
              </div>

              <div className="border-b border-slate-200 pb-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-600 mb-2">AUM-Based Valuation</div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-slate-700">Valuation % of AUM</span>
                  <span className="text-xl font-light text-slate-900">1.5-2.5%</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Industry standard: 1.5-2.0% for mature RIAs, up to 2.5% for high-growth or hybrid wealth/asset managers.
                </div>
              </div>

              <div className="bg-blue-50 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-blue-900 mb-2">Sector Analysts Position</div>
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-sm text-slate-700">Proposed Entry Multiple</span>
                  <span className="text-xl font-light text-blue-600">2.3x</span>
                </div>
                <div className="text-xs text-slate-600">Middle of industry range with technology upside</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Returns Analysis */}
      <div className="border border-slate-200">
        <div className="bg-slate-50 p-4 border-b border-slate-200">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Projected Investment Returns (3-5 Year Hold)</h3>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-3 text-left font-semibold uppercase tracking-wide text-xs">Scenario</th>
                  <th className="p-3 text-right font-semibold uppercase tracking-wide text-xs">Year 3 Revenue</th>
                  <th className="p-3 text-right font-semibold uppercase tracking-wide text-xs">Exit Multiple</th>
                  <th className="p-3 text-right font-semibold uppercase tracking-wide text-xs">Exit Value</th>
                  <th className="p-3 text-right font-semibold uppercase tracking-wide text-xs">Total Return</th>
                  <th className="p-3 text-right font-semibold uppercase tracking-wide text-xs">IRR</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-slate-200 bg-slate-50">
                  <td className="p-3 font-semibold">Conservative</td>
                  <td className="p-3 text-right">$6.0M</td>
                  <td className="p-3 text-right text-slate-600">2.5x</td>
                  <td className="p-3 text-right">$15.0M</td>
                  <td className="p-3 text-right font-semibold">2.1x</td>
                  <td className="p-3 text-right font-semibold">28%</td>
                </tr>
                <tr className="border-b border-slate-200 bg-blue-50">
                  <td className="p-3 font-semibold">Base Case</td>
                  <td className="p-3 text-right">$8.0M</td>
                  <td className="p-3 text-right text-slate-600">3.0x</td>
                  <td className="p-3 text-right">$24.0M</td>
                  <td className="p-3 text-right font-semibold text-blue-600">3.4x</td>
                  <td className="p-3 text-right font-semibold text-blue-600">51%</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-3 font-semibold">Growth Case</td>
                  <td className="p-3 text-right">$9.5M</td>
                  <td className="p-3 text-right text-slate-600">3.5x</td>
                  <td className="p-3 text-right">$33.3M</td>
                  <td className="p-3 text-right font-semibold">4.8x</td>
                  <td className="p-3 text-right font-semibold">69%</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-3 font-semibold">Strategic Exit</td>
                  <td className="p-3 text-right">$8.0M</td>
                  <td className="p-3 text-right text-slate-600">4.0x (strategic premium)</td>
                  <td className="p-3 text-right">$32.0M</td>
                  <td className="p-3 text-right font-semibold text-green-600">4.6x</td>
                  <td className="p-3 text-right font-semibold text-green-600">66%</td>
                </tr>
                <tr className="bg-gradient-to-r from-emerald-50 to-emerald-100 border-2 border-emerald-500">
                  <td className="p-3 font-bold text-emerald-900">
                    Fintech Exit
                    <div className="text-[10px] font-normal text-emerald-700">Option C - 24mo hold</div>
                  </td>
                  <td className="p-3 text-right font-semibold">$9.0M</td>
                  <td className="p-3 text-right text-emerald-700 font-semibold">5.0x (fintech multiple)</td>
                  <td className="p-3 text-right font-semibold">$45.0M</td>
                  <td className="p-3 text-right font-bold text-emerald-900">6.4x</td>
                  <td className="p-3 text-right font-bold text-emerald-900">145%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-xs text-slate-500 space-y-1">
            <div><strong>Key Assumptions:</strong></div>
            <div>• Conservative: Minimal technology investment, organic growth only (20% revenue growth over 3 years)</div>
            <div>• Base Case: Full technology roadmap implementation, crypto integration (167% revenue growth over 3 years)</div>
            <div>• Growth Case: Accelerated client acquisition + expanded product suite (217% revenue growth)</div>
            <div>• Strategic Exit: Premium valuation from acquirer seeking RIA platform + crypto capabilities</div>
            <div className="text-emerald-700 font-semibold">• Fintech Exit (Option C): $1M initial investment for 15% equity, aggressive growth to $9M revenue in 24 months (3x AUM to $927M), exit at 5-7x fintech multiple (Stripe, Robinhood, Coinbase valuations). Fintech buyers value tech platforms at 5-7x revenue vs 2-3x for traditional RIAs. Seller proceeds: $38.3M (85% stake) + $1M (initial capital) = $39.3M total, representing 5.6x better return than Option A immediate sale.</div>
            <div>• Traditional scenarios (Options A/B) assume $7M initial investment and 3-year hold period</div>
          </div>
        </div>
      </div>

      {/* Value Creation Drivers */}
      <div className="border border-slate-200">
        <div className="bg-slate-50 p-4 border-b border-slate-200">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Value Creation Levers</h3>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700">
          <div>
            <div className="font-semibold text-slate-900 mb-2">Revenue Growth (2-3x)</div>
            <ul className="space-y-1">
              <li>• Technology platform improves client retention from 85% to 92%+</li>
              <li>• Crypto integration captures $50-230M in new AUM</li>
              <li>• Multi-custodian platform enables competitive pricing and new client acquisition</li>
              <li>• Treasury management brings $0.2-1.0M in-house (currently revenue-shared)</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-2">Margin Expansion (10% → 38%)</div>
            <ul className="space-y-1">
              <li>• Automation reduces manual operations overhead by 30-40%</li>
              <li>• Platform scales revenue without proportional cost increase</li>
              <li>• Crypto/treasury management are high-margin add-ons</li>
              <li>• Multi-custodian reduces custody fees through competitive bidding</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-2">Multiple Expansion (2.3x → 3.5x+)</div>
            <ul className="space-y-1">
              <li>• Technology-enabled RIAs command 20-40% premium multiples</li>
              <li>• Crypto capability attracts strategic acquirers (exchanges, custodians)</li>
              <li>• Scalable platform architecture supports future growth</li>
              <li>• Improved profitability justifies higher exit valuation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Strategic Buyers */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-8 rounded-lg">
        <h3 className="text-xl font-light mb-6 border-b border-blue-700 pb-3">Potential Strategic Acquirers (3-5 Year Exit)</h3>
        <div className="grid grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-semibold text-blue-200 mb-3">RIA Aggregators</div>
            <ul className="space-y-2 text-blue-100 text-xs">
              <li>• Focus Financial Partners</li>
              <li>• CI Financial (USA)</li>
              <li>• Wealth Enhancement Group</li>
              <li>• Mercer Advisors</li>
              <li><em>Rationale: Platform + client base expansion</em></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-purple-200 mb-3">Fintech/Crypto Platforms</div>
            <ul className="space-y-2 text-purple-100 text-xs">
              <li>• Coinbase Institutional</li>
              <li>• Galaxy Digital</li>
              <li>• Bakkt / ICE</li>
              <li>• Fidelity Digital Assets</li>
              <li><em>Rationale: RIA distribution channel for crypto products</em></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-green-200 mb-3">Traditional Wealth Managers</div>
            <ul className="space-y-2 text-green-100 text-xs">
              <li>• Charles Schwab</li>
              <li>• Fidelity Investments</li>
              <li>• Raymond James</li>
              <li>• LPL Financial</li>
              <li><em>Rationale: Acquire digital asset capabilities + client relationships</em></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-xs text-slate-500">
        Sources: Echelon Partners RIA M&A Study (2024); Fidelity RIA Benchmarking Study (2024); DeVoe & Company RIA Deal Book (2023-2024); industry transaction comps from Capital IQ.
      </div>
    </div>
  )
};
