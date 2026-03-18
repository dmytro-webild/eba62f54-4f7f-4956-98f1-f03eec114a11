"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroLogo from "@/components/sections/hero/HeroLogo";
import MediaAbout from "@/components/sections/about/MediaAbout";
import FeatureCardTwentyOne from "@/components/sections/feature/FeatureCardTwentyOne";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import Link from "next/link";
import { Leaf, Zap } from "lucide-react";

export default function AboutPage() {
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
          logoText="About EcoThread"
          description="Our mission is to revolutionize fashion in India by making sustainability affordable and accessible. We're building a circular economy where every garment gets a second life, and every consumer can make an environmental impact."
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/beautiful-woman-portrait-garden_1328-1841.jpg"
          imageAlt="EcoThread circular fashion mission"
          showDimOverlay={false}
          buttons={[
            { text: "Our Story", href: "/about" },
            { text: "Back to Home", href: "/" },
          ]}
        />
      </div>

      <div id="story" data-section="story">
        <MediaAbout
          title="The EcoThread Story"
          description="Founded in 2023, EcoThread emerged from a simple observation: millions of Indians want sustainable fashion, but affordability remains a barrier. We saw an opportunity to create a platform that combines premium eco-friendly new collections with a thriving second-hand marketplace. Today, we're the fastest-growing circular fashion platform in India, with over 50,000 active sellers and 200,000+ happy customers who've reduced their fashion carbon footprint by 80% on average."
          tag="Our Mission"
          tagIcon={Leaf}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/beautiful-young-woman-smiling_23-2148349500.jpg"
          imageAlt="EcoThread community impact"
          useInvertedBackground={false}
          buttons={[{ text: "See Our Impact", href: "/impact" }]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="values" data-section="values">
        <FeatureCardTwentyOne
          title="Our Core Values"
          description="EcoThread is built on four pillars that guide every decision we make. From sourcing to delivery, sustainability isn't an afterthought—it's everything."
          tag="What We Stand For"
          tagIcon={Zap}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/fast-fashion-concept-with-piles-clothes_23-2150871371.jpg"
          imageAlt="EcoThread values and sustainability"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
          mediaPosition="left"
          accordionItems={[
            {
              id: "1",
              title: "Circular First",
              content:
                "We believe in a circular economy where resources cycle endlessly. Every garment on EcoThread is part of a larger loop—from sustainable production to long-term wear to eventual resale. We're committed to zero waste.",
            },
            {
              id: "2",
              title: "Affordability Matters",
              content:
                "Sustainability shouldn't be a luxury. We've engineered our platform to ensure eco-conscious choices are accessible to all Indians. Our pricing ensures both buyers and sellers benefit fairly.",
            },
            {
              id: "3",
              title: "Community Driven",
              content:
                "EcoThread thrives because of our community. Every seller who declutters, every buyer who chooses second-hand, every customer who spreads the word—they're all part of our movement. We listen and evolve with them.",
            },
            {
              id: "4",
              title: "Transparency Always",
              content:
                "No hidden fees, no unclear processes. We believe in radical transparency—from seller commissions to environmental impact metrics. Our users deserve to know exactly what they're supporting.",
            },
          ]}
          buttons={[{ text: "Join Our Movement", href: "/signup" }]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          logoText="EcoThread"
          copyrightText="© 2025 EcoThread. All rights reserved. Empowering sustainable fashion across India."
          imageSrc="http://img.b2bpic.net/free-photo/nature-lover-working-greenhouse_23-2149037244.jpg"
          imageAlt="Sustainable fashion community"
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}