"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSignup from '@/components/sections/hero/HeroSignup';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Crown, Target, Zap, Sparkles, TrendingUp, Users, Heart, Mail } from "lucide-react";

export default function LandingPage() {
  const handleEmailSignup = (email: string) => {
    console.log('Email signup:', email);
  };

  const handleSubscription = (email: string) => {
    console.log('Subscription:', email);
  };

  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="largeSizeMediumTitles"
      background="circleGradient"
      cardStyle="outline"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Ymnik"
          navItems={[
            { name: "About", id: "about" },
            { name: "Features", id: "features" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" },
            { name: "Join", id: "hero" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSignup
          title="Master the Game of Chess"
          description="Join Ymnik Chess Club and elevate your skills through strategic gameplay, expert coaching, and a vibrant community of chess enthusiasts. From beginners to masters, we have a place for you."
          tag="Strategy & Community"
          tagIcon={Crown}
          background={{ variant: "sparkles-gradient" }}
          inputPlaceholder="Enter your email to join"
          buttonText="Get Started"
          onSubmit={handleEmailSignup}
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="Our Mission"
          tagIcon={Target}
          title="Ymnik: Cultivating Chess Excellence and Community"
          description="Founded by passionate chess enthusiasts, Ymnik Chess Club is dedicated to fostering intellectual growth, strategic thinking, and meaningful connections."
          subdescription="A community where every player can thrive"
          icon={Zap}
          imageSrc="https://img.b2bpic.net/free-photo/chess-game-business-strategy-concept_53876-13393.jpg"
          imageAlt="Chess players engaged in strategic gameplay"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="What We Offer"
          description="Discover the opportunities that await you at Ymnik Chess Club"
          tag="Club Benefits"
          tagIcon={Sparkles}
          features={[
            {
              title: "Weekly Tournaments",              description: "Compete in friendly and competitive tournaments every week to test your skills and climb the rankings.",              imageSrc: "https://img.b2bpic.net/free-photo/man-making-his-move_53876-25165.jpg",              imageAlt: "Chess tournament in progress"
            },
            {
              title: "Expert Coaching",              description: "Learn from experienced chess masters and coaches who provide personalized training and strategy sessions.",              imageSrc: "https://img.b2bpic.net/free-photo/chess-game-business-strategy-concept_53876-13393.jpg",              imageAlt: "Chess coach teaching strategies"
            },
            {
              title: "Community Events",              description: "Enjoy social gatherings, chess nights, and community-building events that strengthen bonds among members.",              imageSrc: "https://img.b2bpic.net/free-photo/man-making-his-move_53876-25165.jpg",              imageAlt: "Community chess gathering"
            },
            {
              title: "Online Platform",              description: "Access our dedicated platform for online games, puzzle solving, and 24/7 training resources.",              imageSrc: "https://img.b2bpic.net/free-photo/chess-game-business-strategy-concept_53876-30572.jpg",              imageAlt: "Online chess platform interface"
            }
          ]
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="two-columns-alternating-heights"
          useInvertedBackground="invertDefault"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="By The Numbers"
          description="Ymnik Chess Club's impact and growth"
          tag="Our Success"
          tagIcon={TrendingUp}
          metrics={[
            { id: "1", value: "500+", description: "Active Members" },
            { id: "2", value: "150+", description: "Monthly Tournaments" },
            { id: "3", value: "2400+", description: "Average Rating" },
            { id: "4", value: "15+", description: "Years of Excellence" }
          ]}
          textboxLayout="default"
          animationType="scale-rotate"
          gridVariant="uniform-all-items-equal"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Leadership"
          description="The passionate experts guiding Ymnik Chess Club"
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",              name: "Alexei Petrov",              role: "Club Director",              imageSrc: "https://img.b2bpic.net/free-photo/side-view-man-with-chess-game_23-2149833667.jpg",              imageAlt: "Alexei Petrov, Club Director"
            },
            {
              id: "2",              name: "Maria Sokolov",              role: "Head Coach",              imageSrc: "https://img.b2bpic.net/free-photo/young-man-suit-jeans-holding-chessboard-figure_176474-10727.jpg",              imageAlt: "Maria Sokolov, Head Coach"
            },
            {
              id: "3",              name: "Viktor Karov",              role: "Tournament Organizer",              imageSrc: "https://img.b2bpic.net/free-photo/medium-shot-old-man-playing-chess_23-2149833660.jpg",              imageAlt: "Viktor Karov, Tournament Organizer"
            },
            {
              id: "4",              name: "Natalia Volkova",              role: "Training Coordinator",              imageSrc: "https://img.b2bpic.net/free-photo/medium-shot-old-man-with-chess-game_23-2149833663.jpg",              imageAlt: "Natalia Volkova, Training Coordinator"
            }
          ]
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          useInvertedBackground="invertDefault"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="What Members Say"
          description="Hear from our vibrant community of chess players"
          tag="Testimonials"
          tagIcon={Heart}
          testimonials={[
            {
              id: "1",              name: "Dmitri Antonov",              handle: "@dmitri_chess",              testimonial: "Ymnik Chess Club transformed my game completely. The coaching is exceptional and the community is incredibly welcoming. Highly recommended!",              rating: 5,
              imageSrc: "https://img.b2bpic.net/free-photo/old-man-with-chess-game-medium-shot_23-2149833662.jpg",              imageAlt: "Dmitri Antonov"
            },
            {
              id: "2",              name: "Elena Kuznetsova",              handle: "@elena_knight",              testimonial: "The weekly tournaments keep me sharp and engaged. I've made lifelong friends here and improved my rating significantly.",              rating: 5,
              imageSrc: "https://img.b2bpic.net/free-photo/portrait-bald-senior-dressed-stylish-suit-posing-against-dark-background_613910-17578.jpg",              imageAlt: "Elena Kuznetsova"
            },
            {
              id: "3",              name: "Igor Semenov",              handle: "@igor_master",              testimonial: "As a competitive player, I appreciate the serious tournament structure and the quality of competition at Ymnik. Top-notch organization!",              rating: 5,
              imageSrc: "https://img.b2bpic.net/free-photo/young-man-holding-chessboard-with-thumb-up-suit_176474-10645.jpg",              imageAlt: "Igor Semenov"
            },
            {
              id: "4",              name: "Sophia Romanova",              handle: "@sophia_chess",              testimonial: "Starting as a beginner, I felt intimidated. But the supportive atmosphere and patient coaches helped me build confidence quickly.",              rating: 5,
              imageSrc: "https://img.b2bpic.net/free-photo/young-handsome-man-holding-chess-looking-positive-happy-standing-smiling-with-confident-smile-showing-teeth_839833-13590.jpg",              imageAlt: "Sophia Romanova"
            },
            {
              id: "5",              name: "Pavel Orlov",              handle: "@pavel_strategy",              testimonial: "The online platform is fantastic for practicing between tournaments. Games, puzzles, and training tools all in one place!",              rating: 5,
              imageSrc: "https://img.b2bpic.net/free-photo/portrait-brothers-playing-chess-together-outdoors_23-2150266850.jpg",              imageAlt: "Pavel Orlov"
            },
            {
              id: "6",              name: "Katarina Volkov",              handle: "@katarina_tactics",              testimonial: "Best decision I made was joining Ymnik. The community spirit and commitment to excellence is unmatched in this city.",              rating: 5,
              imageSrc: "https://img.b2bpic.net/free-photo/young-man-pointing-finger-chessboard-suit-jeans_176474-10971.jpg",              imageAlt: "Katarina Volkov"
            }
          ]}
          showRating={true}
          textboxLayout="default"
          animationType="fade-in"
          useInvertedBackground="noInvert"
          carouselMode="buttons"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Connected"
          tagIcon={Mail}
          title="Join Ymnik Chess Club Today"
          description="Subscribe to stay updated on upcoming tournaments, exclusive training sessions, and community events. Be part of a strategic community that values excellence and growth."
          background={{ variant: "rotated-rays-animated" }}
          useInvertedBackground="noInvert"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe at any time from our mailing list."
          onSubmit={handleSubscription}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Ymnik"
          leftLink={{ text: "Privacy Policy", href: "#" }}
          rightLink={{ text: "Terms of Service", href: "#" }}
        />
      </div>
    </ThemeProvider>
  );
}