
import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import GlassCard from './GlassCard';
import { PRICING_PLANS, PAYMENT_METHODS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-900/10 blur-[150px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            READY TO <span className="text-gradient-purple">LEVEL UP?</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Choose the plan that fits your career stage. All plans include lifetime access to our community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-20 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <GlassCard
              key={plan.id}
              className={`relative flex flex-col h-full ${plan.highlighted ? 'neon-border-purple shadow-[0_0_40px_rgba(168,85,247,0.1)] py-12' : 'py-8'}`}
              hoverGlow={!plan.highlighted}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-purple-600 text-white text-[10px] font-black uppercase tracking-widest shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                  {plan.badge}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.highlighted
                  ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                  : 'glass text-gray-300 hover:text-white hover:bg-white/10'
                }`}>
                {plan.cta}
              </button>
            </GlassCard>
          ))}
        </div>

        {/* Payment Legitimacy */}
        <div className="max-w-4xl mx-auto">
          <GlassCard className="text-center p-12 border-dashed border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Secure Payments</h3>
            <div className="flex flex-wrap justify-center gap-12 mb-10">
              {PAYMENT_METHODS.map((method, i) => (
                <div key={i} className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-purple-400">
                    {method.icon}
                  </div>
                  <span className="text-xs text-gray-400 font-medium uppercase tracking-widest">{method.name}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
              <ShieldCheck className="w-5 h-5 text-green-500" />
              <span>Payments are secured with industry-standard encryption. Cancel anytime.</span>
            </div>
            {/* Subtle logos placeholders */}
            <div className="mt-8 pt-8 border-t border-white/5 flex justify-center items-center gap-8 grayscale opacity-20">
              <div className="h-6 w-24 glass rounded" />
              <div className="h-6 w-24 glass rounded" />
              <div className="h-6 w-24 glass rounded" />
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
