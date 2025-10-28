import type { SlideDefinition } from '../types/slides';

export const Slide06FinancialModel: SlideDefinition = {
  type: 'content',
  title: 'Financial Projections',
  subtitle: 'Path to 2-3x revenue growth through technology and product expansion',
  content: (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 items-stretch text-sm md:text-base">
        <div className="border border-slate-200 flex flex-col">
          <div className="bg-slate-50 p-4 border-b border-slate-200">
            <h3 className="text-base font-semibold uppercase tracking-wide text-slate-900">Revenue Growth Projection</h3>
          </div>
          <div className="overflow-x-auto flex-1 px-4 py-4">
            <table className="w-full text-sm md:text-base">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="p-3 text-left font-semibold uppercase tracking-wide text-sm">Metric</th>
                <th className="p-3 text-right font-semibold uppercase tracking-wide text-sm">Current</th>
                <th className="p-3 text-right font-semibold uppercase tracking-wide text-sm">Year 1</th>
                <th className="p-3 text-right font-semibold uppercase tracking-wide text-sm">Year 2</th>
                <th className="p-3 text-right font-semibold uppercase tracking-wide text-sm">Year 3</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="border-b border-slate-200">
                <td className="p-3 font-semibold">Total AUM ($M)</td>
                <td className="p-3 text-right">309</td>
                <td className="p-3 text-right">340-370</td>
                <td className="p-3 text-right">430-480</td>
                <td className="p-3 text-right">570-650</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 pl-6 text-slate-600">Traditional AUM</td>
                <td className="p-3 text-right text-slate-600">309</td>
                <td className="p-3 text-right text-slate-600">310-320</td>
                <td className="p-3 text-right text-slate-600">330-360</td>
                <td className="p-3 text-right text-slate-600">370-420</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 pl-6 text-slate-600">Crypto/Digital Assets</td>
                <td className="p-3 text-right text-slate-600">—</td>
                <td className="p-3 text-right text-slate-600">30-50</td>
                <td className="p-3 text-right text-slate-600">100-120</td>
                <td className="p-3 text-right text-slate-600">200-230</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-semibold">Active Clients</td>
                <td className="p-3 text-right font-semibold">800</td>
                <td className="p-3 text-right font-semibold">900-1,000</td>
                <td className="p-3 text-right font-semibold">1,200-1,400</td>
                <td className="p-3 text-right font-semibold">1,600-1,800</td>
              </tr>
              <tr className="border-b border-slate-300">
                <td className="p-3 font-semibold">Management Fees (1.0%)</td>
                <td className="p-3 text-right font-semibold">3.09</td>
                <td className="p-3 text-right font-semibold">3.4-3.7</td>
                <td className="p-3 text-right font-semibold">4.3-4.8</td>
                <td className="p-3 text-right font-semibold">5.7-6.5</td>
              </tr>
              <tr className="border-b border-slate-300">
                <td className="p-3 font-semibold">Platform & Service Fees</td>
                <td className="p-3 text-right font-semibold">—</td>
                <td className="p-3 text-right font-semibold">0.3-0.5</td>
                <td className="p-3 text-right font-semibold">0.8-1.2</td>
                <td className="p-3 text-right font-semibold">1.5-2.0</td>
              </tr>
              <tr className="border-b border-slate-300">
                <td className="p-3 font-semibold">Treasury Management</td>
                <td className="p-3 text-right font-semibold">—</td>
                <td className="p-3 text-right font-semibold">0.2-0.3</td>
                <td className="p-3 text-right font-semibold">0.4-0.6</td>
                <td className="p-3 text-right font-semibold">0.8-1.0</td>
              </tr>
              <tr className="border-b border-slate-400 bg-blue-50">
                <td className="p-3 font-bold">Total Revenue ($M)</td>
                <td className="p-3 text-right font-bold">3.0</td>
                <td className="p-3 text-right font-bold text-blue-600">3.9-4.5</td>
                <td className="p-3 text-right font-bold text-blue-600">5.5-6.6</td>
                <td className="p-3 text-right font-bold text-blue-600">8.0-9.5</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 text-slate-600">Operating Expenses</td>
                <td className="p-3 text-right text-slate-600">2.7</td>
                <td className="p-3 text-right text-slate-600">3.2-3.5</td>
                <td className="p-3 text-right text-slate-600">4.0-4.5</td>
                <td className="p-3 text-right text-slate-600">5.0-5.8</td>
              </tr>
              <tr className="bg-green-50">
                <td className="p-3 font-bold">EBITDA ($M)</td>
                <td className="p-3 text-right font-bold">0.3</td>
                <td className="p-3 text-right font-bold text-green-600">0.7-1.0</td>
                <td className="p-3 text-right font-bold text-green-600">1.5-2.1</td>
                <td className="p-3 text-right font-bold text-green-600">3.0-3.7</td>
              </tr>
              <tr className="bg-green-50">
                <td className="p-3 font-bold">EBITDA Margin (%)</td>
                <td className="p-3 text-right font-bold">10%</td>
                <td className="p-3 text-right font-bold">18-22%</td>
                <td className="p-3 text-right font-bold">27-32%</td>
                <td className="p-3 text-right font-bold">38-39%</td>
              </tr>
            </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base">
        <div className="border border-slate-200 p-6">
          <div className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">Key Revenue Drivers</div>
          <ul className="space-y-3 text-base text-slate-700">
            <li>
              <span className="font-semibold text-slate-900">Client Portal:</span> Improved retention and upsell opportunities through self-service capabilities. Target 10-15% AUM growth from better client experience.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Crypto Integration:</span> Capture $50-230M in digital asset AUM over 3 years as clients allocate 10-20% of portfolios to crypto.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Multi-Custodian Platform:</span> Reduce costs and offer competitive pricing. Enable $0.3-2.0M in platform/custody fees.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Treasury Management:</span> In-house cash management captures $0.2-1.0M in fees currently shared with credit union.
            </li>
          </ul>
        </div>

        <div className="border border-slate-200 p-6">
          <div className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">Investment Requirements</div>
          <ul className="space-y-3 text-base text-slate-700">
            <li>
              <span className="font-semibold text-slate-900">Technology Platform:</span> $1.2-1.5M over 24 months for client portal, multi-custodian integration, and crypto infrastructure.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Team Expansion:</span> $400-600K for technology, compliance, and operations hires to support platform growth.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Regulatory & Compliance:</span> $200-300K for crypto licensing, custody agreements, and enhanced compliance systems.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Total Investment:</span> $1.8-2.4M over 36 months with expected 18-24 month payback period.
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-8 rounded-lg">
        <h3 className="text-xl font-light mb-6 border-b border-blue-700 pb-3">Growth Upside Summary</h3>
        <div className="grid grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-sm text-blue-400 uppercase tracking-wide mb-2">Revenue Growth</div>
            <div className="text-4xl font-light">2.7-3.2x</div>
            <div className="text-xs text-blue-500 mt-1">By Year 3</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-green-400 uppercase tracking-wide mb-2">EBITDA Growth</div>
            <div className="text-4xl font-light text-green-300">10-12x</div>
            <div className="text-xs text-green-500 mt-1">By Year 3</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-purple-400 uppercase tracking-wide mb-2">Client Growth</div>
            <div className="text-4xl font-light text-purple-300">2.0-2.3x</div>
            <div className="text-xs text-purple-500 mt-1">By Year 3</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-orange-400 uppercase tracking-wide mb-2">AUM Growth</div>
            <div className="text-4xl font-light text-orange-300">1.8-2.1x</div>
            <div className="text-xs text-orange-500 mt-1">By Year 3</div>
          </div>
        </div>
      </div>

      <div className="text-sm text-slate-500">
        Sources: Sector Analysts LLC historical financials (2023-2025); crypto integration projections based on industry benchmarks from Bitwise, Grayscale, and Galaxy Digital RIA programs.
      </div>
    </div>
  )
};
