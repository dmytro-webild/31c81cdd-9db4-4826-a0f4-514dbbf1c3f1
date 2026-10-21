import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesBentoGrid from '@/components/sections/features/FeaturesBentoGrid';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroSplitVerticalMarqueeTall from '@/components/sections/hero/HeroSplitVerticalMarqueeTall';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import TestimonialQuoteCards from '@/components/sections/testimonial/TestimonialQuoteCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplitVerticalMarqueeTall
      tag="Coventry's Finest"
      title="Phat Buns: Where Flavor Meets Freshness"
      description="Experience the ultimate burger destination in Coventry. Fresh ingredients, bold flavors, and a modern dining experience."
      primaryButton={{
        text: "View Menu",
        href: "#menu",
      }}
      secondaryButton={{
        text: "Order Now",
        href: "#contact",
      }}
      leftItems={[
        {
          imageSrc: "https://images.pexels.com/photos/29173120/pexels-photo-29173120.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/33865562/pexels-photo-33865562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/1474974/pexels-photo-1474974.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/11299734/pexels-photo-11299734.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/14930480/pexels-photo-14930480.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/39551220/pexels-photo-39551220.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      rightItems={[
        {
          imageSrc: "https://images.pexels.com/photos/34014196/pexels-photo-34014196.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/10066814/pexels-photo-10066814.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/36782573/pexels-photo-36782573.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/8879369/pexels-photo-8879369.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="menu" data-section="menu">
    <SectionErrorBoundary name="menu">
          <FeaturesBentoGrid
      tag="Our Favorites"
      title="Unmissable Bites"
      description="From classic burgers to indulgent shakes, every bite is crafted to perfection."
      features={[
        {
          title: "Premium Angus Burgers",
          description: "4oz Angus beef patties on artisan buns.",
          imageSrc: "https://images.pexels.com/photos/15953046/pexels-photo-15953046.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Crispy Chicken Wings",
          description: "Tossed in your choice of signature sauces.",
          imageSrc: "https://images.pexels.com/photos/33101863/pexels-photo-33101863.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Signature Shakes",
          description: "Indulgent Strawberry Cheesecake & Peanut Butter.",
          imageSrc: "https://images.pexels.com/photos/33694865/pexels-photo-33694865.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Volcano Cheese Nuggets",
          description: "A spicy, melted cheese explosion in every bite.",
          imageSrc: "https://images.pexels.com/photos/1137473/pexels-photo-1137473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      primaryButton={{
        text: "Full Menu",
        href: "https://phatbuns.co.uk",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="highlights" data-section="highlights">
    <SectionErrorBoundary name="highlights">
          <FeaturesImageBento
      tag="Menu Highlights"
      title="The Phat Selection"
      description="Discover why our regulars keep coming back for more."
      items={[
        {
          title: "Classic Angus Burger",
          description: "Served with hot Tater Tots.",
          imageSrc: "https://images.pexels.com/photos/5609525/pexels-photo-5609525.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Spicy Chick Burger",
          description: "Crispy fillet with a spicy kick.",
          imageSrc: "https://images.pexels.com/photos/4109240/pexels-photo-4109240.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Bao Beef Burger",
          description: "Our unique fusion creation.",
          imageSrc: "https://images.pexels.com/photos/18580149/pexels-photo-18580149.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Kids Meal",
          description: "Perfect portion for the little ones.",
          imageSrc: "https://images.pexels.com/photos/27175594/pexels-photo-27175594.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Peanut Butter Shake",
          description: "Creamy and rich flavor.",
          imageSrc: "https://images.pexels.com/photos/6463666/pexels-photo-6463666.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Strawberry Cheesecake Shake",
          description: "The perfect dessert finish.",
          imageSrc: "https://images.pexels.com/photos/11912069/pexels-photo-11912069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Cheese Nuggets",
          description: "Popular appetizer side.",
          imageSrc: "https://images.pexels.com/photos/39038439/pexels-photo-39038439.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialQuoteCards
      tag="Reviews"
      title="What Our Diners Say"
      description="A 4.4 star rating backed by over 1,500 happy burger lovers."
      testimonials={[
        {
          name: "Nabeel Khan",
          role: "Local Guide",
          quote: "Completely surpassed my expectations! The mac and cheese bites were unreal.",
          imageSrc: "https://images.pexels.com/photos/12585676/pexels-photo-12585676.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Unaiza Raza",
          role: "Customer",
          quote: "The place is very well kept, clean and sanitary. Staff is super friendly.",
          imageSrc: "https://images.pexels.com/photos/5920756/pexels-photo-5920756.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Mark D.",
          role: "Foodie",
          quote: "Best burgers in Coventry. Always fresh and never disappointed.",
          imageSrc: "https://images.pexels.com/photos/37594380/pexels-photo-37594380.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Sarah W.",
          role: "Regular",
          quote: "Tenders were great with many sauce options to choose from.",
          imageSrc: "https://images.pexels.com/photos/5836846/pexels-photo-5836846.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "John K.",
          role: "Diner",
          quote: "Modern atmosphere and affordable prices. Highly recommend.",
          imageSrc: "https://images.pexels.com/photos/30818111/pexels-photo-30818111.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
      tag="Our Impact"
      title="By the Numbers"
      description="We've been serving up satisfaction for thousands of customers."
      metrics={[
        {
          value: "1,500+",
          title: "Happy Reviews",
          features: [
            "Consistently rated 4.4 stars",
            "Fresh locally sourced ingredients",
            "Daily customer love",
          ],
        },
        {
          value: "£10-20",
          title: "Average Spend",
          features: [
            "High quality value",
            "Generous portion sizes",
            "Meal deal savings",
          ],
        },
        {
          value: "2AM",
          title: "Open Until Late",
          features: [
            "Late night cravings sorted",
            "Modern dining environment",
            "Fast service availability",
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSplitMedia
      tag="Common Questions"
      title="Need Information?"
      description="Get answers to frequently asked questions about dining at Phat Buns."
      items={[
        {
          question: "Are you open for delivery?",
          answer: "Yes, we offer convenient no-contact delivery.",
        },
        {
          question: "Can I pick up my food?",
          answer: "Absolutely, we provide kerbside pickup and dine-in options.",
        },
        {
          question: "Do you offer kids meals?",
          answer: "Yes, our kids meal includes a delicious burger and side.",
        },
        {
          question: "Are you open late?",
          answer: "We are open until 2:00 am most days to satisfy your late-night cravings.",
        },
      ]}
      imageSrc="https://images.pexels.com/photos/12824138/pexels-photo-12824138.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Get in Touch"
      text="Ready for a Phat Bun? Visit us in Coventry or order online now."
      primaryButton={{
        text: "024 7531 5555",
        href: "tel:02475315555",
      }}
      secondaryButton={{
        text: "Order Online",
        href: "https://phatbuns.co.uk",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
