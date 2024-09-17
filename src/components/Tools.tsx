import Grid from "@mui/material/Grid";
import WrapperSection from "@/components/WrapperSection";
import {
    SiAndroidstudio,
    SiFastlane,
    SiFirebase,
    SiFlutter,
    SiJetpackcompose,
    SiJunit5,
    SiKotlin,
    SiKtor
} from "react-icons/si";
import {FaAndroid, FaGit, FaGoogle, FaJava, FaJira, FaSyncAlt} from "react-icons/fa";
import {GiBroadDagger, GiDaggers, GiDiamondHilt, GiJetpack, GiSwordHilt} from "react-icons/gi";
import {TbPacman} from "react-icons/tb";

const Tools = () => {
    const technologies = [
        {name: 'Kotlin', icon: <SiKotlin/>},
        {name: 'Java', icon: <FaJava/>},
        {name: 'Flutter', icon: <SiFlutter/>},
        {name: 'Android', icon: <FaAndroid/>},
        {name: 'Android Studio', icon: <SiAndroidstudio/>},
        {name: 'Android Jetpack', icon: <GiJetpack/>},
        {name: 'Jetpack Compose', icon: <SiJetpackcompose/>},
        {name: 'Google APIs', icon: <FaGoogle/>},
        {name: 'Firebase', icon: <SiFirebase/>},
        {name: 'Fastlane', icon: <SiFastlane/>},
        {name: 'Ktor', icon: <SiKtor/>},
        {name: 'Koin', icon: <TbPacman/>},
        {name: 'Dagger', icon: <GiBroadDagger/>},
        {name: 'Hilt', icon: <GiSwordHilt/>},
        {name: 'Coroutine Flow', icon: <FaSyncAlt/>},
        {name: 'JUnit', icon: <SiJunit5/>},
        {name: 'Jira', icon: <FaJira/>},
        {name: 'Git', icon: <FaGit/>},
    ];

    return (
        <WrapperSection id="Tools">
            <div className="flex flex-col gap-[20px] mt-[20px]">
                <p className="typography-title-mobile lg:hidden dark:text-base-light text-base-dark">
                    Tools
                </p>
                <p className="typography-title mb:hidden lg:block dark:text-base-light text-base-dark">
                    Tools
                </p>
                <div className="flex flex-row gap-[4px]">
                    <div className="h-[4px] w-[130px] dark:bg-base-light bg-base-dark"/>
                    <div className="h-[4px] w-[4px] dark:bg-base-light bg-base-dark"/>
                    <div className="h-[4px] w-[4px] dark:bg-base-light bg-base-dark"/>
                    <div className="h-[4px] w-[4px] dark:bg-base-light bg-base-dark"/>
                </div>
                <Grid justifyContent="center">
                    <div className="technologies-section p-8">
                        <div
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 dark:text-base-light text-base-dark justify-items-center">
                            {technologies.map((tech, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center">
                                    {/* Responsive icon size */}
                                    <span className="text-xl sm:text-3xl md:text-4xl">{tech.icon}</span>

                                    {/* Responsive text size */}
                                    <span
                                        className="text-sm sm:text-base md:text-sm text-center mt-4">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Grid>

            </div>


        </WrapperSection>
    );
};

export default Tools;
