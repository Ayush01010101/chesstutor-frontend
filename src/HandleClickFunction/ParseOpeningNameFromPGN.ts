function ParseOpeningNameFromPGN(pgnText: string): string | null {
  const lines = pgnText.split('\n');
  let openingURL = null;

  for (const line of lines) {
    if (line.startsWith('[ECOUrl')) {
      const match = line.match(/"(.*?)"/);
      if (match) {
        openingURL = match[1];
        break;
      }
    }
  }

  if (openingURL) {
    const parts = openingURL.split('/');
    const lastPart = parts[parts.length - 1];
    const openingName = decodeURIComponent(lastPart.replace(/-/g, ' '));
    return openingName;
  } else {
    return null; // Opening name not found
  }
}


export default ParseOpeningNameFromPGN
