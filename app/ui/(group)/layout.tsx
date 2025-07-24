export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section className="h-dvh">
            <h1 className=" text-center p-10 bg-cyan-400">Nested Layout Style</h1>
            <div className="flex flex-col justify-center items-center h-full">

                <div className="">
                    {children}
                </div>
            </div>
        </section>
    );
}