import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { FaAsterisk } from "react-icons/fa";

const Reviews = () => {

    const reviwtitle = "Add a Review";

    let ReviewList = [
        {
            imgUrl: "/src/assets/images/instructor/01.jpg",
            imgAlt: "Client thumb",
            name: "Ganelon Boileau",
            date: "Posted on Jun 10, 2022 at 6:57 am",
            desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
        },
        {
            imgUrl: "/src/assets/images/instructor/02.jpg",
            imgAlt: "Client thumb",
            name: "Morgana Cailot",
            date: "Posted on Jun 10, 2022 at 6:57 am",
            desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
        },
        {
            imgUrl: "/src/assets/images/instructor/03.jpg",
            imgAlt: "Client thumb",
            name: "Telford Bois",
            date: "Posted on Jun 10, 2022 at 6:57 am",
            desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
        },
        {
            imgUrl: "/src/assets/images/instructor/04.jpg",
            imgAlt: "Client thumb",
            name: "Cher Daviau",
            date: "Posted on Jun 10, 2022 at 6:57 am",
            desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
        },
    ];

    const [reviewShow, setReviewShow] = useState(true)
    const [rating, setRating] = useState(0);

    return (
        <div>
            <div className={`flex gap-4 text-xl pr-8`}>
                <button className={`${reviewShow || 'bg-orange-500 text-white'} px-4 py-2 rounded-md border cursor-pointer`} onClick={() => setReviewShow(!reviewShow)} >
                    Description
                </button>
                <button className={`${reviewShow && 'bg-blue-500 text-white'} ${reviewShow || 'disabled'} px-4 py-2 rounded-md border cursor-pointer`} onClick={() => setReviewShow(!reviewShow)} >
                    Reviews
                </button>
            </div>

            <div>
                {
                    reviewShow ?
                        <div className="mt-7 space-y-4">
                            {
                                ReviewList.map((review, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <img className="w-24 h-24" src={review.imgUrl} alt="" />
                                        <div>
                                            <div className="flex gap-10 mb-3 items-center">
                                                <p className="font-semibold text-xl">{review.name}</p>
                                                <p className="">{review.date}.</p>
                                            </div>
                                            <p>{review.desc}</p>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className="space-y-3 pt-7">
                                <div>
                                    <p className="text-3xl font-semibold">{reviwtitle}</p>
                                </div>
                                <form className="space-y-5">
                                    <div className="flex items-center gap-10 ">
                                        <div>
                                            <input className="border px-4 py-2 rounded-md" type="text" name="name" placeholder="Full Name" />
                                        </div>
                                        <div>
                                            <input className="border px-4 py-2 rounded-md" type="email" name="email" placeholder="Your Email" />
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <p>Your Rating:</p>
                                            <Rating
                                                style={{ maxWidth: 150 }}
                                                value={rating}
                                                onChange={setRating}
                                                isRequired
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <textarea className="w-full h-[150px] rounded-md border" name="message" id=""></textarea>
                                    </div>
                                    <div>
                                        <button className="px-7 h-[50px] border rounded-md bg-orange-500 text-white">Submit Rating</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        :
                        <div className="mt-7 space-y-4">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quod nihil distinctio, rem quasi blanditiis doloribus dolore illo rerum quibusdam temporibus quidem vel. Totam libero magnam ab, modi quam, doloremque praesentium fugiat a, omnis voluptatibus expedita laboriosam est dicta officia eos autem odit facere voluptatum suscipit hic quidem vitae voluptas.</p>
                            <div className="flex justify-between items-center">
                                <div>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-2"><FaAsterisk /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis.</li>
                                        <li className="flex items-center gap-2"><FaAsterisk /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis.</li>
                                        <li className="flex items-center gap-2"><FaAsterisk /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis.</li>
                                        <li className="flex items-center gap-2"><FaAsterisk /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis.</li>
                                        <li className="flex items-center gap-2"><FaAsterisk /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis.</li>
                                    </ul>
                                </div>
                                <div>
                                    <img src={'/src/assets/images/shop/01.jpg'} alt="" />
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quod nihil distinctio, rem quasi blanditiis doloribus dolore illo rerum quibusdam temporibus quidem vel. Totam libero magnam ab, modi quam, doloremque praesentium fugiat a, omnis voluptatibus expedita laboriosam est dicta officia eos autem odit facere voluptatum suscipit hic quidem vitae voluptas.</p>
                        </div>
                }
            </div>
        </div>
    );
};

export default Reviews;