import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Menjelajahi Keindahan Pulau Breueh",
    paragraph: "Breueh Island adalah destinasi wisata yang mempesona dengan pantai-pantai yang indah. Artikel ini akan membawa Anda menjelajahi keindahan dan aktivitas menarik yang bisa dilakukan di Breueh Island.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Niki",
      image: "/images/blog/author-01.png",
      designation: "Penulis"
    },
    tags: ["Pulau", "Wisata Aceh", "Travel"],
    publishDate: "2024-07-20"
  },
  {
    id: 2,
    title: "Mengenal Budaya Aceh",
    paragraph:
      "Aceh adalah salah satu provinsi di Indonesia yang memiliki kekayaan budaya yang luar biasa. Artikel ini akan membawa Anda mengenal budaya Aceh yang unik dan menarik.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["Budaya", "Aceh"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Menikmati Keindahan Pantai Lambaro",
    paragraph:
      "Pantai Lambaro adalah salah satu pantai yang indah di Aceh. Artikel ini akan membawa Anda menikmati keindahan pantai Lambaro dan aktivitas menarik yang bisa dilakukan di sana.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Niki",
      image: "/images/blog/author-03.png",
      designation: "",
    },
    tags: ["Pantai", "Wisata Aceh"],
    publishDate: "2025",
  },
];
export default blogData;
