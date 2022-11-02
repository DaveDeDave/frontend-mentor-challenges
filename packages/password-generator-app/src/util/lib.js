const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

const between = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const generateChunk = (list, n) =>
  Array(n)
    .fill(null)
    .map(() => list[Math.floor(Math.random() * list.length)])
    .join("");

const generatePassword = (
  length = 10,
  _uppercase = true,
  _lowercase = true,
  _numbers = true,
  _symbols = true
) => {
  let password = "";
  let all = "";
  const factors = _uppercase + _lowercase + _numbers + _symbols;
  if (length == 0) return "Too short!";
  if (factors == 0) return "Select at least one factor";
  else if (factors > length) return "Too many factors!";
  const characters = [];
  if (_uppercase) characters.push(upperAlpha);
  if (_lowercase) characters.push(lowerAlpha);
  if (_numbers) characters.push(numbers);
  if (_symbols) characters.push(symbols);

  characters.forEach((chars, i) => {
    const n = between(1, length - factors - password.length + 1 + i);
    let chunk = generateChunk(chars, n);
    password += chunk;
    all += chars;
  });

  if (password.length < length) {
    const n = length - password.length;
    password += generateChunk(all, n);
  }

  return password
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");
};

generatePassword();

export { generatePassword };
