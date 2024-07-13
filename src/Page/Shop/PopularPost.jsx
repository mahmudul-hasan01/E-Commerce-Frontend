import { Link } from "react-router-dom";

const PopularPost = () => {

    const title = 'Most popular post'

    const postList = [
        {
            id: 1,
            imgUrl: '/src/assets/images/blog/10.jpg',
            imgAlt: 'rajibraj91',
            title: 'Poor People Campaign Our Resources',
            date: 'Jun 05,2022',
        },
        {
            id: 2,
            imgUrl: '/src/assets/images/blog/11.jpg',
            imgAlt: 'rajibraj91',
            title: 'Poor Peoples Campaign Our Resources',
            date: 'Jun 05,2022',
        },
        {
            id: 3,
            imgUrl: '/src/assets/images/blog/12.jpg',
            imgAlt: 'rajibraj91',
            title: 'Poor Peoples Campaign Our Resources',
            date: 'Jun 05,2022',
        },
        {
            id: 4,
            imgUrl: '/src/assets/images/blog/09.jpg',
            imgAlt: 'rajibraj91',
            title: 'Poor Peoples Campaign Our Resources',
            date: 'Jun 05,2022',
        },
    ]

    return (
        <div className="my-7">
            <h1 className="text-2xl font-semibold ml-2 mb-5">{title}</h1>
            <ul className="space-y-4">
                {
                    postList.map((blog, i) => (
                        <li key={i} className=' flex items-center gap-3'>
                            <img src={blog.imgUrl} className="w-16 h-16 rounded-sm" alt="" />
                            <div>
                                <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                                <p className="font-bold">{blog.date}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default PopularPost;