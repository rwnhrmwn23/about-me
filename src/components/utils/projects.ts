import myih from "../../../public/project/myih.png";
import indoalamsari from "../../../public/project/indoalamsari.png";
import inidoc from "../../../public/project/inidoc.png";
import tanipro from "../../../public/project/tanipro.png";
import kerjasehat from "../../../public/project/kerjasehat.png";
import campber from "../../../public/project/campber.png";
import gutenread from "../../../public/project/gutenread.png";
import pokedex from "../../../public/project/pokedex.png";
import mysiis from "../../../public/project/mysiis.png";

export const projects = [
    {
        id: "gutenread",
        title: "Gutenread",
        desc:
            "GutenRead is a lightweight Flutter app for browsing books from the Gutendex API, supporting online and offline access, infinite scroll, search history, and favorites — all built with clean architecture and Riverpod.",
        detail:
            "GutenRead is a Flutter mobile application built to explore book collections from the Gutendex API, designed with performance, testability, and scalability in mind. I architected the app using a clean architecture pattern (data → domain → presentation), applying Domain-Driven Design principles.\n" +
            "<br><br> I implemented offline-first behavior using Isar DB, ensuring that users could access their search history and favorites even without an internet connection. Book browsing supports infinite scroll with caching, and smart search handles both local and remote results dynamically. Favorites are persistently stored using Isar and synchronized across app sessions.\n" +
            "<br><br> I used Riverpod and StateNotifier for scalable state management and handled complex UI state with AsyncValue. The networking layer was built with Dio and modeled with `freezed` data classes and `json_serializable`. I maintained a modular structure and ensured testability by isolating business logic in the domain layer.\n" +
            "<br><br> Additional enhancements included local storage management (shared_preferences & path_provider), network awareness (connectivity_plus), optimized image loading (cached_network_image), and page indicators for better UX. I also wrote unit tests to ensure code robustness.",
        tech: [
            "Flutter",
            "Riverpod",
            "Isar DB",
            "Freezed",
            "Dio",
            "GoRouter",
            "Connectivity Plus"
        ],
        img: gutenread,
        timeline: "July 2025",
        onClick: () =>
            window.open("https://github.com/rwnhrmwn23/guten-read", "_blank"),
    },
    {
        id: "pokedex",
        title: "Pokedex",
        desc:
            "Pokedex is a multiplatform app built with Kotlin Multiplatform and Jetpack Compose. It allows users to search for Pokémon, browse an infinite list, and view detailed information — all using clean architecture and the MVI pattern.",
        detail:
            "Pokedex is a Kotlin Multiplatform application developed using Jetpack Compose for UI, designed with clean architecture principles and the MVI pattern to ensure scalability and testability.\n" +
            "<br><br> The app features a seamless Pokémon search powered by the PokeAPI, an infinite scroll list for exploring all available Pokémon, and a detailed view for each Pokémon including types, stats, and abilities.\n" +
            "<br><br> I implemented the app with a clear separation of concerns using the data → domain → presentation structure. State management is handled via the MVI (Model-View-Intent) pattern, making it easier to maintain and extend.\n" +
            "<br><br> The multiplatform setup allows the business logic and API layer to be shared across Android and iOS, while the UI layer is fully built with Jetpack Compose on Android.\n" +
            "<br><br> For dependency injection, I used Koin. Networking is handled with Ktor and JSON parsing with Kotlinx Serialization. Navigation across screens is implemented with navigation component. Image loading is optimized using Kamel.\n" +
            "<br><br> Key features include reactive UI state, loading indicators, error handling, and consistent data flow between layers. The entire architecture was designed to be modular, testable, and performance-friendly.",
        tech: [
            "Kotlin Multiplatform",
            "Clean Architecture",
            "Jetpack Compose",
            "MVI Pattern",
            "Koin",
            "Ktor",
            "Kamel",
        ],
        img: pokedex,
        timeline: "June 2025",
        onClick: () =>
            window.open("https://github.com/rwnhrmwn23/pokedex-kmp.git", "_blank"),
    },
    {
        id: "mysiis",
        title: "MySIIS",
        desc: "MySIIS is an official application from Telkom Indonesia used for Fulfillment, Assurance, and IndiHome service management. It supports structured survey workflows, service tracking, and operational tasks with location-aware capabilities.",
        detail:
            "As a Flutter Developer, I was responsible for developing, enhancing, and fixing features based on dynamic stakeholder needs. I integrated Google Maps API to enable location tagging and validation, ensuring surveyors operate within a 50-meter threshold of target locations. \n" +
            "<br><br> To support complex field operations, I implemented polygon and grid-based mapping logic, allowing structured and accurate survey execution. I also worked on optimizing UI/UX using Flutter’s modern widget toolkit and effective state management approaches to ensure smooth and responsive user interaction.",
        tech: [
            "Flutter",
            "BloC",
            "Hive DB",
            "Dio",
            "Firebase",
            "Google Maps API",
            "Geolocation",
            "Polygon Mapping"
        ],
        img: mysiis,
        timeline: "Oct 2024 - Present",
        onClick: () => window.open("https://play.google.com/store/apps/details?id=com.telkom.mysiis", "_blank"),
    },
    {
        id: "myindihome",
        title: "MyIndihome",
        desc: "MyIndiHome is the official app from Telkom Indonesia, designed to make it easier for IndiHome customers " +
            "to manage their internet, interactive TV, and landline services.",
        detail:
            "As a native mobile developer for both Android and iOS, I contributed to the modernization of MyIndiHome by refactoring legacy code into a clean architecture structure, separating concerns across data, domain, and presentation layers. I implemented dependency injection using Koin, improved maintainability, and enhanced development scalability across the team. \n" +
            "<br><br> I focused on developing new features, maintaining existing functionalities, and resolving production issues reported via user feedback and Firebase Crashlytics. I integrated services such as Firebase Analytics, Firebase Messaging, and Google Maps to improve user engagement and location-based capabilities. \n" +
            "<br><br> My responsibilities included code reviews, performance optimization, and ensuring stability across both Android and iOS platforms. I worked closely with cross-functional teams to deliver a reliable and seamless user experience for millions of active users.",
        tech: [
            "Android",
            "Kotlin",
            "Firebase",
            "Room",
            "Coroutine",
            "Google APIs",
            "IOS",
            "UIKit",
            "CocoaPods"
        ],
        img: myih,
        timeline: "Jan 2022 - Oct 2024",
        onClick: () => window.open("https://play.google.com/store/apps/details?id=com.telkom.indihome.external", "_blank"),
    },
    // Campber
    // {
    //     id: "campber",
    //     title: "Campber",
    //     desc: "The Campber app is a camping booking platform designed to simplify the " +
    //         "process of planning camping activities online",
    //     detail:
    //         "Here’s a breakdown of its main features:" +
    //         "<br><br>Main Screen and Introduction, When users open the app, they’re greeted with the Campber logo and a brief introduction about the app’s purpose. This app is aimed at helping travelers or nature enthusiasts book camping tickets conveniently." +
    //         "<br><br>Camping Information, Once logged in, users can browse through various available camping locations, complete with descriptions and photos of popular spots. This helps users choose the most suitable location based on their preferences." +
    //         "<br><br>Date Selection and Number of Participants, On the booking page, users can select the start and end dates for their camping session. They can also specify the number of adults and children participating in the camping activity. The total price will automatically be displayed based on the number of participants and the duration of the stay." +
    //         "<br><br>Terms and Conditions, In the checkout section, the app provides important notes, such as age restrictions for children, check-in and check-out times, and promotional information if applicable." +
    //         "<br><br>Payment Status, After completing the payment process, users receive a validated payment status along with their booking details. This includes the transaction number, user name, number of participants, dates, and total price. This confirmation must be shown before entering the camping site." +
    //         "<br><br>The app provides an intuitive and easy booking experience, allowing users to plan their camping activities efficiently and conveniently.",
    //     tech: [
    //         "Android",
    //         "Kotlin",
    //         "Firebase"
    //     ],
    //     img: campber,
    //     timeline: "August 2022",
    //     onClick: () => {},
    // },
    // 3. IndoAlamSari
    // {
    //     id: "indoalamsari",
    //     title: "Indo Alam Sari",
    //     desc: "Indo Alam Sari Restaurant is a popular dining place in Karawang, West Java. " +
    //         "This restaurant is known as a culinary destination that offers a variety of Indonesian specialties " +
    //         "with a natural and comfortable atmosphere, suitable for families, groups of friends, or corporate events.",
    //     detail:
    //         "Indo Alam Sari Restaurant has developed a mobile-based application to provide convenience and a more interactive experience for its users. " +
    //         "Here are the details about the features offered by this application: " +
    //         "<br><br> - Login and Registration, Users can create a new account or log in to an existing account through this application. " +
    //         "<br><br> - Selection of Services for Events, Users can order various Indo Alam Sari services, such as meetings, wedding venues, family events, to corporate catering." +
    //         "<br><br> - Order Restaurants Offline and Online, Users can book tables or dining areas directly at the restaurant location through the application or through applications that support food delivery services, " +
    //         "<br><br> - Points and Loyalty Programs, Every time users make a transaction, they will get reward points that can be accumulated. These points can be used as discounts or to get exclusive discount promos, providing more benefits for customers who frequently use restaurant services. " +
    //         "<br><br> With various features that support the user experience, the Indo Alam Sari Restaurant mobile application not only makes it easier to reserve and order food, but also increases user engagement through loyalty programs.",
    //     tech: [
    //         "Android",
    //         "AndroidJetpack",
    //         "Kotlin",
    //         "Firebase",
    //         "Koin",
    //         "Coroutine",
    //         "RxJava",
    //     ],
    //     img: indoalamsari,
    //     timeline: "Sept - Nov 2022",
    //     onClick: () => {},
    // },
    // 4. IniDoc
    // {
    //     id: "inidoc",
    //     title: "IniDoc",
    //     desc: "IniDoc is a health platform in Indonesia, IniDoc excels in providing accurate health information, " +
    //         "accessible to anyone, anytime, and anywhere. There are two applications where inidoc is for users and " +
    //         "inidoc partners for doctors, hospitals, and pharmacies.",
    //     detail:
    //         "Inidoc serves digital health that offers various features to facilitate access to medical services for users. Here is a summary of the main functions of this application: Features on the IniDoc Application:\n" +
    //         "<br><br> - Chat, Call, and Video Consultation with Doctors, Users can contact doctors via chat, voice call, or video call to get a medical consultation without having to leave the house.\n" +
    //         "<br><br> - Hospital Appointment Booking, This application allows users to make appointments with doctors at various hospitals online, making the visit process easier and more organized.\n" +
    //         "<br><br> - Lab Tests and Health Checks, Users can also order laboratory test services directly from the application and receive the results digitally.\n" +
    //         "<br><br> - Ambulance Call, In an emergency, users can book an ambulance through the application, facilitating a faster medical response.\n" +
    //         "<br><br>In addition to the application for patients, IniDoc also has a Partner version for health professionals, such as:\n" +
    //         "<br><br> - Doctors, can use the partner application to serve patients, receive appointments, and provide consultations.\n" +
    //         "<br><br> - Hospitals can manage appointments made by patients and track the consultation process.\n" +
    //         "<br><br> - Pharmacies, this application is also integrated with pharmacies, facilitating the management of drug prescriptions and delivery of drugs to patients.\n" +
    //         "<br><br>This application is designed to provide comprehensive and integrated health services, increasing efficiency in patient interaction with health facilities.",
    //     tech: [
    //         "Android",
    //         "Kotlin",
    //         "Firebase",
    //         "Google APIs",
    //         "XML",
    //         "Quickblox",
    //         "Midtrans"
    //     ],
    //     img: inidoc,
    //     timeline: "May - Jul 2021",
    //     onClick: () => window.open("https://play.google.com/store/apps/details?id=com.kinikumuda.inidoc", "_blank"),
    // },
    // 5. TaniPro
    // {
    //     id: "tanipro",
    //     title: "TaniPro",
    //     desc: "TaniPro is an agricultural application used by BUMDes (Badan Usaha Milik Desa) " +
    //         "to become better known in the community and advance their business.",
    //     detail:
    //         "TaniPro allows farmers and communities to buy agricultural products managed by BUMDes (Badan Usaha Milik Desa). " +
    //         "In addition, this application also helps BUMDes become better known and expand their marketing reach." +
    //         "<br><br>Main features of the TaniPro application :" +
    //         "<br><br> - BUMDes Product Purchase, Users can easily buy products produced by BUMDes, providing wider access for village communities to sell their agricultural products." +
    //         "<br><br> - Fertilizer Calculator, This feature helps farmers calculate fertilizer needs based on the area and the type of crops they plant. This ensures efficient and effective use of fertilizers." +
    //         "<br><br> - Chat with Agricultural Experts, Users can consult directly with experts in the field of agriculture to get tips, solutions, and advice on various agricultural problems." +
    //         "<br><br> - Agricultural Articles and Information, This application provides various articles on farming techniques, the latest trends in agriculture, and general information to increase farmer productivity." +
    //         "<br><br> - Agricultural Community, The community feature allows farmers and application users to exchange information, experiences, and discuss various challenges and solutions in farming." +
    //         "<br><br> - Rice and Corn Farming Guide, There is a complete guide to farming rice or corn, from land preparation to harvest, providing support for farmers in optimizing their yields." +
    //         "<br><br> - Utilization of Artificial Intelligence, TaniPro uses AI to recognize plant diseases through images or symptoms inputted by users, and provides relevant and timely solutions to address the problem." +
    //         "<br><br>With these features, TaniPro helps empower local farmers and strengthen the agricultural ecosystem at the village level.",
    //     tech: [
    //         "Android",
    //         "AndroidJetpack",
    //         "Kotlin",
    //         "Firebase",
    //         "Koin",
    //         "Coroutine",
    //         "TensorFlow",
    //         "Socket.IO",
    //     ],
    //     img: tanipro,
    //     timeline: "Sept - Des 2021",
    //     onClick: () => {},
    // },
    // 6. Kerja Sehat
    // {
    //     id: "kerjasehat",
    //     title: "Kerja Sehat",
    //     desc: "Kerja Sehat is an application specifically developed for use during COVID-19, " +
    //         "with the aim of helping workers minimize the spread of the virus in the workplace.",
    //     detail:
    //         "This application offers a regional zoning feature based on the user's current location, with green," +
    //         " yellow, and orange categories to indicate the level of risk of spreading COVID-19 in the area." +
    //         " In addition, users can monitor their health with a heart rate check feature, get reminders" +
    //         " or health tips related to COVID-19, and do attendance safely using QR code scanning.",
    //     tech: [
    //         "Android",
    //         "Kotlin",
    //         "Firebase",
    //         "Google APIs",
    //         "XML",
    //         "Midtrans"
    //     ],
    //     img: kerjasehat,
    //     timeline: "Jan - Feb 2021",
    //     onClick: () => {},
    // },
];
