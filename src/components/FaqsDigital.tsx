import React from "react";

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const FAQ_DATA: FAQItem[] = [
    {
        id: 1,
        question: "What is digital marketing?",
        answer: "Digital marketing is the use of the internet, mobile devices, social media, search engines, and other channels to reach consumers.",
    },
    {
        id: 2,
        question: "How can digital marketing help my business grow?",
        answer: "It allows you to reach a wider audience, target specific demographics, and measure the effectiveness of your campaigns in real-time.",
    },
    {
        id: 3,
        question: "Which social media platforms should my business be on?",
        answer: "This depends on your target audience. We help you identify where your customers spend their time and create a presence there.",
    },
    {
        id: 4,
        question: "What is the importance of content marketing?",
        answer: "Content marketing helps build trust with your audience, improves SEO, and establishes your brand as an authority in your industry.",
    },
    {
        id: 5,
        question: "How long does it take to see results from digital marketing?",
        answer: "Some strategies like PPC can show immediate results, while others like SEO and content marketing take time to build momentum.",
    },
    {
        id: 6,
        question: "Do you provide custom digital marketing strategies?",
        answer: "Yes, we tailor our strategies to meet the unique goals and challenges of your business.",
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

const FaqsDigital: React.FC = () => {
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
                        Your Digital Marketing Questions Answered-FAQs
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

export default FaqsDigital;
