import Image from 'next/image'

function Mapping() {
  return (
    <div className="bg-[#ffffff] text-white rounded-lg p-4 flex justify-between items-start shadow-2xl">
      <div>
        <h2 className="text-xl font-semibold mb-1 text-black">Mapping</h2>
        <p className="text-2xl mb-8 text-black">109.67 ha</p>
        <div className="mt-auto">
          <p className="text-lg mb-1 text-black">exploiting</p>
          <p className="text-2xl font-bold text-black">83.12 ha</p>
        </div>
      </div>
        <Image
          src="/map.svg"
          alt="Farmer icon"
          width={62}
          height={62}
        />
    </div>
  )
}

export default Mapping