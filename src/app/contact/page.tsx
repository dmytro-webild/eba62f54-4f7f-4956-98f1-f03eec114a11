"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroLogo from "@/components/sections/hero/HeroLogo";
import FaqSplitMedia from "@/components/sections/faq/FaqSplitMedia";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import Link from "next/link";
import { HelpCircle } from "lucide-react";

export default function ContactPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "New Collections", id: "collections" },
    { name: "Recycled Marketplace", id: "marketplace" },
    { name: "How It Works", id: "how-it-works" },
    { name: "Pricing", id: "pricing" },
    { name: "Contact", id: "contact" },
  ];

  const footerColumns = [
    {
      title: "Shop",
      items: [
        { label: "New Collections", href: "/collections" },
        { label: "Recycled Marketplace", href: "/marketplace" },
        { label: "Sale Items", href: "/sale" },
        { label: "Gift Cards", href: "/gift-cards" },
      ],
    },
    {
      title: "Sell & Earn",
      items: [
        { label: "Start Selling", href: "/sell" },
        { label: "Seller Dashboard", href: "/seller-dashboard" },
        { label: "Commission Rates", href: "/pricing" },
        { label: "Seller Support", href: "/seller-support" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About EcoThread", href: "/about" },
        { label: "Our Impact", href: "/impact" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Support",
      items: [
        { label: "Contact Us", href: "/contact" },
        { label: "Help Center", href: "/help" },
        { label: "Track Order", href: "/track" },
        { label: "Returns", href: "/returns" },
      ],
    },
    {
      title: "Legal",
      items: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Shipping Policy", href: "/shipping" },
        { label: "Security", href: "/security" },
      ],
    },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="small"
      sizing="largeSmallSizeMediumTitles"
      background="floatingGradient"
      cardStyle="solid"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="EcoThread"
          navItems={navItems}
          button={{ text: "Start Selling", href: "/sell" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Get In Touch"
          description="Have questions about buying, selling, or our sustainable practices? Our community support team is here to help. Reach out to us via email, phone, or visit our support portal. We typically respond within 2-4 hours during business hours (9 AM - 6 PM IST)."
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/beautiful-woman-portrait-garden_1328-1841.jpg?_wi=3"
          imageAlt="EcoThread customer support"
          showDimOverlay={false}
          buttons={[
            { text: "Email Support", href: "mailto:support@ecothread.com" },
            { text: "Back to Home", href: "/" },
          ]}
        />
      </div>

      <div id="support" data-section="support">
        <FaqSplitMedia
          title="Help & Support"
          description="Browse our comprehensive support resources. Most questions are answered here, but if you need personal assistance, our team is just an email away."
          tag="Quick Answers"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          faqsAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/fast-fashion-concept-with-piles-clothes_23-2150871371.jpg?_wi=4"
          imageAlt="Customer support resources"
          mediaPosition="right"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "How do I contact customer support?",
              content:
                "You can reach our support team via email at support@ecothread.com, WhatsApp at +91-XXXXX-XXXXX, or through our in-app chat portal. For urgent issues, please call our hotline at 1800-ECOTHREAD (1800-326-8743).",
            },
            {
              id: "2",
              title: "What are your business hours?",
              content:
                "Our support team operates Monday-Saturday, 9 AM to 6 PM IST. We're closed on Sundays and Indian public holidays. During these hours, we aim to respond to all inquiries within 2-4 hours.",
            },
            {
              id: "3",
              title: "How can I report a quality issue?",
              content:
                "If you receive an item that doesn't match its description, initiate a return through your account dashboard within 7 days. Upload photos of the issue, and our team will review and approve your return. We'll also provide a prepaid return label for easy shipping.",
            },
            {
              id: "4",
              title: "What if I have a payment issue?",
              content:
                "Payment issues are resolved by our payment partner team within 24 hours. Contact support@ecothread.com with your transaction ID, and we'll investigate immediately. If money is deducted but payment failed, refunds are issued within 48 hours.",
            },
            {
              id: "5",
              title: "Can I change my shipping address after ordering?",
              content:
                "If your order hasn't been shipped yet, contact support within 2 hours of placing your order to request an address change. We'll do our best to accommodate. Once shipped, the order cannot be rerouted but can be returned after delivery.",
            },
            {
              id: "6",
              title: "How do I become a seller partner or corporate client?",
              content:
                "For bulk selling partnerships or corporate queries, email partnerships@ecothread.com. Include details about your inventory size and sustainability goals. We'll connect you with our partnerships team within 24 hours.",
            },
          ]}
          buttons={[{ text: "Visit Help Center", href: "/help" }]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          logoText="EcoThread"
          copyrightText="© 2025 EcoThread. All rights reserved. Empowering sustainable fashion across India."
          imageSrc="http://img.b2bpic.net/free-photo/nature-lover-working-greenhouse_23-2149037244.jpg?_wi=3"
          imageAlt="Sustainable fashion community"
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}