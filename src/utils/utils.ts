export function splitText(text: string) {
  return text
    .split(/\n+/)
    .filter((t) => t.length > 0)
    .map((t) => t.trim());
}

export function isFullyQualifiedURL(url?: string) {
  if (!url) return false;
  const pattern = /^(https?:\/\/).*$/i;
  return pattern.test(url);
}

export async function sleep(ms: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function errorToString(error: any): string {
  if (error instanceof Error) {
    return error.message;
  } else if (typeof error === 'string') {
    return error;
  } else {
    return 'Unknown error';
  }
}
