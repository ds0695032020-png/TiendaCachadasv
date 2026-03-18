export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  fullDescription: string;
  image: string;
  detailImage?: string;
  features: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'reloj-clasico',
    name: 'Reloj Clásico',
    price: 120.00,
    description: 'Elegancia atemporal con correa de cuero auténtico y maquinaria de precisión suiza.',
    fullDescription: 'Experimente la elegancia atemporal con nuestro Reloj Clásico. Diseñado bajo una estética minimalista, esta pieza combina la precisión artesanal con materiales de primera calidad.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaptWT9yrdw5XHFceKyqHrx2zJVzKsy8paNpJd7WcdfyH7FRyE_CAnBZfx5xgLCPRe60flRHgnjh-ptcY8PPdpfRBNGUDNeTAcKli8aqF9fzpTm1hucKgVv_MMvzQceZyAQcdbbFn7TaX6HBvd3BR4JF3M8yveZti1OEFcU737hOg9DjYQKxy3ZkXVG32gzHj-tQfShYuPpfBi_Jsdr9piHraf4x_0C4Mn6o-slYIPXTprwEGMBNoyjYUq0Xe6gZvAd6pG91nUa2o',
    detailImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVLDZJ-UqEZZJ4d4cy7ug4QOeKDQNtM489q-2fMlxeWrm-2jEnnDr2vcvTqAcCSzX5HZ9YkNEAiyOPMZl7z1cXIszdBDCE8nzc4tLIA0KV2NNv4a9xrbslib4PAToFKOrWfrENllm5QK7zxyYDSPWGexxWw2VWjd9S0OIlOkWU-8RNmulXlN5Goi-7Sx5lqFzc0nxHCUQhWD0b5iKD3IKNgYF-tbCw3JZmmdVhQvxB4n4NQKGTFl2dl1wT7qWxQAcotmM8OrsEFUk',
    features: [
      'Caja de acero inoxidable pulido',
      'Correa de cuero genuino cosida a mano',
      'Cristal de zafiro resistente a rayaduras',
      'Maquinaria de cuarzo de alta precisión'
    ]
  },
  {
    id: 'libreta-cuero',
    name: 'Libreta de Cuero',
    price: 45.00,
    description: 'Papel de alto gramaje ideal para pluma fuente, encuadernada a mano en cuero premium.',
    fullDescription: 'Nuestra Libreta de Cuero es el compañero perfecto para sus pensamientos y bocetos. Cada pieza es única, reflejando la belleza natural del cuero genuino.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8NEu07rwsb7Kqywl18qMDEU5JcBEtks5pwUmvgYveqd6Ks_MRv0LGLqF6AFW1KUtWWYWUFOL2Nbc-9Yf31nw3K-xFMHHmZGvUyDiEI5YTGhhqgxCTx1hkPO27uq_VXtu5Uz0Pih4_WxyCOOmccl5ka1IX5hlcQe8jEOTqHICwKJUwOJJvQKoJ58ofKHedzdhlZb0PG8oPH24Tf3qcy4iwM0dLg8TZfPl7YkFhaCx2xKy5CGuGjN-I6AW37FfoMYHYutwkene5Iqo',
    features: [
      'Cuero premium de curtido vegetal',
      'Papel libre de ácido de 120g',
      'Costura artesanal expuesta',
      'Cierre elástico de alta resistencia'
    ]
  },
  {
    id: 'taza-ceramica',
    name: 'Taza de Cerámica',
    price: 28.00,
    description: 'Diseño ergonómico y acabado mate. Perfecta para tus mañanas de café o té con estilo.',
    fullDescription: 'Disfrute de su bebida favorita en una taza que combina funcionalidad y diseño minimalista. El acabado mate proporciona una sensación táctil única.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-NS_Ry0vdhLszBssKxhjINZ4zlZpdhwaQXVDoEnrzYvMH3XpoDqYboD7vkzFsQVxCjSOY6xKJwx7fkBTCD-v87BmoGHZfdjEABG9h6fhUWWFUMd4pponMJBtd3BRtohU5TLuT7QvlF8yfvTdG9OvfdYllH-8MbM2m_GgPPIJzHa1vsviwT1uYpASrvN_CpuqoRgSriDn0d9mMM2KoOgrcCDOUjr9u7aU7Mxu8QyfLZAzsxxkhE1giFLv9LnozSfd__dw27CCdERE',
    features: [
      'Cerámica de alta temperatura',
      'Capacidad de 350ml',
      'Apta para microondas y lavavajillas',
      'Acabado mate antideslizante'
    ]
  }
];
