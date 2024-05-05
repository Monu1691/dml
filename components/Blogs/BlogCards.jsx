import { formatDate } from "../CommonComponents/CommonFunc";

export default function BlogCards(props) {
    const { posts } = props;

    // console.log(posts);

    return (
        <>
            <section className="py-[80px]">
                <div className="container max-w-[1600px] px-[80px] mx-auto">

                    <section className="grid grid-cols-3 gap-y-[60px] gap-x-[30px]">
                        {posts.map((data, i) => (
                            <div className="bg-[#eee] text-[#222324] rounded-[50px] overflow-hidden" key={i}>
                                <div className="aspect-[1/0.7]">
                                    <img className="w-full h-full object-cover" src={data.featuredImage.node.mediaItemUrl} alt={data.title} />
                                </div>
                                <div className="pt-[10px] pb-[30px] px-[30px]">
                                    <div className="text-[14px] font-bold text-[#9fa9ca] mb-[15px]">{formatDate(data.date)}</div>
                                    <div className="text-[24px]">{data.title}</div>
                                    <div className="mt-[30px]">
                                        <a href={`blog/${data.uri}`} className="text-[#1c75ba] text-[18px] font-bold inline-flex items-center gap-x-[5px] transition-all hover:gap-x-[8px]">
                                            <span>Learn More</span>
                                            <img src="/images/common/link-arrow.png" alt="Learn More" className="w-[15px]" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>

                </div>
            </section>
        </>
    );
}
