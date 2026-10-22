type Profile = { src: string; alt?: string };

type ProfileStackProps = {
  profiles: Profile[];
  max?: number;
  size?: number;
  label?: string;
};

export default function ProfileStack({
  profiles,
  max = 4,
  size = 44,
  label,
}: ProfileStackProps) {
  const visible = profiles.slice(0, max);
  const extra = profiles.length - visible.length;

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center">
        {visible.map((p, i) => (
          <img
            key={i}
            src={p.src}
            alt={p.alt ?? ""}
            style={{ width: size, height: size, zIndex: visible.length - i }}
            className="-ml-3 first:ml-0 rounded-full border-2 border-white object-cover"
          />
        ))}

        {extra > 0 && (
          <span
            style={{ width: size, height: size }}
            className="-ml-3 flex items-center justify-center rounded-full border-2 border-white bg-[#FEA8F1] text-sm font-semibold text-[#2A0E26]"
          >
            +{extra}
          </span>
        )}
      </div>

      {label && (
        <span className="text-sm bg-[#FEA8F1] rounded-full px-3 py-2 font-medium">
          {label}
        </span>
      )}
    </div>
  );
}
