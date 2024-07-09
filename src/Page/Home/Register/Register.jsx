import bgImage from '../../../assets/images/bg-img/07.jpg'
const Register = () => {

    const subtitle = 'Save The Day'
    const title = (
        <h1 className='text-3xl text-white'>Join on day long free wortshop for <b>advance <span className='text-[#FFE040]'>mastering</span> on sales</b></h1>
    )
    const dec = 'Linited Time Offer! Hurry Up'

    return (
        <div className='container mx-auto py-4 bg-cover flex justify-center items-center' style={{ backgroundImage: `url(${bgImage})` }}>
            {/* 11111 */}
            <div className='w-2/5 space-y-2 pl-5'>
                <span className='text-[#FFE040] text-2xl'>{subtitle}</span>
                {title}
                <p className='text-white'>{dec}</p>
            </div>
            {/* 2222 */}
            <div>
                <div className="w-96 max-w-md rounded-lg px-10 pb-10 pt-8 shadow-md dark:bg-zinc-900 bg-gradient-to-t from-[#743270] to-white">
                    <div className="mb-6">
                        <h2 className="text-center text-3xl font-semibold tracking-tight">Register Now</h2>
                    </div>
                    <form className="w-full space-y-6">
                        <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                            {/* <label className="block font-medium" htmlFor="name">
                               User Name
                            </label> */}
                            <input
                                className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                id="name"
                                placeholder="User Name"
                                name="name"
                                type="text"
                            />
                        </div>
                        <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                            {/* <label className="block font-medium" htmlFor="_email">
                                Email
                            </label> */}
                            <input
                                className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                id="_email"
                                placeholder="Email"
                                name="email"
                                type="email"
                            />
                        </div>
                        <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                            {/* <label className="block font-medium" htmlFor="_password">
                                Password
                            </label> */}
                            <input
                                className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                id="_number"
                                placeholder="Phone"
                                name="number"
                                type="number"
                            />
                        </div>
                        <div className="flex justify-center">
                            <button  className="px-4 py-2 rounded-md bg-[#FFE040] duration-500 hover:text-white font-semibold">Register Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;