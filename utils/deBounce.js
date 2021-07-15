function debounce(cb, interval, immediate) {
  let timeout;

  return function () {
    let [context, args] = [this, arguments];

    // If didn't called for immediate run
    let delayedFunction = function () {
      timeout = null;
      if (!immediate) cb.apply(context, args);
    };

    let callNow = immediate && !timeout;

    // For consecutive calls in interval period, resets timeout
    clearTimeout(timeout);
    timeout = setTimeout(delayedFunction, interval);

    // If called immediately callback function runs with arguments instantly
    if (callNow) cb.apply(context, args);
  };
}
export default debounce;
