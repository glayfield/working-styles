const GROUPS = [
  {
    id: 1,
    name: "Be Perfect Driver",
    barName: "Perfect",
    key: 'bePerfect',
    color: "#F9521E",
    imperative: [
      "I must be perfect, wonderful, correct in every way.",
      "I must succeed in everything I do.",
      "I must get top marks and win."
    ],
    identification: [
      "Exact language, including qualification when they are not sure, such as 'probably', and absolutes when they are, such as 'absolutely'.",
      "Always neat and well-groomed.",
      "Never completely satisfied with what they do."
    ],
    benefits: [
      "Hard-working, with excellent quality output.",
      "May achieve great things."
    ],
    problems: [
      "Fears of failure and losing control, and subsequent over-compensation.",
      "Over-work. Not finishing things for fear of criticism.",
      "Expecting others to be perfect too."
    ],
    treatment: [
      "Laughter.",
      "Praise, including for less-than-perfect work.",
      "Reframing of what 'perfect' really means to 'enough'.",
      "Be very specific with criticism (and praise)."
    ]
  },
  {
    id: 2,
    name: "Please Others Driver",
    barName: "Please",
    key: 'pleaseOthers',
    color: "#CBAE11",
    imperative: [
      "I must make other people happy. I know that I have done this when they acknowledge and praise me.",
      "Only others can tell me when I have done well. If they do not, I have failed.",
      "Other people's happiness is more important than mine."
    ],
    identification: [
      "Ingratiating behavior, always seeking to please.",
      "Always testing that people are happy and satisfied.",
      "Smiling and friendly expression.",
      "Frames everything as a question that invites approval.",
      "Apologetic. Will say 'sorry' for almost anything and even just to fill space."
    ],
    benefits: [
      "Comfortable working with other people. Often well-liked and good company.",
      "Sympathetic and concerned about others."
    ],
    problems: [
      "Anxious around others. Worrying too much as to how they are being perceived.",
      "Always seeking approval. Finds positions of authority difficult.",
      "Unable to say 'no' to any request.",
      "Finds criticism particularly difficult when it implies they have not pleased others.",
      "Worried when ignored. Easily offended (but unlikely to mention it).",
      "Can get locked in mutual hugging patterns or competitive pleasing with other pleasers."
    ],
    treatment: [
      "Make pleasing themselves a criteria for pleasing you. Be happy when they are happy (but beware of getting in a mutual pleasing competition).",
      "Help them accept criticism without feeling put down or a failure. Do not get angry with them.",
      "Help them to see when pleasing others turns into dysfunctional subservience.",
      "Encourage them to become self-sufficient and praise themselves.",
      "Get them to indulge themselves now and again. Separate out some 'space for just me'."
    ]
  },
  {
    id: 3,
    name: "Hurry Up Driver",
    barName: "Hurry Up",
    key: 'hurryUp',
    color: "#008D7C",
    imperative: [
      "Go faster. Whatever I am doing, it's not  being done quickly enough.",
      "So much to do, so little time."
    ],
    identification: [
      "Enthusiastic and action-oriented.",
      "Many things on the go at once. Often juggling several quite different activities.",
      "Time language, using words like 'now', 'schedule', 'timely' and so on.",
      "Complaints that there is not enough time.",
      "Talking quickly and checking the clock frequently.",
      "Impatient (watch for tapping fingers and huffing).",
      "May explode into anger if held up.",
    ],
    benefits: [
      "When given work delivers it quickly.",
      "Good focus on output and delivery (when not combined with 'try hard')."
    ],
    problems: [
      "Fretting over having 'nothing to do'.",
      "Speed over accuracy.",
      "Taking on too much and then complaining",
      "Hassling others to do things before they are ready."
    ],
    treatment: [
      "Thank them for their time.",
      "Ensure they think before they act.",
      "Help them to 'be' without 'doing'. Get them to sit quietly and appreciate a single moment."
    ]
  },
  {
    id: 4,
    name: "Be Strong Driver",
    barName: "Be Strong",
    key: 'beStrong',
    color: "#FDA649",
    imperative: [
      "I must be invulnerable at all times. I must not cry or show any weakness.",
      "I cannot express emotions. I must help others but not myself (I do not need help)."
    ],
    identification: [
      "Aggressive or assertive attitude, demonstrating strength in attitude.",
      "Objective language, distancing themselves from their feelings. Avoids 'I' language and any talk about emotions.",
      "Frozen face and body, hiding emotions.",
      "Will take on all tasks without complaint."
    ],
    benefits: [
      "Good for getting things done, especially in a crisis.",
      "Does not take things personally or get sucked into emotional situations.",
      "Generous, always helping others before self."
    ],
    problems: [
      "Withdrawn under stress as they hold emotions in. Refusal to acknowledge they are stressed.",
      "Bottled-up emotions that may explode outwards onto others or be held in and do internal damage.",
      "Can get into 'who is the strongest' competitions with others, especially those who also have powerful 'be strong' drivers.",
      "Expecting others to be strong. Contempt for the weak."
    ],
    treatment: [
      "Praise for consideration of the feelings of others.",
      "Put them in slightly vulnerable situations and praise their handling and exposure of emotions. Only make them as vulnerable as they can handle without going into Fight-or-Flight.",
      "Be considerate about their emotions. Show that you recognize them and that it is ok for them to have feelings.",
      "Show them that they are not to blame for things, including their own internal issues.",
      "Help them receive with good grace as well as give to others.",
      "Help them see where their strength appears as a threat to others."
    ]
  },
  {
    id: 5,
    name: "Try Hard Driver",
    barName: "Try Hard",
    key: 'tryHard',
    color: "#F4E683",
    imperative: [
      "I cannot refuse requests. I must at least try.",
      "I must improve and always get better.",
      "Wherever I am is not good enough."
    ],
    identification: [
      "Not satisfied with what has been done.",
      "Language that uses the verb 'try' (rather than 'will').",
      "Tense and anxious in appearance.",
      "Will often side with the underdog, seeking to right wrongs.",
      "May well not achieve goals (although these are often high)."
    ],
    benefits: [
      "They always give of their utmost in all situations.",
      "Persistence in difficult and time-consuming situations.",
      "Helping others.",
      "Working toward noble causes."
    ],
    problems: [
      "Craving praise, but never satisfied when it is given.",
      "Find criticism very hurtful, especially for not trying enough or not considering others.",
      "Effort of trying leads to physical burn-out.",
      "Lots of 'trying' but no real result.",
      "Fear of completion (run out of things to try).",
      "Expecting others to try harder."
    ],
    treatment: [
      "Use their need to improve to help them to not try too hard.",
      "Praise for completion of specific items. Do not praise just for effort.",
      "Help them move from 'trying' to 'succeeding'. Start with the language they use.",
      "Stop them moving to another task before the first is complete.",
      "Help them distinguish between that which is achievable and that which is not realistically possible."
    ]
  }
];

export default GROUPS;
