export default function Latest({
    title,
    imgsrc,
    sources,
    info
}) {
    return (
        <section className="pt-5 pb-10">
            <h1 className="text-center text-6xl font-bold text-gray-900 dark:text-gray-100">{title}</h1>
            <p className="text-center text-gray-600 dark:text-gray-400 text-lg">
                {info}
            </p>
            <div className="flex justify-center pb-5">
                <a
                class="inline-flex items-center gap-2 rounded border border-sky-600 bg-sky-600 px-8 py-3 text-white focus:outline-none focus:ring active:text-sky-500"
                href={sources}
                style={{ textDecoration: 'none' }}
                target="_blank"
                >
                    <span class="text-sm font-medium text-white"> Open {title} </span>

                    <svg
                        class="size-5 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </a>
            </div>
            <div className="w-[90%] md:max-w-5xl mx-auto flex justify-center items-center">
                <img
                className="border rounded-lg shadow-lg mt-5"
                src={imgsrc}
                alt={info}
                />
            </div>
        </section>
    )
}