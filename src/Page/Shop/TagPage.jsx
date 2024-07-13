import { Link } from "react-router-dom";

const TagPage = () => {

    const title = "Our Popular Tags";

    const tagsList = [
        {
            link: "#",
            text: "envato",
        },
        {
            link: "#",
            text: "themeforest",
        },
        {
            link: "#",
            text: "codecanyon",
        },
        {
            link: "#",
            text: "videohive",
        },
        {
            link: "#",
            text: "audiojungle",
        },
        {
            link: "#",
            text: "3docean",
        },
        {
            link: "#",
            text: "envato",
        },
        {
            link: "#",
            text: "themeforest",
        },
        {
            link: "#",
            text: "codecanyon",
        },
    ];

    return (
        <div>
            <h1 className="text-2xl font-semibold ml-2 mb-5">{title}</h1>
            <div className="flex flex-wrap gap-2">
                {
                    tagsList.map((val, i) => (
                        <button  className="px-4 py-2 rounded-sm bg-slate-200" key={i}>
                            <Link to={val.link}>
                                {val.text}
                            </Link>
                        </button>
                    ))
                }
            </div>
        </div>
    );
};

export default TagPage;