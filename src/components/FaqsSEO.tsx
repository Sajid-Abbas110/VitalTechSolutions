import React from "react";

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const FAQ_DATA: FAQItem[] = [
    {
        id: 1,
        question: "What is SEO and why is it important?",
        answer: "SEO (Search Engine Optimization) is the process of improving your website's visibility on search engines. It's important because it helps drive organic, unpaid traffic to your site.",
    },
    {
        id: 2,
        question: "How long does it take for SEO to show results?",
        answer: "SEO is a long-term strategy. While some changes can be seen within weeks, significant results typically take 3 to 6 months to materialize.",
    },
    {
        id: 3,
        question: "Do you provide keyword research services?",
        answer: "Yes, we perform thorough keyword research to identify the terms your target audience is searching for and optimize your content accordingly.",
    },
    {
        id: 4,
        question: "What kind of content do you write?",
        answer: "We write various types of content, including blog posts, website copy, articles, and product descriptions, all optimized for SEO.",
    },
    {
        id: 5,
        question: "How do you measure the success of SEO campaigns?",
        answer: "We use tools like Google Analytics and Search Console to track rankings, organic traffic, and conversion rates.",
    },
    {
        id: 6,
        question: "Can you help fix technical SEO issues on my website?",
        answer: "Yes, our team addresses technical aspects such as site speed, mobile-friendliness, and crawlability to improve your search engine rankings.",
    },
];

const QuestionIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-[#2c5e2b] shrink-0"
    >
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <path d="M12 17h.01" />
        <circle cx="12" cy="12" r="10" />
    </svg>
);

const FAQCard: React.FC<{ item: FAQItem }> = ({ item }) => {
    return (
        <div className="flex space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <div className="pt-1">
                <QuestionIcon />
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
        </div>
    );
};

const FaqsSEO: React.FC = () => {
    const col1 = FAQ_DATA.filter((_, index) => index % 2 === 0);
    const col2 = FAQ_DATA.filter((_, index) => index % 2 !== 0);

    return (
        <div className="min-h-screen bg-gray-50 font-sans p-4 sm:p-8 lg:p-12">
            <div className="max-w-7xl mx-auto">
                <header className="mb-12 sm:mb-16">
                    <p className="text-sm text-[#2c5e2b] font-semibold mb-2">
                        Frequently Asked Questions
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#2c5e2b] leading-tight mb-6">
                        Your SEO & Content Writing Questions Answered-FAQs
                    </h1>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-12">
                    <div className="space-y-10">
                        {col1.map((item) => (
                            <FAQCard key={item.id} item={item} />
                        ))}
                    </div>
                    <div className="space-y-10">
                        {col2.map((item) => (
                            <FAQCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqsSEO;
