import { getPublicImagePath } from './imageUtils';

export const loadPortfolioImages = async (category, subCategory) => {
  // First check if the category exists
  if (!PORTFOLIO_STRUCTURE[category]) {
    console.error(`Category ${category} not found`);
    return { images: [], description: '' };
  }

  // Handle single images
  if (subCategory === 'single') {
    const singleImages = PORTFOLIO_STRUCTURE[category].subCategories?.single || [];
    return {
      images: singleImages.map(
        image => getPublicImagePath(`portfolio-part/${category}/${image}`)
      ),
      description: ''
    };
  }

  // Handle subcategory images
  const subCategoryData = PORTFOLIO_STRUCTURE[category].subCategories?.[subCategory];
  if (!subCategoryData) {
    console.error(`Subcategory ${subCategory} not found in ${category}`);
    return { images: [], description: '' };
  }

  return {
    images: (subCategoryData.images || []).map(
      image => getPublicImagePath(`portfolio-part/${category}/${subCategory}/${image}`)
    ),
    description: subCategoryData.description || ''
  };
};

export const PORTFOLIO_STRUCTURE = {
  illustration: {
    title: 'Illustration',
    subCategories: {
      'Long-term model study': {
        images: [
          'photo_2025-03-06_01-29-18.jpg',
          'photo_2023-05-25_20-33-21.jpg',
          'photo_2023-09-19_22-12-17.jpg',
          'photo_2023-09-26_00-54-58.jpg'
        ],
        description: 'Detailed studies of models over extended periods, focusing on anatomy and form.',
        coverImage: 'photo_2025-03-06_01-29-18.jpg'
      },
      'Quick live model study': {
        images: [
          'photo_2023-01-12_16-46-14.jpg',
          'photo_2025-03-06_01-10-19.jpg',
          'photo_2025-03-06_01-10-22.jpg',
          'photo_2025-03-06_01-10-27.jpg',
          'photo_2025-03-06_01-10-31.jpg',
          'photo_2025-03-06_01-10-39.jpg',
          'photo_2025-03-06_01-10-43.jpg',
          'photo_2025-03-06_01-10-47.jpg',
          'photo_2025-03-06_01-10-55 (2).jpg',
          'photo_2025-03-06_01-10-55.jpg'
        ],
        description: 'Rapid sketches capturing the essence of live models in short poses.',
        coverImage: 'photo_2025-03-06_01-10-19.jpg'
      },
      'sketchbook pages': {
        images: [
          'photo_2025-03-06_01-08-21.jpg',
          'photo_2025-03-06_01-08-31.jpg',
          'photo_2025-03-06_01-08-35.jpg',
          'photo_2025-03-06_01-08-39.jpg',
          'photo_2025-03-06_01-08-46.jpg',
          'photo_2025-03-06_01-07-53.jpg',
          'photo_2025-03-06_01-03-45.jpg',
          'photo_2025-03-06_01-03-07.jpg',
          'photo_2024-12-11_16-36-01.jpg',
          'photo_2024-12-11_16-36-00.jpg',
          'photo_2024-11-26_14-36-37.jpg',
          'photo_2025-02-28_20-10-07.jpg',
          '8.png',
          '7.png'
        ],
        description: 'Personal sketchbook pages showcasing daily drawings and ideas.',
        coverImage: 'photo_2025-03-06_01-08-21.jpg'
      },
      'pixel art': {
        images: [
          'darius.jpg',
          'mujud.jpg',
          '27yo scientist.gif',
          'jack and gab.png',
          'frog tab.gif',
          '3 no life.png',
          'cat.gif',
          'inside job.png'
        ],
        description: 'Digital pixel art pieces exploring various themes and characters.',
        coverImage: 'mujud.jpg'
      },
      'The realization': {
        images: [
          'the realization 2.JPG',
          'the realization.JPG'
        ],
        description: 'A series exploring moments of clarity and self-discovery.',
        coverImage: 'the realization.JPG'
      },
      'cat memes': {
        images: [
          'eepy.PNG',
          'head empty.PNG',
          'Awake but at what cost.PNG',
          'goofsphere.PNG',
          'how can i work.PNG',
          'no problem guys.PNG',
          'my life is going to....PNG',
          'cat going insane.PNG'
        ],
        description: 'Humorous illustrations featuring cats in various situations.',
        coverImage: 'cat going insane.PNG'
      },
      'handprints': {
        images: [
          'the revolution 2.png',
          'the revolution.png',
          'my first lino print.png',
          'Equality text.png',
          'Equality.png',
          'rotten man/image_2025-02-28_19-54-33.png',
          'rotten man/brypoit board.png',
          'rotten man/sketch.png',
          'rotten man/Drypoint print 2024.png'
        ],
        description: 'Experimental prints using various techniques including linocuts.',
        coverImage: 'Equality.png'
      },
      'anxiety': {
        images: [
          'Doubting anxiety.JPG'
        ],
        description: 'Visual expressions of anxiety and emotional states.',
        coverImage: 'Doubting anxiety.JPG'
      },
      'single': [
        'Star girl.JPG',
        'empty wires.JPG',
        'sword design.PNG',
        'Eating faces.JPG',
        'i will create no matter what.JPG',
        'My first d&d character.jpg',
        'guitar repair poster.jpg',
        'Confusion.gif',
        'Girl and the goosae looking swan.jpg'
      ]
    }
  },
  'graphic design': {
    title: 'Graphic Design',
    subCategories: {
      'meville': {
        images: [
          'photo_2025-02-27_19-48-19.jpg',
          'melville torokhoda final 2 black back-01.jpg'
        ],
        description: 'Brand identity and design system for Meville.',
        coverImage: 'melville torokhoda final 2 black back-01.jpg'
      },
      'blingers': {
        images: [
          'blingers logo1- fin-03.png',
          'blingers logo1- fin-04.png'
        ],
        description: 'Logo and brand identity design for Blingers jewelry.',
        coverImage: 'blingers logo1- fin-03.png'
      },
      'single': [
        'Iran-logo.jpg',
        'ایران-logo.jpg',
        'frog logo.jpg',
        'Sarah-ساراname logo.png',
        'font design.jpg',
        'ساعت clock- typography.png',
        'Music teacher poster.jpg',
        'pouya logo design.png',
        'پویا pouya- logo design.png',
        'persian font design.jpg',
        'آ و آباد TYPOGRAPHY.jpg',
        'mixing Persian and english letters.jpg',
        'colors look colorful with you!.jpg',
        'Sonolgy Thesis cover.jpg',
        'PG TAHRIR poster.jpg',
        'VALE LOGO.png'
      ]
    }
  },
  photography: {
    title: 'Photography',
    subCategories: {
      'azerbaijan 2024': {
        images: [
          'DSCN9721.JPG',
          'DSCN9715.JPG',
          'DSCN9712.JPG',
          'DSCN9696.JPG',
          'DSCN9682.JPG',
          'DSCN9660.JPG',
          'DSCN9649.JPG',
          'DSCN9646.JPG',
          'DSCN9640.JPG'
        ],
        description: 'A photographic journey through Azerbaijan landscapes and culture.',
        coverImage: 'DSCN9721.JPG'
      },
      'water-2023-2025-ONGOING PROJECT': {
        images: [
          'DSCN9579.JPG',
          'DSCN8976.JPG',
          'DSCN8975.JPG',
          'DSCN8974 - Copy.JPG',
          'DSCN8973.JPG',
          'DSCN8971 - Copy.JPG',
          'DSCN8964.JPG',
          'DSCN8963.JPG',
          'DSCN8961.JPG',
          'DSCN8958 - Copy.JPG',
          'DSCN8957.JPG',
          'DSCN8954.JPG',
          'DSCN8949.JPG',
          'DSCN8948 - Copy.JPG',
          'DSCN8947.JPG',
          'DSCN8944 - Copy.JPG',
          'DSCN8943.JPG',
          'DSCN8942.JPG',
          'DSCN8941.JPG',
          'DSCN8870.JPG',
          'DSCN8867.JPG',
          'DSCN8850.JPG'
        ],
        description: 'An ongoing exploration of water reflections and patterns.',
        coverImage: 'DSCN8976.JPG'
      },
      'Travel photography': {
        images: [
          'Untitled-16.jpg',
          'Untitled-15.jpg',
          'DSCN9563.JPG',
          'DSCN9534.JPG',
          'DSCN8892 - Copy.JPG',
          'DSCN8891.JPG'
        ],
        description: 'Capturing moments and places from various travel destinations.',
        coverImage: 'Untitled-16.jpg'
      },
      'Jewelery photography 2023': {
        images: [
          'edited with logo.jpg',
          'DSCN7818 edited with logo.jpg',
          'DSCN7743 edited with logo.jpg',
          'DSCN7731 EDITED WITH LOGO.jpg',
          'DSCN7696 edited with logo.jpg',
          'DSCN7665 with WHITE logo.jpg',
          'DSCN7624 edited with logo.jpg',
          'DSCN7592 edited with logo.jpg',
          'DSCN7583.jpg',
          'DSCN7583 edited with logo.jpg',
          'DSCN7545 edited with logo.jpg',
          'DSCN7477 edited with logo.jpg',
          'DSCN7461 edited with logo.jpg',
          'DSCN7451 edited with logo.jpg'
        ],
        description: 'Professional photography showcasing jewelry pieces.',
        coverImage: 'DSCN7731 EDITED WITH LOGO.jpg'
      },
      'istanbul2023': {
        images: [
          'DSCN7430.JPG',
          'DSCN7427.JPG',
          'DSCN7313.JPG',
          'DSCN7230.JPG',
          'DSCN7180.JPG',
          'DSCN7154.JPG',
          'DSCN7135.JPG',
          'DSCN7132.JPG',
          'DSCN7119.JPG',
          'DSCN6985.JPG',
          'DSCN6874.JPG'
        ],
        description: 'Street photography from Istanbul, capturing the city\'s culture and daily life.',
        coverImage: 'DSCN7430.JPG'
      },
      'branding photography 2022': {
        images: [
          'orange-01.jpg',
          'DSCN6676 1-01.jpg',
          'DSCN6668.jpg',
          'DSCN6633 edited low-01.jpg'
        ],
        description: 'Professional branding and product photography.',
        coverImage: 'DSCN6668.jpg'
      },
      'single': []
    }
  },
  sculpture: {
    title: 'Sculpture',
    subCategories: {
      'may 2024': {
        images: [
          'doc_2025-03-06_01-41-02-ezgif.com-video-to-gif-converter.gif',
          'doc_2025-03-06_01-39-34-ezgif.com-video-to-gif-converter.gif',
          '6.1.png',
          '6..png',
          '6.may2024.png'
        ],
        description: 'Latest sculptural works featuring dynamic pieces and experimental forms.',
        coverImage: '6.1.png'
      },
      'summer 2024': {
        images: [
          '5.2.png',
          '5.1.png',
          '5. summer 2024.png',
          '5..png'
        ],
        description: 'Summer collection exploring organic forms and textures.',
        coverImage: '5.2.png'
      },
      'January 2024': {
        images: [
          '4..png',
          '4.January 2024.png'
        ],
        description: 'New year explorations in sculptural form.',
        coverImage: '4.January 2024.png'
      },
      'December 2023': {
        images: [
          '3..png',
          '3.png',
          '3.December 2023.png'
        ],
        description: 'End-of-year sculptural series focusing on abstract forms.',
        coverImage: '3.png'
      },
      'November 2023': {
        images: [
          '2..png',
          '2. november 2023.png'
        ],
        description: 'Autumn-inspired sculptural works.',
        coverImage: '2. november 2023.png'
      },
      'First try': {
        images: [
          '1.first try2.png',
          '1.First try.png'
        ],
        description: 'Initial sculptural experiments exploring form and material.',
        coverImage: '1.First try.png'
      },
      'single': []
    }
  }
}; 