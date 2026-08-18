export default function Header(){
    return (
        <header className="flex justify-center p-4 bg-[#1E293B] rounded-full border-2 border-[#F54F1B] w-fit">
            <nav>
                <ul className="flex flex-row gap-3.5">
                    <li><a href="">Experience</a></li>
                    <li><a href="">Education</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Contact me</a></li>
                </ul>
            </nav>    
        </header>   
    )
}