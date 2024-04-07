import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import likeButton from "@/app/resourses/images/like-heart.svg";
import { HeartIcon } from '@heroicons/react/solid';

const ProductCard = ({ title, image }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <section className="h-full w-full flex flex-col gap-5 p-5 cursor-pointer bg-white border border-[#170d52] rounded-lg overflow-hidden">
      <article className="h-[70%] w-full flex justify-center items-center">
        <div className="w-4/5 h-4/5 flex justify-center items-center">
          <Image
            src={image}
            alt={title}
            className="object-cover"
            width={200}
            height={200} // Same height and width for the image
          />
        </div>
      </article>
      <article className="h-[30%] w-full flex flex-col gap-3 p-3">
        <div className="h-1/2 w-full">
          <h1  className="text-[#252020] font-bold text-sm overflow-auto h-[90%]">
            {title}
          </h1>
        </div>
        <div className="h-1/2 w-full flex justify-between items-center gap-5">
          <Link href={"/"} className="text-[#888792] text-sm overflow-hidden">
            <span className="underline">Sign in</span>
            <span> or Create an account to see pricing</span>
          </Link>
          <button
            onClick={toggleLike}
            className="h-[14px] w-[15px]"
          >
            {liked ? <HeartIcon className="h-6 w-6 text-red-500" /> : <Image src={likeButton} alt="like button" />}
          </button>
        </div>
      </article>
    </section>
  );
};

export default ProductCard;
