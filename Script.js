function generatePrompts() {
  const input = document.getElementById("userInput").value.trim();
  const out = document.getElementById("output");
  if (!input) return out.innerHTML = "<p>Please type something first!</p>";

  const ideas = [
    `Expand this idea creatively: "${input}"`,
    `Explain "${input}" in a professional tone.`,
    `Write a detailed guide about: "${input}".`,
    `Turn "${input}" into a question for an AI expert.`,
    `Summarize "${input}" for beginners.`
  ];

  const suggestions = [];
  while (suggestions.length < 3) {
    const random = ideas[Math.floor(Math.random() * ideas.length)];
    if (!suggestions.includes(random)) suggestions.push(random);
  }

  out.innerHTML = suggestions.map(s => `<p>💡 ${s}</p>`).join("");
}
