'use client';
import { Blog } from '@/types/blog';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { id, mainImage, title, desciption } = blog;
  const [imagePath, setImagePath] = useState('/images/blog_img.jpg');
  useEffect(() => {
    if (blog.images?.length == 0) {
      setImagePath('/images/blog_img.jpg');
    } else {
      setImagePath(process.env.NEXT_PUBLIC_MEDIA_URL + blog.images[0]?.id);
    }
  }, []);

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white shadow-md"
      >
        <Link href={`/adv/${id}`} className="relative block h-56 w-full">
          <Image
            src={imagePath}
            alt={title}
            fill
            className="rounded-t-lg object-cover"
            sizes="(max-width: 768px) 100vw"
          />
        </Link>

        <div className="flex flex-col px-6 pb-2">
          <h3 className="!mb-1 !mt-2 line-clamp-2 inline-block text-base font-bold text-black duration-300 hover:text-primary">
            <Link href={`/adv/${id}`}>{`${title.slice(0, 30)}...`}</Link>
          </h3>
          <span className="line-clamp-3">{`${desciption?.slice(0, 30)}...`}</span>
        </div>
      </motion.div>
    </>
  );
};

export default BlogItem;
