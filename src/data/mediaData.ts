export type MediaItem = {
  id: number;
  type: 'image' | 'video';
  src: string;
  caption?: string;
};

export const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: 'video',
    src: 'media/WhatsApp Video 2026-06-25 at 16.50.38.mp4',
    caption: "LOVE TRULY LIVES IN AMETHYSTFIELD SCHOOLS, 'A CHILD LEARNS FASTER WHERE LOVE THRIVES '. GRADE 2 GOLD LEARNER'S, I LOVE MY CLASSMATES GAME. LOVE CHECK ✅✅. PROUDLY BROUGHT TO YOU BY AMETHYST PRESS SOCIETY."
  },
  {
    id: 2,
    type: 'video',
    src: 'media/WhatsApp Video 2026-06-25 at 16.50.32 (1).mp4',
    caption: ''
  },
  {
    id: 3,
    type: 'video',
    src: 'media/WhatsApp Video 2026-06-25 at 16.50.32.mp4',
    caption: 'AMETHYSTFIELD SCHOOLS IS A PLACE YOUR CHILD SHOULD BE GROOMED.✨'
  },
  {
    id: 4,
    type: 'image',
    src: 'media/WhatsApp Image 2026-06-25 at 16.50.27.jpeg',
    caption: ''
  },
  {
    id: 5,
    type: 'video',
    src: 'media/WhatsApp Video 2026-06-25 at 16.50.27.mp4',
    caption: ''
  }
];
