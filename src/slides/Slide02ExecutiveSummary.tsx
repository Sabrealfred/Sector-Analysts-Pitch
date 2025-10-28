import { CheckCircle } from 'lucide-react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import type { SlideDefinition } from '../types/slides';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const Slide02ExecutiveSummary: SlideDefinition = {
  type: 'content',
  title: 'The Opportunity',
  subtitle: 'Established revenue + SEC-licensed + client retention',
  content: (
    <div className="space-y-8">
      <motion.div
        className="grid grid-cols-4 gap-8"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={fadeInUp}
          className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-600 rounded-r-lg"
        >
          <div className="text-4xl font-light text-blue-900 mb-3">
            $<CountUp end={309} duration={1.5} />M
          </div>
          <div className="text-sm font-semibold uppercase tracking-wider text-blue-700">Assets Under Management</div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-600 rounded-r-lg"
        >
          <div className="text-4xl font-light text-green-900 mb-3">
            <CountUp end={800} duration={1.5} />
          </div>
          <div className="text-sm font-semibold uppercase tracking-wider text-green-700">Active Clients</div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-600 rounded-r-lg"
        >
          <div className="text-4xl font-light text-purple-900 mb-3">
            $<CountUp end={3} duration={1.5} />M
          </div>
          <div className="text-sm font-semibold uppercase tracking-wider text-purple-700">Annual Revenue</div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 border-l-4 border-orange-600 rounded-r-lg"
        >
          <div className="text-4xl font-light text-orange-900 mb-3">
            <CountUp end={22} duration={1.5} />
          </div>
          <div className="text-sm font-semibold uppercase tracking-wider text-orange-700">Years Established</div>
        </motion.div>
      </motion.div>

      <div className="bg-blue-900 text-white p-10 rounded-lg">
        <h3 className="text-2xl font-light mb-6 border-b border-blue-700 pb-4">Why Sector Analysts is a Strong Acquisition</h3>
        <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-base">
          <div className="flex gap-4">
            <CheckCircle className="text-blue-300 flex-shrink-0 mt-1" size={24} />
            <div>
              <div className="font-semibold text-blue-100 mb-1">SEC-Registered & Established</div>
              <div className="text-blue-200 text-base">22 years in business (since 2003). CRD #169789. Proven compliance track record.</div>
            </div>
          </div>
          <div className="flex gap-4">
            <CheckCircle className="text-blue-300 flex-shrink-0 mt-1" size={24} />
            <div>
              <div className="font-semibold text-blue-100 mb-1">Substantial Asset Base</div>
              <div className="text-blue-200 text-base">$309M AUM across 1,000+ accounts with $250-300K average client size.</div>
            </div>
          </div>
          <div className="flex gap-4">
            <CheckCircle className="text-blue-300 flex-shrink-0 mt-1" size={24} />
            <div>
              <div className="font-semibold text-blue-100 mb-1">High-Liquidity Operations</div>
              <div className="text-blue-200 text-base">Monthly distributions with controlled withdrawal management. Stable cash flow.</div>
            </div>
          </div>
          <div className="flex gap-4">
            <CheckCircle className="text-blue-300 flex-shrink-0 mt-1" size={24} />
            <div>
              <div className="font-semibold text-blue-100 mb-1">Technology Modernization Upside</div>
              <div className="text-blue-200 text-base">Significant growth potential through client portal, multi-custodian platform, and crypto integration.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 rounded-lg border-l-4 border-blue-500">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-xl font-light mb-2">Acquisition Proposal</div>
            <div className="text-base text-slate-300">2.8x revenue multiple | Seller financing available | Earnout structure</div>
          </div>
          <div className="text-right">
            <div className="text-5xl font-light text-blue-400">$7M</div>
            <div className="text-base text-slate-400 mt-2">Purchase Price</div>
          </div>
        </div>
      </div>
    </div>
  )
};
