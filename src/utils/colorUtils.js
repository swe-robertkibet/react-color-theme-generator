// Convert hex to RGB
const hexToRgb = (hex) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};

// Convert RGB to hex
const rgbToHex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

// Generate a color palette based on a primary color
const generatePalette = (primaryColor) => {
    const rgb = hexToRgb(primaryColor);
    if (!rgb) return [];

    const { r, g, b } = rgb;

    return [
        primaryColor,
        rgbToHex(Math.max(0, r - 40), Math.max(0, g - 40), Math.max(0, b - 40)), // Darker shade
        rgbToHex(Math.min(255, r + 40), Math.min(255, g + 40), Math.min(255, b + 40)), // Lighter shade
        rgbToHex(Math.max(0, r - 20), Math.min(255, g + 20), Math.min(255, b + 20)), // Complementary 1
        rgbToHex(Math.min(255, r + 20), Math.max(0, g - 20), Math.min(255, b + 20))  // Complementary 2
    ];
};

// Generate a color palette based on a background color
const generatePaletteFromBackground = (backgroundColor) => {
    const rgb = hexToRgb(backgroundColor);
    if (!rgb) return [];

    const { r, g, b } = rgb;
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    const textColor = brightness > 128 ? '#000000' : '#FFFFFF';
    const accentColor = brightness > 128 ?
        rgbToHex(Math.max(0, r - 50), Math.max(0, g - 50), Math.max(0, b - 50)) :
        rgbToHex(Math.min(255, r + 50), Math.min(255, g + 50), Math.min(255, b + 50));

    return [
        backgroundColor,
        textColor,
        accentColor,
        rgbToHex(255 - r, 255 - g, 255 - b), // Inverted color
        rgbToHex((r + 128) % 256, (g + 128) % 256, (b + 128) % 256) // Complementary color
    ];
};

export { generatePalette, generatePaletteFromBackground };