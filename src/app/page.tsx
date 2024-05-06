export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-4">
            <h1 className="font-libre text-5xl font-semibold">Hello world</h1>
            <button className="btn btn-primary">Hello</button>
            <details className="dropdown">
                <summary className="btn m-1">open or close</summary>
                <ul className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 text-zinc-900 shadow">
                    <li>
                        <a>Item 1</a>
                    </li>
                    <li>
                        <a>Item 2</a>
                    </li>
                </ul>
            </details>
        </main>
    )
}
