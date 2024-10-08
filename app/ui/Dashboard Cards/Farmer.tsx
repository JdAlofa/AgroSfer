import Image from 'next/image'

function Farmer() {
  return (
    <div className="bg-[#754C29] text-white rounded-lg p-4 flex justify-between items-start shadow-xl">
      <div>
        <h2 className="text-xl font-semibold mb-1">Farmer</h2>
        <p className="text-2xl mb-8">38,630</p>
        <div className="mt-auto">
          <p className="text-lg mb-1">active</p>
          <p className="text-2xl font-bold">27,565</p>
        </div>
      </div>
        <Image
          src="/farmers-white.svg"
          alt="Farmer icon"
          width={62}
          height={62}
        />
    </div>
  )
}

export default Farmer