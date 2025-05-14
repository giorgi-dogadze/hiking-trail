import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQ {
    question: string;
    answer: string;
}

interface EventFAQProps {
    faqs: FAQ[];
}

const EventFAQ: React.FC<EventFAQProps> = ({ faqs }) => {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-6">
                <HelpCircle className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold">{t('events.faq')}</h2>
            </div>

            <div className="space-y-3">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border rounded-lg overflow-hidden"
                    >
                        <div
                            className={`flex justify-between items-center p-4 cursor-pointer ${openIndex === index ? 'bg-blue-50' : ''
                                }`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <h3 className="font-semibold">{faq.question}</h3>
                            {openIndex === index ? (
                                <ChevronUp className="h-5 w-5 text-gray-600" />
                            ) : (
                                <ChevronDown className="h-5 w-5 text-gray-600" />
                            )}
                        </div>

                        {openIndex === index && (
                            <div className="p-4 bg-white border-t">
                                <p className="text-gray-700 whitespace-pre-line">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventFAQ;
