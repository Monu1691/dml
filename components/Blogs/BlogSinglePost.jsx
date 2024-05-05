import Image from "next/image";
import { formatDate } from "../CommonComponents/CommonFunc";

export default function BlogSinglePost(props) {
    const { post } = props;
    console.log(post);

    return (
        <>
            <section className="py-[80px]">
                <div className="container max-w-[1600px] px-[80px] mx-auto">

                    <ul className="flex gap-x-[50px] [&>li]:relative [&>li:before]:content-[''] [&>li:before]:w-[30px] [&>li:before]:h-[2px] [&>li:before]:bg-[#9fa9ba] [&>li:before]:absolute [&>li:before]:top-[12px] [&>li:before]:left-[calc(100%+10px)]">
                        <li><a href="/">Home</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li className="before:hidden"><span>{post.title}</span></li>
                    </ul>


                    <section className="mt-[32px]">
                        <h1 className="text-[52px] font-[500] text-[#323848] mb-[24px]">{post.title}</h1>

                        <div className="mt-[80px] aspect-[1/0.35] relative mb-[10px]">
                            <Image src={post.featuredImage.node.mediaItemUrl} layout="fill" objectFit="cover" objectPosition="center" />
                        </div>

                        <div className="mb-[50px] flex justify-between gapx-x-[30px]">
                            <div className="">
                                <span className="text-[14px] font-bold text-[#9fa9ca]">{formatDate(post.date)}</span>
                            </div>

                            <div className="capitalize">
                                {/* <a href={post.categories.nodes[0].link}> */}
                                    {post.categories.nodes[0].name}
                                {/* </a> */}
                            </div>
                        </div>

                        <div className="" dangerouslySetInnerHTML={{ __html: post.content }} />

                    </section>



                </div>
            </section>
        </>
    );
}
