import myih from "../../../public/project/myih.png";

export const projects = [
  {
    id: "myindihome",
    title: "MyIndihome",
    desc: "MyIndiHome is the official app from Telkom Indonesia, designed to make it easier for IndiHome customers " +
        "to manage their internet, interactive TV, and landline services",
    detail:
      "MyIndiHome offers a more convenient and efficient experience for users to manage their IndiHome subscriptions. The main features include:\n" +
        "Check and Pay Bills, Service Issue Reporting, Order Additional Services, MyIndiHome Points, Notifications and Promotions" +
        "ser-Friendly Interface, With MyIndiHome, there’s no need to manage your IndiHome services manually. " +
        "Everything can be handled easily within a single app.",
    tech: [
      "Android",
      "Android Jetpack",
      "Kotlin",
      "Firebase",
      "Google APIs",
      "IOS",
      "UIKit"
    ],
    img: myih,
    onClick: () => window.open("https://play.google.com/store/apps/details?id=com.telkom.indihome.external", "_blank"),
  },
];
