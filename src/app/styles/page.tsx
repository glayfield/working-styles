"use client";
import Container from "@/components/container";
import GradientBox from "@/components/gradient-box";
import StyleScore from "@/components/style-score";

import GROUPS from "@/data/groups";
import { Group, Groups } from "@/types/interfaces";
import { useStickyState } from "@/utils/storage";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

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
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 mb-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>
                          Examples mindsets of a &quot;{group.name}&quot;
                        </span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        <ul>
                          {group.imperative.map(
                            (text: string, index: number) => (
                              <li className="p-4" key={"a" + index}>
                                &quot;{text}&quot;
                              </li>
                            )
                          )}
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 mb-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>How to identify a &quot;{group.name}&quot;</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        <ul>
                          {group.identification.map(
                            (text: string, index: number) => (
                              <li className="p-4" key={"b" + index}>
                                {text}
                              </li>
                            )
                          )}
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 mb-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>
                          How being a &quot;{group.name}&quot; can be a benefit
                          to someone
                        </span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        <ul>
                          {group.benefits.map((text: string, index: number) => (
                            <li className="p-4" key={"c" + index}>
                              {text}
                            </li>
                          ))}
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 mb-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>
                          How being a &quot;{group.name}&quot; can be a
                          hindrance to someone
                        </span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        <ul>
                          {group.problems.map((text: string, index: number) => (
                            <li className="p-4" key={"d" + index}>
                              {text}
                            </li>
                          ))}
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>
                          How to work with someone who is a &quot;{group.name}
                          &quot;
                        </span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        <ul>
                          {group.treatment.map(
                            (text: string, index: number) => (
                              <li className="p-4" key={"e" + index}>
                                {text}
                              </li>
                            )
                          )}
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          ))}
        </>
      </Container>
    </GradientBox>
  );
}
