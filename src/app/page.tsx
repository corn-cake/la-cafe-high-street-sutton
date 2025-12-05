"use client";

import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "Our Story" },
  { href: "#reviews", label: "Reviews" },
  { href: "#location", label: "Visit Us" },
];

const AWARDS = [
  { title: "Good Food Award", years: "2023, 2024, 2025", highlight: "Gold Seal" },
  { title: "Best Place to Eat", years: "Sutton 2024", highlight: "Time & Leisure" },
  { title: "Best Coffee House", years: "South London", highlight: "Runner-up" },
  { title: "#LoveSuttonBiz", years: "2025", highlight: "Award Winner" },
];

const MENU_ITEMS = [
  {
    name: "Signature Breakfast",
    price: "£14",
    description:
      "Pork sausages, crispy streaky bacon, French butter scrambled eggs with signature white truffle sauce, Heinz beans, roasted vine tomatoes, sourdough toast.",
    tag: "Most Popular",
  },
  {
    name: "28-Day Short Rib",
    price: "£26",
    description:
      "Incredibly tender slow-cooked short rib with maple-flavored parsnips, vine tomatoes, Portobello mushrooms, kale, cabbage, peas, Parmesan, and rich gravy.",
    tag: "Chef's Choice",
  },
  {
    name: "Signature Breakfast Baps",
    price: "£9",
    description:
      "Bacon and sausage in a fresh bap with our famous white truffle sauce — the dish customers say is 'like something from a Michelin restaurant.'",
    tag: "Signature",
  },
  {
    name: "Coffee Royale",
    price: "£8",
    description:
      "Cappuccino infused with Baileys, topped with whipped cream and chocolate pearls. The perfect indulgent treat.",
    tag: "Specialty",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "La Café has become our go-to place, and every visit feels consistently warm and welcoming. The cosy ambience, pleasant vibe, and friendly service make it a perfect spot to relax.",
    author: "Google Review",
    rating: 5,
  },
  {
    quote:
      "LA cafe is simply the best cafe around Sutton (maybe London!). Food is super high quality, everything is thought about and they create an amazing combination of flavours and textures.",
    author: "Google Review",
    rating: 5,
  },
  {
    quote:
      "The best café I have ever been to. More than just a café; it's a bistro that focuses on elevating the culinary experience.",
    author: "Gary Eats — 10/10",
    rating: 5,
  },
];

const FAQS = [
  {
    q: "Do you take reservations?",
    a: "Walk-ins welcome! For larger groups or special occasions like birthdays and company lunches, please contact us via Instagram or Facebook.",
  },
  {
    q: "What makes your breakfast special?",
    a: "Our signature French butter scrambled eggs with homemade white truffle sauce — customers describe it as 'Michelin-level dining' in a relaxed café setting.",
  },
  {
    q: "Is everything really homemade?",
    a: "Yes! Every croissant, pastry, dessert, soup, and sauce is made fresh in-house daily by our talented team.",
  },
  {
    q: "Do you repeat your daily specials?",
    a: "No. In 4+ years, we've never repeated a daily soup or special. Every visit offers something new and exciting.",
  },
  {
    q: "Are you dog-friendly?",
    a: "Absolutely! Dogs are always welcome at LA Café.",
  },
];

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-light/50 dark:bg-black/90 dark:border-neutral-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/img.png"
            alt="LA Café"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="font-serif text-xl font-semibold text-navy dark:text-white">
            LA Café
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-600 hover:text-navy transition-colors dark:text-neutral-300 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://maps.app.goo.gl/4yycwuXKQG5tS3WY7"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-navy shadow-sm hover:bg-brand-dark transition-colors"
          >
            Get Directions
          </a>
        </div>

        <button
          type="button"
          className="md:hidden p-2 text-neutral-600 dark:text-neutral-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-brand-light/50 dark:border-neutral-800 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-neutral-600 dark:text-neutral-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://maps.app.goo.gl/4yycwuXKQG5tS3WY7"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block w-full rounded-full bg-brand px-5 py-3 text-center font-semibold text-navy"
          >
            Get Directions
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-light/30 via-transparent to-cream dark:from-brand/10 dark:via-transparent dark:to-black" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center">
        <div className="mb-8 flex justify-center">
          <Image
            src="/img.png"
            alt="LA Café"
            width={140}
            height={140}
            className="rounded-full shadow-xl"
            priority
          />
        </div>

        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2 text-sm font-medium text-gold dark:bg-gold/20">
          <StarIcon className="w-4 h-4" />
          Good Food Award Gold Seal 2025
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl md:text-6xl dark:text-white">
          Michelin-Inspired Dining
          <span className="block text-brand-dark mt-2">In a Relaxed Setting</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          Award-winning bistro-style café in the heart of Sutton.
          Everything homemade, daily specials that never repeat, and our signature white truffle sauce
          that customers call &ldquo;Michelin-level.&rdquo;
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://maps.app.goo.gl/4yycwuXKQG5tS3WY7"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto rounded-full bg-navy px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-neutral-800 transition-colors dark:bg-brand dark:text-navy dark:hover:bg-brand-dark"
          >
            Visit Us Today
          </a>
          <a
            href="#menu"
            className="w-full sm:w-auto rounded-full border-2 border-navy/20 px-8 py-4 text-base font-semibold text-navy hover:border-navy/40 transition-colors dark:border-white/20 dark:text-white dark:hover:border-white/40"
          >
            View Menu
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-neutral-500 dark:text-neutral-400">
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon key={index} className="w-4 h-4 text-gold" />
              ))}
            </div>
            <span>1,285+ Reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Opposite Sutton Station</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span>Dog Friendly</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Awards() {
  return (
    <section className="bg-navy py-16 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {AWARDS.map((award) => (
            <div key={award.title} className="text-center">
              <div className="text-gold text-sm font-semibold uppercase tracking-wider">
                {award.highlight}
              </div>
              <div className="mt-2 text-white font-serif text-lg font-medium">
                {award.title}
              </div>
              <div className="mt-1 text-neutral-400 text-sm">{award.years}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Menu() {
  return (
    <section id="menu" className="py-24 bg-cream dark:bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl dark:text-white">
            Our Signature Dishes
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            Everything homemade. Daily specials that never repeat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {MENU_ITEMS.map((item) => (
            <div
              key={item.name}
              className="group relative bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-brand-light/30 dark:border-neutral-800"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="inline-block px-2.5 py-1 text-xs font-medium bg-brand-light text-navy rounded-full mb-2 dark:bg-brand/20 dark:text-brand">
                    {item.tag}
                  </span>
                  <h3 className="text-xl font-semibold text-navy dark:text-white">
                    {item.name}
                  </h3>
                </div>
                <span className="text-xl font-bold text-brand-dark dark:text-brand">
                  {item.price}
                </span>
              </div>
              <p className="text-neutral-600 leading-relaxed dark:text-neutral-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm">
              Plus daily-changing soups and specials — in 4+ years, we&apos;ve never repeated one!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl dark:text-white">
              Great Food Shouldn&apos;t Be Reserved for the Elite
            </h2>
            <div className="mt-6 space-y-4 text-neutral-600 leading-relaxed dark:text-neutral-400">
              <p>
                I&apos;m Ankur Baria, and I opened LA Café in May 2021 during the pandemic,
                investing my life savings into a dream: bringing Michelin-level quality to
                Sutton in a relaxed, welcoming environment.
              </p>
              <p>
                With 26 years in fine dining hospitality — including serving world leaders
                like Bill and Hillary Clinton — I knew what exceptional food looked like.
                But I believed everyone deserves that experience, not just the elite.
              </p>
              <p>
                The first two years, I didn&apos;t earn a single penny. We had to put money
                into the café just to keep the doors open. But when customers started saying
                our bacon baps with white truffle sauce were &ldquo;like something from a
                Michelin restaurant,&rdquo; I knew we had something special.
              </p>
            </div>
            <blockquote className="mt-8 border-l-4 border-brand pl-6 italic text-lg text-navy dark:text-white">
              &ldquo;We don&apos;t chase trends. We chase excellence and authenticity.&rdquo;
            </blockquote>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand-light to-brand p-8 flex items-center justify-center dark:from-brand/30 dark:to-brand/10">
              <div className="text-center text-navy dark:text-white">
                <div className="text-6xl font-bold font-serif">26+</div>
                <div className="text-lg mt-2">Years of Fine Dining Experience</div>
                <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/50 dark:bg-white/10 rounded-xl p-4">
                    <div className="font-bold text-2xl">50+</div>
                    <div>Daily Customers</div>
                  </div>
                  <div className="bg-white/50 dark:bg-white/10 rounded-xl p-4">
                    <div className="font-bold text-2xl">4+</div>
                    <div>Years Strong</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-brand-light/30 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon key={index} className="w-6 h-6 text-gold" />
            ))}
          </div>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl dark:text-white">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            5-star rating with 1,285+ Google reviews
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <StarIcon key={starIndex} className="w-5 h-5 text-gold" />
                ))}
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                — {testimonial.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="py-24 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl dark:text-white">
              Visit Us
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              Find us right opposite Sutton train station — just steps away from the platform.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-light flex items-center justify-center dark:bg-brand/20">
                  <svg className="w-6 h-6 text-navy dark:text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-navy dark:text-white">Address</div>
                  <div className="text-neutral-600 dark:text-neutral-400">
                    1a-1b High Street<br />
                    Sutton SM1 1DE<br />
                    United Kingdom
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-light flex items-center justify-center dark:bg-brand/20">
                  <svg className="w-6 h-6 text-navy dark:text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-navy dark:text-white">Getting Here</div>
                  <div className="text-neutral-600 dark:text-neutral-400">
                    Directly opposite Sutton train station.<br />
                    2 min walk from the platform.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://maps.app.goo.gl/4yycwuXKQG5tS3WY7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-semibold text-white hover:bg-neutral-800 transition-colors dark:bg-brand dark:text-navy"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Get Directions
              </a>
              <a
                href="https://www.instagram.com/lacafesutton"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-navy/20 px-6 py-3 font-semibold text-navy hover:border-navy/40 transition-colors dark:border-white/20 dark:text-white"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                @lacafesutton
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2492.0!2d-0.1916015!3d51.3595794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876098d7ba3425b%3A0xeebe6100de7e3797!2sLA%20Cafe!5e0!3m2!1sen!2suk!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LA Café Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>();

  return (
    <section className="py-24 bg-cream dark:bg-neutral-950">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-900 rounded-xl border border-brand-light/30 dark:border-neutral-800 overflow-hidden"
            >
              <button
                type="button"
                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4"
                onClick={() => setOpenIndex(openIndex === index ? undefined : index)}
              >
                <span className="font-medium text-navy dark:text-white">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-neutral-400 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-neutral-600 dark:text-neutral-400">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 bg-navy dark:bg-brand/10">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl dark:text-white">
          Experience Award-Winning Dining
        </h2>
        <p className="mt-4 text-lg text-neutral-300 dark:text-neutral-400">
          Join us for breakfast, brunch, or lunch. No reservations needed — just walk in and enjoy.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://maps.app.goo.gl/4yycwuXKQG5tS3WY7"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto rounded-full bg-brand px-8 py-4 text-base font-semibold text-navy shadow-lg hover:bg-brand-dark transition-colors"
          >
            Get Directions
          </a>
          <a
            href="https://www.instagram.com/lacafesutton"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:border-white/50 transition-colors"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-neutral-900 py-12 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/img.png"
              alt="LA Café"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <div className="font-serif text-lg font-semibold text-white">LA Café</div>
              <div className="text-sm text-neutral-400">Artisan Coffee, Desserts & More</div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/lacafesutton"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/Lacafesutton"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-sm text-neutral-500">
          <p>
            © {new Date().getFullYear()} LA Café. 1a-1b High Street, Sutton SM1 1DE.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Awards />
        <Menu />
        <About />
        <Testimonials />
        <Location />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
