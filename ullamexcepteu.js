function tickInterval(start, stop, count) {
  let step = (stop - start) / (count - 1);
  let ticks = [];
  for (let i = 0; i < count; i++) {
    ticks.push(start + i * step);
  }
  return ticks;
}
