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

const adjustBrightness = (color, factor) => {
    return Math.round(Math.min(Math.max(0, color * factor), 255));
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
        // Refined Monochromatic scheme
        (() => {
            const lighterShade = rgbToHex(
                adjustBrightness(r, 1.3),
                adjustBrightness(g, 1.3),
                adjustBrightness(b, 1.3)
            );
            const darkerShade = rgbToHex(
                adjustBrightness(r, 0.7),
                adjustBrightness(g, 0.7),
                adjustBrightness(b, 0.7)
            );
            return {
                background: lighterShade,
                heading: primaryColor,
                text: darkerShade
            };
        })(),
        // Refined Complementary scheme
        (() => {
            const complementary = rgbToHex(255 - r, 255 - g, 255 - b);
            const complementaryRgb = hexToRgb(complementary);
            const softComplement = rgbToHex(
                Math.round((complementaryRgb.r + 255) / 2),
                Math.round((complementaryRgb.g + 255) / 2),
                Math.round((complementaryRgb.b + 255) / 2)
            );
            return {
                background: softComplement,
                heading: primaryColor,
                text: brightness > 128 ? '#333333' : '#FFFFFF'
            };
        })()
    ];

    return schemes;
};

export { generateColorSchemes };