function ping(n) {
  console.log("ping", n);
  return pong(n + 1);
}

function pong(n) {
  console.log("pong", n);
  return ping(n + 1);
}

// maximum call stack size exceeded!
ping(0);
