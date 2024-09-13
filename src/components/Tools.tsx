import Grid from "@mui/material/Grid";
import WrapperSection from "./WrapperSection";
import Image from "next/image";

import android from "../../public/tools/android.png";
import kotlin from "../../public/tools/kotlin.png";
import compose from "../../public/tools/compose.png";
import jetpack from "../../public/tools/jetpack.png";
import firebase from "../../public/tools/firebase.png";
import google from "../../public/tools/google.png";
import others from "../../public/tools/others.png";

const tools = [
    {
        title: "Android",
        desc: "An open-source operating system created by Google. It provides a robust platform for developers " +
            "to build feature-rich and high-performance applications. ",
        src: android,
    },
    {
        title: "Kotlin",
        desc: "A modern, expressive, and powerful programming language that has become " +
            "the preferred choice for Android development.",
        src: kotlin,
    },
    {
        title: "Google APIs",
        desc: "Provide a wide range of services and tools to integrate into your Android apps " +
            "to enhance functionality, user experience, and performance.",
        src: google,
    },
    {
        title: "Android Jetpack",
        desc: "Suite of libraries helps developers which simplify complex tasks and help maintain clean architecture. " +
            "It includes components like Navigation, LiveData, ViewModel, Paging Room, and more",
        src: jetpack,
    },
    {
        title: "Firebase",
        desc: "A comprehensive platform provided by Google that offers a variety of tools and services" +
            "to help build, improve, and grow mobile applications.",
        src: firebase,
    },
    {
        title: "Jetpack Compose",
        desc: "modern toolkit for building native UI declaratively allows with less boilerplate code, faster, " +
            " and more efficient to design app UIs.",
        src: compose,
    },
    {
        title: "Others",
        desc: "Some tools that I have used and am familiar with in developing mobile applications such as Clean Architecture, MVVM" +
            "Retrofit, Ktor, Moshi, OKHttp, Glide, Koin, Dagger, Hilt, Coroutine, Flow, Leakcanary, Proguard, JUnit, Mockito, and more.",
        src: others,
    },
];

const Tools = () => {
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
            </div>

            <Grid container spacing="40px">
                {tools?.map((e, idx) => {
                    return (
                        <Grid key={idx} item lg={6} md={12}>
                            <div className="flex flex-row items-center gap-[20px]">
                                <Image
                                    height={120}
                                    width={120}
                                    alt={e?.title}
                                    src={e?.src}
                                    className="rounded-[8px]"
                                />
                                <div className="flex flex-col gap-[8px] ">
                                    <p className="typography-title !text-[30px] !leading-[30px] dark:text-base-light text-base-dark">
                                        {e?.title}
                                    </p>
                                    <p className="typography-desc dark:text-grey-light-active text-base-dark-light ">
                                        {e?.desc}
                                    </p>
                                </div>
                            </div>
                        </Grid>
                    );
                })}
            </Grid>
        </WrapperSection>
    );
};

export default Tools;
