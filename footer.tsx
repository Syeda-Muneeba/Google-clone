


const Footer: React.FC = () => {
    return (
        <div className="absolute bottom-0 w-full bg-neutral-100">
            <p className="py-3 px-8 text-sm text-slate-600">Pakistan</p>
            <div className="flex py-3 px-8">
                <ul className="flex [&>*]:mr-6 text-sm text-slate-600">
                    <li>About</li>
                    <li>Advertising</li>
                    <li>Business</li>
                    <li>How Search works</li>
                </ul>
                <ul className="flex ml-auto [&>*]:mr-6 text-sm text-slate-600">
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Settings</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;