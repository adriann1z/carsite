import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  AlertTriangle,
  Car,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES, WARNING_LIGHTS } from '../data/businessData';

interface ContactSectionProps {
  initialIssue?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialIssue = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleReg: '',
    vehicleMakeModel: '',
    issueCategory: initialIssue || 'General Diagnostics',
    preferredDate: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialIssue) {
      setFormData((prev) => ({ ...prev, issueCategory: initialIssue }));
    }
  }, [initialIssue]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name.';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your phone number so we can call you.';
    } else if (formData.phone.trim().length < 9) {
      newErrors.phone = 'Please provide a valid UK telephone number.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format.';
    }
    if (!formData.vehicleMakeModel.trim()) {
      newErrors.vehicleMakeModel = 'Please state your vehicle make and model.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please describe the fault, symptoms, or warning light.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate swift dispatch / API handoff
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = `MAE-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedRef(generatedRef);
    }, 600);
  };

  const handleResetForm = () => {
    setSubmittedRef(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      vehicleReg: '',
      vehicleMakeModel: '',
      issueCategory: 'General Diagnostics',
      preferredDate: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0d13] relative border-t border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline & Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Having an Electrical Problem With Your Car?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
            Get in touch with Mansfield Auto Electrics and tell us what's happening with your vehicle.
          </p>
        </div>

        {/* Large Direct Action Buttons */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          <a
            href={BUSINESS_INFO.phoneTel}
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 shadow-xl shadow-blue-600/30 transition-all active:scale-98"
          >
            <Phone className="w-5 h-5" />
            <span>Call Mansfield Auto Electrics</span>
          </a>

          <a
            href={BUSINESS_INFO.emailMailto}
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base font-bold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 shadow-lg transition-all active:scale-98"
          >
            <Mail className="w-5 h-5 text-sky-400" />
            <span>Send an Email</span>
          </a>
        </div>

        {/* Two-Column Grid: Left Contact Info / Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT: Contact Cards & Workshop Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Phone Card */}
            <div className="bg-[#121924] p-6 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-sky-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400">Telephone</span>
                  <div className="text-xl font-bold text-white">
                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="hover:text-sky-400 transition-colors"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                  <span className="text-xs text-emerald-400">Lines open Monday–Saturday</span>
                </div>
              </div>
            </div>

            {/* Direct Email Card */}
            <div className="bg-[#121924] p-6 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-600/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono uppercase text-slate-400">Email Address</span>
                  <div className="text-base sm:text-lg font-bold text-white truncate">
                    <a
                      href={BUSINESS_INFO.emailMailto}
                      className="hover:text-sky-400 transition-colors"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                  <span className="text-xs text-slate-400">Responses within 2 business hours</span>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-[#121924] p-6 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400">Workshop Location</span>
                  <div className="text-lg font-bold text-white">
                    {BUSINESS_INFO.address}
                  </div>
                  <span className="text-xs text-slate-400">
                    Convenient access from A38, A617 &amp; M1 Junction 28/29
                  </span>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-[#121924] p-6 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-sky-400" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Workshop Opening Hours
                </h3>
              </div>
              <div className="space-y-2 text-xs">
                {BUSINESS_INFO.openingHours.map((slot) => (
                  <div key={slot.days} className="flex justify-between py-1 border-b border-slate-800/80">
                    <span className="text-slate-400">{slot.days}</span>
                    <span className="text-slate-200 font-mono font-medium">{slot.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Availability Notice */}
            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/50 flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse mt-1 shrink-0" />
              <div className="text-xs">
                <span className="font-semibold text-emerald-300 block">
                  Diagnostic Slots Available This Week
                </span>
                <span className="text-slate-400">
                  We maintain emergency inspection capacity for non-starts, immobiliser lockouts, and critical warning lights.
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT: Contact & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#121924] rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl relative">
              
              {submittedRef ? (
                /* Submission Confirmation State */
                <div className="py-12 px-4 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Enquiry Received
                    </h3>
                    <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto">
                      Thank you, <span className="text-white font-semibold">{formData.name}</span>. We have logged your diagnostic enquiry under reference:
                    </p>
                    <div className="inline-block mt-3 px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-lg font-mono font-bold text-sky-400">
                      {submittedRef}
                    </div>
                  </div>

                  <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-xs text-slate-400 max-w-md mx-auto text-left space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Vehicle:</span>
                      <span className="text-slate-200 font-semibold">{formData.vehicleMakeModel} {formData.vehicleReg ? `(${formData.vehicleReg})` : ''}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Category:</span>
                      <span className="text-slate-200 font-semibold">{formData.issueCategory}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Direct Contact:</span>
                      <span className="text-slate-200">{formData.phone}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 max-w-md mx-auto">
                    Our auto electrical technician will review your vehicle details and call you shortly with next diagnostic steps and drop-off times.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleResetForm}
                      className="px-6 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg cursor-pointer"
                    >
                      Call Workshop Now
                    </a>
                  </div>
                </div>
              ) : (
                /* Contact Form Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="border-b border-slate-800 pb-3 mb-4">
                    <h3 className="text-lg font-bold text-white">
                      Send an Online Diagnostic Enquiry
                    </h3>
                    <p className="text-xs text-slate-400">
                      Fill in your vehicle symptoms below and our specialist will respond promptly.
                    </p>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-sm bg-slate-900 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all ${
                          errors.name ? 'border-red-500' : 'border-slate-700'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 07123 456789"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-sm bg-slate-900 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all ${
                          errors.phone ? 'border-red-500' : 'border-slate-700'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Email and Vehicle Reg */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. john@example.co.uk"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-sm bg-slate-900 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all ${
                          errors.email ? 'border-red-500' : 'border-slate-700'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Vehicle Registration (VRN)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. AB21 CDE"
                        value={formData.vehicleReg}
                        onChange={(e) =>
                          setFormData({ ...formData, vehicleReg: e.target.value.toUpperCase() })
                        }
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-900 border border-slate-700 rounded-lg text-white font-mono uppercase tracking-wider placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                  </div>

                  {/* Vehicle Make / Model & Issue Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Vehicle Make / Model <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ford Transit Custom 2.0"
                        value={formData.vehicleMakeModel}
                        onChange={(e) =>
                          setFormData({ ...formData, vehicleMakeModel: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 text-sm bg-slate-900 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all ${
                          errors.vehicleMakeModel ? 'border-red-500' : 'border-slate-700'
                        }`}
                      />
                      {errors.vehicleMakeModel && (
                        <p className="text-[11px] text-red-400 mt-1">
                          {errors.vehicleMakeModel}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Issue / Warning Light
                      </label>
                      <div className="relative">
                        <select
                          value={formData.issueCategory}
                          onChange={(e) =>
                            setFormData({ ...formData, issueCategory: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 text-sm bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-500 appearance-none pr-8 cursor-pointer"
                        >
                          <option value="General Diagnostics">General Diagnostics / Inspection</option>
                          <option value="Check Engine Light">Check Engine Light (EML / MIL)</option>
                          <option value="ABS / Traction Warning">ABS / Traction / ESP Warning</option>
                          <option value="Battery / Charging Fault">Battery / Charging / Alternator</option>
                          <option value="Airbag / SRS Light">Airbag / SRS Light</option>
                          <option value="Parasitic Battery Drain">Parasitic Battery Drain (Overnight)</option>
                          <option value="Non-Start / Starter Motor">Non-Start / Starter Motor</option>
                          <option value="Wiring / Fuse Blowing">Wiring Fault / Fuse Blowing</option>
                          <option value="Lighting / Control Module">Lighting / Control Module</option>
                          <option value="Other Electrical Problem">Other Electrical Problem</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Message / Describe problem */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Describe the Problem / Symptoms <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Please tell us when the issue occurs (e.g. while accelerating, after raining, first thing in the morning) and any warning symbols or fault codes..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm bg-slate-900 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all ${
                        errors.message ? 'border-red-500' : 'border-slate-700'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer active:scale-98 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Submitting Details...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Enquiry</span>
                        </>
                      )}
                    </button>
                    <p className="mt-2 text-center text-[11px] text-slate-400">
                      No obligation • We respect your privacy and never share your details
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
