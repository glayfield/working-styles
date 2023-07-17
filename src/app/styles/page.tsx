'use client';
import Container from "@/components/container";
import Footer from "@/components/footer";
import GradientBox from "@/components/gradient-box";
import Nav from "@/components/nav";
import GROUPS from "@/data/groups";
import { Group, Groups } from "@/types/interfaces";
import { useStickyState } from "@/utils/storage";

export default function Styles() { 
    const [results] = useStickyState([], 'user-results');
    const colorVariants:Groups = {
        bePerfect: 'relative isolate overflow-hidden bg-[#F9521E] px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0',
        pleaseOthers: 'relative isolate overflow-hidden bg-[#CBAE11] px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0',
        hurryUp: 'relative isolate overflow-hidden bg-[#008D7C] px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0',
        beStrong: 'relative isolate overflow-hidden bg-[#FDA649] px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0',
        tryHard: 'relative isolate overflow-hidden bg-[#F4E683] px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0'
    }

    return (
        <div>
        <Nav />
        <GradientBox>
            <h1 className="text-3xl font-bold tracking-tight dark:text-white sm:text-4xl">The 5 Working Styles</h1>
            <h2 className="text-xl tracking-tight dark:text-white sm:text-2xl">Kahler (1975) identified five common styles (or &apos;drivers&apos;) that motivate us, and which can be at the root of dysfunctional behaviors.</h2>
            <p className="text-l tracking-tight dark:text-white sm:text-xl">Any of these can be rooted in early admonishment from teachers and parents who are seeking to help the child become socially functional, but perhaps do not offer sufficient guidance and praise for adequate behavior, thus leaving the child over-doing things.<br />
            In reasonable quantities, these drivers are effective in creating functioning and successful adults. When people do not know when to stop, then dysfunctional behavior can set in, causing stress and consequent further coping.</p>
            <div className="flex flex-col">
                {GROUPS.map((group: Group) => (
                    <div key={group.key} className={`${colorVariants[group.key as keyof Groups]}`}>
                        <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
                            <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                            <defs>
                            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                <stop stopColor="#7775D6" />
                                <stop offset="1" stopColor={group?.color} />
                            </radialGradient>
                            </defs>
                        </svg>
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-8 lg:text-left">
                            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{group.name}</h2>
                            <h3 className="text-l font-bold tracking-tight text-white sm:text-xl">Examples mindsets of a &quot;{group.name}&quot;:</h3>
                            <ul className="mt-6 text-lg leading-8">
                            {group.imperative.map((text: string, index: number) => (
                                <li key={"a" + index}>&quot;{text}&quot;</li>
                            ))}
                            </ul>
                            <h3 className="text-l tracking-tight text-white sm:text-xl">How to identify a &quot;{group.name}&quot;:</h3>
                            <ul className="mt-6 text-lg leading-8">
                            {group.identification.map((text: string, index: number) => (
                                <li key={"b" + index}>{text}</li>
                            ))}
                            </ul>
                            <h3 className="text-l tracking-tight text-white sm:text-xl">How being a &quot;{group.name}&quot; can be a <i>benefit</i> to someone:</h3>
                            <ul className="mt-6 text-lg leading-8">
                            {group.benefits.map((text: string, index: number) => (
                                <li key={"c" + index}>{text}</li>
                            ))}
                            </ul>
                            <h3 className="text-l tracking-tight text-white sm:text-xl">How being a &quot;{group.name}&quot; can be a <i>hindrance</i> to someone:</h3>
                            <ul className="mt-6 text-lg leading-8">
                            {group.problems.map((text: string, index: number) => (
                                <li key={"d" + index}>{text}</li>
                            ))}
                            </ul>
                            <h3 className="text-l tracking-tight text-white sm:text-xl">How to work with someone who is a &quot;{group.name}&quot;?</h3>
                            <ul className="mt-6 text-lg leading-8">
                            {group.treatment.map((text: string, index: number) => (
                                <li key={"e" + index}>{text}</li>
                            ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </GradientBox>
        <Footer />
        </div>
    )
}