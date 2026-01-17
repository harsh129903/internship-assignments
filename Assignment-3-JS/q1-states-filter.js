const states = [
  "Andhra Pradesh",
  "Maharashtra",
  "Uttar Pradesh",
  "Odisha",
  "Karnataka",
  "Assam",
  "Gujarat",
  "Kerala"
];

const filteredStates = states.filter(state => {
  const firstChar = state.charAt(0).toUpperCase();
  return !['A', 'E', 'I', 'O', 'U'].includes(firstChar);
});

console.log(filteredStates);