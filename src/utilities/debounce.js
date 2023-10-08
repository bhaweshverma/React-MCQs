function debounce(func, delay = 500) {
  let timerId;
  return function () {
    let context = this;
    let args = arguments;

    console.log(args, timerId);

    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

export default debounce;
