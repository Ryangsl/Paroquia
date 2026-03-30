export default function SectionHeader({ title, description }) {
  return (
    <div className="text-center mb-16 px-4 max-md:mb-12">
      <h2 className="font-heading text-[2.5rem] text-ink mb-4 tracking-wide leading-[1.25] max-md:text-4xl">
        {title}
      </h2>
      <div className="title-underline" />
      {description && (
        <p className="text-center text-muted mt-8 text-[1.1rem] leading-[1.7] max-w-[640px] mx-auto max-md:text-base max-md:max-w-[90%]">
          {description}
        </p>
      )}
    </div>
  );
}
