export const loadPortfolioImages = async (category, subCategory) => {
  const basePath = `/portfolio-part/${category}`;
  
  if (subCategory === 'single') {
    // Return the single images for the category
    return {
      images: PORTFOLIO_STRUCTURE[category].subCategories.single.map(
        image => `${basePath}/${image}`
      ),
      description: ''
    };
  } else {
    // For subcategories, return all images in the subfolder
    const subCategoryData = PORTFOLIO_STRUCTURE[category].subCategories[subCategory];
    return {
      images: subCategoryData.images.map(image => `${basePath}/${subCategory}/${image}`),
      description: subCategoryData.description || ''
    };
  }
};

// This is our static structure of the portfolio
// In a real application, this would come from the server
export const PORTFOLIO_STRUCTURE = {
  illustration: {
    title: 'Illustration',
    subCategories: {
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
        description: 'A collection of cat-themed illustrations and memes.',
        coverImage: 'cat going insane.PNG'
      },
      'sketchbook pages': {
        images: [
          'photo_2025-02-28_20-10-07.jpg',
          'image_2025-02-28_20-06-19.png',
          'image_2025-02-28_20-06-25.png',
          'image_2025-02-28_20-06-29.png',
          'image_2025-02-28_20-06-32.png',
          'image_2025-02-28_20-06-36.png',
          '5.png',
          '6.png',
          '3.png',
          '4.png',
          'image_2025-02-28_20-06-54.png',
          '2.png',
          '1.png',
          '8.png',
          '7.png'
        ],
        description: 'Personal sketchbook pages showcasing daily drawings and ideas.',
        coverImage: '1.png'
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
        description: 'Experimental art series using handprints as a medium, including linocuts and drypoint prints.',
        coverImage: 'Equality.png'
      },
      'anxiety': {
        images: ['Doubting anxiety.JPG'],
        description: `This piece is a visual exploration of anxiety attacks, particularly the
isolating and overwhelming experience of social anxiety. Using vibrant
and clashing color palettes, I wanted to depict the chaotic, almost
surreal mental state that comes with an anxiety attack. The layered use
of a clipping mask allowed me to show both the hidden and exposed face
at the same time—representing the paradox of hiding while still feeling
hyper-visible.

When experiencing anxiety in public, covering your face can feel like
a desperate attempt to disappear, but instead, it heightens the awareness
of your emotions. You feel the tension in your hands, the pressure
in your chest, and the overwhelming disconnect from the world around
you. Others may not see what you're going through, but inside, the emotions
are amplified. I wanted to capture that sensation—the feeling of
being trapped within your own mind, alienated by your own thoughts, yet
invisible to those around you.

This artwork is my attempt to translate that experience into a visual
language—one that expresses the weight of anxiety, the intensity of
internal struggles, and the hope that through art, we can make the
unseen more understood.`,
        coverImage: 'Doubting anxiety.JPG'
      },
      'pixel art': {
        images: [
          'darius.jpg',
          'mujud.jpg',
          '27yo scientist.gif'
        ],
        description: 'A collection of pixel art pieces, including character designs and animations.',
        coverImage: 'mujud.jpg'
      },
      'single': [
        'IMG_0080.JPG',
        'the realization 2.JPG',
        'the realization.JPG',
        'empty wires.JPG',
        'sword design.PNG',
        'IMG_1341.JPG',
        '1. i will create no matter what.JPG',
        'dnd back.jpg',
        'DADASHI GUITAR 2.jpg',
        'Sarah-Gif.gif'
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
        'Thesis cover.jpg',
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
          'DSCN9660.JPG',
          'DSCN9682.JPG',
          'DSCN9721.JPG',
          'DSCN9715.JPG',
          'DSCN9712.JPG',
          'DSCN9696.JPG',
          'DSCN9649.JPG',
          'DSCN9646.JPG',
          'DSCN9640.JPG'
        ],
        description: 'A photographic journey through Azerbaijan, capturing the landscapes, architecture, and daily life.',
        coverImage: 'DSCN9721.JPG'
      },
      'istanbul2023': {
        images: [
          'DSCN7230.JPG',
          'DSCN7430.JPG',
          'DSCN7427.JPG',
          'DSCN7313.JPG',
          'DSCN7180.JPG',
          'DSCN7154.JPG',
          'DSCN7135.JPG',
          'DSCN7132.JPG',
          'DSCN7119.JPG',
          'DSCN6985.JPG',
          'DSCN6874.JPG'
        ],
        description: 'Street photography and architectural shots from Istanbul, capturing the city\'s vibrant culture and historic beauty.',
        coverImage: 'DSCN7430.JPG'
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
        description: 'An ongoing photographic exploration of water reflections, capturing the mesmerizing transformation of familiar ripples and waves into abstract patterns that blur the line between reality and illusion. This series explores the fluid nature of water and its ability to create surreal, otherworldly compositions through natural distortions of light and form.',
        coverImage: 'DSCN8976.JPG'
      },
      'branding photography 2022': {
        images: [
          'DSCN6668.jpg',
          'DSCN6633 edited low-01.jpg',
          'orange-01.jpg',
          'DSCN6676 1-01.jpg'
        ],
        description: 'Professional branding photography showcasing products and commercial compositions.',
        coverImage: 'DSCN6668.jpg'
      },
      'single': [
        'Untitled-16.jpg',
        'Untitled-15.jpg',
        'DSCN9563.JPG',
        'DSCN9534.JPG',
        'DSCN8892 - Copy.JPG',
        'DSCN8891.JPG'
      ]
    }
  },
  sculpture: {
    title: 'Sculpture',
    subCategories: {
      'single': [
        '6.1.png',
        '6..png',
        '6.may2024.png',
        '5.2.png',
        '5.1.png',
        '5. summer 2024.png',
        '5..png',
        '4..png',
        '4.January 2024.png',
        '3..png',
        '3.png',
        '2..png',
        '3.December 2023.png',
        '2. november 2023.png',
        '1.first try2.png',
        '1.First try.png'
      ]
    }
  }
}; 