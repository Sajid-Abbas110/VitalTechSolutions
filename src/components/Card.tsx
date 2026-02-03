import React, { useState } from 'react';

// --- Data Structure for Portfolio Items ---
type CategoryType = 'logos' | 'websites' | 'video' | 'stationery' | 'illustration' | 'mobile_apps';

interface PortfolioItem {
  id: string;
  category: CategoryType;
  imageUrl: string;
  altText: string;
}

interface Category { // Added interface to strongly type the categories array
  label: string;
  value: CategoryType;
}

// Replaced all external image URLs with reliable placeholders
const allPortfolioItems: PortfolioItem[] = [
  // Logos - Using existin "l" images which seem to be logos
  { id: 'logo1', category: 'logos', imageUrl: '/l1.jpg', altText: 'Minimalist black logo on white background' },
  { id: 'logo2', category: 'logos', imageUrl: '/l2.jpg', altText: 'Green abstract logo design' },
  { id: 'logo3', category: 'logos', imageUrl: '/l3.jpg', altText: 'Red framed text logo' },
  { id: 'logo4', category: 'logos', imageUrl: '/l4.jpg', altText: 'Red HUUUGE logo on black' },
  { id: 'logo5', category: 'logos', imageUrl: '/l5.jpg', altText: 'Neon green text logo emotions' },
  { id: 'logo6', category: 'logos', imageUrl: '/l6.jpg', altText: 'White script logo on black' },
  { id: 'logo7', category: 'logos', imageUrl: '/l7.jpg', altText: 'Simple geometric logo' },
  { id: 'logo8', category: 'logos', imageUrl: '/l8.jpg', altText: 'Brand logo on a dark background' },
  { id: 'logo9', category: 'logos', imageUrl: '/l9.jpg', altText: 'Red framed text logo' },

  // Websites - Using "pro" and "hero" images
  { id: 'web1', category: 'websites', imageUrl: '/pro1.jpg', altText: 'E-commerce website design' },
  { id: 'web2', category: 'websites', imageUrl: '/pro2.jpg', altText: 'Portfolio website interface' },
  { id: 'web3', category: 'websites', imageUrl: '/pro3.png', altText: 'Corporate website dashboard' },
  { id: 'web4', category: 'websites', imageUrl: '/pro4.jpg', altText: 'Creative agency website' },
  { id: 'web5', category: 'websites', imageUrl: '/new-ai-desk.jpg', altText: 'AI Platform Desktop View' },
  { id: 'web6', category: 'websites', imageUrl: '/contact.jpg', altText: 'Modern Contact Page' },
  { id: 'web7', category: 'websites', imageUrl: '/hero.jpg', altText: 'Immersive Hero Section' },
  { id: 'web8', category: 'websites', imageUrl: '/code.jpg', altText: 'Web Development Codebase' },

  // Video - Using new generated images + relevant existing
  { id: 'vid1', category: 'video', imageUrl: '/video_1.png', altText: 'Professional Video Editing Timeline' },
  { id: 'vid2', category: 'video', imageUrl: '/video_2.png', altText: 'Behind the Scenes Filming' },
  { id: 'vid3', category: 'video', imageUrl: '/bg-cover.png', altText: 'Motion Graphics Background' },
  { id: 'vid4', category: 'video', imageUrl: '/banner-cover.jpg', altText: 'Cinematic Banner Video' },

  // Stationery - Using new generated image + branding logos
  { id: 'stat1', category: 'stationery', imageUrl: '/stat_1.png', altText: 'Luxury Business Stationery Mockup' },
  { id: 'stat2', category: 'stationery', imageUrl: '/l4.jpg', altText: 'Premium Business Card Branding' },
  { id: 'stat3', category: 'stationery', imageUrl: '/l6.jpg', altText: 'Corporate Identity Set' },
  { id: 'stat4', category: 'stationery', imageUrl: '/logo.png', altText: 'Official Company Letterhead' },

  // Illustration - Using new generated image + artistic ones
  { id: 'ill1', category: 'illustration', imageUrl: '/ill_1.png', altText: 'Vibrant Digital Illustration' },
  { id: 'ill2', category: 'illustration', imageUrl: '/bg-pattern.png', altText: 'Seamless Pattern Design' },
  { id: 'ill3', category: 'illustration', imageUrl: '/l5.jpg', altText: 'Neon Character Art' },
  { id: 'ill4', category: 'illustration', imageUrl: '/l2.jpg', altText: 'Abstract Vector Graphics' },

  // Mobile Apps - Using new generated images + mobile specific ones
  { id: 'app1', category: 'mobile_apps', imageUrl: '/app_1.png', altText: 'Modern Mobile Dashboard UI' },
  { id: 'app2', category: 'mobile_apps', imageUrl: '/app_2.png', altText: 'Secure Login Screen App' },
  { id: 'app3', category: 'mobile_apps', imageUrl: '/new-ai-mob.jpg', altText: 'AI Assistant Mobile Interface' },
  { id: 'app4', category: 'mobile_apps', imageUrl: '/pro2.1.jpg', altText: 'Fitness Tracking App' },
  { id: 'app5', category: 'mobile_apps', imageUrl: '/pro4.jpg', altText: 'Responsive Mobile Layout' },
];

const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('logos');
  const [itemsToShow, setItemsToShow] = useState(6); // Initial number of items to show

  // FIX: Explicitly typed the categories array using the Category interface
  const categories: Category[] = [
    { label: 'Logos', value: 'logos' },
    { label: 'Websites', value: 'websites' },
    { label: 'Video', value: 'video' },
    { label: 'Stationery', value: 'stationery' },
    { label: 'Illustration', value: 'illustration' },
    { label: 'Mobile Apps', value: 'mobile_apps' },
  ];

  const filteredItems = allPortfolioItems.filter(item => item.category === activeCategory);
  const displayedItems = filteredItems.slice(0, itemsToShow);

  const handleCategoryClick = (category: CategoryType) => {
    setActiveCategory(category);
    setItemsToShow(6); // Reset items to show when category changes
  };

  const handleLoadMore = () => {
    setItemsToShow(prev => prev + 6); // Load 6 more items
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center md:text-left mb-12">
          <p className="text-lg text-[#98bc62] font-semibold mb-2">Our Recent Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2c5e2b] leading-tight mb-4">
            Solutions That Make the Future Better!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto md:mx-0 text-lg">
            With the support of thousands of clients and satisfied brands worldwide, you can place your trust in us. Don't let your brand showcase the traditional approach, but design a trending digital presence.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center md:justify-center gap-4 mb-12 border-b border-gray-200 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleCategoryClick(cat.value)}
              className={`
                px-6 py-2 rounded-full text-lg font-medium transition-all duration-300
                ${activeCategory === cat.value
                  ? 'bg-[#2c5e2b] text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-[#2c5e2b]'
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.length > 0 ? (
            displayedItems.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9 sm:aspect-h-10">
                <img
                  src={item.imageUrl}
                  alt={item.altText}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                {/* Custom Modal Placeholder (to avoid using alert()) */}
                <div className="absolute inset-0 bg-[#2c5e2b] bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  // Note: Replaced alert() with a console log for compliance, you should implement a full modal component.
                  onClick={() => console.log(`Viewing project details for: ${item.altText}`)}
                >
                  <div className="text-center p-4">
                    <p className="text-white text-lg font-bold">{item.altText}</p>
                    <p className="text-gray-200 text-sm mt-1 uppercase tracking-wider">{item.category.replace('_', ' ')}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="lg:col-span-3 text-center text-gray-500 text-xl py-10">
              No items found for this category.
            </div>
          )}
        </div>

        {/* Load More Button */}
        {filteredItems.length > itemsToShow && (
          <div className="text-center mt-16">
            <button
              onClick={handleLoadMore}

              className="px-5 py-3 border bg-[#2c5e2b] hover:border-[#2c5e2b] rounded-full text-sm text-white hover:bg-[#ffff] hover:text-[#2c5e2b] transition"
            >
              Load More
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

// Wrapper App component to render the Portfolio Section
const App: React.FC = () => (
  <div className=" bg-white font-inter">
    <PortfolioSection />
  </div>
);

export default App;