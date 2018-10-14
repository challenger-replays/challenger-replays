export function getPaginationProps({ limit, offset, total }) {
  const extraPages = 0 === offset % limit ? 0 : 1;
  return {
    pages: Math.ceil(total / limit) + extraPages,
    current: Math.ceil(offset / limit) + 1,
  };
}

export function getPagesSubset(current, total, subsetLength) {
  let currentPosition = Math.floor(subsetLength / 2) + 1;
  const hasEnoughNext = current + (subsetLength - currentPosition) <= total;
  if (!hasEnoughNext) {
    currentPosition = subsetLength - (total - current);
  }

  const pagesSubset = [];
  for (let i = 1; i <= currentPosition; i++) {
    const page = current - currentPosition + i;
    if (page > 0) {
      pagesSubset.push(page);
    }
  }

  const nextPagesCount = subsetLength - pagesSubset.length;
  for (let i = 1; i <= nextPagesCount; i++) {
    const page = current + i;
    if (page > total) {
      break;
    }
    pagesSubset.push(page);
  }

  return pagesSubset;
}
