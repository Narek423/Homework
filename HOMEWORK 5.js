N1.

let fullName = (arr) => arr.map((elem) => ({fullName: `${elem.name} ${elem.surname}`, id: elem.id}));

N2.

function decoratorFunction(f, ms) {
  let switcher = false;
  function wrap(...args) {
    if (switcher) return;
    switcher = true;
    setTimeout(() => switcher = false, ms);
    return f.call(this, ...args);
  }
  return wrap;
}

N3.

function decoratorFunction(f, ms) {
  let switcher = false;
  let localThis;
  let localArgs;
  function wrap(...args) {
    if (switcher) {
      localThis = this; 
      localArgs = args; 
      return;
      }
    switcher = true;
    setTimeout(function() {
      if (localArgs) {
        switcher = false;
        wrap.call(localThis, ...localArgs);
        localThis = localArgs = null;
      } else {
        switcher = false;
      }
    }, ms);
    return f.call(this, ...args);
  }
  return wrap;
}