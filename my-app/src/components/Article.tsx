type ArticleProps = {
  id: string;
  title: string;
  text: string;
};

export function Article({ id, title, text }: ArticleProps) {
  return (
    <li key={id} className="flex gap-1 items-center">
      <h2 className="">{title}</h2>
      <span>{text}</span>
    </li>
  );
}
