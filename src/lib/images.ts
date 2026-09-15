const shears = "/images/projects/shears";
const yogurt = "/images/projects/yogurt";

export const IMAGES = {
  hero: {
    home: `${shears}/Photo-1.jpg`,
    about: `${shears}/Photo-2.jpg`,
    services: `${shears}/Photo-3.jpg`,
    projects: `${shears}/Photo-4.jpg`,
    industries: `${shears}/Photo-5.jpg`,
    quality: `${shears}/Photo-6.jpg`,
    clients: `${shears}/Photo-7.jpg`,
    contact: `${shears}/Photo-8.jpg`,
    proposal: `${shears}/Photo-9.jpg`,
    civil: `${shears}/Photos (1).jpeg`,
    design: `${shears}/Photos (2).jpeg`,
    fabrication: `${shears}/Photos (3).jpeg`,
    erection: `${shears}/Photos (4).jpeg`,
    electrical: `${shears}/Photos (5).jpeg`,
    environmental: `${shears}/Photos (6).jpeg`,
    projectDetail: `${shears}/Photos (7).jpeg`,
  },
  projects: {
    shears: [
      `${shears}/Photo-1.jpg`,
      `${shears}/Photo-2.jpg`,
      `${shears}/Photo-3.jpg`,
      `${shears}/Photo-4.jpg`,
      `${shears}/Photo-5.jpg`,
      `${shears}/Photo-6.jpg`,
      `${shears}/Photo-7.jpg`,
      `${shears}/Photo-8.jpg`,
      `${shears}/Photo-9.jpg`,
      `${shears}/Photo-Motor (1).jpeg`,
      `${shears}/Photo-Motor (2).jpeg`,
      `${shears}/Photo-Motor (3).jpeg`,
      `${shears}/Photo-Transformer.jpg`,
      `${shears}/Photos (8).jpeg`,
      `${shears}/Photos (9).jpeg`,
      `${shears}/Photos (10).jpeg`,
    ],
    yogurt: [
      `${yogurt}/Photo-1.jpg`,
      `${yogurt}/Photo-2.jpg`,
      `${yogurt}/Photo-3.jpg`,
    ],
  },
  collage: {
    home1: `${shears}/Photo-2.jpg`,
    home2: `${shears}/Photo-3.jpg`,
    home3: `${shears}/Photo-4.jpg`,
    about1: `${shears}/Photos (1).jpeg`,
    about2: `${shears}/Photos (2).jpeg`,
    about3: `${shears}/Photos (3).jpeg`,
    about4: `${shears}/Photos (4).jpeg`,
  },
};

export function img(path: string) {
  return path.replace(/ /g, "%20").replace(/\(/g, "%28").replace(/\)/g, "%29");
}
