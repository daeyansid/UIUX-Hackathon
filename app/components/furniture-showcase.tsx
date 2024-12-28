import Image from "next/image"

export default function FurnitureShowcase() {
  return (
    <div className="flex w-full">
      {/* Vertical text section */}
      <div className="flex w-12 items-center justify-center border-r border-gray-200">
        <span className="rotate-180 transform whitespace-nowrap text-lg font-medium tracking-widest text-black [writing-mode:vertical-lr]">
          EXPLORE NEW AND POPULAR STYLES
        </span>
      </div>

      {/* Images section */}
      <div className="flex flex-1 flex-col md:flex-row gap-6 p-8">
        {/* Large featured chair */}
        <div className="relative flex-1">
          <div className="relative h-full w-full overflow-hidden bg-[#f5f5f5]">
            <Image
              src="/Image3.png"
              alt="Orange modern chair"
              width={600}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Grid of smaller chairs */}
        <div className="grid flex-1 grid-cols-2 gap-4">
          <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
            <Image
              src="/Image2.png"
              alt="White tufted chair"
              width={300}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
            <Image
              src="/Image4.png"
              alt="White wooden chair"
              width={300}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
            <Image
              src="/Image5.png"
              alt="Gray upholstered chair"
              width={300}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
            <Image
              src="/Image6.png"
              alt="White wooden chair alternate view"
              width={300}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

