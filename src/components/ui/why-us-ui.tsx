import { ListOne, ListTwo } from "./list"

export default function Why_us_Ui() {
    return (
        <div className="bg-linear-to-r from-[#fdfffc] p-1.5 via-[#edffe393] to-[#edffe3] flex justify-start md:flex-row flex-col w-full lg:w-[1000px] border-[#0000000d] rounded-[38px] md:justify-evenly h-fit md:h-fit border">
            {/* why us - ui left */}
            <div className="flex flex-col gap-11 p-[34px] relative h-full items-start">
                <div className="text-2xl font-normal">
                    Other Stores
                </div>

                {/* ui list */}
                <div className="flex flex-row gap-11">
                    <ListOne />
                </div>
            </div>

            {/* why us - ui left */}
            <div className="flex flex-col gap-11 p-[34px] bg-[white] rounded-4xl relative h-full items-start" style={{ boxShadow: "0 0 55px #00000008" }}>
                <div className="text-2xl font-normal">
                    With Bloom
                </div>

                {/* ui list */}
                <div className="flex flex-row gap-11">
                    <ListTwo />
                </div>
            </div>
        </div>
    )
}