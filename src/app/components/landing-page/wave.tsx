import Image from "next/image";

const profileData = [
  { x: 50, y: 0, color: "border-purple-500" },
  { x: 150, y: -20, color: "border-teal-500" },
  { x: 250, y: -40, color: "border-red-500" },
  { x: 350, y: -60, color: "border-blue-500" },
  { x: 450, y: -40, color: "border-red-500" },
  { x: 550, y: -20, color: "border-cyan-500" },
  { x: 650, y: 0, color: "border-orange-500" },
];

const TriangleTimeline = () => {
  return (
    <div className="relative w-full bg-[#fef6ff] py-16 flex flex-col items-center overflow-hidden">
      {/* Straight Line (SVG) */}
      <svg
        width="100%"
        height="20"
        viewBox="0 0 700 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-1/2 -translate-x-1/2 z-0"
      >
        <path
          d="M0 10 L 700 10"
          stroke="#B05CFF"
          strokeWidth="8"
          fill="none"
        />
      </svg>

      {/* Profile Circles on the Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[20px] z-10">
        {profileData.map((p, idx) => (
          <div
            key={idx}
            className={`absolute w-[64px] h-[64px] rounded-full border-4 ${p.color} bg-white shadow-md overflow-hidden`}
            style={{
              top: `${10 + p.y}px`, // Adjust the vertical position for triangle effect
              left: `${p.x - 32}px`,
            }}
          >
            <Image
              src="/avatar.jpg" // Replace with actual image path
              width={64}
              height={64}
              alt={`Avatar ${idx + 1}`}
              className="rounded-full"
            />
          </div>
        ))}
      </div>

      {/* Register Button */}
      <div className="z-20 mt-[100px]">
        <button className="px-6 py-2 border-2 border-purple-500 text-purple-600 rounded-full font-medium hover:bg-purple-100 transition">
          Register Now →
        </button>
      </div>
    </div>
  );
};

export default TriangleTimeline;
