interface NewsItem {
  title: string;
  author: string;
  readingTime: number;
  description: string;
  img: string;
  content: Content[];
}
interface Content {
  subtitle: string;
  paragraphs: Paragraph;
}
interface Paragraph {
  p1: string;
  p2: string;
  p3?: string;
  p4?: string;
  img?: string;
  imgTag?: string;
}

export const NewsData2: NewsItem[] = [
  {
    title: "Guilt-Free Snack Indulgences: How to Make Your Favorite Chips and Dip Healthier",
    author: "Viome Team",
    readingTime: 4,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, qui porro? Minima in praesentium magnam tempora veniam perferendis molestias facere cupiditate culpa amet. Provident illum laudantium officiis quos ipsam. At.",
    img: "https://images.unsplash.com/photo-1463107971871-fbac9ddb920f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG5hdHVyZXxlbnwwfDB8MHx8fDI%3D",
    content: [
      {
        subtitle: 'From a childhood idol to reality',
        paragraphs: {
          p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam. orem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam.',
          p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam.',
          img: 'https://images.unsplash.com/photo-1500829243541-74b677fecc30?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG5hdHVyZXxlbnwwfDB8MHx8fDI%3D',
          imgTag: "This is image 1",
        }
      },
      {
        subtitle: 'Oxalates, the specialist, and the biochemistry',
        paragraphs: {
          p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam.',
          p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam.',
          img: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfDB8MHx8fDI%3D',
          imgTag: "This is image 2",
        }
      },
      {
        subtitle: 'Spinach: superfood or avoid?',
        paragraphs: {
          p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam.',
          p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam.',
          p3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam.',
          img: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyZXxlbnwwfDB8MHx8fDI%3D',
          imgTag: "This is image 3",
        }
      },
    ]
  },
  {
    title: "Celebrate Love (and Health) with a Nourishing Breakfast in Bed",
    author: "Hilary Keiser - Viome Translational Science Nutritionist, Supplements",
    readingTime: 5,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, qui porro? Minima in praesentium magnam tempora veniam perferendis molestias facere cupiditate culpa amet. Provident illum laudantium officiis quos ipsam. At.",
    img: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG5hdHVyZXxlbnwwfDB8MHx8fDI%3D",
    content: [
      {
        subtitle: 'Pick a spot',
        paragraphs: {
          p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam.',
          p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam.',
          img: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfDB8MHx8fDI%3D',
          imgTag: "This is image 1",
        }
      },
      {
        subtitle: 'Create a fenced bed',
        paragraphs: {
          p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam.',
          p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam.',
          img: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG5hdHVyZXxlbnwwfDB8MHx8fDI%3D',
          imgTag: "This is image 2",
        }
      },
      {
        subtitle: 'Buy plants',
        paragraphs: {
          p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam.',
          p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam.',
          p3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis, at eos obcaecati quae beatae vitae quod? Rerum distinctio odit placeat perferendis? Deleniti qui neque asperiores libero blanditiis id veniam.',
          img: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG5hdHVyZXxlbnwwfDB8MHx8fDI%3D',
          imgTag: "This is image 3",
        }
      },
    ]
  },
]