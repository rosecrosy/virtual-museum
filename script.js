const artworks = [
  {
    img: "artwork1.png",
    title: "Melancholy (1892)",
    artist: "Edvard Munch",
    country: "Norway",
    medium: "Oil on Canvas",
    description: "An emotional and introspective painting shows a man sitting alone by the shoreline, head in hand, deep in thought. In the background, a group of figures may represent the love or companionship he has lost.",
    elements: "Line, Color, Shape",
    principles: "Emphasis, Movement, Contrast"
  },
  {
    img: "artwork2.png",
    title: 'Plate 21 from "Los Caprichos": How they pluck her!',
    artist: "Francisco de Goya y Lucientes",
    country: "Spain",
    medium: "Etching and aquatint on paper",
    description: "This satirical piece critiques social hypocrisy and abuse of power. A woman is surrounded by grotesque male figures, symbolizing judgment and exploitation. Her posture suggests vulnerability, fear, and psychological distress.",
    elements: "Line, Value (Light and Dark), Shape",
    principles: "Emphasis, Contrast, Movement"
  },
  {
    img: "artwork3.png",
    title: "Dots Obsession",
    artist: "Yayoi Kusama",
    country: "Japan",
    medium: "Installation (Acrylic, Inflatable, Mixed Media)",
    description: "A surreal environment of bold circular dots, often red or pink on dark backgrounds. The repeating patterns reflect Kusama’s mental health struggles—obsessive thoughts, hallucinations, and a sense of infinity.",
    elements: "Shape, Color, Space",
    principles: "Repetition, Pattern, Emphasis"
  },
  {
    img: "artwork4.png",
    title: "No one can hear the pain",
    artist: "Ally Zlatar",
    country: "Canada",
    medium: "Mixed media",
    description: "A raw, emotional artwork revealing invisible struggles of mental illness through distorted self-portraits and symbolic marks. It highlights hidden suffering and the silence surrounding it.",
    elements: "Color, Line, Texture",
    principles: "Emphasis, Contrast, Unity"
  },
  {
    img: "artwork5.png",
    title: "Turmoil",
    artist: "Jack Avetisyan",
    country: "USA",
    medium: "Acrylic on Canvas",
    description: "An abstract representation of emotional chaos through texture, bold brushstrokes, and layered colors. It captures the mental feeling of being overwhelmed or fragmented.",
    elements: "Color, Texture, Line",
    principles: "Emphasis, Movement, Contrast"
  },
  {
    img: "artwork6.png",
    title: "Noise and Cloud and Us",
    artist: "Shwe Wutt Hmon",
    country: "Myanmar",
    medium: "Photography with mixed media",
    description: "Blurring visibility and invisibility, this layered imagery symbolizes anxiety and emotional fog. 'Noise' represents intrusive thoughts, while 'clouds' evoke dissociation and vulnerability.",
    elements: "Color, Texture, Space",
    principles: "Emphasis, Contrast, Unity"
  },
  {
    img: "artwork7.png",
    title: "Devil",
    artist: "Anastasia Rydlevskaya",
    country: "Belarus",
    medium: "Mixed media on Canvas",
    description: "A dark figure resembling a devil symbolizes internal fear, trauma, or emotional torment. The chaotic lines and shadows reflect inner battles with mental illness.",
    elements: "Color, Line, Texture",
    principles: "Emphasis, Contrast, Movement"
  },
  {
    img: "artwork8.png",
    title: "Heads",
    artist: "Brenda Maria Fernandez",
    country: "Mexico",
    medium: "Photography",
    description: "Fragmented and obscured faces represent dissociation and emotional numbness. This photographic series explores the fragility of the mind and the invisibility of mental illness.",
    elements: "Value (Light and Dark), Form, Space",
    principles: "Emphasis, Contrast, Movement"
  }
];

let index = 0;

function displayArtwork(i) {
  const artwork = artworks[i];
  const imgEl = document.getElementById("artwork");

  imgEl.src = artwork.img;

  // Add portrait class to 2, 4, 5, 7 (index 1, 3, 4, 6)
  const portraitIndexes = [1, 3, 4, 6];
  if (portraitIndexes.includes(i)) {
    imgEl.classList.add("portrait-art");
  } else {
    imgEl.classList.remove("portrait-art");
  }

  // Only artwork title
  document.getElementById("title").textContent = artwork.title;

  document.getElementById("description").innerHTML = `
    <strong>Artist:</strong> ${artwork.artist}<br/>
    <strong>Country:</strong> ${artwork.country}<br/>
    <strong>Medium:</strong> ${artwork.medium}<br/><br/>
    ${artwork.description}<br/><br/>
    <strong>Elements of Art:</strong> ${artwork.elements}<br/>
    <strong>Principles of Art:</strong> ${artwork.principles}
  `;
}

function startMuseum() {
  document.getElementById("front-page").classList.add("hidden");
  document.getElementById("museum").classList.remove("hidden");
  document.getElementById("ending").classList.add("hidden");
  displayArtwork(index);
}

function nextArtwork() {
  index++;
  if (index >= artworks.length) {
    showEnding();
  } else {
    displayArtwork(index);
  }
}

function prevArtwork() {
  index = (index - 1 + artworks.length) % artworks.length;
  displayArtwork(index);
}

function showEnding() {
  document.getElementById("museum").classList.add("hidden");
  document.getElementById("ending").classList.remove("hidden");
}

function goBack() {
  index = 0;
  document.getElementById("ending").classList.add("hidden");
  document.getElementById("front-page").classList.remove("hidden");
}