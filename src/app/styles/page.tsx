"use client";
import Container from "@/components/container";
import GradientBox from "@/components/gradient-box";
import StyleContainer from "@/components/style-container";
import StyleScore from "@/components/style-score";

import GROUPS from "@/data/groups";
import { Group, Groups } from "@/types/interfaces";
import { useStickyState } from "@/utils/storage";

export default function Styles() {
    const [results] = useStickyState([], "user-results");

    const colorVariants: Groups = {
        bePerfect:
            "rounded-2xl text-2xl font-bold p-4 mb-4 tracking-tight sm:text-3xl text-black bg-[#F9521E]",
        pleaseOthers:
            "rounded-2xl text-2xl font-bold p-4 mb-4 tracking-tight sm:text-3xl text-white bg-[#CBAE11]",
        hurryUp:
            "rounded-2xl text-2xl font-bold p-4 mb-4 tracking-tight sm:text-3xl text-black bg-[#008D7C]",
        beStrong:
            "rounded-2xl text-2xl font-bold p-4 mb-4 tracking-tight sm:text-3xl text-white bg-[#FDA649]",
        tryHard:
            "rounded-2xl text-2xl font-bold p-4 mb-4 tracking-tight sm:text-3xl text-black bg-[#F4E683]",
    };

    return (
        <GradientBox>
            <Container>
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    The 5 Working Styles
                </h1>
                <h2 className="text-xl tracking-tight text-white sm:text-2xl">
                    Kahler (1975) identified five common styles (or &apos;drivers&apos;)
                    that motivate us, and which can be at the root of dysfunctional
                    behaviors.
                </h2>
                <p className="text-l tracking-tight text-white sm:text-xl">
                    Any of these can be rooted in early admonishment from teachers and
                    parents who are seeking to help the child become socially functional,
                    but perhaps do not offer sufficient guidance and praise for adequate
                    behavior, thus leaving the child over-doing things.
                </p>
                <p className="text-l tracking-tight text-white sm:text-xl">
                    In reasonable quantities, these drivers are effective in creating
                    functioning and successful adults. When people do not know when to
                    stop, then dysfunctional behavior can set in, causing stress and
                    consequent further coping.
                </p>
                <>
                    {GROUPS.map((group: Group) => (
                        <div key={group.key}>
                            <div className="rounded-2xl bg-white p-2">
                                <h2 className={`${colorVariants[group.key as keyof Groups]}`}>
                                    {group.name}
                                </h2>
                                <StyleScore results={results} group={group.key} />
                                <StyleContainer title={`Examples mindsets of a "${group.name}"`} examples={group.imperative} />
                                <StyleContainer title={`How to identify a "${group.name}"`} examples={group.identification} />
                                <StyleContainer title={`How being a "${group.name}" can be a benefit to someone`} examples={group.benefits} />
                                <StyleContainer title={`How being a "${group.name}" can be a hindrance to someone`} examples={group.problems} />
                                <StyleContainer title={`How to work with someone who is a "${group.name}"`} examples={group.treatment} />
                            </div>
                        </div>
                    ))}
                </>
            </Container>
        </GradientBox>
    );
}
