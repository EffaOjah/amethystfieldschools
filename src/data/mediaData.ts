export type MediaCategory = 'All' | 'Academics' | 'Sports' | 'Arts' | 'Campus Life' | 'Videos';

export type MediaItem = {
  id: number | string;
  type: 'image' | 'video';
  src: string;
  title1: string;
  title2: string;
  title: string;
  category: MediaCategory;
  caption: string;
  ctaText?: string;
  ctaLink?: string;
  objectPosition?: string;
};

export const localSchoolMedia: MediaItem[] = [
  {
    id: 'hero-1',
    type: 'image',
    src: '/IMG_1940.JPG.jpeg',
    title1: 'ACADEMIC',
    title2: 'EXCELLENCE',
    title: 'ACADEMIC EXCELLENCE',
    category: 'Academics',
    caption: 'Inspiring young minds through disciplined learning, modern curriculum, and dedicated mentorship.',
    ctaText: 'SEE MORE',
    ctaLink: '/academics',
    objectPosition: 'center 10%'
  },
  {
    id: 'hero-2',
    type: 'image',
    src: '/amf-dance.jpg',
    title1: 'CULTURAL ARTS',
    title2: '& DANCE',
    title: 'CULTURAL ARTS & DANCE',
    category: 'Arts',
    caption: 'Celebrating student creativity, cultural heritage, and talent through music, drama, and dance.',
    ctaText: 'SEE MORE',
    ctaLink: '/information',
    objectPosition: 'center 15%'
  },
  {
    id: 'hero-3',
    type: 'image',
    src: '/amf-sport1.jpg',
    title1: 'SPORTS &',
    title2: 'ATHLETICS',
    title: 'SPORTS & ATHLETICS',
    category: 'Sports',
    caption: 'Fostering physical fitness, sportsmanship, and teamwork across our competitive sports programmes.',
    ctaText: 'SEE MORE',
    ctaLink: '/academics',
    objectPosition: 'center center'
  },
  {
    id: 'hero-4',
    type: 'image',
    src: '/amf-publicspeaking1.jpg',
    title1: 'LEADERSHIP &',
    title2: 'EXPRESSION',
    title: 'LEADERSHIP & EXPRESSION',
    category: 'Campus Life',
    caption: 'Empowering students to articulate their thoughts, present confidently, and lead with character.',
    ctaText: 'SEE MORE',
    ctaLink: '/about',
    objectPosition: 'center 15%'
  },
  {
    id: 'hero-5',
    type: 'image',
    src: '/school-image.png',
    title1: 'MODELLING',
    title2: 'EXCELLENCE',
    title: 'MODELLING EXCELLENCE',
    category: 'Campus Life',
    caption: 'A serene and state-of-the-art campus atmosphere designed to nurture every child’s potential.',
    ctaText: 'SEE MORE',
    ctaLink: '/apply',
    objectPosition: 'center center'
  },
  {
    id: 'hero-6',
    type: 'image',
    src: '/IMG_1937.JPG.jpeg',
    title1: 'HOLISTIC',
    title2: 'EDUCATION',
    title: 'HOLISTIC EDUCATION',
    category: 'Academics',
    caption: 'Combining rigorous academic standards with sound moral and social values.',
    ctaText: 'SEE MORE',
    ctaLink: '/about',
    objectPosition: 'center 15%'
  },
  {
    id: 'hero-7',
    type: 'image',
    src: '/amf-sport2.jpg',
    title1: 'CHAMPIONS',
    title2: 'IN MOTION',
    title: 'CHAMPIONS IN MOTION',
    category: 'Sports',
    caption: 'Exciting track events, sports day competitions, and active outdoor physical education.',
    ctaText: 'SEE MORE',
    ctaLink: '/academics',
    objectPosition: 'center center'
  },
  {
    id: 'hero-8',
    type: 'image',
    src: '/amf-career1.jpg',
    title1: 'CAREER &',
    title2: 'INNOVATION',
    title: 'CAREER & INNOVATION',
    category: 'Academics',
    caption: 'Preparing future leaders with practical exposure to technology, science, and career paths.',
    ctaText: 'SEE MORE',
    ctaLink: '/information',
    objectPosition: 'center 15%'
  },
  {
    id: 'hero-9',
    type: 'image',
    src: '/IMG_1943.JPG.jpeg',
    title1: 'CLASSROOM',
    title2: 'DISCOVERY',
    title: 'CLASSROOM DISCOVERY',
    category: 'Academics',
    caption: 'Engaging, interactive classrooms that spark curiosity and encourage critical thinking.',
    ctaText: 'SEE MORE',
    ctaLink: '/academics',
    objectPosition: 'center 15%'
  },
  {
    id: 'hero-10',
    type: 'image',
    src: '/IMG_1945.JPG.jpeg',
    title1: 'SCHOOL',
    title2: 'COMMUNITY',
    title: 'SCHOOL COMMUNITY',
    category: 'Campus Life',
    caption: 'A supportive, family-oriented environment where friendships and confidence flourish.',
    ctaText: 'SEE MORE',
    ctaLink: '/about',
    objectPosition: 'center 15%'
  },
  {
    id: 'hero-11',
    type: 'image',
    src: '/amf-about.jpeg',
    title1: 'NURTURING',
    title2: 'ENVIRONMENT',
    title: 'NURTURING ENVIRONMENT',
    category: 'Campus Life',
    caption: 'Where every student is known, encouraged, and guided towards personal excellence.',
    ctaText: 'SEE MORE',
    ctaLink: '/about',
    objectPosition: 'center 15%'
  },
  {
    id: 'hero-12',
    type: 'image',
    src: '/IMG_1939.JPG.jpeg',
    title1: 'JOY OF',
    title2: 'LEARNING',
    title: 'JOY OF LEARNING',
    category: 'Campus Life',
    caption: 'Capturing moments of growth, joy, and achievement across our academic terms.',
    ctaText: 'SEE MORE',
    ctaLink: '/media',
    objectPosition: 'center 15%'
  },
  {
    id: 'hero-13',
    type: 'image',
    src: '/girl.jpg',
    title1: 'STUDENT',
    title2: 'SPOTLIGHT',
    title: 'STUDENT SPOTLIGHT',
    category: 'Campus Life',
    caption: 'Shining a light on student accomplishments, character, and individual talents.',
    ctaText: 'SEE MORE',
    ctaLink: '/apply',
    objectPosition: 'center 10%'
  },
  {
    id: 'hero-14',
    type: 'image',
    src: '/hero-image.png',
    title1: 'FUTURE-READY',
    title2: 'LEARNERS',
    title: 'FUTURE-READY LEARNERS',
    category: 'Academics',
    caption: 'Equipping children with 21st-century skills, digital literacy, and global perspective.',
    ctaText: 'SEE MORE',
    ctaLink: '/academics',
    objectPosition: 'center 15%'
  },
  {
    id: 'vid-1',
    type: 'video',
    src: '/media/WhatsApp Video 2026-06-25 at 16.50.38.mp4',
    title1: 'AMETHYST PRESS',
    title2: 'SOCIETY',
    title: 'AMETHYST PRESS SOCIETY',
    category: 'Videos',
    caption: "Love truly lives in AmethystField Schools — 'A child learns faster where love thrives'. Grade 2 Gold Classmates Game.",
    ctaText: 'SEE MORE',
    ctaLink: '/media',
    objectPosition: 'center center'
  },
  {
    id: 'vid-2',
    type: 'video',
    src: '/media/WhatsApp Video 2026-06-25 at 16.50.32.mp4',
    title1: 'GROOMING FUTURE',
    title2: 'LEADERS',
    title: 'GROOMING FUTURE LEADERS',
    category: 'Videos',
    caption: 'AmethystField Schools is a place your child should be groomed for moral and academic excellence.',
    ctaText: 'SEE MORE',
    ctaLink: '/media',
    objectPosition: 'center center'
  },
  {
    id: 'vid-3',
    type: 'video',
    src: '/media/WhatsApp Video 2026-06-25 at 16.50.32 (1).mp4',
    title1: 'CLASSROOM',
    title2: 'HIGHLIGHTS',
    title: 'CLASSROOM HIGHLIGHTS',
    category: 'Videos',
    caption: 'Vibrant student participation and energetic learning in action.',
    ctaText: 'SEE MORE',
    ctaLink: '/media',
    objectPosition: 'center center'
  },
  {
    id: 'vid-4',
    type: 'video',
    src: '/media/WhatsApp Video 2026-06-25 at 16.50.27.mp4',
    title1: 'CAMPUS',
    title2: 'ATMOSPHERE',
    title: 'CAMPUS ATMOSPHERE',
    category: 'Videos',
    caption: 'Experience the warm atmosphere and daily life at AmethystField Schools.',
    ctaText: 'SEE MORE',
    ctaLink: '/media',
    objectPosition: 'center center'
  }
];

export const mediaItems = localSchoolMedia;
