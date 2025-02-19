
export default function SearchFilters() {
  return (
    <div className="h-[64px] flex flex-row items-center justify-between border rounded-full">
        <div>
            <div className="flex flex-row items-center justify-between">
                <div className="w-[250px] h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                    <p className="text-xs font-semibold">where</p>
                    <p className="text-sm">Wanted Location</p>
                </div>
            </div>
        </div>

        <div>
            <div className="flex flex-row items-center justify-between">
                <div className="w-[250px] h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                    <p className="text-xs font-semibold">Check in</p>
                    <p className="text-sm">Add dates</p>
                </div>
            </div>
        </div>

        <div>
            <div className="flex flex-row items-center justify-between">
                <div className="w-[250px] h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                    <p className="text-xs font-semibold">Check out</p>
                    <p className="text-sm">Add dates</p>
                </div>
            </div>
        </div>

        <div>
            <div className="flex flex-row items-center justify-between">
                <div className="w-[250px] h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                    <p className="text-xs font-semibold">Who?</p>
                    <p className="text-sm">Add guests</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}
