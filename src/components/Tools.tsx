import {useState} from "react";
import Grid from "@mui/material/Grid";
import WrapperSection from "@/components/WrapperSection";
import {
    SiFlutter,
    SiJetpackcompose,
    SiKotlin,
    SiMocha,
    SiMysql,
    SiNestjs,
    SiNodedotjs,
    SiPostgresql,
    SiSwift,
    SiTypescript
} from "react-icons/si";
import {DiJavascript} from "react-icons/di";

type ToolItem = {
    name: string;
    icon: JSX.Element;
};

type TabType = "Mobile" | "Backend";

const toolsData: Record<TabType, ToolItem[]> = {
    Mobile: [
        { name: 'Kotlin', icon: <SiKotlin /> },
        { name: 'Kotlin Multiplatform', icon: <SiKotlin /> },
        { name: 'Jetpack Compose', icon: <SiJetpackcompose /> },
        { name: 'Swift', icon: <SiSwift /> },
        { name: 'Flutter', icon: <SiFlutter /> },
    ],
    Backend: [
        { name: 'Javascript', icon: <DiJavascript /> },
        { name: 'Typescript', icon: <SiTypescript /> },
        { name: 'NodeJS', icon: <SiNodedotjs /> },
        { name: 'NestJS', icon: <SiNestjs /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'Postgres', icon: <SiPostgresql /> },
        { name: 'Mocha', icon: <SiMocha /> },
    ]
};

const Tools = () => {
    const [activeTab, setActiveTab] = useState<TabType>("Mobile");

    return (
        <WrapperSection id="Tools">
            <div className="flex flex-col gap-6 mt-6">
                <div className="flex flex-col  gap-[20px] mt-[20px]">
                    <p className="typography-title-mobile lg:hidden dark:text-base-light text-base-dark">
                        Tools
                    </p>
                    <p className="typography-title mb:hidden lg:block dark:text-base-light text-base-dark">
                        Tools
                    </p>
                    <div className="flex gap-1 mt-2">
                        <div className="h-[4px] w-[130px] bg-base-dark dark:bg-base-light"></div>
                        <div className="h-[4px] w-[4px] bg-base-dark dark:bg-base-light"></div>
                        <div className="h-[4px] w-[4px] bg-base-dark dark:bg-base-light"></div>
                        <div className="h-[4px] w-[4px] bg-base-dark dark:bg-base-light"></div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex justify-center gap-8">
                    {Object.keys(toolsData).map((tab) => (
                        <button
                            key={tab}
                            className={`py-2 px-4 font-medium border-b-2 transition-colors ${
                                activeTab === tab
                                    ? "border-black text-black dark:border-white dark:text-white"
                                    : "border-transparent text-gray-500 dark:text-gray-400"
                            }`}
                            onClick={() => setActiveTab(tab as TabType)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Tools Grid */}
                <Grid container justifyContent="center">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 p-8">
                        {toolsData[activeTab].map((tool, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <span className="text-3xl sm:text-4xl text-gray-800 dark:text-gray-200">
                                    {tool.icon}
                                </span>
                                <span
                                    className="mt-2 text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
                                    {tool.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </Grid>
            </div>
        </WrapperSection>
    );
};

export default Tools;
