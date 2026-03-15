import Image from "next/image"

export default function HeroTag({ icon, text, bgColor }) {
  return (
    <div className={`${bgColor} text-white font-medium text-sm rounded-2xl px-4 py-4 flex items-center justify-center gap-2`}>
      {icon}
      <span>{text}</span>
    </div>
  )
}
