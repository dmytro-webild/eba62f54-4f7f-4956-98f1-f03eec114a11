"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroLogo from "@/components/sections/hero/HeroLogo";
import MediaAbout from "@/components/sections/about/MediaAbout";
import FeatureCardTwentyOne from "@/components/sections/feature/FeatureCardTwentyOne";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import TestimonialCardThirteen from "@/components/sections/testimonial/TestimonialCardThirteen";
import PricingCardEight from "@/components/sections/pricing/PricingCardEight";
import FaqSplitMedia from "@/components/sections/faq/FaqSplitMedia";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import Link from "next/link";
import { Leaf, Zap, Sparkles, Trophy, Heart, HelpCircle, Star, Crown } from "lucide-react";

export default function HomePage() {
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
          logoText="EcoThread"
          description="Transform your wardrobe sustainably. Buy beautiful new eco-friendly clothing or give your old clothes a second life in our circular fashion marketplace. India's most affordable sustainable fashion platform with India-friendly payment options."
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/beautiful-young-woman-smiling_23-2148349500.jpg?_wi=1"
          imageAlt="Sustainable fashion collection - eco-friendly clothing"
          showDimOverlay={false}
          buttons={[
            { text: "Shop New Collections", href: "/collections" },
            { text: "Browse Recycled Marketplace", href: "/marketplace" },
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Why EcoThread?"
          description="We believe fashion should be sustainable AND affordable. EcoThread combines premium eco-friendly new clothing with a thriving second-hand marketplace, enabling Indian consumers to make environmentally conscious choices without breaking the bank. Every purchase supports our mission to reduce textile waste and create a circular economy."
          tag="Circular Fashion Movement"
          tagIcon={Leaf}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/beautiful-woman-portrait-garden_1328-1841.jpg?_wi=1"
          imageAlt="Circular economy in fashion sustainability"
          useInvertedBackground={false}
          buttons={[{ text: "Learn Our Story", href: "/about" }]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyOne
          title="How EcoThread Works"
          description="A seamless platform designed for both buyers and sellers. Shop new sustainable collections, browse quality recycled fashion, or earn by reselling your gently used clothes."
          tag="Simple Process"
          tagIcon={Zap}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/fast-fashion-concept-with-piles-clothes_23-2150871371.jpg?_wi=1"
          imageAlt="Step-by-step recycling process"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
          mediaPosition="right"
          accordionItems={[
            {
              id: "1",
              title: "Browse & Buy",
              content:
                "Discover sustainable new collections with organic materials and ethical production. Filter by price range, size, and environmental impact. Indian prices starting from ₹299.",
            },
            {
              id: "2",
              title: "Sell Your Clothes",
              content:
                "Upload photos of your gently used clothes. We verify quality and pricing. Once listed, earn 60-80% of the sale price when your item sells.",
            },
            {
              id: "3",
              title: "Secure Payment",
              content:
                "Multiple payment options: UPI, Net Banking, Cards, Wallets. Fast processing. Sellers receive payment within 24 hours of buyer confirmation.",
            },
            {
              id: "4",
              title: "Sustainable Shipping",
              content:
                "Eco-friendly packaging. Nationwide delivery. Track your orders in real-time. Free returns if item doesn't match description.",
            },
          ]}
          buttons={[{ text: "Start Selling Today", href: "/sell" }]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Featured Collections"
          description="Handpicked sustainable fashion and quality recycled pieces. New arrivals updated weekly."
          tag="Limited Stock"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "prod-1",
              brand: "EcoThread Original",
              name: "Organic Cotton T-Shirt",
              price: "₹599",
              rating: 5,
              reviewCount: "324",
              imageSrc:
                "http://img.b2bpic.net/free-photo/couple-love-front-water_23-2147732009.jpg",
              imageAlt: "Sustainable organic cotton t-shirt",
            },
            {
              id: "prod-2",
              brand: "Recycled Marketplace",
              name: "Designer Denim Jacket (Pre-loved)",
              price: "₹1,299",
              rating: 5,
              reviewCount: "156",
              imageSrc:
                "http://img.b2bpic.net/free-photo/baggage-with-clothes-camera-high-angle_23-2148938483.jpg?_wi=1",
              imageAlt: "Gently used designer denim jacket",
            },
            {
              id: "prod-3",
              brand: "Recycled Marketplace",
              name: "Premium Kurta Set (Second Hand)",
              price: "₹899",
              rating: 4.5,
              reviewCount: "89",
              imageSrc:
                "http://img.b2bpic.net/free-photo/woman-with-shopping-bags-walking-boutique_23-2147784115.jpg?_wi=1",
              imageAlt: "Quality pre-owned traditional kurta set",
            },
            {
              id: "prod-4",
              brand: "EcoThread Original",
              name: "Hemp Blend Saree",
              price: "₹1,499",
              rating: 5,
              reviewCount: "203",
              imageSrc:
                "http://img.b2bpic.net/free-photo/full-shot-girl-woman-garage-sale_23-2150540724.jpg",
              imageAlt: "Sustainable hemp blend saree",
            },
            {
              id: "prod-5",
              brand: "Recycled Marketplace",
              name: "Vintage Kashmiri Shawl",
              price: "₹2,199",
              rating: 5,
              reviewCount: "127",
              imageSrc:
                "http://img.b2bpic.net/free-photo/baggage-with-clothes-camera-high-angle_23-2148938483.jpg?_wi=2",
              imageAlt: "Pre-loved vintage Kashmiri shawl",
            },
            {
              id: "prod-6",
              brand: "EcoThread Original",
              name: "Linen Blend Salwar Suit",
              price: "₹1,199",
              rating: 4.5,
              reviewCount: "98",
              imageSrc:
                "http://img.b2bpic.net/free-photo/woman-with-shopping-bags-walking-boutique_23-2147784115.jpg?_wi=2",
              imageAlt: "Eco-friendly linen blend salwar suit",
            },
          ]}
          buttons={[{ text: "View All Products", href: "/collections" }]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="What Our Community Says"
          description="Join thousands of Indian consumers making sustainable fashion choices."
          tag="Customer Stories"
          tagIcon={Heart}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          showRating={true}
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Priya Sharma",
              handle: "@priya_sustainable",
              testimonial:
                "EcoThread has transformed how I shop! I found premium sustainable clothing at prices that don't hurt my wallet. Plus, selling my old clothes earned me ₹5,000 last month. Finally, eco-friendly fashion is accessible!",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/cool-model-posing-nature-with-shopping-bags_23-2147645105.jpg",
              imageAlt: "Priya Sharma customer testimonial",
            },
            {
              id: "2",
              name: "Arjun Patel",
              handle: "@arjun_eco",
              testimonial:
                "The quality of recycled items is exceptional. I purchased a designer kurta for ₹899 that looks brand new. The whole process is transparent, and the payment went through within 24 hours. Highly recommended!",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/woman-with-phone-coffee_1303-9002.jpg",
              imageAlt: "Arjun Patel customer testimonial",
            },
            {
              id: "3",
              name: "Neha Gupta",
              handle: "@neha_conscious",
              testimonial:
                "As a seller, I was skeptical at first, but EcoThread's process is so straightforward. My items were verified in 6 hours, and I received payment in my UPI within 12 hours. Best platform for decluttering sustainably!",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/positive-curly-haired-woman-shopper-rests-after-making-purchases-mall-dressed-fashionable-clothes-surrounded-by-shopping-bags-looks-gladfully-away-poses-against-blurred-urban-background_273609-59142.jpg",
              imageAlt: "Neha Gupta customer testimonial",
            },
            {
              id: "4",
              name: "Vikram Singh",
              handle: "@vikram_style",
              testimonial:
                "I love that there are multiple payment options. The entire experience feels secure, and the customer service team helped me with a query in minutes. This is what Indian e-commerce should be!",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/people-fashion-consumerism-concept-happy-ethnic-woman-looks-away-dressed-striped-jumper-carries-bouquet-bag_273609-39221.jpg",
              imageAlt: "Vikram Singh customer testimonial",
            },
          ]}
          buttons={[{ text: "Join Our Community", href: "/signup" }]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardEight
          title="Seller Commission Plans"
          description="Choose the plan that works best for your reselling goals. Transparent pricing, no hidden charges."
          tag="Competitive Rates"
          tagIcon={Trophy}
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
              buttons: [{ text: "Start Selling", href: "/sell" }],
              features: [
                "60% of final sale price",
                "Unlimited listings",
                "Free quality verification",
                "24-hour payment processing",
                "Basic seller analytics",
              ],
            },
            {
              id: "pro",
              badge: "Best Value",
              badgeIcon: Sparkles,
              price: "70%",
              subtitle: "For Bulk Sellers",
              buttons: [{ text: "Upgrade to Pro", href: "/pro-seller" }],
              features: [
                "70% commission rate",
                "Unlimited listings",
                "Priority verification (6 hours)",
                "Payment within 12 hours",
                "Advanced seller dashboard",
                "Monthly payouts available",
                "Dedicated seller support",
              ],
            },
            {
              id: "premium",
              badge: "Maximum Earnings",
              badgeIcon: Crown,
              price: "80%",
              subtitle: "For Top Sellers",
              buttons: [{ text: "Apply for Premium", href: "/premium-seller" }],
              features: [
                "80% commission rate",
                "Unlimited listings",
                "Instant verification (2 hours)",
                "Same-day payment option",
                "Premium seller badge",
                "Weekly payouts",
                "Priority 24/7 support",
                "Featured seller placement",
              ],
            },
          ]}
          buttons={[{ text: "View Payment Methods", href: "/pricing" }]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about buying, selling, and payment options on EcoThread."
          tag="Common Questions"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          faqsAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/fast-fashion-concept-with-piles-clothes_23-2150871371.jpg?_wi=2"
          imageAlt="FAQ support illustration"
          mediaPosition="right"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "What payment methods do you accept?",
              content:
                "EcoThread accepts all major Indian payment methods: UPI (Google Pay, PhonePe, BHIM), Net Banking (all major banks), Credit/Debit Cards, Digital Wallets (PayTM, Amazon Pay, MobiKwik), and Cash on Delivery for select areas. Sellers receive payments via UPI or bank transfer.",
            },
            {
              id: "2",
              title: "How do I sell my clothes on EcoThread?",
              content:
                "Simply sign up, click 'Sell', upload clear photos of your items, add a description and price. Our team verifies quality within 24 hours. Once listed, you earn 60-80% commission when sold. Payment is processed within 24 hours of buyer confirmation.",
            },
            {
              id: "3",
              title: "Are the recycled items really in good condition?",
              content:
                "Yes! Every recycled item undergoes strict quality checks. We only accept gently used items with no major defects. Items are professionally photographed from multiple angles, and we're transparent about any minor wear. All items come with a 7-day return guarantee.",
            },
            {
              id: "4",
              title: "How sustainable are your new collections?",
              content:
                "Our new collections use organic cotton, hemp blends, linen, and recycled polyester. All garments are produced with ethical labor practices. We source from certified sustainable manufacturers and provide carbon footprint details for each product.",
            },
            {
              id: "5",
              title: "What is your return policy?",
              content:
                "Buyers have 7 days to return items if they don't match the description. Sellers have 48 hours to confirm receipt of returned items. Full refunds are processed within 24 hours. For recycled items, we offer hassle-free returns with no restocking fees.",
            },
            {
              id: "6",
              title: "Can I return items I purchased?",
              content:
                "Absolutely! We offer 7-day returns on all items (new and recycled). Simply log into your account, initiate a return, and we'll send a prepaid return label. Refunds are credited to your original payment method within 24 hours of verification.",
            },
          ]}
          buttons={[
            { text: "Contact Support", href: "https://support.ecothread.com" },
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          logoText="EcoThread"
          copyrightText="© 2025 EcoThread. All rights reserved. Empowering sustainable fashion across India."
          imageSrc="http://img.b2bpic.net/free-photo/nature-lover-working-greenhouse_23-2149037244.jpg?_wi=1"
          imageAlt="Sustainable fashion community"
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}