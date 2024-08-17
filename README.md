# Color Theme Generator

## Table of Contents

- [Introduction](#introduction)
- [Live Demo](#live-demo)
- [Features](#features)
- [Motivation](#motivation)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

Color Theme Generator is a React-based web application that helps users create beautiful color schemes for their projects. By selecting a primary color, the app generates multiple color palettes with complementary colors, ensuring accessibility and visual appeal.

## Live Demo

Check out the live demo of the Color Theme Generator: [Live Demo](https://colorgen.robertkibet.com/)

## Features

- Interactive color picker for selecting the primary color
- Generation of multiple color schemes based on the primary color
- Real-time preview of color schemes
- Accessibility checks for color contrast (AA and AAA compliance)
- Copy-to-clipboard functionality for easy color code sharing
- Responsive design for various screen sizes

## Motivation

The motivation behind this project stems from the complexity of choosing colors when building websites. As developers and designers, we often struggle to create cohesive and accessible color schemes that enhance the user experience. The Color Theme Generator aims to simplify this process by providing instant, harmonious color palettes based on a single primary color choice.

## Technologies Used

- React
- CSS3
- JavaScript (ES6+)
- react-colorful (for color picker)
- FontAwesome (for icons)
- color-contrast-checker (for accessibility checks)

## Getting Started

To get a local copy up and running, follow these simple steps:

1. Clone the repository
   ```
   git clone https://github.com/swe-robertkibet/react-color-theme-generator.git
   ```
2. Navigate to the project directory
   ```
   cd color-theme-generator
   ```
3. Install NPM packages
   ```
   npm install
   ```
4. Start the development server
   ```
   npm start
   ```

## Usage

1. Open the application in your web browser
2. Use the color picker or input a hex color code to select your primary color
3. The app will generate multiple color schemes based on your selection
4. Preview the color schemes in the provided illustration
5. Copy color codes by clicking the copy icon next to each color
6. Use the generated color schemes in your own projects

## Color Generation Algorithm

Our Color Theme Generator uses a sophisticated algorithm to create harmonious and visually appealing color palettes. Here's an overview of how it works:

1. **Base Color Selection**:

   - The algorithm starts with a user-selected or randomly generated base color.
   - This color is converted to HSL (Hue, Saturation, Lightness) format for easier manipulation.

2. **Harmony Rules**:

   - We implement various color harmony rules, including:
     - Complementary: Colors opposite on the color wheel
     - Analogous: Colors adjacent on the color wheel
     - Triadic: Three colors evenly spaced on the color wheel
     - Split-complementary: A base color and two colors adjacent to its complement

3. **Saturation and Lightness Adjustment**:

   - The algorithm adjusts saturation and lightness values to ensure good contrast and readability.
   - It uses a weighted random approach to create slight variations while maintaining harmony.

4. **Accessibility Considerations**:

   - We implement checks to ensure sufficient contrast ratios for text readability, adhering to WCAG guidelines.

5. **Theme Generation**:

   - Based on the selected harmony rule, the algorithm generates a full theme, including:
     - Primary and secondary colors
     - Background colors
     - Text colors
     - Accent colors

6. **Fine-tuning**:
   - A final pass adjusts colors to ensure they work well together and meet specific criteria (e.g., minimum contrast ratios).

### Areas for Improvement and Contribution

We welcome contributions to enhance our color generation algorithm. Here are some areas where we'd love to see improvements:

- Implementing additional color harmony rules
- Enhancing the algorithm's ability to generate accessible color combinations
- Optimizing the performance of color calculations
- Adding support for different color models (e.g., CMYK for print-focused palettes)
- Developing machine learning approaches to generate color schemes based on user preferences or trends

If you're interested in contributing to these areas or have ideas for other improvements, please check the information below or contact me directly on WhatsApp

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

We are particularly interested in contributions that enhance the color palette generation algorithm. If you have ideas on how to improve the variety or quality of generated color schemes, please consider contributing!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/+254714200683)

Click the button above to start a chat with us on WhatsApp.
