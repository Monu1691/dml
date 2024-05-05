
export default function WhatWeDoSection({ whatWeDoTitle, whatWeDoDescription, whatWeDoRepeater }) {
    return (
        <>
            <section className="py-[80px]">
                <div className="container max-w-[1600px] px-[80px] mx-auto">

                    <div className="text-center mb-[60px]">
                        <h2 className="text-[52px] text-[#323848] mb-[24px] font-[500]">{whatWeDoTitle}</h2>
                        <p className="text-[20px]">{whatWeDoDescription}</p>
                    </div>

                </div>
            </section>
        </>
    )
}
