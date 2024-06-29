<p align="center">
  <img src="public/logo.png" alt="project-logo">
</p>
<p align="center">
    <h1 align="center">STREAMSPHERE</h1>
</p>
<p align="center">
    <em>Your seamless, immersive streaming experience!</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/last-commit/wichtowski/StreamSphere" alt="last-commit">
	<img src="https://img.shields.io/github/commit-activity/w/wichtowski/StreamSphere" alt="commit-freq">
	<img src="https://img.shields.io/github/languages/count/wichtowski/StreamSphere" alt="repo-language-count">
	<img src="https://img.shields.io/github/commit-activity/w/wichtowski/StreamSphere" alt="repo-version">
	<img src="https://img.shields.io/github/actions/workflow/status/wichtowski/StreamSphere/main.yml" alt="repo-workflow-status">
	<img src="https://img.shields.io/github/license/wichtowski/StreamSphere" alt="license">
  <br/>
	<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=Typescript&logoColor=FFFFFF" alt="Typescript">
	<img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular">
	<img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="SCSS">
	<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="NPM">
	<img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="Git">
	<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma">
	<img src="https://img.shields.io/badge/VideoJS-000000?style=for-the-badge&logoColor=FFFFFF" alt="VideoJS">
<p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br><!-- TABLE OF CONTENTS -->

<h3>Quick Links</h3>

- [📍 Overview](#-overview)
- [🧩 Features](#-features)
- [🎨 Designs](#-designs)
- [🗂️ Simplified Repo Structure](#️-simplified-repo-structure)
- [📦 Modules](#-modules)
- [🚀 Getting Started](#-getting-started)
  - [⚙️ Installation](#️-installation)
  - [🤖 Usage](#-usage)
  - [🧪 Tests](#-tests)
- [🔨 Project Roadmap](#-project-roadmap)
- [📝 License](#-license)
- [🔗 Acknowledgments](#-acknowledgments)
<hr>

## 📍 Overview

StreamSpheres is an innovative media platform, offering a immersive streaming experience with a sleek, modern interface. The project entails a collection of carefully crafted components, each serving a distinct purpose to create a seamless user journey. From authentication processes to captivating carousels and interactive navigation bars, every element is designed for maximum visual appeal and user engagement. StreamSpheres also prides itself on robust testing and CI/CD workflows for streamlined development. These components unite to form an enthralling web application, enhancing the users streaming experience.

---

## 🧩 Features

- Ad system
- Basic sign in system
- Mocked P24 integration
- Swiper & Bootstrap Carousels
- Path guarding dependent on user login status
- Ability to watch videos hosted on YouTube
- Ability to watch videos hosted on the github by VideoJS
- No Backend (most of responses are mocked/taken from .json files)

---

## 🎨 Designs

- [Landing Page](https://www.figma.com/design/DgV1Z5Tvnh2REOvHCkimXJ/Projekt-technologie-Internetowe?node-id=48-63&t=681CRhSOxvWV2C4v-1)
- [Homepage](https://www.figma.com/design/DgV1Z5Tvnh2REOvHCkimXJ/Projekt-technologie-Internetowe?node-id=46-3&t=681CRhSOxvWV2C4v-0)
- [Sign In Page](https://www.figma.com/design/DgV1Z5Tvnh2REOvHCkimXJ/Projekt-technologie-Internetowe?node-id=46-2&t=681CRhSOxvWV2C4v-1)
- [Sign Up Page](https://www.figma.com/design/DgV1Z5Tvnh2REOvHCkimXJ/Projekt-technologie-Internetowe?node-id=46-4&t=681CRhSOxvWV2C4v-0)
- [Video Player](https://www.figma.com/design/DgV1Z5Tvnh2REOvHCkimXJ/Projekt-technologie-Internetowe?node-id=51-68&t=681CRhSOxvWV2C4v-0)


---

## 🗂️ Simplified Repo Structure

```sh
└── StreamSphere/
    ├── .github
    │   └── workflows
    ├── README.md
    ├── angular.json
    ├── eslint.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── public
    ├── src
    │   ├── app
    │   ├── index.html
    │   ├── main.ts
    │   └── styles.scss
    ├── tsconfig.app.json
    ├── tsconfig.json
    └── tsconfig.spec.json
```

---

## 📦 Modules

<details closed><summary>.</summary>

| File                                                                                                | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---                                                                                                 | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [package.json](https://github.com/Wichtowski/StreamSphere/blob/main/package.json)             | StreamSpheres package.json is a pivotal config file, orchestrating script execution and managing project dependencies. It launches and serves the Angular application, enforcing linting rules and formatting standards, while also preparing it for distribution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [tsconfig.spec.json](https://github.com/Wichtowski/StreamSphere/blob/main/tsconfig.spec.json) | Speculations is configured by tsconfig.spec.json, streamlining compilation for Angular specs, and facilitating Jasmine tests. It specifies output directory and dependencies, including Jasmine for efficient testing suites.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [tsconfig.json](https://github.com/Wichtowski/StreamSphere/blob/main/tsconfig.json)           | Settings configure the TypeScript compiler for this repository, offering strict type-checking and enhancing compatibility across modules, while enabling Angular features. It sets compilation defaults, ensuring seamless development with enhanced error detection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [angular.json](https://github.com/Wichtowski/StreamSphere/blob/main/angular.json)             | Angular configuration file, angular.json, is the repositorys command center, detailing project architecture, defining builds, and specifying sources for the StreamSphere app. Its a roadmap for the development process.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [tsconfig.app.json](https://github.com/Wichtowski/StreamSphere/blob/main/tsconfig.app.json)   | The tsconfig.app.json schema outlines Angular compilation settings, specifying the TypeScript compiler options and output directory for the application codebase. Its a pivotal configuration file that ensures seamless and tailored compilation for the StreamSphere repository.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [eslint.config.mjs](https://github.com/Wichtowski/StreamSphere/blob/main/eslint.config.mjs)   | Enhancing code quality, this ESLint config meticulously curates rules for ts scripts. Ignoring specific dirs, it focuses on functionality, ensuring consistency and excellence—a strict no-unused-vars policy and TypeScript definitions are key attributes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

</details>

<details closed><summary>src</summary>

| File                                                                                      | Summary                                                                                                                                                                                                                           |
| ---                                                                                       | ---                                                                                                                                                                                                                               |
| [index.html](https://github.com/Wichtowski/StreamSphere/blob/main/src/index.html)   | The window to the streaming world, boasting a responsive layout, is a viewers portal with a sleek Bootstrap-powered interface and a dark theme option, enhancing user experience right from the outset.                           |
| [main.ts](https://github.com/Wichtowski/StreamSphere/blob/main/src/main.ts)         | StreamSpheres main script launches the entire Angular application with a bootstrap function, initializing the AppComponent & configuration, directly impacting what users see when visiting the webpage. Its a vital entry point. |
| [styles.scss](https://github.com/Wichtowski/StreamSphere/blob/main/src/styles.scss) | Styling centralization begins with styles.scss. Users can add global styles or import other files, streamlining their web app's aesthetic management and ensuring a consistent look across pages.                                 |

</details>

<details closed><summary>src.app</summary>

| File                                                                                                              | Summary                                                                                                                                                                                                                                                                                                                 |
| ---                                                                                                               | ---                                                                                                                                                                                                                                                                                                                     |
| [app.component.scss](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/app.component.scss)       | StreamSpheres app gains its appealing aesthetic from app.component.scss, styling the interface with carefully selected themes, creating a visually captivating user experience and seamlessly integrating variables for a cohesive design.                                                                              |
| [app.component.ts](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/app.component.ts)           | StreamSpheres app component is a pivotal interface that manages user authentication status, enhancing usability with dynamic content based on login status, and facilitating seamless integration with the routing system for a streamlined user experience.                                                            |
| [app.component.html](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/app.component.html)       | StreamSpheres app.component.html acts as a dynamic outlet for displaying the main app content. It serves as a placeholder with comments outlining key sections, ready for tailoring the user interface. This file is central to the structure and sets the stage for the applications unique content and functionality. |
| [app.module.ts](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/app.module.ts)                 | The apps main module sets the stage for an Angular application with essential components. It lays out the framework for navigation, forms, routing, and carefully selects UI elements, forming the backbone of the parent repositorys viewer engagement strategy.                                                       |
| [app.config.ts](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/app.config.ts)                 | Configuration defines Angular apps backbone, boosting performance with router & zone change detection providers for seamless navigation and efficient event handling. This central file structures the repositorys front-end, paving way for an immersive user experience.                                              |
| [app.routes.ts](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/app.routes.ts)                 | The App Routing Module navigates users through various pages, such as signIn, signUp, browsing options, and video content. With authentication guards, it ensures secure access to certain sections, enhancing the user experience while adhering to strict routing configurations.                                     |
| [variables.scss](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/variables.scss)               | Color codes, background colors, border colors, and spacing. These variables enhance the themes versatility, offering a unified approach to aesthetic adjustments.                                                                                                                                                       |
| [mixins.scss](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/mixins.scss)                     | The *style mixer* file enhances StreamSpheres front-end appeal, offering text enhancements with mixing boards for fonts, colors, and animations—a recipe for engaging visuals. Its a styling tool kit!                                                                                                                 |

</details>

<details closed><summary>src.app.homepage</summary>

| File                                                                                                                                 | Summary                                                                                                                                                                                                                                                             |
| ---                                                                                                                                  | ---                                                                                                                                                                                                                                                                 |
| [homepage.component.ts](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/homepage/homepage.component.ts)           | The HomepageComponent ts file is crucial for rendering the StreamSphere web applications dynamic and interactive homepage. It imports and assembles various components to create a visually appealing, engaging interface, facilitating a seamless user experience. |
| [homepage.component.html](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/homepage/homepage.component.html)       | The homepage component HTML meticulously crafts the layouts foundation, skillfully ordering key elements like a conductor. It orchestrates a harmonious display of essential components, setting the stage for an engaging user experience.                         |
| [homepage.component.scss](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/homepage/homepage.component.scss)       | Elevating StreamSpheres aesthetic appeal, this component stylizes the homepage, enhancing user experience with a sleek, modern design that seamlessly integrates captivating visuals for an engaging interface.                                                     |
</details>

<details closed><summary>src.app.services</summary>

| File                                                                                                                                   | Summary                                                                                                                                                                                                                                                                                                                            |
| ---                                                                                                                                    | ---                                                                                                                                                                                                                                                                                                                                |
| [local-storage.service.ts](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/services/local-storage.service.ts)       | StorageService makes data persistence straightforward, offering methods to set, clear, and retrieve user data from local storage, enhancing user experience and developer productivity.                                                                                                                                            |
| [password-hashing.service.ts](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/services/password-hashing.service.ts) | Security is paramount! The PasswordHashingService ensures passwords are securely hashed and compared, guarding against breaches with salt and pepper. Its an essential tool for the repositorys authentication and protection.                                                                                                     |
| [auth.service.ts](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/services/auth.service.ts)                         | Security is paramount! The auth service verifies user data against a secure local database and enables sign-in functionality, safeguarding access with hashed passwords and stringent authentication. It offers convenient log-out and easy access to user info, forming the stronghold of the applications security architecture. |
| [session.service.ts](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/services/session.service.ts)                   | Simplifies session state control and retrieval using Angulars root scope, enabling efficient management of user sessions with a focus on security and ease of use. It offers methods to set, get, and manage session states, enhancing the user experience.                                                                        |

</details>

<details closed><summary>src.app.ad</summary>

| File                                                                                                               | Summary                                                                                                                                                                                                                                                                                 |
| ---                                                                                                                | ---                                                                                                                                                                                                                                                                                     |
| [ad.component.ts](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/ad/ad.component.ts)           | The Ad Component script randomly renders visually appealing ads with countdowns, targeting specific user segments for an online platform. It boosts engagement by personalized, limited-time offers, ensuring a dynamic and captivating user experience.                                |
| [ad.component.scss](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/ad/ad.component.scss)       | The *ad.component.scss* file enhances StreamSpheres visual appeal, offering responsive ad designs with versatile styling options. It facilitates dynamic content alignment and showcases ads with impactful presentations, ensuring an engaging user experience across various devices. |
| [ad.component.html](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/ad/ad.component.html)       | The ad component HTML meticulously crafts an engaging advertising experience by displaying dynamic visuals and compelling text, enhancing user interaction with router links and ngSwitch directives. It entices users with enticing visuals and strategic CTAs, elevates the UI.       |
</details>

<details closed><summary>src.app.landing-page</summary>

| File                                                                                                                                             | Summary                                                                                                                                                                                                                                                    |
| ---                                                                                                                                              | ---                                                                                                                                                                                                                                                        |
| [landing-page.component.ts](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/landing-page/landing-page.component.ts)           | The Landing Page Component enhances user navigation by managing scrolling to specific page sections. It also enhances visibility of promotional pricing with animated CSS effects, and facilitates seamless redirection to other pages, thus enhancing UX. |
| [landing-page.component.html](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/landing-page/landing-page.component.html)       | Stream and enjoy our content without ads on Premium for only $12.49/month, or go Standard and pay half the price! For our introductory offer, we waive the sign up fee. Catch your favorite shows anywhere with offline downloads.                         |
| [landing-page.component.scss](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/landing-page/landing-page.component.scss)       | Styling the landing page, this SCSS file creates an animated highlight effect for elements with specific IDs while also altering their display properties and defining color themes, enhancing the visual appeal of the repositorys user interface.        |

</details>

<details closed><summary>src.app.sign-up</summary>

| File                                                                                                                              | Summary                                                                                                                                                                                                                                                          |
| ---                                                                                                                               | ---                                                                                                                                                                                                                                                              |
| [sign-up.component.ts](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/sign-up/sign-up.component.ts)           | The SignUpComponent.ts facilitates user sign-up, enhancing the authentication experience with Angular components. It validates email and password input, offering a seamless account creation flow, and integrates session management for a smooth, directed UI. |
| [sign-up.component.html](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/sign-up/sign-up.component.html)       | StreamSpheres sign-up component is a sleek HTML form, enhancing user experience with a streamlined registration process. It seamlessly integrates a logo, form fields, and helpful links for a seamless transition to the login page.                            |
| [sign-up.component.scss](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/sign-up/sign-up.component.scss)       | The Sign Up components styles are crafted with SASS, leveraging mixins and variables for a structured and consistent UI. It sets the scene with a captivating background, enhancing the user experience.                                                         |

</details>

<details closed><summary>src.app.small-carousel</summary>

| File                                                                                                                                                   | Summary                                                                                                                                                                                                                       |
| ---                                                                                                                                                    | ---                                                                                                                                                                                                                           |
| [small-carousel.component.scss](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/small-carousel/small-carousel.component.scss)       | Small Carousel Component styling adds a sleek, responsive touch with variable sizing, animations, and interactivity for an immersive user experience, complementing the repositorys web app project.                          |
| [small-carousel.component.html](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/small-carousel/small-carousel.component.html)       | HTML code sets up a carousel, displaying slides with images, titles, and control buttons for a seamless, engaging user experience. Its a key feature for showcasing content in an interactive, compact manner.                |
| [small-carousel.component.ts](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/small-carousel/small-carousel.component.ts)           | SmallCarouselComponent.ts creates a modular carousel component for reusability in the repository. It offers flexible slideshow functionality with navigational tools and adaptive styling based on slides per page.           |
</details>

<details closed><summary>src.app.carousel</summary>

| File                                                                                                                                 | Summary                                                                                                                                                                                                                                                                               |
| ---                                                                                                                                  | ---                                                                                                                                                                                                                                                                                   |
| [carousel.component.html](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/carousel/carousel.component.html)       | A dynamic banner showcasing eye-catching slides, each featuring movies or shows. Its interactive with directional buttons and indicators for seamless browsing, plus a clickable prompt to Watch Now' on each slide. This HTML code is a vital part of an immersive user interface.   |
| [carousel.component.ts](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/carousel/carousel.component.ts)           | The Carousel Componenttscriptfile enhances StreamSpheres user engagement by creating a captivating carousel of video content. It enables users to navigate through slides seamlessly and offers auto-play for an immersive experience, elevating the platforms visual appeal.         |
| [carousel.component.scss](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/carousel/carousel.component.scss)       | Creates a stylish, interactive carousel with video and image support for a media-rich user experience, enhancing StreamSpheres appeal. Its responsive, with animations and interactions for an immersive interface.                                                                   |
</details>

<details closed><summary>src.app.utils</summary>

| File                                                                                                            | Summary                                                                                                                                                                                                                      |
| ---                                                                                                             | ---                                                                                                                                                                                                                          |
| [interface.user.ts](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/utils/interface.user.ts) | User interface definitions enhance StreamSpheres backend by outlining critical user attributes like email, password, and subscription details, preparing the platform for efficient data handling and personalised services. |

</details>

<details closed><summary>src.app.guard</summary>

| File                                                                                                    | Summary                                                                                                                                                                                                       |
| ---                                                                                                     | ---                                                                                                                                                                                                           |
| [auth.guard.ts](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/guard/auth.guard.ts) | Activating authentication, AuthGuard directs users to secure areas. It verifies sessions and enables access for authenticated users while redirecting others to the sign-in page, ensuring protected content. |

</details>

<details closed><summary>src.app.navbar</summary>

| File                                                                                                                           | Summary                                                                                                                                                                                                                                                                                 |
| ---                                                                                                                            | ---                                                                                                                                                                                                                                                                                     |
| [navbar.component.scss](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/navbar/navbar.component.scss)       | Navbar styles are defined here, enhancing the UI with logo placement, text styling, and profile picture enhancements. Media queries adjust layouts for mobile views, ensuring a responsive design.                                                                                      |
| [navbar.component.ts](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/navbar/navbar.component.ts)           | The NavbarComponent.ts file orchestrates the top navigation bar, a dynamic and interactive element central to the StreamSphere web applications user experience. It seamlessly integrates authentication, session management, and responsive design, crucial for engaging interactions. |
| [navbar.component.html](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/navbar/navbar.component.html)       | The HTML template for the navigation bar component is crafted to enhance user experience with intuitive navigation. It renders a responsive, Bootstrap-styled bar with links to key pages and a dropdown for account management, personalizing the platform.                            |

</details>

<details closed><summary>src.app.sign-in</summary>

| File                                                                                                                              | Summary                                                                                                                                                                                                                                                                |
| ---                                                                                                                               | ---                                                                                                                                                                                                                                                                    |
| [sign-in.component.ts](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/sign-in/sign-in.component.ts)           | The sign-in component ts file enables user authentication. It sets up login functionality, handling form input, and integration with auth services. Integrates storage for remember me feature. Unlocks user access to protected content on successful authentication. |
| [sign-in.component.html](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/sign-in/sign-in.component.html)       | StreamSpheres login portal is crafted with an inviting, image-led interface. This HTML file outlines a sleek sign-in component, luring users with a logo and prompting them for essential details, thus enabling streamlined access to the platform.                   |
| [sign-in.component.scss](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/sign-in/sign-in.component.scss)       | Login effortlessly with streamlined forms featuring our sleek toggle switch! Access accounts securely and efficiently anywhere on any device with this responsive design.                                                                                              |

</details>

<details closed><summary>src.app.footer</summary>

| File                                                                                                                           | Summary                                                                                                                                                                                                                                               |
| ---                                                                                                                            | ---                                                                                                                                                                                                                                                   |
| [footer.component.scss](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/footer/footer.component.scss)       | A stylish footer graces the repository, enhancing the websites allure with its sleek black backdrop and well-placed imagery. Its positioned strategically at the page's bottom, lending an elegant finish that complements the overall visual appeal. |
| [footer.component.ts](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/footer/footer.component.ts)           | The FooterComponent ts file is essential for rendering the footer section of the app, offering navigation links. Its a crucial UI element, facilitating user interactions and aligning with the repositorys Angular architecture.                     |
| [footer.component.html](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/footer/footer.component.html)       | Footer links get a facelift with this component! It curates vital site info, social media access, and user support, enhancing the StreamSphere web apps navigation and legal compliance.                                                              |

</details>

<details closed><summary>src.app.single-video</summary>

| File                                                                                                                                             | Summary                                                                                                                                                                                                                                                          |
| ---                                                                                                                                              | ---                                                                                                                                                                                                                                                              |
| [single-video.component.html](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/single-video/single-video.component.html)       | A template that efficiently manages video playback, rendering a seamless UI. It ensures smooth integration of both YouTube and custom videos, enhancing the viewing experience with a streamlined playback interface.                                            |
| [single-video.component.ts](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/single-video/single-video.component.ts)           | The Single Video Component enhances user experience by offering an immersive interface. It seamlessly integrates YouTube videos and custom players, adapting content based on user preferences and subscription status-all within a dynamic Angular environment. |
| [single-video.component.scss](https://github.com/Wichtowski/StreamSphere/blob/main/src/app/single-video/single-video.component.scss)       | Elevates video playback experience with styled components, ensuring responsiveness and interactive styling for a seamless user interface. Focuses on visually engaging elements, enhancing user immersion and navigation.                                        |

</details>

<details closed><summary>.github.workflows</summary>

| File                                                                                              | Summary                                                                                                                                                                                                                                  |
| ---                                                                                               | ---                                                                                                                                                                                                                                      |
| [main.yml](https://github.com/Wichtowski/StreamSphere/blob/main/.github/workflows/main.yml) | StreamSpheres central workflow orchestrator, Main flows seamlessly manage CI/CD, ensuring smooth execution & deployment across repos, with a focus on automation for efficient developer experiences and streamlined project management. |

</details>

---

## 🚀 Getting Started

**System Requirements:**

* **TypeScript**: `version 5.4.2`

**Additional Requirements:**
* **Node.js**: `version 14.17.0` or higher
* **npm**: `version 6.14.13` or higher
* **Angular CLI**: `version 12.0.0` or higher

Make sure you have these dependencies installed on your system before proceeding with the installation steps.


### ⚙️ Installation

<h4>From <code>source</code></h4>

> 1. Clone the StreamSphere repository:
>
> ```console
> $ git clone https://github.com/Wichtowski/StreamSphere.git
> ```
>
> 2. Change to the project directory:
> ```console
> $ cd StreamSphere
> ```
>
> 3. Install the dependencies (some dependencies have conflicting versions):
> ```console
> $ npm install --force
> ```

### 🤖 Usage

<h4>From <code>source</code></h4>

> Run StreamSphere using angular reactive compiler:
> ```console
> $ npm run start
> ```

### 🧪 Tests

> Run the test suite using the command below:
> ```console
> $ npm test
> ```

---

## 🔨 Project Roadmap

- [X] `► Getting basic understand of product`
- [X] `► Creating Designs for app`
- [X] `► Mindstorming about the UI and UX of app`
- [X] `► Setting up a Project`
- [X] `► Creating components`
- [X] `► Setting up eslint, prettier & husky`
- [X] `► Updating demo content`
- [X] `► Bug fixing and adjusting UI`
- [X] `► Creating documentation`

---

## 📝 License

This project is protected under the [MIT License](https://github.com/Wichtowski/StreamSphere?tab=MIT-1-ov-file) License.

---

## 🔗 Acknowledgments

List of recourses used in Project:
- [Angular](https://angular.dev)
- [Youtube API](https://developers.google.com/youtube/v3?hl=pl)
- [VideoJS](https://videojs.com)
- [SwiperJS](https://swiperjs.com)
- [CI/CD Github Pages Deployment by ](https://github.com/JamesIves/github-pages-deploy-action)[@James Ives](https://github.com/JamesIves)
- [BCrypt](https://www.npmjs.com/package/bcrypt)
- [Eslint](https://www.npmjs.com/package/eslint)
- [Husky](https://www.npmjs.com/package/husky)
- []()
- [READMEAI](https://github.com/eli64s/readme-ai)

---

## [**Return to top**](#-overview)