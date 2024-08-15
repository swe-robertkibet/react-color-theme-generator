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

const rgbToHex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

const generateColorSchemes = (primaryColor) => {
    const rgb = hexToRgb(primaryColor);
    if (!rgb) return [];

    const { r, g, b } = rgb;
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    const schemes = [
        // Light scheme
        {
            background: '#FFFFFF',
            heading: primaryColor,
            text: brightness > 128 ? '#333333' : primaryColor
        },
        // Dark scheme
        {
            background: '#333333',
            heading: primaryColor,
            text: brightness > 128 ? '#FFFFFF' : primaryColor
        },
        // Monochromatic scheme
        {
            background: rgbToHex(Math.max(0, r - 40), Math.max(0, g - 40), Math.max(0, b - 40)),
            heading: primaryColor,
            text: rgbToHex(Math.min(255, r + 40), Math.min(255, g + 40), Math.min(255, b + 40))
        },
        // Complementary scheme
        {
            background: rgbToHex(255 - r, 255 - g, 255 - b),
            heading: primaryColor,
            text: rgbToHex((r + 128) % 256, (g + 128) % 256, (b + 128) % 256)
        }
    ];

    return schemes;
};

export { generateColorSchemes };