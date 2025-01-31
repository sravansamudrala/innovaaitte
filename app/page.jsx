import Link from 'next/link';
import { Card } from 'components/card';
import { RandomQuote } from 'components/random-quote';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';

const contextExplainer = `
Welcome to Innovaitte, where we specialize in delivering cutting-edge AI-driven solutions to empower businesses. Our solutions help optimize business processes, enhance decision-making, and drive sustainable growth.
`;

const preDynamicContentExplainer = `
The AI-driven solutions below are fetched from our server, delivering dynamic content that provides businesses with actionable insights, tailored specifically to their needs.
`;

const postDynamicContentExplainer = `
Innovaitte leverages the power of AI to bring intelligent automation and data analytics to businesses across industries. Stay ahead of the curve with our scalable, customized solutions that evolve as your business grows.
`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            <section className="flex flex-col items-start gap-3 sm:gap-4">
                {/* <ContextAlert /> */}
                <h1 className="mb-0">Welcome to Innovaitte</h1>
                <p className="text-lg">Empowering business growth with AI and innovative technology solutions.</p>
                <Link
                    href="/about"
                    className="btn btn-lg btn-primary sm:btn-wide"
                >
                    Learn More About Us
                </Link>
            </section>
            {!!ctx && (
                <section className="flex flex-col gap-4">
                    <Markdown content={contextExplainer} />
                    <RuntimeContextCard />
                </section>
            )}
            <section className="flex flex-col gap-4">
                <Markdown content={preDynamicContentExplainer} />
                <RandomQuote />
                <Markdown content={postDynamicContentExplainer} />
            </section>
            {/* Uncomment below to add your own cards */}
            {/* !!cards?.length && <CardsGrid cards={cards} /> */}
        </main>
    );
}

