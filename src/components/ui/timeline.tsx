export default function Timeline() {
    return (
        <div className="flex min-w-fit flex-col h-full items-center justify-center">
            {/* Time line 01 */}
            <div className="flex flex-col flex-1 overflow-hidden relative items-center gap-3 self-stretch">
                <div className="line opacity-20 h-[45px] md:h-[45px] w-[2px] overflow-hidden relative" style={{
                    background: "linear-gradient(180deg, #fff 0%, #1f514c 100%)"
                }}></div>
                <div className="dot flex items-center bg-[#1f514c] text-white justify-center rounded-full w-[30px] h-[30px] shrink-0 relative overflow-hidden">
                    <div>01</div>
                </div>
                <div className="line bg-[#1f514c] opacity-20 flex-1 w-[2px] min-h-[20px] overflow-hidden relative"></div>
            </div>

            {/* Time line 02*/}
            <div className="flex flex-col flex-1 items-center relative gap-3 self-stretch">
                <div className="line bg-[#1f514c] opacity-20 w-[2px] h-[45px] overflow-hidden relative"></div>
                <div className="dot flex items-center bg-[#1f514c] text-white justify-center rounded-full w-[30px] h-[30px] shrink-0 relative overflow-hidden">
                    <div>02</div>
                </div>
                <div className="line bg-[#1f514c] opacity-20 flex-1 w-[2px] min-h-[20px] overflow-hidden relative"></div>
            </div>

            {/* Time line 03*/}
            <div className="flex-col flex-1 flex items-center gap-3 self-stretch">
                <div className="line bg-[#1f514c] opacity-20 w-[2px]  h-[45px] overflow-hidden relative"></div>
                <div className="dot flex items-center bg-[#1f514c] text-white justify-center rounded-full w-[30px] h-[30px] shrink-0 relative overflow-hidden">
                    <div>03</div>
                </div>
            </div>
        </div>
    )
}