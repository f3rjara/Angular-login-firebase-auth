export interface atomicImage {
  ngSrc: string;
  width: number;
  height: number;
  alt?: string;
  class?: string;
  aria?: string;
  priority?: boolean | undefined;
}

// Initilization object atomicImage
export const dummyAtomicImage: atomicImage = {
  ngSrc: 'https://picsum.photos/200/300',
  width: 200,
  height: 300,
  alt: 'Atomic Image Component',
  class: 'atomicImage--img',
  aria: 'Atomic Image Component',
  priority: false,
};
