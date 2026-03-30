import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, '../public');

const assets = [
  // Logo & nav
  { url: 'https://framerusercontent.com/images/3hqn3r11BAeAizEPSIPRIb0ESM0.svg', dest: 'images/logo-light.svg' },
  { url: 'https://framerusercontent.com/images/aOx31cpf1iZzTCfKGItYevOBk.svg', dest: 'images/logo-dark.svg' },
  { url: 'https://framerusercontent.com/images/FTSWrWLhSEKYflCfFuL5SKX9UU.svg', dest: 'seo/favicon.svg' },
  { url: 'https://framerusercontent.com/images/QVUN0jTe9mS43jjOKi8lUVqKFI.svg', dest: 'images/framer-icon.svg' },

  // Hero section
  { url: 'https://framerusercontent.com/images/MdvbdjpSojdHCD11FGcm4uyb0.png', dest: 'images/hero-mockup.png' },
  { url: 'https://framerusercontent.com/images/tJpwxlStFaURzyiQA1BCTAGxno.svg', dest: 'images/icon-arrow.svg' },
  { url: 'https://framerusercontent.com/images/EV2w2BPqfbN3x5ZotHa2Cpc5NU.svg', dest: 'images/icon-star.svg' },

  // Brand logos (social proof ticker)
  { url: 'https://framerusercontent.com/images/aOx31cpf1iZzTCfKGItYevOBk.svg', dest: 'images/brand-logo-1.svg' },
  { url: 'https://framerusercontent.com/images/7wvd32scU5cAELUtDgyaXTT7JKY.svg', dest: 'images/brand-logo-2.svg' },
  { url: 'https://framerusercontent.com/images/iPRduuuRCVNXFODfe8zHlCgmqU.svg', dest: 'images/brand-logo-3.svg' },
  { url: 'https://framerusercontent.com/images/cYlZY6fWyitQ9I8JlTqfRQJBQ.svg', dest: 'images/brand-logo-4.svg' },
  { url: 'https://framerusercontent.com/images/aUkxnifjCE1IupA79Bq5iaHNb7Q.svg', dest: 'images/brand-logo-5.svg' },

  // Framerstore avatar (reused across cards)
  { url: 'https://framerusercontent.com/images/q8FwRey29iSM87nqoUK9BF3AHNQ.jpg', dest: 'images/seller-avatar.jpg' },
  { url: 'https://framerusercontent.com/images/6XuSCK09eLRql95mSTtpK6t9q4.png', dest: 'images/framerstore-icon.png' },

  // Template card images
  { url: 'https://framerusercontent.com/images/pD8RbycTYByLpBmfjRly7EGIAo.png', dest: 'images/template-designo.png' },
  { url: 'https://framerusercontent.com/images/9AnwNW7GUqUI4kKuUF4f6cTWxc.png', dest: 'images/template-vellox.png' },
  { url: 'https://framerusercontent.com/images/oDKEdZhKYk7NmrxsNd2UDAfk.png', dest: 'images/template-haven-estate.png' },
  { url: 'https://framerusercontent.com/images/sk8lK7MSpz8XUhPMVbqIQR7XD7s.png', dest: 'images/template-ai-chatbot.png' },
  { url: 'https://framerusercontent.com/images/eTvuRQyuN2GegcTFQBxLWMQl6c.png', dest: 'images/template-william-thompson.png' },
  { url: 'https://framerusercontent.com/images/e9OAl2PWBEO6upk7GeYRZh863A.png', dest: 'images/template-educore.png' },

  // Feature section
  { url: 'https://framerusercontent.com/images/VJlmzGQ9ajwEkvAcYjxkbfuncg0.svg', dest: 'images/icon-check.svg' },
  { url: 'https://framerusercontent.com/images/RhCfsBCqu5K8HXbJRgyJQfAWw.svg', dest: 'images/icon-feature.svg' },
  { url: 'https://framerusercontent.com/images/2V0NbihskTUPekQaw4hBuiUto.png', dest: 'images/feature-mockup-1.png' },
  { url: 'https://framerusercontent.com/images/B7pOp06zbhrc82ROv3yZFbzRsc.png', dest: 'images/feature-mockup-2.png' },
  { url: 'https://framerusercontent.com/images/1JofzuC42sO1EfBM57IAow3r4.svg', dest: 'images/feature-icon-1.svg' },
  { url: 'https://framerusercontent.com/images/BVs2Z9jKPxu1e2GlaqTl287JjHo.png', dest: 'images/feature-mockup-3.png' },
  { url: 'https://framerusercontent.com/images/XSajq0tkg6DgU7DykxOVnYc7w1k.svg', dest: 'images/feature-icon-2.svg' },
  { url: 'https://framerusercontent.com/images/o9qJBSwbR1Go8PWVlTCDkWBV0s.png', dest: 'images/feature-mockup-4.png' },
  { url: 'https://framerusercontent.com/images/AvgJ53RSuluwxRhQG79LQ0Qer0E.svg', dest: 'images/feature-icon-3.svg' },

  // Testimonial avatars
  { url: 'https://framerusercontent.com/images/HH8KrojyxZx6X20z1r13CSwiiWE.jpg', dest: 'images/avatar-jake.jpg' },
  { url: 'https://framerusercontent.com/images/oUkBi1c8nERocfQrJWNLxZ9Fipw.jpg', dest: 'images/avatar-emily.jpg' },
  { url: 'https://framerusercontent.com/images/tPYkIwImGTYNrIWUAK9mkYyUgw.jpg', dest: 'images/avatar-ryan.jpg' },
  { url: 'https://framerusercontent.com/images/4bOcANXkLvuv2IZNjOZruPTFVTA.jpg', dest: 'images/avatar-sophia.jpg' },
  { url: 'https://framerusercontent.com/images/K6cUNifhQFa6qEX3kqNwfqMkiY.jpg', dest: 'images/avatar-brandon.jpg' },
  { url: 'https://framerusercontent.com/images/Ky8xfxIZ6aXUUztI3YWXxaM.jpg', dest: 'images/avatar-olivia.jpg' },

  // Benefits section
  { url: 'https://framerusercontent.com/images/z39IkEa0Kw0OSsmWSwDnqJ1bW70.jpg', dest: 'images/responsive-desktop.jpg' },
  { url: 'https://framerusercontent.com/images/zdvEtKmVGdpi9EOmHzVOdlKOp4.jpg', dest: 'images/responsive-tablet.jpg' },
  { url: 'https://framerusercontent.com/images/ofM69zaGB6vHRqqcLWkHrO2BJyw.jpg', dest: 'images/responsive-mobile.jpg' },

  // Contact / misc
  { url: 'https://framerusercontent.com/images/6qkj9f6uw9qb8WoLD5wbe5xbCck.svg', dest: 'images/icon-email.svg' },
  { url: 'https://framerusercontent.com/images/TgvrXlxxqO1HJPT3c8ACq3viN6k.svg', dest: 'images/icon-location.svg' },
  { url: 'https://framerusercontent.com/images/1XTTez8zOLrCDXb2HmjzrNAdRo.svg', dest: 'images/icon-phone.svg' },

  // Footer social icons
  { url: 'https://framerusercontent.com/images/PgAnQwmPHIgLPkd3mbzmyeCzwk.svg', dest: 'images/icon-social.svg' },
];

async function download(url, dest) {
  const fullPath = join(PUBLIC, dest);
  mkdirSync(dirname(fullPath), { recursive: true });
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    writeFileSync(fullPath, buf);
    console.log(`✓ ${dest}`);
  } catch (e) {
    console.error(`✗ ${dest}: ${e.message}`);
  }
}

// Download in batches of 4
async function downloadAll() {
  const unique = [...new Map(assets.map(a => [a.dest, a])).values()];
  for (let i = 0; i < unique.length; i += 4) {
    await Promise.all(unique.slice(i, i + 4).map(a => download(a.url, a.dest)));
  }
  console.log('\nDone!');
}

downloadAll();
