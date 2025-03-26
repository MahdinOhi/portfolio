import {
  ICombinedInformation,
  IDirectMessageItem,
  IInitialInformation,
  ITitledListItem,
} from "./Models";

class DynamicValues {
  static initialInformation: IInitialInformation = {
    name: "Mahdin Ohi",
    occupation: "Django Dev",
  };

  static directMessageItems: Array<IDirectMessageItem> = [
    {
      name: "WhatsApp",
      link: "https://api.whatsapp.com/send?phone=8801996652862",
    },
  ];

  static about: Array<ITitledListItem> = [
    {
      text: "Information",
      shouldNotSort: true,
      arr: [
        {
          title: "Name",
          desc: "Mahdin Ohi",
          logo: "https://cdn-icons-png.flaticon.com/128/1077/1077012.png",
        },
        {
          title: "Work Experience",
          desc: "1 year",
          logo: "https://cdn-icons-png.flaticon.com/128/3281/3281289.png",
        },
        {
          title: "Languages",
          desc: "Bengali, English, Hindi",
          logo: "https://cdn-icons-png.flaticon.com/128/3898/3898150.png",
        },
        {
          title: "Nationality",
          desc: "Bangladeshi",
          logo: "https://cdn-icons-png.flaticon.com/128/11701/11701027.png",
        },
        {
          title: "Resume",
          desc: "Click the link icon to view/download",
          link: "https://flowcv.com/resume/f0ek4gwwrd",
          logo: "https://cdn-icons-png.flaticon.com/128/909/909212.png",
        },
      ],
    },
    {
      text: "Experiences",
      arr: [
        {
          title: "Level7",
          desc: "Django Developer",
          logo: "https://media.licdn.com/dms/image/v2/D4E0BAQEadQEZQ8krYw/company-logo_200_200/company-logo_200_200/0/1730461729033/level_7_marketing_logo?e=1748476800&v=beta&t=w4byVdN9aUVTZqzAeAvCjPzXKg3qxIJXu6e1UlgdtCQ",
        },
        {
          title: "Pen Science",
          desc: "Campus Ambassador",
          logo: "https://github.com/p32929/portfolio-v2/assets/6418354/b385229a-3084-4952-84f3-134e627cc3e7",
        },
      ],
    },
  ];

  static skills: Array<ITitledListItem> = [
    {
      text: "Programming / Markup Languages",
      arr: [
        {
          title: "C",
          logo: "https://seeklogo.com/images/C/c-logo-672525892C-seeklogo.com.png",
        },
        {
          title: "C++",
          logo: "https://seeklogo.com/images/C/c-logo-1B1817C041-seeklogo.com.png",
        },
        {
          title: "Java",
          logo: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
        },
        {
          title: "Python",
          logo: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
        },
        {
          title: "JavaScript",
          logo: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
        },
        {
          title: "HTML",
          logo: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
        },
        {
          title: "CSS",
          logo: "https://seeklogo.com/images/C/css3-logo-F1923C8D0E-seeklogo.com.png",
        },
        {
          title: "TypeScript",
          logo: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
        },
        {
          title: "Markdown",
          logo: "https://www.vectorlogo.zone/logos/markdown-here/markdown-here-icon.svg",
        },
        {
          title: "LaTeX",
          logo: "https://raw.githubusercontent.com/detain/svg-logos/b02ee1ac30c7ff4757278337c95588b01ed0954b/svg/l/latex-1.svg",
        },
      ],
    },
    {
      text: "Databases",
      arr: [
        {
          title: "SQL",
          logo: "https://github.com/p32929/portfolio-v2/assets/6418354/ffeb437f-0d63-40e5-9bc3-041d5715d67e",
        },
        {
          title: "MySQL",
          logo: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
        },
        {
          title: "SQLite",
          logo: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
        },
      ],
    },
    {
      text: "UI Component Libraries",
      arr: [
        {
          title: "Tailwind CSS",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png?20230715030042",
        },
        {
          title: "Bootstrap",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png",
        },
      ],
    },
    {
      text: "Libraries / Frameworks / Techs",
      arr: [
        {
          title: "Django",
          logo: "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg",
        },
        {
          title: "NodeJS",
          logo: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
        },
        {
          title: "ExpressJS",
          logo: "https://github.com/p32929/portfolio-v2/assets/6418354/f38ec9f9-a921-4c96-8fb3-f2a598c1d0b4",
        },
        {
          title: "ReactJS",
          logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
        },
        {
          title: "NextJS",
          logo: "https://github.com/p32929/portfolio-v2/assets/6418354/1b988896-5ab2-42b4-a4f3-153d42c6488c",
        },
        {
          title: "Beautiful soup",
          logo: "https://github.com/3r4y/react-portfolio-template/assets/6418354/c9199eab-529b-4314-a990-c46deba899e9",
        },
        {
          title: "Numpy",
          logo: "https://numpy.org/images/logo.svg",
        },
        {
          title: "Pandas",
          logo: "https://pandas.pydata.org/static/img/pandas_white.svg",
        },
        {
          title: "Flask",
          logo: "https://github.com/p32929/portfolio-v2/assets/6418354/2183bb2b-7680-49f1-a626-b1f647e7d656",
        },
        {
          title: "Docker",
          logo: "https://cdn.iconscout.com/icon/free/png-128/docker-226091.png",
        },
        {
          title: "Git",
          logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
        },
      ],
    },
    {
      text: "Others",
      arr: [
        {
          title: "Figma",
          logo: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
        },
        {
          title: "Inkscape",
          logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Inkscape_Logo.svg",
        },
        {
          title: "VS Code",
          logo: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png",
        },
      ],
    },
  ];

  static projects: Array<ITitledListItem> = [
    {
      text: "Web Apps",
      arr: [
        {
          title: "E-commerece",
          link: "https://github.com/MahdinOhi/MAC-My-Awesome-Cart",
          logo: "https://logowik.com/content/uploads/images/xcart6952.jpg",
          desc: "An e-commerce website made by django",
        },
        {
          title: "BeeBlogs",
          link: "https://beeblogs.vercel.app/",
          logo: "https://logowik.com/content/uploads/images/abstract-logo4046.logowik.com.webp",
          desc: "A simple blog website made by NextJS",
        },
        {
          title: "Mailswift",
          link: "https://mahdinohi2.pythonanywhere.com/",
          logo: "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/28638932ead9711742d945070f90ac1c5348683c/svg/mailjet.svg",
          desc: "MailSwift | Send Bulk Mail with support of MD & HTML",
        },
        {
          title: "LinkStack | LinkTree Clone",
          logo: "https://iconape.com/wp-content/files/uc/207920/png/link4-logo.png",
          desc: "A simple clone of LinkTree",
          link: "https://mahdinohi.github.io/linkstack/",
        },
        {
          title: "To-Do Webapp",
          logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Taskful_Logo.svg",
          desc: "A simple To-Do List Webapp",
          link: "https://github.com/MahdinOhi/To-Do-List-App",
        },
      ],
    },
    // {
    //   text: "iOS Apps",
    //   arr: [
    //     {
    //       title: "Adblock for YT",
    //       link: "https://apps.apple.com/au/app/adblock-for-youtube/id1592568016",
    //       logo: "https://is2-ssl.mzstatic.com/image/thumb/Purple126/v4/65/7e/a8/657ea8d9-c3aa-6951-38c8-948c05cd96c3/AppIcon-0-0-85-220-0-0-0-0-4-0-0-0-2x-sRGB-0-0-0-0-0.png/246x0w.webp",
    //       desc: "Removes ads from YT videos, embedded videos on third party websites and streams.",
    //     },
    //     {
    //       title: "Al Quran by Quran Touch",
    //       link: "https://apps.apple.com/gb/app/al-quran-by-quran-touch/id585240351",
    //       logo: "https://is3-ssl.mzstatic.com/image/thumb/Purple112/v4/9d/7e/ed/9d7eedd6-e567-5251-bed6-dce7e868bb57/AppIcon-0-1x_U007emarketing-0-10-0-85-220.png/246x0w.webp",
    //       desc: "The most comprehensive Muslim App!",
    //     },
    //   ],
    // },
    // {
    //   text: "Android Apps",
    //   arr: [
    //     {
    //       title: "Al Quran by Quran Touch",
    //       link: "https://www.apkmonk.com/app/com.qurantouch.qurantouchhd.app/",
    //       logo: "https://is3-ssl.mzstatic.com/image/thumb/Purple112/v4/9d/7e/ed/9d7eedd6-e567-5251-bed6-dce7e868bb57/AppIcon-0-1x_U007emarketing-0-10-0-85-220.png/246x0w.webp",
    //       desc: "The most comprehensive Muslim App!",
    //     },
    //     {
    //       title: "Thamao",
    //       logo: "https://cdn.apkmonk.com/logos/com.thamao_150x150.png",
    //       desc: "বাংলাদেশে স্মার্টফোনের চুরি এবার অসম্ভব",
    //       link: "https://www.apkmonk.com/app/com.thamao/",
    //     },
    //     {
    //       title: "Desplash",
    //       logo: "https://lh3.googleusercontent.com/ILrto9KguXlr-clbhYKUonpnHszgNp_N5Qvc8_u9QaM71oaqNKcYql2sV3sqZ7nqzsc=s180",
    //       desc: "Automatic Free High Quality Wallpapers powered by Unsplash.com",
    //       link: "https://www.xda-developers.com/desplash-wallpaper-app-unsplash/",
    //     },
    //     {
    //       title: "The Great Postman",
    //       logo: "https://lh3.googleusercontent.com/ni-lk3b2nTMZyC7r1wYBW6cm9eYqGAN-t6fXV-kD0lSyw1lO3kenC1We71fZjSryvFII=s180",
    //       desc: "Powerful, Lightweight REST API client for Android",
    //       link: "https://apkcombo.com/es/rest-api-client-the-great-postman/p32929.greatpostman/",
    //     },
    //     {
    //       title: "Sleepy - Addiction Remover",
    //       logo: "https://user-images.githubusercontent.com/6418354/192146268-29e1bac2-e477-4010-ae03-96adecbf07e6.png",
    //       desc: "The one and only EFFECTIVE addiction remover on Google Play store",
    //       link: "https://apkcombo.com/es/sleepy-phone-addiction-controller/p32929.lazyphone/",
    //     },
    //     {
    //       title: "Best CGPA Calculator",
    //       logo: "https://user-images.githubusercontent.com/6418354/192146303-6e04c9ac-ffb2-4931-bb10-ef54ff7af382.png",
    //       desc: "A simple yet effective CGPA Calculator for University students",
    //       link: "https://apkcombo.com/es/cgpa-calculator-for-update-see-the-description/p32929.cgpa_calculator/",
    //     },
    //     {
    //       title: "Buy Sell BD",
    //       logo: "https://image.winudf.com/v2/image1/cDMyOTI5LmJ1eXNlbGxiZF9pY29uXzE1NTkyOTQ5NjVfMDYz/icon.png?w=170&fakeurl=1",
    //       desc: "A better & more reliable alternative for Bikroy.com - A marketplace app for buying-selling new/used goods",
    //       link: "https://apkcombo.com/es/buy-sell-bd-buy-sell-everything-easily-in-bd/p32929.buysellbd/",
    //     },
    //     {
    //       title: "ExIn",
    //       logo: "https://lh3.googleusercontent.com/X8mRJd7JajvDXoW7NaluKt2IvC3osH6czkTPoWeSYJ96U2LWLKT4xiFgvNouwf-UvEk=s180",
    //       desc: "A Simple & user friendly income-expense tracker ",
    //       link: "https://apkcombo.com/es/exin-discontinued/p32929.exin/",
    //     },
    //     {
    //       title: "I am free",
    //       logo: "https://image.winudf.com/v2/image1/cDMyOTI5LmltZnJlZV9pY29uXzE1NzY4ODAwNzVfMDU3/icon.png?w=170&fakeurl=1",
    //       desc: "বেকার মুক্ত বাংলাদেশ গড়ার লক্ষ্যে - I am FREE",
    //       link: "https://apkcombo.com/es/i-am-free/p32929.imfree/",
    //     },
    //     {
    //       title: "Awesome NCTB",
    //       logo: "https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5uY3RiX2ljb25fMTU3NjU3MjcwNF8wMjI/icon.png?fakeurl=1",
    //       desc: "Download NCTB Books easily and Free",
    //       link: "https://apkcombo.com/es/awesome-nctb/org.richit.nctb/",
    //     },
    //     {
    //       title: "বৃক্ষ ( Brikkho )",
    //       logo: "https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5icmlra2hvX2ljb25fMTU3MDEyMTU0Ml8wODA/icon.png?fakeurl=1",
    //       desc: "Learn about trees in your fingertips",
    //       link: "https://apkcombo.com/es/%E0%A6%AC%E0%A7%83%E0%A6%95%E0%A7%8D%E0%A6%B7-brikkho/org.richit.brikkho/",
    //     },
    //     {
    //       title: "IQQuiz",
    //       logo: "https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5pcXF1aXphcHBfaWNvbl8xNTcxMDE0NzcxXzA2Mg/icon.png?fakeurl=1",
    //       desc: "A simple IQ game",
    //       link: "https://apkcombo.com/es/iqquiz/org.richit.iqquizapp/",
    //     },
    //     {
    //       title: "BirdsLover",
    //       logo: "https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5iaXJkc2xvdmVyX2ljb25fMTU3MjAwNDIxNl8wOTE/icon.png?fakeurl=1",
    //       desc: "Learn about birds in your fingertips",
    //       link: "https://apkcombo.com/es/birdslover/org.richit.birdslover/",
    //     },
    //     {
    //       title: "Animal Lover",
    //       logo: "https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5hbmltYWxfaWNvbl8xNTc3MjkyMzIzXzAyMw/icon.png?fakeurl=1",
    //       desc: "Learn about birds in your fingertips",
    //       link: "https://apkcombo.com/es/animal-lover/org.richit.animal/",
    //     },
    //     {
    //       title: "Jibanananda Recitation (Abritti)",
    //       logo: "https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5qaWJvbmFuZG9rb2JpdGFzb21vZ3JvX2ljb25fMTU3MDEwNDExNF8wNDc/icon.png?fakeurl=1",
    //       desc: "50+ poems of Jibanananda Das with audio recitation",
    //       link: "https://apkcombo.com/es/jibanananda-recitation-abritti/org.richit.jibonandokobitasomogro/",
    //     },
    //     {
    //       title: "MathLover (Simple, Infinite, Math game)",
    //       logo: "https://lh3.googleusercontent.com/GaisH_-MeK2c_ct4kp5qbqxbJPE-q4isTdZswR4CocgB8sLNCFk4beXdlmaaFuveKUwd",
    //       desc: "MathLover is a simple, infinite mathematical problem solving game for everyone.",
    //       link: "https://apkcombo.com/es/mathlover-simple-infinite-math-game/org.richit.mathblitz/",
    //     },
    //     {
    //       title: "Hospitals BD",
    //       logo: "https://lh3.googleusercontent.com/MMfY8vG1YfAFh1w6iHEp8NXCwl-NSCUDmfPkUAWmqhSGfO3JR7vBvw_XZzV8JxrDag",
    //       desc: "Get nearest Hospital Information in Bangladesh in your fingertips",
    //       link: "https://apkcombo.com/es/hospitals-bd/org.richit.contacthospitals/",
    //     },
    //     {
    //       title: "BirthdayBot",
    //       logo: `https://cdn.iconscout.com/icon/premium/png-256-thumb/gift-2990371-2484427.png`,
    //       desc: "Birthday wishing apps, made for individual people...",
    //       link: "https://github.com/p32929/my_android_apps/releases/tag/all",
    //     },
    //   ],
    // },
    // {
    //   text: "Desktop Apps",
    //   arr: [
    //     {
    //       title: "PotatoTimer",
    //       logo: "https://raw.githubusercontent.com/p32929/PotatoTimer/master/resources/icon.ico",
    //       desc: "A pomotodo app that forces you to take a break - created using ElectronJS",
    //       link: "https://github.com/p32929/Electron-Pomotodo",
    //     },
    //     {
    //       title: "Pomota",
    //       logo: "https://github.com/p32929/pomota/blob/master/src-tauri/icons/128x128.png?raw=true",
    //       desc: "A simple user-friendly cross-platform tauri based pomodoro timer app that forces you to take a break",
    //       link: "https://github.com/p32929/pomota",
    //     },
    //     {
    //       title: "google calender widget",
    //       logo: "https://duckduckgo.com/i/e2d8001c.png",
    //       desc: "An unofficial google calendar desktop widget for Windows, Mac and Linux ",
    //       link: "https://github.com/p32929/google-calender-widget",
    //     },
    //     {
    //       title: "MacJuiceMonitor",
    //       logo: "https://github.com/user-attachments/assets/21b4d0ac-1734-4d42-9da4-e873628a022a",
    //       desc: "Your essential tool for keeping track of all your Bluetooth-connected devices' battery levels, conveniently located in the macOS menu bar",
    //       link: "https://github.com/p32929/mac-juice-monitor",
    //     },
    //   ],
    // },
    {
      text: "Command Line Interfaces ( CLIs )",
      arr: [
        {
          title: "EduBase",
          link: "https://github.com/MahdinOhi/EduBase",
          logo: "https://raw.githubusercontent.com/benc-uk/icon-collection/e33ee714d05a24a81cf6ccd967ef34b22cb77e65/azure-patterns/database09.svg",
          desc: "EduBase | A DBMS using C [WIP]",
        },
        // {
        //   title: "Fay",
        //   logo: "https://crates.io/assets/cargo.png",
        //   desc: "A simple cross platform CLI app written in Rust to automate multiple shell ( bash or cmd ) commands",
        //   link: "https://crates.io/crates/fay",
        // },
        // {
        //   title: "SIIN",
        //   logo: "https://crates.io/assets/cargo.png",
        //   desc: "A batch installer that downloads and installs a list of apps, written in Rust ( Kinda like Ninite )",
        //   link: "https://crates.io/crates/siin",
        // },
      ],
    },
    // {
    //   text: "Automations",
    //   arr: [
    //     {
    //       title: "Dingtone Bot",
    //       logo: "https://github.com/p32929/portfolio-v2/assets/6418354/f24e64e7-ef7a-4d2d-a7d9-55f4797043cf",
    //       desc: "A bot made using Python and UIAutomator2 to automate watching ads on certain apps to get credits",
    //       link: "https://drive.google.com/file/d/159D_tco3qkpgh2a3CWz-f0ixPEpeUN8V/view?usp=sharing",
    //     },
    //     {
    //       title: "Indeed-Linkedin bot",
    //       logo: "https://github.com/p32929/portfolio-v2/assets/6418354/f24e64e7-ef7a-4d2d-a7d9-55f4797043cf",
    //       desc: "An automation bot created using playwright to automate applying jobs on Indeed and Linkedin",
    //       link: "https://drive.google.com/file/d/10Xc4Y0Z5KXxKhb9StF3bQfivYHHeNZsa/view?usp=sharing",
    //     },
    //   ],
    // },
    // {
    //   text: "Libraries / Packages / Crates",
    //   arr: [
    //     {
    //       title: "AndroidEasySQL-Library",
    //       logo: "https://www.vectorlogo.zone/logos/android/android-icon.svg",
    //       desc: "An Easier & Lazier approach to SQL database for Android",
    //       link: "https://github.com/p32929/AndroidEasySQL-Library",
    //     },
    //     {
    //       title: "AndroidAppLockscreen",
    //       logo: "https://www.vectorlogo.zone/logos/android/android-icon.svg",
    //       desc: "An Easier & Lazier approach to getting runtime permission in Android ",
    //       link: "https://github.com/p32929/AndroidAppLockscreen",
    //     },
    //     {
    //       title: "Manufacturer Battery Optimization",
    //       logo: "https://www.vectorlogo.zone/logos/android/android-icon.svg",
    //       desc: "Simple helper class for Android Battery Optimization ignoring in some devices",
    //       link: "https://gist.github.com/p32929/41e7af650f6a2c11e9306ab600fb9b03",
    //     },
    //     {
    //       title: "MyHouse Ads Android",
    //       logo: "https://www.vectorlogo.zone/logos/android/android-icon.svg",
    //       desc: "A library for cross promoting own apps within own apps - for Android",
    //       link: "https://github.com/p32929/MyHouseAdsAndroid",
    //     },
    //     {
    //       title: "House Ads 2",
    //       logo: "https://www.vectorlogo.zone/logos/android/android-icon.svg",
    //       desc: "A library ( V2 ) for cross promoting own apps within own apps - for Android",
    //       link: "https://github.com/p32929/HouseAds2",
    //     },
    //     {
    //       title: "Android App Updater",
    //       logo: "https://www.vectorlogo.zone/logos/android/android-icon.svg",
    //       desc: "A simple, Lightweight App Updater Library for Android",
    //       link: "https://github.com/p32929/AndroidAppUpdater",
    //     },
    //     {
    //       title: "Office About",
    //       logo: "https://www.vectorlogo.zone/logos/android/android-icon.svg",
    //       desc: "A simple about screen library for Android for a Team of people",
    //       link: "https://github.com/p32929/OfficeAbout",
    //     },
    //     {
    //       title: "Json Viewer Android",
    //       logo: "https://www.vectorlogo.zone/logos/android/android-icon.svg",
    //       desc: "A simple JSON Viewer for Android",
    //     },
    //     {
    //       title: "Android Receivers Library",
    //       logo: "https://www.vectorlogo.zone/logos/android/android-icon.svg",
    //       desc: "A library for simpler BroadcastReceiver implementations",
    //     },
    //     {
    //       title: "Fay",
    //       logo: "https://crates.io/assets/cargo.png",
    //       desc: "A simple cross platform CLI app written in Rust to automate multiple shell ( bash or cmd ) commands",
    //       link: "https://crates.io/crates/fay",
    //     },
    //     {
    //       title: "fayfetch",
    //       logo: "https://avatars.githubusercontent.com/u/6078720?s=200&v=4",
    //       desc: "A simple wrapper for Fetch",
    //       link: "https://www.npmjs.com/package/fayfetch",
    //     },
    //     {
    //       title: "fjsondb",
    //       logo: "https://avatars.githubusercontent.com/u/6078720?s=200&v=4",
    //       desc: "A fast and simple JSON database for NodeJS",
    //       link: "https://www.npmjs.com/package/fjsondb",
    //     },
    //     {
    //       title: "str_template",
    //       logo: "https://avatars.githubusercontent.com/u/6078720?s=200&v=4",
    //       desc: "A fast and simple string templating library, written in TypeScript ( Supports both Client side and Server side JavaScript / TypeScript )",
    //       link: "https://www.npmjs.com/package/str-template-ts",
    //     },
    //     {
    //       title: "use-megamind",
    //       logo: "https://avatars.githubusercontent.com/u/6078720?s=200&v=4",
    //       desc: " A simple react hook for managing asynchronous function calls with ease on the client side ",
    //       link: "https://github.com/p32929/use-megamind",
    //     },
    //     {
    //       title: "EasiestDB",
    //       logo: `https://cdn.iconscout.com/icon/free/png-256/free-flutter-3521432-2944876.png`,
    //       desc: "The Easiest and the Laziest approach to Flutter SQL Database.",
    //       link: "https://pub.dev/packages/easiestdb",
    //     },
    //     {
    //       title: "Simply Wifi",
    //       logo: `https://cdn.iconscout.com/icon/free/png-256/free-flutter-3521432-2944876.png`,
    //       desc: "A simplified version of the wifi_iot package",
    //       link: "https://pub.dev/packages/simply_wifi",
    //     },
    //     {
    //       title: "audio_duration",
    //       logo: `https://cdn.iconscout.com/icon/free/png-256/free-flutter-3521432-2944876.png`,
    //       desc: "Just a simple flutter package to get the duration of any audio file ( like: mp3 ) in milliseconds",
    //       link: "https://pub.dev/packages/audio_duration",
    //     },
    //   ],
    // },
    // {
    //   text: "Extensions / Plugins / Addons",
    //   arr: [
    //     {
    //       title: "vscode nvim leave insertmode",
    //       logo: "https://code.visualstudio.com/assets/images/code-stable.png",
    //       desc: "This basic VSCode extension ensures that neovim is in normal mode switching between text editor panels.",
    //       link: "https://marketplace.visualstudio.com/items?itemName=p32929.vscode-nvim-leave-insertmode",
    //     },
    //     {
    //       title: "one console log",
    //       logo: "https://code.visualstudio.com/assets/images/code-stable.png",
    //       desc: "A modified version of the turbo-console-log that adds only one line of console instead of multiples.",
    //       link: "https://marketplace.visualstudio.com/items?itemName=p32929.one-console-log",
    //     },
    //     {
    //       title: "Home",
    //       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/800px-Google_Chrome_icon_%28February_2022%29.svg.png",
    //       desc: "A Simple homepage extension created using Shadcn, React, TypeScript, usm-redux etc ",
    //       link: "https://github.com/p32929/Home",
    //     },
    //     {
    //       title: "obsidotion",
    //       logo: "https://obsidian.md/images/obsidian-logo-gradient.svg",
    //       desc: "Asimple obsidian plugin that syncs from/to obsidian/notion ",
    //       link: "https://github.com/p32929/obsidotion",
    //     },
    //   ],
    // },
  ];

  static contacts: Array<ITitledListItem> = [
    {
      text: "Contact me",
      arr: [
        {
          title: "WhatsApp ( Recommended )",
          logo: "https://user-images.githubusercontent.com/6418354/155842184-b064bf36-de8e-4317-8f8e-cb7755eed995.png",
          link: "https://api.whatsapp.com/send?phone=8801996652863",
          desc: "+8801996652863",
        },
        {
          title: "Email",
          logo: "https://cdn3d.iconscout.com/3d/premium/thumb/email-address-4437044-3684811.png",
          desc: "mahdinislamohi@gmail.com",
          link: "mahdinislamohi@gmail.com",
        },
      ],
    },
    {
      text: "Others",
      arr: [
        // {
        //   title: "Anywhere on the internet",
        //   logo: "https://user-images.githubusercontent.com/6418354/155840900-91ac076a-8d2b-45dc-b346-66f72d376d4b.png",
        //   desc: "@p32929",
        // },
        {
          title: "GitHub",
          logo: "https://cdn-icons-png.flaticon.com/128/1051/1051275.png",
          link: "https://github.com/MahdinOhi",
        },
        {
          title: "LinkedIn",
          logo: "https://user-images.githubusercontent.com/6418354/155841027-8698cb12-7ddd-4604-a4ea-c618ddbc1cd8.png",
          link: "https://www.linkedin.com/in/mahdin-ohi-3b55a0280/",
        },
        {
          title: "Facebook",
          logo: "https://user-images.githubusercontent.com/6418354/155840898-9e2327aa-a280-45e3-8266-8268242abda4.png",
          link: "https://www.facebook.com/mahdin.ohi07",
        },
        {
          title: "Instagram",
          logo: "https://user-images.githubusercontent.com/6418354/155841023-0b842621-56a3-42ec-81f1-3944034b09c7.png",
          link: "https://www.instagram.com/xenon_spectre/",
        },
        {
          title: "Medium",
          logo: "https://seeklogo.com/images/M/medium-logo-93CDCF6451-seeklogo.com.png",
          link: "https://medium.com/@mahdinislamohi",
        },
        {
          title: "Codeforces",
          logo: "https://codeforces.org/s/32979/images/codeforces-sponsored-by-ton.png",
          link: "https://codeforces.com/profile/MahdinOhi",
        },
        {
          title: "LeetCode",
          logo: "https://cdn.iconscout.com/icon/free/png-512/free-leetcode-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-4-pack-logos-icons-2944960.png?f=webp&w=512",
          link: "https://leetcode.com/MahdinOhi/",
        },
      ],
    },
    // {
    //   text: "Thank you for visiting my portfolio",
    //   arr: [
    //     {
    //       title: "Click on the link button",
    //       desc: "To create your own portfolio. It will only take around 3 minutes",
    //       logo: `https://cdn.iconscout.com/icon/premium/png-256-thumb/gift-2990371-2484427.png`,
    //       link: "https://github.com/p32929/p32929.github.io/",
    //     },
    //   ],
    // },
  ];
}

//
// Dont change anything below this line
//
export const combinedInformation: ICombinedInformation = {
  initialInformation: DynamicValues.initialInformation,
  directMessageItems: DynamicValues.directMessageItems,
  routes: [
    {
      name: "About",
      items: DynamicValues.about,
    },
    {
      name: "Skills",
      items: DynamicValues.skills,
    },
    {
      name: "Projects",
      items: DynamicValues.projects,
    },
    {
      name: "Contact",
      items: DynamicValues.contacts,
    },
  ],
};
