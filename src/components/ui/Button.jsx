export function Button({ link, title, style }) {
  return (
    <a
      href={link}
      className={`block w-[120px] border-b-2 border-b-tertiary pb-[10px] font-bold uppercase leading-[26px] tracking-btn duration-[350ms] ease-in-out hover:text-secondary hover:transition-colors ${style}`}
    >
      {title}
    </a>
  );
}
