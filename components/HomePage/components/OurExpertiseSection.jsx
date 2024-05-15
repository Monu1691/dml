
export default function OurExpertiseSection({ ourExpertiseTitle, ourExpertiseDescription, ourExpertiseRepeater }) {
    return (
        <>
            <section className="py-[80px] text-center">
                <div className="container max-w-[1600px] px-[30px] lg:px-[80px] mx-auto">
                    <div className="mb-[60px]">
                        <h2 className="text-[52px] text-[#323848] mb-[24px] font-[500]">{ourExpertiseTitle}</h2>
                        <p className="text-[20px]">{ourExpertiseDescription}</p>
                    </div>

                    <div className="grid 2xl:grid-cols-9 xl:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-[40px]">
                        {ourExpertiseRepeater.length > 0 && ourExpertiseRepeater.map((item, index) => (
                            <div className="" key={index}>
                                <div className="w-[90px] h-[90px] mx-auto mb-[12px] border border-solid border-[#f2f2f2] rounded-[16px] flex items-center justify-center hover:shadow-[3px_4px_6px_#4399dc]">
                                    <img src={item.image.node.mediaItemUrl} alt={item.imageName} />
                                </div>
                                <p className="text-[14px] xl:text-[16px]">{item.imageName}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}
