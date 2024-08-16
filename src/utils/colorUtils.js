import ColorContrastChecker from 'color-contrast-checker';

const ccc = new ColorContrastChecker();

// Helper function to validate hex color
const isValidHex = (hex) => {
    return /^#([A-Fa-f0-9]{3}){1,2}$/.test(hex);
};

const checkContrast = (color1, color2, fontSize = 14) => {
    if (!isValidHex(color1) || !isValidHex(color2)) {
        return { isAA: false, isAAA: false };
    }
    const isAA = ccc.isLevelAA(color1, color2, fontSize);
    const isAAA = ccc.isLevelAAA(color1, color2, fontSize);

    return { isAA, isAAA };
};

// Helper function to convert hex to RGB
const hexToRgb = (hex) => {
    if (!isValidHex(hex)) return null;

    let r, g, b;
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else {
        r = parseInt(hex.slice(1, 3), 16);
        g = parseInt(hex.slice(3, 5), 16);
        b = parseInt(hex.slice(5, 7), 16);
    }
    return { r, g, b };
};

// Helper function to convert RGB to hex
const rgbToHex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

// Function to get complementary color
const getComplementaryColor = (hex) => {
    const rgb = hexToRgb(hex);
    if (!rgb) return '#000000';

    const complement = {
        r: 255 - rgb.r,
        g: 255 - rgb.g,
        b: 255 - rgb.b
    };

    return rgbToHex(complement.r, complement.g, complement.b);
};


export function getContrastColor(hexColor) {
    hexColor = hexColor.replace('#', '');

    // Convert to RGB
    const r = parseInt(hexColor.substr(0, 2), 16);
    const g = parseInt(hexColor.substr(2, 2), 16);
    const b = parseInt(hexColor.substr(4, 2), 16);

    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Return black for bright colors, white for dark colors
    return luminance > 0.5 ? '#000000' : '#FFFFFF';
}

const generateColorSchemes = (primaryColor) => {
    if (!isValidHex(primaryColor)) {
        return [];
    }

    const schemes = [
        // Light scheme
        {
            background: '#FFFFFF',
            heading: primaryColor,
            text: '#333333'
        },
        // Dark scheme
        {
            background: '#333333',
            heading: primaryColor,
            text: '#FFFFFF'
        },
        // Monochromatic scheme
        {
            background: primaryColor,
            heading: '#FFFFFF',
            text: '#333333'
        },
        // Complementary scheme
        {
            background: '#FFFFFF',
            heading: primaryColor,
            text: getComplementaryColor(primaryColor)
        }
    ];

    return schemes.map(scheme => ({
        ...scheme,
        contrast: {
            backgroundHeading: checkContrast(scheme.background, scheme.heading),
            backgroundText: checkContrast(scheme.background, scheme.text),
            headingText: checkContrast(scheme.heading, scheme.text)
        }
    }));
};

export { generateColorSchemes, checkContrast, isValidHex };