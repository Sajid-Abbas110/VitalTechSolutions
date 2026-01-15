import React from "react";

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const FAQ_DATA: FAQItem[] = [
    {
        id: 1,
        question: "What is the difference between UI and UX?",
        answer: "UI (User Interface) refers to the visual elements users interact with, while UX (User Experience) focuses on the overall feel and usability of the product.",
    },
    {
        id: 2,
        question: "How do you start a UI/UX project?",
        answer: "We begin with research to understand your users' needs and goals, followed by wireframing, prototyping, and testing.",
    },
    {
        id: 3,
        question: "Do you provide redesign services for existing websites?",
        answer: "Yes, we can audit your current site and provide a fresh, user-centric design to improve engagement and conversions.",
    },
    {
        id: 4,
        question: "What tools do you use for design?",
        answer: "Our designers primarily use industry-standard tools like Figma, Adobe XD, and Sketch for creating layouts and prototypes.",
    },
    {
        id: 5,
        question: "How long does the UI/UX design process take?",
        answer: "The timeline depends on the project's scope and complexity. We'll provide a clear schedule after the initial discovery phase.",
    },
    {
        id: 6,
        question: "Is mobile responsiveness part of UI/UX design?",
        answer: "Absolutely. We ensure that our designs provide a seamless experience across all devices and screen sizes.",
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

const FaqsUIUX: React.FC = () => {
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
                        Your UI/UX Design Questions Answered-FAQs
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

export default FaqsUIUX;
