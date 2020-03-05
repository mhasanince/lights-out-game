function lightController(idx, size) {
  if (idx === 0) {
    // top-left corner
    return [idx, idx + 1, idx + size];
  } else if (idx === size - 1) {
    // top-right corner
    return [idx, idx - 1, idx + size];
  } else if (idx === size * (size - 1)) {
    // bottom-left corner
    return [idx, idx - size, idx + 1];
  } else if (idx === size * size - 1) {
    // bottom-right coner
    return [idx, idx - size, idx - 1];
  } else if (idx > 0 && idx < size - 1) {
    // top side
    return [idx, idx - 1, idx + 1, idx + size];
  } else if (idx % size === 0) {
    // left side
    return [idx, idx + 1, idx - size, idx + size];
  } else if (idx % size === size - 1) {
    // right side
    return [idx, idx - 1, idx - size, idx + size];
  } else if (idx > size * (size - 1) && idx < size * size - 1) {
    // bottom side
    return [idx, idx - 1, idx + 1, idx - size];
  } else {
    return [idx, idx - 1, idx + 1, idx - size, idx + size];
  }
}

export { lightController };
