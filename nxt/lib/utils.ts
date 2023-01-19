export function formatDate(input: string): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function absoluteUrl(input: string) {
  return `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${input}`
}

// Replace spaces with nbsp and slash+space with space.
export function formatTitle(title: string) {
  if(title.includes("|")) {
    return title.replace(/ (?!\|)/gi, '\u00A0').replace(/ \|/gi, ' ');
  }
  return title;
}

// Strip out | characters.
export function stripTitle(title: string) {
  if(title.includes("|")) {
    return title.replace(/[ |]/g, " ");
  }
  return title;
}
