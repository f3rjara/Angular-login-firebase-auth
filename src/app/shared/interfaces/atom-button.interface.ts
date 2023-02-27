export interface atomButton {
  title?: string;
  id?: string;
  alt?: string;
  class?: string;
  aria?: string;
}

// Initilization object atomicImage
export const dummyAtomButton: atomButton = {
  title: 'Hola mundo!',
  id: 'auth__btnAction--submit',
  alt: 'Hola mundo!',
  class: 'btn__action--submit',
  aria: 'Hola mundo!',
};
