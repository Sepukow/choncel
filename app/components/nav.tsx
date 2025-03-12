export default function Nav ({bartekChoncel} : any) {
    return (
        <div className="w-64 bg-[#292627] p-6">
            <nav>
                <span>{bartekChoncel}</span>
                <ul className="space-y-3">
                    <li><a href="/">main page</a></li>
                    <li><a href="/principles">principles</a></li>
                    <li><a href="/books">books</a></li>
                    <li><a href="/projects">projects</a></li>
                    <li><a href="/media">photos and videos</a></li>
                </ul>
            </nav>
        </div>
    )
}
