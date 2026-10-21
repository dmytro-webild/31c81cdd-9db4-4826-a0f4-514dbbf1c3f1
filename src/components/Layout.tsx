import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import NavbarFloating from '@/components/ui/NavbarFloating';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Menu",
    "href": "#menu"
  },
  {
    "name": "Highlights",
    "href": "#highlights"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Faq",
    "href": "#faq"
  }
];

  return (
    <StyleProvider buttonVariant="arrow" siteBackground="gridLines" heroBackground="radialGradient">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloating
      logo="Phat Buns"
      ctaButton={{
        text: "Order Now",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleMedia
      brand="Phat Buns"
      columns={[
        {
          title: "Restaurant",
          items: [
            {
              label: "Menu",
              href: "#menu",
            },
            {
              label: "About",
              href: "#",
            },
            {
              label: "Reviews",
              href: "#testimonials",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Order Delivery",
              href: "https://phatbuns.co.uk",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2024 Phat Buns Coventry. All rights reserved."
      links={[
        {
          label: "Instagram",
          href: "#",
        },
        {
          label: "Twitter",
          href: "#",
        },
        {
          label: "Facebook",
          href: "#",
        },
      ]}
      imageSrc="https://images.pexels.com/photos/29173120/pexels-photo-29173120.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
