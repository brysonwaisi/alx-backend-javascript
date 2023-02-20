process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const bryce = process.stdin.read();
  if (bryce) {
    process.stdout.write(`Your name is: ${bryce}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
