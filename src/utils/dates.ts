export interface Dated {
  publishedAt: string;
}

export function parseYoutubeDate(unit: Dated) {
  if ('object' !== typeof unit || !('publishedAt' in unit)) {
    throw new TypeError(`Invalid 'unit' argument: ${unit}`);
  }
  return new Date(unit.publishedAt);
}

export function compareYoutubeDates(order = 'asc') {
  if (!['asc', 'desc'].includes(order)) {
    throw new TypeError(`Invalid 'order' argument: ${order}`);
  }

  const orderSign = 'asc' === order ? 1 : -1;
  return function orderedComparator(lhs: Dated, rhs: Dated) {
    const lhsDate = parseYoutubeDate(lhs);
    const rhsDate = parseYoutubeDate(rhs);

    return orderSign * (lhsDate.getTime() - rhsDate.getTime());
  };
}
