'use strict';

function parseYoutubeDate(unit) {
  if ('object' !== typeof unit || !('publishedAt' in unit)) {
    throw new TypeError(`Invalid 'unit' argument: ${unit}`);
  }

  return new Date(unit.publishedAt);
}

function compareYoutubeDates(order = 'asc') {
  if (!['asc', 'desc'].includes(order)) {
    throw new TypeError(`Invalid 'order' argument: ${order}`);
  }

  const orderSign = 'asc' === order ? 1 : -1;
  return function orderedComparator(lhs, rhs) {
    const lhsDate = parseYoutubeDate(lhs);
    const rhsDate = parseYoutubeDate(rhs);

    return orderSign * (lhsDate - rhsDate);
  };
}

module.exports = {
  compareYoutubeDates,
  parseYoutubeDate,
};
