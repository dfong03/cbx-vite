import defaultProfile from "./fav.png";
let companies = [
    // {
    //     name: "company #1",
    //     profile: defaultProfile,
    //     type: ["current"],
    //     redirect: "vueveu",
    //     description:
    //         "Peter Martenson is a member of the Private Capital Advisory team.\n Prior to joining Eaton Partners, he was a Managing Director with Macquarie Funds Management, where he led a team of investment professionals structuring, fundraising and investing fund of funds and separate accounts into global PE opportunities. Previously, he was a Director with Pacific Corporate Group, where he advised large and small institutional investors on structuring and investing their private equity programs. He began his career as an Operations Officer in the United States Navy within the surface warfare community.\n Peter received an MBA from Yale University in New Haven, CT and a B.S. in Oceanography from the United States Naval Academy in Annapolis, MD. He is also a graduate of the U.S. Naval War College in Newport, RI with a concentration in Defense and Strategic Studies.",
    // },
    // {
    //     name: "company #1",
    //     profile: defaultProfile,
    //     type: ["current"],
    //     redirect: "vueveu",
    //     description:
    //         "Peter Martenson is a member of the Private Capital Advisory team.\n Prior to joining Eaton Partners, he was a Managing Director with Macquarie Funds Management, where he led a team of investment professionals structuring, fundraising and investing fund of funds and separate accounts into global PE opportunities. Previously, he was a Director with Pacific Corporate Group, where he advised large and small institutional investors on structuring and investing their private equity programs. He began his career as an Operations Officer in the United States Navy within the surface warfare community.\n Peter received an MBA from Yale University in New Haven, CT and a B.S. in Oceanography from the United States Naval Academy in Annapolis, MD. He is also a graduate of the U.S. Naval War College in Newport, RI with a concentration in Defense and Strategic Studies.",
    // },

    // {
    //     name: "company #1",
    //     profile: defaultProfile,
    //     type: ["current"],
    //     redirect: "vueveu",
    //     description:
    //         "Peter Martenson is a member of the Private Capital Advisory team.\n Prior to joining Eaton Partners, he was a Managing Director with Macquarie Funds Management, where he led a team of investment professionals structuring, fundraising and investing fund of funds and separate accounts into global PE opportunities. Previously, he was a Director with Pacific Corporate Group, where he advised large and small institutional investors on structuring and investing their private equity programs. He began his career as an Operations Officer in the United States Navy within the surface warfare community.\n Peter received an MBA from Yale University in New Haven, CT and a B.S. in Oceanography from the United States Naval Academy in Annapolis, MD. He is also a graduate of the U.S. Naval War College in Newport, RI with a concentration in Defense and Strategic Studies.",
    // },
    // {
    //     name: "company #1",
    //     profile: defaultProfile,
    //     type: ["current"],
    //     redirect: "vueveu",
    //     description:
    //         "Peter Martenson is a member of the Private Capital Advisory team.\n Prior to joining Eaton Partners, he was a Managing Director with Macquarie Funds Management, where he led a team of investment professionals structuring, fundraising and investing fund of funds and separate accounts into global PE opportunities. Previously, he was a Director with Pacific Corporate Group, where he advised large and small institutional investors on structuring and investing their private equity programs. He began his career as an Operations Officer in the United States Navy within the surface warfare community.\n Peter received an MBA from Yale University in New Haven, CT and a B.S. in Oceanography from the United States Naval Academy in Annapolis, MD. He is also a graduate of the U.S. Naval War College in Newport, RI with a concentration in Defense and Strategic Studies.",
    // },
    // {
    //     name: "company #1",
    //     profile: defaultProfile,
    //     type: ["current"],
    //     redirect: "vueveu",
    //     description:
    //         "Peter Martenson is a member of the Private Capital Advisory team.\n Prior to joining Eaton Partners, he was a Managing Director with Macquarie Funds Management, where he led a team of investment professionals structuring, fundraising and investing fund of funds and separate accounts into global PE opportunities. Previously, he was a Director with Pacific Corporate Group, where he advised large and small institutional investors on structuring and investing their private equity programs. He began his career as an Operations Officer in the United States Navy within the surface warfare community.\n Peter received an MBA from Yale University in New Haven, CT and a B.S. in Oceanography from the United States Naval Academy in Annapolis, MD. He is also a graduate of the U.S. Naval War College in Newport, RI with a concentration in Defense and Strategic Studies.",
    // },
    // {
    //     name: "company #1",
    //     profile: defaultProfile,
    //     type: ["current"],
    //     redirect: "vueveu",
    //     description:
    //         "Peter Martenson is a member of the Private Capital Advisory team.\n Prior to joining Eaton Partners, he was a Managing Director with Macquarie Funds Management, where he led a team of investment professionals structuring, fundraising and investing fund of funds and separate accounts into global PE opportunities. Previously, he was a Director with Pacific Corporate Group, where he advised large and small institutional investors on structuring and investing their private equity programs. He began his career as an Operations Officer in the United States Navy within the surface warfare community.\n Peter received an MBA from Yale University in New Haven, CT and a B.S. in Oceanography from the United States Naval Academy in Annapolis, MD. He is also a graduate of the U.S. Naval War College in Newport, RI with a concentration in Defense and Strategic Studies.",
    // },

    // {
    //     name: "company #1",
    //     profile: defaultProfile,
    //     type: ["current"],
    //     redirect: "vueveu",
    //     description:
    //         "Peter Martenson is a member of the Private Capital Advisory team.\n Prior to joining Eaton Partners, he was a Managing Director with Macquarie Funds Management, where he led a team of investment professionals structuring, fundraising and investing fund of funds and separate accounts into global PE opportunities. Previously, he was a Director with Pacific Corporate Group, where he advised large and small institutional investors on structuring and investing their private equity programs. He began his career as an Operations Officer in the United States Navy within the surface warfare community.\n Peter received an MBA from Yale University in New Haven, CT and a B.S. in Oceanography from the United States Naval Academy in Annapolis, MD. He is also a graduate of the U.S. Naval War College in Newport, RI with a concentration in Defense and Strategic Studies.",
    // },
    // {
    //     name: "company #1",
    //     profile: defaultProfile,
    //     type: ["current"],
    //     redirect: "vueveu",
    //     description:
    //         "Peter Martenson is a member of the Private Capital Advisory team.\n Prior to joining Eaton Partners, he was a Managing Director with Macquarie Funds Management, where he led a team of investment professionals structuring, fundraising and investing fund of funds and separate accounts into global PE opportunities. Previously, he was a Director with Pacific Corporate Group, where he advised large and small institutional investors on structuring and investing their private equity programs. He began his career as an Operations Officer in the United States Navy within the surface warfare community.\n Peter received an MBA from Yale University in New Haven, CT and a B.S. in Oceanography from the United States Naval Academy in Annapolis, MD. He is also a graduate of the U.S. Naval War College in Newport, RI with a concentration in Defense and Strategic Studies.",
    // },
    // {
    //     name: "company #1",
    //     profile: defaultProfile,
    //     type: ["current"],
    //     redirect: "vueveu",
    //     description:
    //         "Peter Martenson is a member of the Private Capital Advisory team.\n Prior to joining Eaton Partners, he was a Managing Director with Macquarie Funds Management, where he led a team of investment professionals structuring, fundraising and investing fund of funds and separate accounts into global PE opportunities. Previously, he was a Director with Pacific Corporate Group, where he advised large and small institutional investors on structuring and investing their private equity programs. He began his career as an Operations Officer in the United States Navy within the surface warfare community.\n Peter received an MBA from Yale University in New Haven, CT and a B.S. in Oceanography from the United States Naval Academy in Annapolis, MD. He is also a graduate of the U.S. Naval War College in Newport, RI with a concentration in Defense and Strategic Studies.",
    // },
    // {
    //     name: "company #1",
    //     profile: defaultProfile,
    //     type: ["current"],
    //     redirect: "vueveu",
    //     description:
    //         "Peter Martenson is a member of the Private Capital Advisory team.\n Prior to joining Eaton Partners, he was a Managing Director with Macquarie Funds Management, where he led a team of investment professionals structuring, fundraising and investing fund of funds and separate accounts into global PE opportunities. Previously, he was a Director with Pacific Corporate Group, where he advised large and small institutional investors on structuring and investing their private equity programs. He began his career as an Operations Officer in the United States Navy within the surface warfare community.\n Peter received an MBA from Yale University in New Haven, CT and a B.S. in Oceanography from the United States Naval Academy in Annapolis, MD. He is also a graduate of the U.S. Naval War College in Newport, RI with a concentration in Defense and Strategic Studies.",
    // },

    // {
    //     name: "company #1",
    //     profile: defaultProfile,
    //     type: ["current"],
    //     redirect: "vueveu",
    //     description:
    //         "Peter Martenson is a member of the Private Capital Advisory team.\n Prior to joining Eaton Partners, he was a Managing Director with Macquarie Funds Management, where he led a team of investment professionals structuring, fundraising and investing fund of funds and separate accounts into global PE opportunities. Previously, he was a Director with Pacific Corporate Group, where he advised large and small institutional investors on structuring and investing their private equity programs. He began his career as an Operations Officer in the United States Navy within the surface warfare community.\n Peter received an MBA from Yale University in New Haven, CT and a B.S. in Oceanography from the United States Naval Academy in Annapolis, MD. He is also a graduate of the U.S. Naval War College in Newport, RI with a concentration in Defense and Strategic Studies.",
    // },
    // {
    //     name: "company #1",
    //     profile: defaultProfile,
    //     type: ["current"],
    //     redirect: "vueveu",
    //     description:
    //         "Peter Martenson is a member of the Private Capital Advisory team.\n Prior to joining Eaton Partners, he was a Managing Director with Macquarie Funds Management, where he led a team of investment professionals structuring, fundraising and investing fund of funds and separate accounts into global PE opportunities. Previously, he was a Director with Pacific Corporate Group, where he advised large and small institutional investors on structuring and investing their private equity programs. He began his career as an Operations Officer in the United States Navy within the surface warfare community.\n Peter received an MBA from Yale University in New Haven, CT and a B.S. in Oceanography from the United States Naval Academy in Annapolis, MD. He is also a graduate of the U.S. Naval War College in Newport, RI with a concentration in Defense and Strategic Studies.",
    // },
    // {
    //     name: "company #1",
    //     profile: defaultProfile,
    //     type: ["current"],
    //     redirect: "vueveu",
    //     description:
    //         "Peter Martenson is a member of the Private Capital Advisory team.\n Prior to joining Eaton Partners, he was a Managing Director with Macquarie Funds Management, where he led a team of investment professionals structuring, fundraising and investing fund of funds and separate accounts into global PE opportunities. Previously, he was a Director with Pacific Corporate Group, where he advised large and small institutional investors on structuring and investing their private equity programs. He began his career as an Operations Officer in the United States Navy within the surface warfare community.\n Peter received an MBA from Yale University in New Haven, CT and a B.S. in Oceanography from the United States Naval Academy in Annapolis, MD. He is also a graduate of the U.S. Naval War College in Newport, RI with a concentration in Defense and Strategic Studies.",
    // },
    // {
    //     name: "company #1",
    //     profile: defaultProfile,
    //     type: ["current"],
    //     redirect: "vueveu",
    //     description:
    //         "Peter Martenson is a member of the Private Capital Advisory team.\n Prior to joining Eaton Partners, he was a Managing Director with Macquarie Funds Management, where he led a team of investment professionals structuring, fundraising and investing fund of funds and separate accounts into global PE opportunities. Previously, he was a Director with Pacific Corporate Group, where he advised large and small institutional investors on structuring and investing their private equity programs. He began his career as an Operations Officer in the United States Navy within the surface warfare community.\n Peter received an MBA from Yale University in New Haven, CT and a B.S. in Oceanography from the United States Naval Academy in Annapolis, MD. He is also a graduate of the U.S. Naval War College in Newport, RI with a concentration in Defense and Strategic Studies.",
    // },
    // {
    //     name: "company #1",
    //     profile: defaultProfile,
    //     type: ["current"],
    //     redirect: "vueveu",
    //     description:
    //         "Peter Martenson is a member of the Private Capital Advisory team.\n Prior to joining Eaton Partners, he was a Managing Director with Macquarie Funds Management, where he led a team of investment professionals structuring, fundraising and investing fund of funds and separate accounts into global PE opportunities. Previously, he was a Director with Pacific Corporate Group, where he advised large and small institutional investors on structuring and investing their private equity programs. He began his career as an Operations Officer in the United States Navy within the surface warfare community.\n Peter received an MBA from Yale University in New Haven, CT and a B.S. in Oceanography from the United States Naval Academy in Annapolis, MD. He is also a graduate of the U.S. Naval War College in Newport, RI with a concentration in Defense and Strategic Studies.",
    // },
    // {
    //     name: "company #1",
    //     profile: defaultProfile,
    //     type: ["current"],
    //     redirect: "vueveu",
    //     description:
    //         "Peter Martenson is a member of the Private Capital Advisory team.\n Prior to joining Eaton Partners, he was a Managing Director with Macquarie Funds Management, where he led a team of investment professionals structuring, fundraising and investing fund of funds and separate accounts into global PE opportunities. Previously, he was a Director with Pacific Corporate Group, where he advised large and small institutional investors on structuring and investing their private equity programs. He began his career as an Operations Officer in the United States Navy within the surface warfare community.\n Peter received an MBA from Yale University in New Haven, CT and a B.S. in Oceanography from the United States Naval Academy in Annapolis, MD. He is also a graduate of the U.S. Naval War College in Newport, RI with a concentration in Defense and Strategic Studies.",
    // },
];

export { companies };
