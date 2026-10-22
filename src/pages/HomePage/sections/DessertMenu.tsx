import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Tag from "@/components/ui/Tag";
import Card from "@/components/ui/Card";

const desserts = [
  {
    category: "Build Your Own Dessert",
    subtitle: "Base Options",
    items: [
      { name: "American Pancake", price: "£5.00" },
      { name: "French Toast", price: "£5.50" },
      { name: "Double Stick Waffle", price: "£5.50" },
      { name: "Regular Brownie", price: "£5.00" },
      { name: "Large Brownie", price: "£7.00" },
    ],
    extras: [
      { title: "Toppings (+£1.00)", list: "Banana, Marshmallows, Fudge Brownie, Fudge Bites, Oreo Crumbs, Strawberries, Ferrero Rocher, Kinder Bueno" },
      { title: "Sprinkles (+£1.00)", list: "100s & 1000s, Icing Sugar, Raspberry Sherbet, Blueberry Sherbet, Caramel Nuts, White Chocolate Flakes, Milk Chocolate Flakes, Lotus Crumbs" }
    ]
  },
  {
    category: "Cheesecakes",
    subtitle: "Rich & Creamy Desserts",
    items: [
      { name: "Ferrero Cheesecake", price: "£8.00", desc: "Served with a drizzle of Nutella sauce" },
      { name: "Luxury Oreo Cheesecake", price: "£8.00", desc: "Decadent Oreo crust and creamy filling" },
      { name: "Salted Caramel Cheesecake", price: "£8.00", desc: "Rich caramel layers with a hint of salt" },
      { name: "Strawberry Cheesecake", price: "£7.50", desc: "Cream full fat soft cheese, vanilla, topped with strawberry puree" },
    ]
  },
  {
    category: "Cakes & Hot Puddings",
    subtitle: "Served Fresh & Warm",
    items: [
      { name: "Cornflake Tart with Custard", price: "£8.00", desc: "Made with Kellogg's Corn Flakes, raspberry sauce, served with warm custard" },
      { name: "Chocolate Fudge Cake", price: "£6.50", desc: "Rich chocolate cake filled & covered with chocolate fudge icing" },
      { name: "Warmed Chocolate Fudge Cake & Custard", price: "£6.50", desc: "Rich chocolate cake with chocolate fudge icing, served warm with custard" },
      { name: "Jam and Coconut with Custard", price: "£7.00", desc: "Moist sponge with jam & coconut, raspberry drizzle, served with custard" },
    ]
  }
];

export default function DessertMenuSection() {
  return (
    <div data-webild-section="dessert-menu" id="dessert-menu">
      <section aria-label="Dessert Menu" className="py-20">
        <div className="flex flex-col gap-10 w-content-width mx-auto">
          <div className="flex flex-col items-center gap-3 text-center">
            <Tag text="Desserts & Sweets" />
            <TextAnimation
              text="Dessert Menu"
              variant="fade-blur"
              gradientText={true}
              tag="h2"
              className="text-5xl md:text-6xl font-bold tracking-tight text-foreground"
            />
            <TextAnimation
              text="Indulge in our freshly made pancakes, waffles, cheesecakes, and warm cakes served with custard."
              variant="fade-blur"
              gradientText={false}
              tag="p"
              className="text-lg text-accent max-w-2xl"
            />
          </div>

          <ScrollReveal variant="fade-blur">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {desserts.map((section) => (
                <div key={section.category} className="card p-6 rounded flex flex-col justify-between gap-6">
                  <div>
                    <div className="border-b border-foreground/10 pb-4 mb-4">
                      <h3 className="text-2xl font-bold text-foreground">{section.category}</h3>
                      <p className="text-sm text-accent mt-0.5">{section.subtitle}</p>
                    </div>

                    <div className="space-y-4">
                      {section.items.map((item) => (
                        <div key={item.name} className="flex flex-col gap-0.5">
                          <div className="flex justify-between items-baseline font-semibold text-foreground">
                            <span>{item.name}</span>
                            <span className="text-primary-cta ml-2 font-bold">{item.price}</span>
                          </div>
                          {item.desc && (
                            <p className="text-xs text-accent leading-snug">{item.desc}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {section.extras && (
                    <div className="space-y-3 pt-4 border-t border-foreground/10 text-xs">
                      {section.extras.map((extra) => (
                        <div key={extra.title} className="p-3 rounded border border-foreground/10">
                          <p className="font-bold text-foreground">{extra.title}</p>
                          <p className="text-accent mt-1 leading-relaxed">{extra.list}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}