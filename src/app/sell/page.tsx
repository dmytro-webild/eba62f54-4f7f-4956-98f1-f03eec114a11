"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroLogo from "@/components/sections/hero/HeroLogo";
import FeatureCardTwentyOne from "@/components/sections/feature/FeatureCardTwentyOne";
import PricingCardEight from "@/components/sections/pricing/PricingCardEight";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import Link from "next/link";
import { Zap, Star, Sparkles, Crown } from "lucide-react";

export default function SellPage() {
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
          logoText="Sell Your Clothes & Earn"
          description="Turn your closet into cash while reducing fashion waste. Upload your gently used clothes, get verified quickly, and start earning 60-80% commission per sale. Join 50,000+ sellers on India's largest circular fashion platform."
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/woman-with-shopping-bags-walking-boutique_23-2147784115.jpg?_wi=3"
          imageAlt="Sell clothes on EcoThread and earn"
          showDimOverlay={false}
          buttons={[
            { text: "Sign Up as Seller", href: "/seller-signup" },
            { text: "View Pricing", href: "#pricing" },
          ]}
        />
      </div>

      <div id="selling-process" data-section="selling-process">
        <FeatureCardTwentyOne
          title="Simple 4-Step Selling Process"
          description="We've made selling as easy as possible. No hidden steps, no complicated jargon. Just upload, verify, list, and earn."
          tag="Quick & Easy"
          tagIcon={Zap}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/baggage-with-clothes-camera-high-angle_23-2148938483.jpg?_wi=3"
          imageAlt="Simple selling process on EcoThread"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
          mediaPosition="right"
          accordionItems={[
            {
              id: "1",
              title: "Sign Up & Set Profile",
              content:
                "Create your seller account in 2 minutes. Add basic information, bank details for payouts, and choose your seller tier (Basic, Pro, or Premium). Your profile is live immediately.",
            },
            {
              id: "2",
              title: "Upload & Describe",
              content:
                "Click 'Add Item', upload 3-5 clear photos from multiple angles, add a description (size, brand, condition), and set your price. Our AI pricing tool suggests market rates based on similar items.",
            },
            {
              id: "3",
              title: "Quality Verification",
              content:
                "Our team verifies photos and details within 6-24 hours depending on your tier. We check for cleanliness, no major damage, and accurate descriptions. Rejected items? Get specific feedback to improve.",
            },
            {
              id: "4",
              title: "Earn When Sold",
              content:
                "Once verified, your item goes live. When a buyer purchases, we handle payment collection. You receive your commission (60-80%) within 24 hours via UPI or bank transfer. Track everything on your dashboard.",
            },
          ]}
          buttons={[{ text: "Become a Seller Now", href: "/seller-signup" }]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="seller-pricing" data-section="seller-pricing">
        <PricingCardEight
          title="Seller Commission Tiers"
          description="The more you sell, the more you earn. Choose the tier that matches your selling goals. Transparent pricing, no hidden charges ever."
          tag="Scale Your Earnings"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          plans={[
            {
              id: "basic",
              badge: "Popular",
              badgeIcon: Star,
              price: "60%",
              subtitle: "Per Item Commission",
              buttons: [{ text: "Start as Basic", href: "/seller-signup" }],
              features: [
                "60% of final sale price",
                "Unlimited listings",
                "Free quality verification",
                "24-hour payment processing",
                "Basic seller analytics",
                "Email support",
              ],
            },
            {
              id: "pro",
              badge: "Best Value",
              badgeIcon: Sparkles,
              price: "70%",
              subtitle: "For Active Sellers",
              buttons: [{ text: "Upgrade to Pro", href: "/seller-signup" }],
              features: [
                "70% commission rate",
                "Unlimited listings",
                "Priority verification (6 hours)",
                "Payment within 12 hours",
                "Advanced seller dashboard",
                "Monthly payouts available",
                "Priority email support",
              ],
            },
            {
              id: "premium",
              badge: "Maximum Earnings",
              badgeIcon: Crown,
              price: "80%",
              subtitle: "For Top Sellers",
              buttons: [
                { text: "Apply for Premium", href: "/seller-signup" },
              ],
              features: [
                "80% commission rate",
                "Unlimited listings",
                "Instant verification (2 hours)",
                "Same-day payment option",
                "Premium seller badge (higher visibility)",
                "Weekly payouts available",
                "24/7 priority phone support",
                "Featured in seller marketplace",
              ],
            },
          ]}
          buttons={[{ text: "Choose Your Tier", href: "/seller-signup" }]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          logoText="EcoThread"
          copyrightText="© 2025 EcoThread. All rights reserved. Empowering sustainable fashion across India."
          imageSrc="http://img.b2bpic.net/free-photo/nature-lover-working-greenhouse_23-2149037244.jpg?_wi=4"
          imageAlt="Sustainable fashion community"
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}