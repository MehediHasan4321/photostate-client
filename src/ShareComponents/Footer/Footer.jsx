import { BsCameraFill, BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-base-200">
            <footer className="footer p-10 text-base-content container mx-auto">
                <div>
                    <div className=' uppercase flex items-center gap-2 cursor-pointer'>
                        <BsCameraFill size={'60'} />
                        <div>
                            <h1 className='text-2xl font-semibold'>Photostat</h1>
                            <p className='text-[12px] tracking-[4px]'>No one Click</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 cursor-pointer text-2xl mt-4 ">
                        <BsFacebook className="hover:text-purple-400" title="Facebook"/>
                        <BsLinkedin className="hover:text-purple-400" title="Linkedin"/>
                        <FaTwitter className="hover:text-purple-400" title="Twitter"/>
                        <FaInstagram className="hover:text-purple-400" title="Instagram"/>
                        <FaTiktok className="hover:text-purple-400" title="Tiktok"/>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Location</span>
                    <a className="link link-hover">Dhaka</a>
                    <a className="link link-hover">Bangladesh</a>
                    <a className="link link-hover">Rangpur</a>
                    <a className="link link-hover">Gaibandha</a>
                </div>
                <div>
                    <span className="footer-title">Usefull Links</span>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Blog</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;