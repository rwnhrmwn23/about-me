import {socials} from "@/components/utils/socials";

const SocialMedia = () => {
    return (
        <div className="flex items-center space-x-6 dark:text-base-light text-base-dark"> {/* Adds space between icons */}
            {socials.map((data, index) => (
                <div key={index} onClick={data?.onClick} className="cursor-pointer hover:text-blue-500 transition-colors duration-300">
                    <span className="text-2xl">{data.icon}</span>
                </div>
            ))}
        </div>
    );
};

export default SocialMedia;
