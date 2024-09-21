import {socials} from "@/components/utils/socials";

const SocialMedia = () => {
    return (
        <div className="flex items-center space-x-6"> {/* Adds space between icons */}
            {socials.map((data, index) => (
                <div key={index} onClick={data?.onClick} className="cursor-pointer">
                    <span className="text-md">{data.icon}</span>
                </div>
            ))}
        </div>
    );
};

export default SocialMedia;
