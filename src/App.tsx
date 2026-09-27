/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WarningLights } from './components/WarningLights';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  const [activeWarningLightId, setActiveWarningLightId] = useState<string>('check-engine');
  const [selectedIssueForBooking, setSelectedIssueForBooking] = useState<string>('General Diagnostics');

  const handleSelectWarningLight = (lightId: string) => {
    setActiveWarningLightId(lightId);
  };

  const handleBookFromWarningLight = (lightName: string) => {
    setSelectedIssueForBooking(lightName);
  };

  const handleBookFromService = (serviceName: string) => {
    setSelectedIssueForBooking(`Service: ${serviceName}`);
  };

  return (
    <div className="min-h-screen bg-[#0b0f14] text-slate-100 flex flex-col font-sans selection:bg-[#0080ff] selection:text-white pb-14 sm:pb-0">
      {/* Sticky Navigation */}
      <Navbar onBookClick={() => {
        const contact = document.getElementById('contact');
        if (contact) contact.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Clean Hero */}
        <Hero />

        {/* Services Section */}
        <Services onSelectServiceForBooking={handleBookFromService} />

        {/* Warning Light Showcase */}
        <WarningLights
          selectedLightId={activeWarningLightId}
          onSelectWarningLight={handleSelectWarningLight}
          onBookDiagnosticForLight={handleBookFromWarningLight}
        />

        {/* Why Choose Mansfield Auto Electrics (Clean White Section) */}
        <WhyChooseUs />

        {/* Simple 3-Step Process */}
        <Process />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Contact Section & Enquiry / Booking Form */}
        <ContactSection initialIssue={selectedIssueForBooking} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileQuickBar />
    </div>
  );
}
