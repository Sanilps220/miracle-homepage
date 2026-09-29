'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { HomepageData } from '@/types/homepage';

interface HeaderProps {
  navigation: HomepageData['navigation'];
  announcement: HomepageData['announcement_bar'];
}

export default function Header({ navigation, announcement }: HeaderProps) {
  const [announcementVisible, setAnnouncementVisible] = useState(announcement.enabled);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Announcement Bar */}
      {announcementVisible && announcement.enabled && (
        <div className="bg-[#101311] text-[#F6F7F4] text-xs sm:text-sm py-2.5 px-4 flex items-center justify-between border-b border-[#29302B]">
          <div className="max-w-[1200px] mx-auto w-full flex items-center justify-center gap-2 sm:gap-3 text-center">
            <span className="bg-[#B8F36B] text-[#18210F] text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded tracking-wide uppercase">
              {announcement.badge}
            </span>
            <span className="truncate">{announcement.text}</span>
            <a
              href={announcement.link.url}
              className="underline font-medium hover:text-[#B8F36B] transition-colors whitespace-nowrap ml-1"
            >
              {announcement.link.label} &rarr;
            </a>
          </div>
          {announcement.dismissible && (
            <button
              onClick={() => setAnnouncementVisible(false)}
              className="text-[#59615C] hover:text-[#F6F7F4] p-1 transition-colors"
              aria-label="Dismiss announcement"
            >
              &times;
            </button>
          )}
        </div>
      )}

      {/* Main Sticky Navigation */}
      <nav className="bg-[#F6F7F4]/80 backdrop-blur-md border-b border-[#DFE4DE]">
        <div className="max-w-[1200px] mx-auto px-6 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <Image
              src={navigation.logo.light_mode}
              alt={navigation.logo.alt}
              width={navigation.logo.width}
              height={navigation.logo.height}
              priority
              className="h-8 w-auto dark:hidden"
            />
            <Image
              src={navigation.logo.dark_mode}
              alt={navigation.logo.alt}
              width={navigation.logo.width}
              height={navigation.logo.height}
              priority
              className="h-8 w-auto hidden dark:block"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className="text-sm font-medium text-[#59615C] hover:text-[#101311] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Primary CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={navigation.primary_cta.url}
              aria-label={navigation.primary_cta.aria_label}
              className="px-5 py-2.5 bg-[#101311] text-[#F6F7F4] text-sm font-semibold rounded-lg hover:bg-black transition-colors shadow-sm"
            >
              {navigation.primary_cta.label}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#101311] focus:outline-none"
            aria-label={mobileMenuOpen ? navigation.mobile_menu.close_label : navigation.mobile_menu.open_label}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F6F7F4] border-b border-[#DFE4DE] px-6 py-6 space-y-4">
            {navigation.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-[#101311] hover:text-[#3877E8]"
              >
                {link.label}
              </a>
            ))}
            {navigation.mobile_menu.show_primary_cta && (
              <a
                href={navigation.primary_cta.url}
                className="block w-full text-center px-5 py-3 bg-[#101311] text-[#F6F7F4] text-sm font-semibold rounded-lg mt-4"
              >
                {navigation.primary_cta.label}
              </a>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}