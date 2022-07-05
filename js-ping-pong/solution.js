function ping(n) {
  console.log("ping", n);
  setTimeout(function () {
    return pong(n + 1);
  }, 0);
}

function pong(n) {
  console.log("pong", n);
  return ping(n + 1);
}

// fixed version,
// runs indefinitely
ping(0);
