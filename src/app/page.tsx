"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="large"
        background="circleGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Pricing",          id: "#pricing"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="Parker & Sons M.D."
      button={{ text: "Get Started", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      background={{
        variant: "gradient-bars"}}
      title="Mastery in Lawn Care"
      description="Parker & Sons M.D. provides elite landscaping services to ensure your property remains the envy of the neighborhood. Precision, care, and professional excellence in every cut."
      testimonials={[
        {
          name: "James R.",          handle: "@jamesr",          testimonial: "The best lawn service I have ever hired. Professional and meticulous.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-walking-romantic-happy-holidays-holding-hand-boyfriend-following-her_1150-4662.jpg?_wi=1"},
        {
          name: "Sarah M.",          handle: "@sarahm",          testimonial: "My backyard has never looked this green and healthy. Fantastic service.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/countryside-life-naature-close-up-outdoor-portrait-young-attractive-bearded-caucasian-man-blue-t-shirt-smiling_176420-19896.jpg?_wi=1"},
        {
          name: "David W.",          handle: "@davidw",          testimonial: "Reliable, fast, and high-quality work every single time.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/greenhouse-owner-presenting-flowers-options-potential-customer-retailer-using-laptop_158595-7049.jpg?_wi=1"},
        {
          name: "Linda P.",          handle: "@lindap",          testimonial: "Parker & Sons M.D. brings a level of expertise I couldn't find elsewhere.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-senior-couple-with-water-hose_23-2148256621.jpg?_wi=1"},
        {
          name: "Mark L.",          handle: "@markl",          testimonial: "Absolute perfection. Highly recommended for premium lawn care.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-textbook-lying-park-ground_23-2147850741.jpg?_wi=1"},
      ]}
      buttons={[
        {
          text: "Get Quote",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/worker-is-cutting-grass-with-hose_7502-9835.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/full-shot-friends-playing-petanque-outdoors_23-2149530378.jpg",          alt: "Satisfied client testimonial 1"},
        {
          src: "http://img.b2bpic.net/free-photo/attractive-blonde-girl-tulle-skirt-having-fun-stairs-she-is-smiling-down_197531-617.jpg",          alt: "Satisfied client testimonial 2"},
        {
          src: "http://img.b2bpic.net/free-photo/young-adult-traveling-using-sustainable-mobility_23-2149292681.jpg",          alt: "Satisfied client testimonial 3"},
        {
          src: "http://img.b2bpic.net/free-photo/woman-walking-romantic-happy-holidays-holding-hand-boyfriend-following-her_1150-4660.jpg",          alt: "Satisfied client testimonial 4"},
        {
          src: "http://img.b2bpic.net/free-photo/pretty-girl-sunglasses-dreamily-looking-camera-with-pink-balloons-hand-confetti-around-white-background-isolated_574295-732.jpg",          alt: "Satisfied client testimonial 5"},
      ]}
      marqueeItems={[
        {
          type: "text",          text: "Precision Mowing"},
        {
          type: "text",          text: "Expert Hedging"},
        {
          type: "text",          text: "Organic Feeding"},
        {
          type: "text",          text: "Tree Health"},
        {
          type: "text",          text: "Lawn M.D. Standards"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="The M.D. Difference"
      description={[
        "At Parker & Sons M.D., we approach lawn care like a craft. Every blade of grass is treated with professional precision, ensuring your landscape thrives throughout every season.",        "Our expert team combines traditional landscaping techniques with modern, eco-friendly maintenance solutions for results that don't just look good—they last."]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Precision Mowing",          description: "Crisp, clean cuts tailored to your grass type and season.",          imageSrc: "http://img.b2bpic.net/free-photo/metal-fence-shadow-balcony-with-view-grassy-field-sunny-day_181624-2835.jpg",          titleImageSrc: "http://img.b2bpic.net/free-photo/unrecognizable-gardener-with-modern-weedwacker_329181-20635.jpg",          buttonText: "Learn More"},
        {
          title: "Hedge & Tree Care",          description: "Expert shaping and pruning for healthy growth and structure.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-cutting-plant-leaves_23-2148905279.jpg",          titleImageSrc: "http://img.b2bpic.net/free-photo/beautiful-smiling-lady-with-redhead-curly-hair-standing-apron-holding-big-garden-scissors-while-working-outdoors_574295-947.jpg",          buttonText: "Learn More"},
        {
          title: "Feeding & Care",          description: "Custom nutrient plans for lush, healthy landscapes.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-using-trimming-tool-bush_23-2148256658.jpg",          titleImageSrc: "http://img.b2bpic.net/free-photo/grass-roots-old-tree-background-meadow-rays-yellow-sunset-spring-northern-forest-green-natural-background-banner-postcard-closeup-selective-focus_166373-2530.jpg",          buttonText: "Learn More"},
      ]}
      title="Our Professional Services"
      description="Expert solutions for every aspect of your lawn and garden management."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic",          tag: "Essential",          price: "$150",          period: "/mo",          description: "Weekly mowing and edging for a crisp home exterior.",          button: {
            text: "Start Now"},
          featuresTitle: "Included",          features: [
            "Weekly Mowing",            "Sidewalk Edging",            "Debris Removal"],
        },
        {
          id: "standard",          tag: "Preferred",          price: "$295",          period: "/mo",          description: "Comprehensive maintenance for lush and healthy landscapes.",          button: {
            text: "Get Started"},
          featuresTitle: "Includes Basic Plus",          features: [
            "Hedge Trimming",            "Seasonal Feeding",            "Garden Weeding"],
        },
        {
          id: "premium",          tag: "Elite",          price: "$450",          period: "/mo",          description: "Full-service attention for the most demanding properties.",          button: {
            text: "Contact Us"},
          featuresTitle: "Includes Standard Plus",          features: [
            "Tree Shaping",            "Mulching",            "Priority Scheduling"],
        },
      ]}
      title="Maintenance Plans"
      description="Flexible plans to keep your property at its absolute best year-round."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          title: "Five Stars",          quote: "Remarkable attention to detail every single visit.",          name: "Sarah Jenkins",          role: "Resident",          imageSrc: "http://img.b2bpic.net/free-photo/woman-walking-romantic-happy-holidays-holding-hand-boyfriend-following-her_1150-4662.jpg?_wi=2"},
        {
          id: "2",          title: "Top Notch",          quote: "My yard has never looked healthier since we switched.",          name: "Michael Roberts",          role: "Homeowner",          imageSrc: "http://img.b2bpic.net/free-photo/countryside-life-naature-close-up-outdoor-portrait-young-attractive-bearded-caucasian-man-blue-t-shirt-smiling_176420-19896.jpg?_wi=2"},
        {
          id: "3",          title: "Professionalism",          quote: "Reliable crew and always professional in communication.",          name: "Linda Chen",          role: "Property Manager",          imageSrc: "http://img.b2bpic.net/free-photo/greenhouse-owner-presenting-flowers-options-potential-customer-retailer-using-laptop_158595-7049.jpg?_wi=2"},
        {
          id: "4",          title: "Quality Care",          quote: "The precision work on my hedges is incredible.",          name: "David Thorne",          role: "Resident",          imageSrc: "http://img.b2bpic.net/free-photo/happy-senior-couple-with-water-hose_23-2148256621.jpg?_wi=2"},
        {
          id: "5",          title: "Best in Town",          quote: "Parker & Sons M.D. brings true professionalism to lawn care.",          name: "Emily Watson",          role: "Homeowner",          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-textbook-lying-park-ground_23-2147850741.jpg?_wi=2"},
      ]}
      title="Client Success Stories"
      description="Hear what our premium clients have to say about the M.D. treatment."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",          title: "Do you offer commercial services?",          content: "Yes, we specialize in both premium residential and commercial landscape maintenance."},
        {
          id: "2",          title: "What areas do you cover?",          content: "We serve the entire metro area. Please contact us for your specific location."},
        {
          id: "3",          title: "Are your products safe?",          content: "We prioritize eco-friendly and safe treatments for your lawn and surrounding environment."},
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers to common questions about our services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Start Your Service"
      description="Ready for a lawn that stands out? Let's talk about your requirements."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Email",          required: true,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "How can we help you?",        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/greenhouse-owner-presenting-flowers-options-potential-customer-retailer_158595-7008.jpg"
      buttonText="Request Consultation"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Company",          items: [
            {
              label: "About",              href: "#"},
            {
              label: "Services",              href: "#services"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy",              href: "#"},
            {
              label: "Terms",              href: "#"},
          ],
        },
      ]}
      logoText="Parker & Sons M.D."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
