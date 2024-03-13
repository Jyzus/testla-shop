import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

const page = ({ params }: Props) => {
  const { id } = params;

  if (id == "kids") {
    notFound();
  }

  return <div>category page {id}</div>;
};

export default page;
